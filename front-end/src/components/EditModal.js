import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { formatDate } from '../utils/helpers';
import useUpdateContact from '../hooks/useUpdateContact';

const EditModal = (props) => {
  const {
    toggle,
    contact = {
      contactId: null,
      nome: '',
      sobrenome: '',
      telefone: '',
      nascimento: '',
      email: '',
      endereco: '',
    } } = props;

  const [updateContact, setUpdateContact] = useUpdateContact();

  const submit = (evt) => {
    evt.preventDefault();
    const { nome, nascimento, telefone, endereco, email } = evt.target;
    const data = {
      contactId: contact.contactId,
      nome: nome.value,
      nascimento: nascimento.value,
      telefone: telefone.value,
      endereco: endereco.value,
      email: email.value,
    };
    setUpdateContact(data);
  };

  useEffect(() => {
    if (updateContact) {
      toggle();
    }
  }, []);

  return (
    <>
      <button
        type="button"
        className="modal-close"
        onClick={ () => toggle() }
      >
        X
      </button>
      <form
        className="modal-form"
        onSubmit={ (evt) => submit(evt) }
      >
        <label htmlFor="nome" className="modal-label">
          Nome
          <input
            className="modal-input"
            id="nome"
            type="text"
            name="nome"
            defaultValue={ `${contact.nome} ${contact.sobrenome}` }
            minLength="6"
            required
          />
        </label>
        <label htmlFor="nascimento" className="modal-label">
          Nascimento
          <input
            className="modal-input"
            id="nascimento"
            type="text"
            name="nascimento"
            defaultValue={ formatDate(contact.nascimento) }
          />
        </label>
        <label htmlFor="telefone" className="modal-label">
          Telefone
          <input
            type="text"
            id="telefone"
            name="telefone"
            defaultValue={ contact.telefone }
            required
          />
        </label>
        <label htmlFor="endereco" className="modal-label">
          Endereco
          <input
            className="modal-input"
            id="endereco"
            type="text"
            name="endereco"
            maxLength="11"
            defaultValue={ contact.endereco }
          />
        </label>
        <label htmlFor="email" className="modal-label">
          Email
          <input
            className="modal-input"
            id="email"
            type="email"
            name="email"
            defaultValue={ contact.email }
          />
        </label>
        <button type="submit">Editar</button>
      </form>
    </>
  );
};

EditModal.propTypes = {
  toggle: PropTypes.func.isRequired,
  contact: PropTypes.shape().isRequired,
};

export default EditModal;
