import Tarjeta from './Tarjeta';

const ListaTarjetas = () => {
    const titulos = ["Inicio", "Sobre mi", "Proyectos"]
  return (
    <div>
      {titulos.map((titulo, i) => (
        <Tarjeta key={i} titulo={titulo}/>
      ))}
    </div>
  );
}

export default ListaTarjetas;
