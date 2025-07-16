import { useParams, useNavigate, useLocation } from "react-router-dom";
import { productos } from "../data/productos";

const DetalleProducto = () => {
    const {id} = useParams();
    const producto = productos.find(p => p.id === parseInt(id))

    const navigate = useNavigate();
    const location = useLocation();

    const volver = () => {
        // Si vino con search, vuelve con él
        navigate(`/productos${location.state?.fromSearch || ""}`)
    };
    if(!producto) return <p>Producto no encontrado.</p>;

  return (
    <div>
        <h2>{producto.nombre}</h2>
        <p>Categoría: {producto.categoria} </p>
        <p><strong>Ruta actual:</strong> {location.pathname} </p>
        <button onClick={volver}>Volver al listado</button>
    </div>
  );
}

export default DetalleProducto;
