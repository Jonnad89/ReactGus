const Ejemplo = ({edad}) => {
    let mensaje;

    if (edad >= 18) {
        mensaje = "Sos mayor de edad."
    } else {
        mensaje = "Sos menor de edad."
    }
  return <p>{mensaje}</p>
}

export default Ejemplo;
