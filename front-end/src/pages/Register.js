import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import useRegister from '../hooks/useRegister';
import useRegisterInputs from '../hooks/utils/useRegisterInputs';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [register, setRegister] = useRegister();
  const [validInputs, validateInputs] = useRegisterInputs();

  const history = useHistory();

  useEffect(() => {
    if (register.register) {
      history.push('/contacts');
    }
  }, [register, history]);

  useEffect(() => {
    if (name !== '' && email !== '' && password !== '') {
      validateInputs(name, email, password);
    }
  }, [name, email, password, validateInputs]);

  return (
    <main className="main">
      <img src="/logo192.png" alt="logotipo contact-list" width="60px" />
      <h1>Cadastro</h1>
      <form className="form-login">
        <label htmlFor="nome">
          Nome
          <input
            id="nome"
            label="Nome"
            onChange={ ({ target }) => setName(target.value) }
            value={ name }
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            id="email"
            label="Email"
            onChange={ ({ target }) => setEmail(target.value) }
            value={ email }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            id="password"
            label="Password"
            onChange={ ({ target }) => setPassword(target.value) }
            value={ password }
            type="password"
          />
        </label>
        <button
          className="btn-primary"
          type="button"
          label="CADASTRAR"
          disabled={ !validInputs }
          onClick={ () => setRegister({ name, email, password }) }
        >
          CADASTRAR
        </button>
        <button
          type="button"
          onClick={ () => history.goBack() }
          className="btn-register"
        >
          VOLTAR AO INÍCIO
        </button>
      </form>
      <span
        className={ register.message ? 'error-box' : 'hidden' }
      >
        { register.message}
      </span>
    </main>
  );
};

export default Register;
