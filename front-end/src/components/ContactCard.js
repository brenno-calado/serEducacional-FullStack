import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { formatDate } from '../utils/helpers';
import EditModal from './EditModal';

const ContactCard = ({ contact }) => {
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  return (
    <li className="contactCard">
      <section className="card-btn">
        <button
          type="button"
          aria-label="edit"
          className="edit"
          onClick={ () => setEditModal(!editModal) }
        >
          <img alt="edit" aria-label="edit" src="/edit.png" width="30px" />
        </button>
        {!editModal
          ? null
          : <EditModal toggle={ () => setEditModal(false) } contact={ contact } />}
        <button
          type="button"
          aria-label="delete"
          className="delete"
          onClick={ () => setDeleteModal(!deleteModal) }
        >
          <img alt="delete" aria-label="delete" src="/delete.png" width="30px" />
        </button>
      </section>
      <img
        className="profile"
        src="/person.jpeg"
        alt={ `Foto perfil de ${contact.nome}` }
      />
      <div className="contactHeader">
        <span>
          { `${contact.nome} ${contact.sobrenome}` }
        </span>
        <span>
          { contact.telefone }
        </span>
        <span>
          { formatDate(contact.nascimento) }
        </span>
        <span>
          { contact.endereco }
        </span>
        <span>
          { contact.email }
        </span>
      </div>
    </li>
  );
};

ContactCard.propTypes = {
  contact: PropTypes.shape(PropTypes.string),
}.isRequired;

export default ContactCard;
