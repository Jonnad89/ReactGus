useEffect(() => {
 // código
 console.log("COmponente montado")
}, [contador])


** Para recordar:
useEffect() ->      Ejecuta código luego del render
[] vacío    ->      Solo al montar
[dependencias] ->   Se ejecuta al cambiar esa dependencia
return en useEffect Limpiezza al desmontar
fetch + useEffect -> Ideal para cargar datos externos
Estados de carga y error -> Mejora la experiencia del usuario
Funciones separadas ->  Mejor legibilidad y mantnibilidad


** Cómo organizar un proyecto
src/
|
|---Components/             -> Componentes reutilizables
|       |--Header.jsx
|       |--Footer.jsx
|       |--Card.jsx
|
|
|---Pages/                  -> Vistas o páginas completas
|   |--Home.jsx
|   |--About.jsx
|   |--Contact.jsx
|
|
|---App.jsx
|---Main.jsx