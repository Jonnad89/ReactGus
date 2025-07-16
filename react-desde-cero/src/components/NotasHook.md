import {useLocation} from 'react-router-dom'

const MostrarRuta = () => {
    const location = useLocation();
  return (
    <div>
      <h3>Estás en:
    {location.pathname}
    <p>Query String: {location.search} </p>

      </h3>
    </div>
  );
}

/* 
Estás en: /productos
Query String: ?orden=desc
*/

export default EjemploHooks;

// useSearchParamns()
Ejemplo  para leer query params:
import {useSearchParams} from 'react-router-dom'

const FiltroProducto = () => {
    const [searchParams] = useSearchParams();
    const categoria = searchParams.get("categoria")
  return (
    <div>
     <p>Filtrando por categoria: {categoria} </p>
    </div>
  );
}

/* 
¿Para que sirve?
- filtros (categoria, orden, búsqueda)
- Navegación con estado en la URL
- Funcionalidad tipo "buscar por palabra"
*/

Ejemplo para modifcar:

    const [searchParams] = useSearchParams();

    const cambiarCategoria = () =>{
        setSearchParams({categoria : "accesorios"})
    }

useNavigate() => navegar desde el código

useParams() => Leer valores dinámicos de la URL

useLocation() => Saber la ruta actual(pathname, search...)

useSearchParams() => Leer/escribir parámetros ?query de la URL