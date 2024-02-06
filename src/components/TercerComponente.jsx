import PropType from 'prop-types'

const TercerComponente = ({
  nombre = 'Nombre por default',
  apellido = 'Apellido por default',
  ficha }) => {

  const { grupo, estado } = ficha

  return (
    <div>
      <h2>Comunicación entre Componetes (3er Componete)</h2>
      <p>Nombre: {nombre}</p>
      <p>Apellido: {apellido}</p>
      <ul>
        <li>Grupo Sanguineo: {grupo}</li>
        <li>Estado de salud: {estado}</li>
      </ul>

    </div>
  )
}

TercerComponente.prototype = {
  nombre: PropType.string.isRequired,
  apellido: PropType.string,
  ficha: PropType.object
}

// Tambien lo puedes hacer de esta manera

/* TercerComponente.defaultProps = {
  nombre: 'Juan',
  apellido: 'Martinez'
} */

export default TercerComponente