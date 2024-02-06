
const SegundoCoponente = () => {

  const title = 'Listado de Libros'
  const mensaje = 'Por el renderizado condicional'
  // const libros = ['Harry Potter', 'Juegos de Tronos', 'Clean Code']
  const libros = [] // Para ver un componente renderizados

  return (

    <div>
      <h2>{title} (2do Componete)</h2>
      {
        !libros.length
          ? <h3>No hay libros que mostrar "{mensaje}"</h3>
          : <ul>
              {
                libros.map(libro => (
                  <li
                    key={libro}
                  >
                    {libro}
                  </li>
                ))
              }
            </ul>
      }
    </div>

  )
}

export default SegundoCoponente