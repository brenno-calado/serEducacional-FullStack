import React from 'react';
import { useHistory } from 'react-router-dom';

const NotFound = () => {
  const history = useHistory();
  return (
    <main className="main form-login">
      <h1>Not Found</h1>
      <button className="btn-primary" type="button" onClick={ () => history.push('/') }>
        Voltar para página principal
      </button>
    </main>
  );
};
export default NotFound;
