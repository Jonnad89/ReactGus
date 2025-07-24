import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{display: 'flex', gap: '1rem', padding: 'rem'}}>
        <Link to="/">Inicio</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/nuevo">Nuevo Post</Link>

    </nav>
  );
}

export default Navbar;
