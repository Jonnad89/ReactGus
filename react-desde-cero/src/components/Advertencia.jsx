// Render condicional simple &&
const Advertencia = ({hayError}) => {
  return (
    <div>
      <h3>Formulario</h3>
      {hayError && <p style={{ color: "red" }}>¡Hay un error!</p>}
    </div>
  );
}

export default Advertencia;
