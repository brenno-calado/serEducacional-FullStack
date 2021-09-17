import { useState } from 'react';
import axios from 'axios';

export default function useNewContact() {
  const [newContact, setContact] = useState('');

  async function setNewContact(payload) {
    const { token } = JSON.parse(localStorage.getItem('user'));
    try {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:3001/contact',
        headers: { Authorization: token },
        data: payload,
      });
      console.log(response.data);
      setContact({ register: true });
    } catch (error) {
      console.log(error);
      setContact(error.response.data);
    }
  }

  return [newContact, setNewContact];
}
