import { useState } from 'react';
import axios from 'axios';

export default function useRegister() {
  const [data, setData] = useState({});

  async function setRegister(payload) {
    console.log(payload);
    try {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:3001/user',
        data: payload,
      });
      setData({ register: true });
      localStorage.setItem('user', JSON.stringify(response.data));
    } catch (error) {
      setData(error.response.data);
    }
  }

  return [data, setRegister];
}
