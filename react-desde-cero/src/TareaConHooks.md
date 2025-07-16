App de Películas

objetivo:
- Crear una SPA (pequeña) donde se pueda:
    - ver una lista de películas
    - filtrar por género usando parámetros de búsqueda (?genero=accion, etc...)
    - Ver el detalle de cada película al hacer click (rutas dinámicas)
    - volver desde el detalle al listado con el filtro preservado

Requisitos:
- 1- Página /peliculas

* Muestra todas las películas (usa un array de objetos)
* Permite filtrar por género usando botones o enlaces
* Muestra links a cada detalle /peliculas/:id
* Usá useSearchParams para aplicar el filtro
* Usá Link con state para preservar el filtro

- 2 - Página /pelicula/:id
 * Muestra el detalle (título, descripción, género)   
 * usá useParams para obtener el id
 * usá useNavigate para volver al listado
 * Recupera state para preservar el filtro activo

** Opcional
- agregar navegación programática con el botón "Ver otra película aleatoria"
- agregar un componente Navbar con links a /peliculas y una futura sección /series

** Estilos a elección (no son necesarios)