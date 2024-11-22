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
      <Link to="/seeforyourself" className="px-4 py-2 text-center rounded-lg bg-slate-400">
        Míralo por ti mismo
      </Link>
    </Card>
  )
}

export default CardWhereWhen