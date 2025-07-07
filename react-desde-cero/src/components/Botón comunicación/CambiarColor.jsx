const CambiarColor = ({onColorChange}) => {
  return (
    <div>
      <button
      onClick={()=> onColorChange("skyblue")}
      >Celeste</button>
      <button
      onClick={()=> onColorChange("pink")}
      >Rosa</button>
      
    </div>
  );
}

export default CambiarColor;
