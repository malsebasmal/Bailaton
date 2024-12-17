import { Spinner } from "flowbite-react"

function Loader() {
  return (
    <Spinner className="w-24 h-24" color="warning" aria-label="Loading the map"/>
  )
}

export default Loader