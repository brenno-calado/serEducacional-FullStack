import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useLogin() {
  const [data, setData] = useState({});

  async function setLogin(payload) {
    try {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:3001/login',
        data: payload,
      });
      setData({ path: '/contacts' });
      localStorage.setItem('user', JSON.stringify(response.data));
    } catch (error) {
      console.log(error);
      setData(error.response.data);
    }
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setData({ path: '/contacts' });
    }
  }, [data]);

  return [data, setLogin];
}
