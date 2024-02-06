import MiComonente from "./components/MiComonente"
import SegundoCoponente from "./components/SegundoCoponente"
import TercerComponente from "./components/TercerComponente"

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
