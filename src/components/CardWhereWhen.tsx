import { Card } from "flowbite-react"
import { Link } from "react-router-dom"
import Map from "./Map"

function CardWhereWhen() {
  return (
    <Card className="max-w-sm">
      <h2>
        ¿Dónde y cuando asistir al Baileton?
      </h2>
      <Map />
      <p>¿Quieres ver como bailan?</p>
      <Link to="/seeforyourself" className="shadow-md shadow-orange-300 text-white font-bold rounded-r-lg py-2 px-4 text-center bg-org">
        Míralo por ti mismo
      </Link>
    </Card>
  )
}

export default CardWhereWhen