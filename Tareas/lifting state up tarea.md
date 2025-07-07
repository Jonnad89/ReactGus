 Crear un componente Contador con botones de + y - (estado en el padre)

 Otro componente MostarContador que muestre el número

 El padre coordina y pasa el valor y funciones como props



 ** Errores comunes 

 - Guardar el estado en el hijo    /    Se rompe la siincronía
 - No pasar seetNombre como prop   /El hijo no puede modificar
 - Tener estado duplicado          / Confusión y comportamiento inesperado


 ** Resumen

 Lifing state up es subir el estado al ancestro común de los componentes que lo necesitan

 - Se usa cuando varios hijos necesitan acceder o modificar el msmo dato

 - El padre pasa: 
    - El valor del estado como prop
    - La función modificadora también como prop