
const MiComonente = () => {
  const nombre = 'Victor'
  const web = 'victorrobleweb.es'

  const usuario ={
    nombre: 'Christian',
    apellidos: 'Fernandez Medina',
    web: 'chrsitianweb.cl'
  }
  return (
    <>
      <hr />
      <h2>Componente Creado (1er Componete)</h2>
      <h3>Datos del usuario</h3>
      <ul>
        <li>Nombre: <strong>{usuario.nombre}</strong></li>
        <li>Web: <a href="">{usuario.web}</a></li>
      </ul>
      <p>Este es mi primer componente</p>
      <ul>
        <li>React</li>
        <li>Angular</li>
        <li>Vue</li>
      </ul>
    </>
  )
}

export default MiComonente