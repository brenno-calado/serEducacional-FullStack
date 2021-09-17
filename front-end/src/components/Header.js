import React from 'react';
import { useHistory } from 'react-router-dom';

const Header = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const history = useHistory();

  function handleLogout() {
    localStorage.clear();
    history.push('/login');
  }

  return (
    <div className="navBar">
      <div className="rightHeader">
        <p>
          { user.name || null }
        </p>
        <button type="button" onClick={ handleLogout }>
          Sair
        </button>
      </div>
    </div>
  );
};

export default Header;
