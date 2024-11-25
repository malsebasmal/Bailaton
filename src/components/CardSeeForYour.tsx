import { Card } from "flowbite-react"
import { Link } from "react-router-dom"

function CardSeeForYour() {
  return(
    <Card className="max-w-lg border-2 border-solid border-org shadow-lg">
      <h2>
        Míralo por ti mismo
      </h2>
      <p>ga</p>
      <Link to="/" className="shadow-md shadow-orange-300 text-white font-bold rounded-r-lg py-2 px-4 text-center bg-org">Home</Link>
    </Card>
  )
}

export default CardSeeForYour