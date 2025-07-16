import {Link, useSearchParams, useLocation} from 'react-router-dom'
import {productos} from '../data/productos'
const Productos = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const categoria = searchParams.get("categoria")
    const filtrar = categoria ? productos.filter(p => p.categoria === categoria) : productos
    const cambiarFiltro = (cat) => {
        setSearchParams(cat ? {categoria: cat} : {})
    };

    const location = useLocation();
  return (
    <div>
      <h2>Productos:</h2>
      <p><strong>Ruta actual:</strong> {location.pathname} {location.search} </p>
      <button onClick={() => cambiarFiltro("accesorios")}>Accesorios</button>
      <button onClick={() => cambiarFiltro("computadoras")}>Computadoras</button>
      <button onClick={() => cambiarFiltro("")}>Ver todos</button>

      <ul>
        {filtrar.map((prod) => (
            <li key={prod.id}>
                <Link to={`/productos/${prod.id}`} state={{fromSearch : location.search}}> {prod.nombre} </Link>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default Productos;
