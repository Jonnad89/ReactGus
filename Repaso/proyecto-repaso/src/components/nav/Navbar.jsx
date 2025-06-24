import React, { useState } from 'react';

const Navbar = ({nombre, parrafo, edad}) => {
    const [click, setClick] = useState(0)
  return (
    <div>
      <h1>{nombre}</h1>
       
      <button onClick={()=> setClick(click +1)}>Hace click {click}</button>
    </div>
  );
}

export default Navbar;
