import EventoComponente from "./components/EventoComponente"
import TercerComponente from "./components/TercerComponente"
import SegundoCoponente from "./components/SegundoCoponente"
import MiComonente from "./components/MiComonente"

const App = () => {

  const ficha_medica = {
    altura: '180 cm',
    grupo: 'B+',
    estado: 'Bueno',
    alergias: 'Ninguna'

  }

  return (
    <div>
      <h1>From App</h1>
      <hr />
      <EventoComponente />
      <hr />
      <TercerComponente
        // nombre='Christian'
        apellido='Fernandez'
        ficha={ficha_medica}
      />
      <hr />
      <SegundoCoponente />
      <hr />
      <MiComonente />
    </div>
  )
}

export default App
