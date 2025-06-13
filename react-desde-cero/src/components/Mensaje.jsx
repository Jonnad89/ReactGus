const Mensaje = ({esAdmin}) => {
  if(esAdmin) {
    return <h1>Bienvenido, administrador</h1>;
  }
  return <h1>Bienvenido, usuario</h1>
}

export default Mensaje;
