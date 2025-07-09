useNavigate()

¿Qué es?

Es un hook de React Router que te permite navegar a otra ruta desde el código, como si hiceras click en un "Link", pero de forma programática

Sirve para -> 
- Redirigir al usuario después de enviar un formulario
- Enviar a otra página tras una acción (onclick)
- Hacer una navegación condicional (si está logeado o no)

Ejemplo de uso:
import { useNavigate } from 'react-router-dom'

function BotonRedireccionar() {
    const navigate = useNavigate();

    const irAInicio = () =>{
        navigate("/");
    };

    return (
        <button onclick={irAInicio}>Volver al inicio</button>
    )
}


UsePArams()

¿Qué es?
Es un hook de React Router que te permite acceder a los parámetros dinámicos de la URL

Sirve cuando tenés una ruta tipo /producto/:id
 - Para obtener el id, slug, o cualquier parámetro que venga por URL
 - Para mostrar contenido personalizado según el valor

 Ejemplo de uso:

 import { useParams } from 'react-router-dom'

const DetalleProducto = () => {
    const { id } = useParams();
  return (
    
      <h2>Mostrando información del producto con ID: {id}</h2>
   
  );
}

** Entonces s vas a /producto/3, el id será 3