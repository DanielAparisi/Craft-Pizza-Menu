
import './menu.css'
const INFO_MENU = [
  {
    id: 1,
    title: "Mapas Drift",
    description:
      "Seccion para teletransportarte a los mapas disponibles de Drift",
  },
  {
    id: 2,
    title: "Mapas GP",
    description:
      "Seccion para teletransportarte a los mapas disponibles de GP ",
  },
  {
    id: 3,
    title: "Mapas VIP",
    description:
      "Seccion para teletransportarte a los mapas disponibles para membresias VIP",
  },
  {
    id: 4,
    title: "lugares",
    description:
      "Seccion para teletransportarte a los lugares mas transitadfos como el concesionario, el observatorio, etc... ",
  },
  {
    id: 5,
    title: "Garaje",
    description:
      "Seccion para sacar fuera cualquier vehiculo que tengas en tu garaje ",
  },

]

export default  function Menu () {

  return(
    <main className="WrapperMenu">
    <h1 className='MenuTitle'>Menu Personal</h1>
    {
      INFO_MENU.map(({title, description, id})  => (
          <section key={id} className="ListOfMenu" >
              <span>{title}</span>
              <p>{description}</p>
          </section>
          
      ))
    }
  </main>
  )
  
}
 
