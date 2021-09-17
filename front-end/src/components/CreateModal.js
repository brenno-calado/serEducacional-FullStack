import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import useNewContact from '../hooks/useNewContact';

const CreateModal = (props) => {
  const { toggle } = props;
  const [newContact, setNewContact] = useNewContact();

  const submit = (evt) => {
    evt.preventDefault();
    const { nome, nascimento, telefone, endereco, email } = evt.target;
    const data = {
      nome: nome.value,
      nascimento: nascimento.value,
      telefone: telefone.value,
      endereco: endereco.value,
      email: email.value,
    };
    setNewContact(data);
  };

  useEffect(() => {
    if (newContact) {
      toggle();
    }
  });

  return (
    <form
      className="modal-form bottom"
      onSubmit={ (evt) => submit(evt) }
    >
      <button
        type="button"
        className="modal-close bottom"
        onClick={ () => toggle() }
      >
        X
      </button>
      <label htmlFor="nome" className="modal-label">
        Nome
        <input
          className="modal-input"
          id="nome"
          type="text"
          name="nome"
          minLength="6"
          required
        />
      </label>
      <label htmlFor="nascimento" className="modal-label">
        Nascimento
        <input
          className="modal-input"
          id="nascimento"
          type="date"
          name="nascimento"
          required
        />
      </label>
      <label htmlFor="telefone" className="modal-label">
        Telefone
        <input
          type="text"
          id="telefone"
          name="telefone"
          maxLength="15"
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
          maxLength="50"
        />
      </label>
      <label htmlFor="email" className="modal-label">
        Email
        <input
          className="modal-input"
          id="email"
          type="email"
          name="email"
        />
      </label>
      <button className="btn-primary" type="submit">Criar</button>
    </form>
  );
};

CreateModal.propTypes = {
  toggle: PropTypes.func.isRequired,
};

export default CreateModal;
