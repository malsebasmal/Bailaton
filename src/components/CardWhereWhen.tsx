import { Card } from "flowbite-react"
import { Link } from "react-router-dom"
import Map from "./Map"

function CardWhereWhen() {
  return (
    <Card className="max-w-lg border-2 border-solid border-org shadow-lg">
      <h2 className="text-lg font-black text-center">
        ¿Dónde y cuando asistir al Bailaton?
      </h2>
      <Map />
      <p className="font-black text-lg text-gray-700">¿Quieres ver como bailan?...</p>
      <Link to="/seeforyourself" className="shadow-md shadow-orange-300 text-white font-bold rounded-r-lg py-2 px-4 text-center bg-org">
        Míralo por ti mismo
      </Link>
    </Card>
  )
}

export default CardWhereWhen