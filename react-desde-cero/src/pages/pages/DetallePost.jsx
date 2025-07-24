import { useParams, useNavigate } from 'react-router-dom'
const DetallePost = ({ posts }) => {

    const { id } = useParams();
    const post = posts.find(p => p.id === parseInt(id))
    
    const navigate = useNavigate();

    if(!post) return <h2>Post no encontrado</h2>;

  return (
    <div>
      <h2>{post.titulo}</h2>
      <p>{post.contenido}</p>
      <button onClick={() => navigate('/posts')}>Volver</button>
    </div>
  );
}

export default DetallePost;
