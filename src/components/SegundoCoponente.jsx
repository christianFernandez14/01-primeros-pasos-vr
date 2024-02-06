
const SegundoCoponente = () => {

  const title = 'Listado de Libros'
  // const libros = ['Harry Potter', 'Juegos de Tronos', 'Clean Code']
  const libros = [] // Para ver un componente renderizados

  console.log(!libros.length)
  return (

    <div>
      <h2>{title}</h2>
      {
        !libros.length
          ? <h3>No hay libros que mostrar</h3>
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