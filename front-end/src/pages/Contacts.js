import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Header from '../components/Header';
import useContacts from '../hooks/useContacts';
import ContactCard from '../components/ContactCard';
import CreateModal from '../components/CreateModal';

const Contacts = () => {
  const history = useHistory();
  const [createModal, setCreateModal] = useState(false);

  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) history.push('/');
  const [contacts, setContacts] = useContacts();

  useEffect(() => {
    if (user) {
      setContacts(user.token);
    }
  }, []);

  return (user && (
    <>
      <Header />
      <ul className="products">
        { contacts.length && contacts.map(
          (cont, index) => <ContactCard key={ index } contact={ cont } />,
        ) }
      </ul>
      <button
        type="button"
        className="btn-primary bottom"
        onClick={ () => setCreateModal(!createModal) }
      >
        Cadastrar novo contato
      </button>
      {!createModal
        ? null
        : <CreateModal toggle={ () => setCreateModal(false) } />}
    </>
  ));
};

export default Contacts;
