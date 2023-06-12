import React, { useContext } from 'react';
import { ActiveNavButton } from '../../context';
import './Nav.css';
function Nav() {
  const { activeNav, setActiveNav } = useContext(ActiveNavButton);
  const handleButton = (name) => {
    if (name === 'all') {
      setActiveNav(false);
    } else if (name === 'priorities') {
      setActiveNav(true);
    }
  };

  return (
    <div className='nav'>
      <button onClick={() => handleButton('all')}>All</button>
      <button onClick={() => handleButton('priorities')}>Priorities</button>
    </div>
  );
}

export default Nav;
