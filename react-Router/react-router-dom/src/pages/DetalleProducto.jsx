import { useParams } from 'react-router-dom'

const DetalleProducto = () => {
    const { id } = useParams();
  return (
    <div>
      <h2>Detalle del producto</h2>
      <p>Mostrando información del producto con ID: {id}</p>
    </div>
  );
}

export default DetalleProducto;
