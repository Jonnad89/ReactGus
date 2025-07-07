function Input({ nombre, setNombre }){
  return (
    <>
     <input type="text" 
      placeholder="Escribí tu nombre"
      value={nombre}
      onChange={(e) => setNombre(e.target.value)}
     
     /> 
    </>
  );
}

export default Input;
