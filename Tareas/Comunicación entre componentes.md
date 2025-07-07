- Mini proyecto:
    - FormularioComentario que recibe un texto y le avisa al padre cuando se envía.

    |App.jsx
    |
    |-> FormularioComentario.jsx

Crear el estado con useState([])

Crear función "agregarComentario" y que setee: setComentario([...comentarios, texto])

- Mostrar en app.jsx una lista que contenga key={i}:

{comentarios.map((c, i) => (
    <li key={i}>{c}</li>
))}

En FormularioComentario recibir por componente padre una función llamada ({onEnviar})

- crear una función manejarSubmit con preventDefaul(), que ocupe la función onEnviar y setTexto("")

** Resumen **

Comunicación             Técnica utilizada

Padre -> Hijo           Props normales
Hijo -> Padre           Callbacks(funciones como prop)
Hermano -> Hermano      Usando el padre como intermediario