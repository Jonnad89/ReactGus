import React from 'react';
import { Link } from 'react-router-dom';

const ListaPosts = ({posts}) => {
  return (
    <div>
      <h2>Lista de Posts</h2>
     <ul>
      {posts.map(post => (
        <li key={post.id}>
          <Link to={`/posts/${post.id}`}>{post.titulo}</Link>
        </li>
      ))}
     </ul>
    </div>
  );
}

export default ListaPosts;
