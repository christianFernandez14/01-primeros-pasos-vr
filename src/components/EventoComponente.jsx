
const EventoComponente = () => {

  const handleOnClick = () => { alert('es un evento Click') }

  const handleDobleClick = () => { alert('Haz dado doble click') }

  const hasEntrado = () => {

    console.log('Has entrado a la caja ')
  }


  const hasSalido = () => {
    console.log('Has salido de la caja ')

  }

  const estasDentro = estado => {
    console.log(`Estas ${estado} del input...`)
  }
  const estasFuera = estado => {
    console.log(`Estas ${estado} del input...`)
  }


  return (
    <div>
      <h2>Evento Componente (4to Componete)</h2>
      <div className="mi-evento">

        {/* Evento Click */}
        <div className="each-evento">
          <h3>Evento Click</h3>
          <button
            onClick={() => handleOnClick()}
          >Evento click</button>
        </div>

        {/* Evento Doble Click */}
        <div className="each-evento">
          <h3>Evento Doble Click</h3>
          <button
            onDoubleClick={() => handleDobleClick()}
          >Evento doble click</button>
        </div>

        {/* Evento onMouse */}
        <div
          className="each-evento mi-mouse"
          onMouseEnter={hasEntrado}
          onMouseLeave={hasSalido}
        >
          <h3>Evento Mouse in - out</h3>
        </div>

        {/* Evento Focus y blur */}
        <div className="each-evento mi-mouse">
          <input
            type="text"
            placeholder="Introduce tu nombre"
            onFocus={() => estasDentro('Adentro')}
            onBlur={() => estasFuera('Fuera')}
          />
        </div>

      </div>
    </div>
  )
}

export default EventoComponente