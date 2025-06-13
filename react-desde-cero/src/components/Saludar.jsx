// Operador Ternario ? : 

const Saludar = ({logueado}) => {
  return (
    <div>
      {logueado ? <h2>¡Hola, usuario!</h2> : <h2>Por favor inicia sesión</h2>}
    </div>
  );
}

export default Saludar;
