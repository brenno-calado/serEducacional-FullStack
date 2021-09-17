import { useState } from 'react';
import axios from 'axios';

const useContacts = () => {
  const [contacts, setContactList] = useState([]);

  const setContacts = async (token) => {
    try {
      const response = await axios({
        method: 'get',
        url: 'http://localhost:3001/user',
        headers: { Authorization: token },
      });
      setContactList(response.data);
    } catch (error) {
      console.log(error.response.data);
      setContactList(error.response.data);
    }
  };

  return [contacts, setContacts];
};

export default useContacts;
