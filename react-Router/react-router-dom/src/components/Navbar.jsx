import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <ul style={{display: 'flex', gap: '1rem', listStyle: 'none'}}>
        <li>
            <Link to="/">Incio</Link>
            <Link to="/productos">Productos</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
