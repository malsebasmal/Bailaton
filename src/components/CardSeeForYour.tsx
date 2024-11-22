import { Card } from "flowbite-react"
import { Link } from "react-router-dom"

function CardSeeForYour() {
  return(
    <Card>
      <h2>
        Míralo por ti mismo
      </h2>
      <p>ga</p>
      <Link to="/" className="px-4 py-2 text-center rounded-lg bg-slate-400">Home</Link>
    </Card>
  )
}

export default CardSeeForYour