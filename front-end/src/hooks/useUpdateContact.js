import { useState } from 'react';
import axios from 'axios';

export default function useUpdateContact() {
  const [updateContact, setContact] = useState('');

  async function setUpdateContact(payload) {
    const { token } = JSON.parse(localStorage.getItem('user'));
    try {
      const response = await axios({
        method: 'put',
        url: `http://localhost:3001/contact/${payload.contactId}`,
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

  return [updateContact, setUpdateContact];
}
