import { Card } from "flowbite-react"
import { Link } from "react-router-dom"

function CardSeeForYour() {
  return(
    <Card className="mtb:max-w-lg mtb:h-auto w-full h-full border-2 border-solid border-org shadow-lg">
      <h2 className="text-2xl font-black text-center">
        Míralo por ti mismo
      </h2>
      <p>ga</p>
      <Link to="/" className="shadow-md shadow-orange-300 text-white font-bold rounded-r-lg py-2 px-4 text-center bg-org hover:bg-orange-500 hover:scale-105 transform transition-all duration-300 ease-in-out">Home</Link>
    </Card>
  )
}

export default CardSeeForYour