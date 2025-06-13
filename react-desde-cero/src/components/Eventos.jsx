const Eventos = () => {
    function manejarClick(){
        alert("Clickeaste el botón")
    }
  return (
    <div>
      <button onClick={manejarClick}>Haz click</button>
    </div>
  );
}

export default Eventos;
