import { useNavigate } from "react-router-dom";

const Boton = () => {
    const navigate = useNavigate();

    const irAInicio = () => {
        navigate("/")
    }
  return (
    <div>
      <button onClick={irAInicio} >Volver a Inicio</button>
    </div>
  );
}

export default Boton;
