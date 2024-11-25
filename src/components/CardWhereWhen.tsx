import { Card } from "flowbite-react"
import { Link } from "react-router-dom"
import Map from "./Map"

function CardWhereWhen() {
  return (
    <Card className="max-w-lg border-2 border-solid border-org shadow-lg">
      <h2 className="text-xl font-black text-center">
        ¿Dónde y cuando asistir al Bailaton?
      </h2>
      <p className="text-lg text-gray-700">
        El Bailaton <span className="font-black">se desarrolla los días Viernes, Sábados y Domingos de todas las semanas</span>. Desde las <span className="font-black">4 p.m. hasta las 10 p.m</span>.
        <br />
        <span className="font-black">¡Asiste el día y hora que prefieras!</span>
      </p>
      <Map />
      <p className="text-lg text-gray-700">Te hemos comentado mucho hasta ahora, pero... <span className="font-black">¿Quieres ver como bailan y disfrutan?</span></p>
      <Link to="/seeforyourself" className="shadow-md shadow-orange-300 text-white font-bold rounded-r-lg py-2 px-4 text-center bg-org">
        Míralo por ti mismo
      </Link>
    </Card>
  )
}

export default CardWhereWhen