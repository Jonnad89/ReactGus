
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const NuevoPost = ({ posts,setPosts }) => {

    const [titulo, setTitulo] = useState('');
    const [contenido, setContenido] = useState('');
    const navigate = useNavigate();

    const manejarSubmit = (e) => {
        e.preventDefault();

        if(!titulo || !contenido) {
            alert('Todos los campos son obligatorios')
        
        return;
    }

    const nuevo = {
        id: posts.length + 1,
        titulo,
        contenido
    };

    setPosts([...posts,nuevo])
    navigate('/posts')

};
  return (
    <form onSubmit={manejarSubmit}>
        <h2>Nuevo Post</h2>
        <div>
            <label>Título:</label>
            <input 
            type="text" 
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            />
        </div>
      <div>
        <label>Contenido:</label>
        <textarea 
        value={contenido}
        onChange={(e) => setContenido(e.target.value)}
        />
      </div>
      <button type='submit'>Publicar</button>
    </form>
  );
}

export default NuevoPost;
