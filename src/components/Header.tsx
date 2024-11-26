import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full h-20 mtb:flex hidden justify-center items-center">
      <nav className="w-full h-full bg-[#fffdc5] flex justify-around items-center">
      <Link to="/" className="msm:hidden tb:inline-block lg:inline-block hover:scale-110 transform transition-all duration-300 ease-in-out">
        <img  className="w-14 drop-shadow-org hover:drop-shadow-orange-500" src="dance.svg" alt="dance" />
      </Link>

        <ul className="flex gap-6">
          <li>
            <Link className="shadow-md shadow-orange-300 text-white font-bold rounded-r-lg py-2 px-4 text-center bg-org 
             hover:bg-orange-500 hover:scale-105 transform transition-all duration-300 ease-in-out" to="/whatis">¿Qué es?</Link>
          </li>
          <li>
            <Link className="shadow-md shadow-orange-300 text-white font-bold rounded-r-lg py-2 px-4 text-center bg-org 
             hover:bg-orange-500 hover:scale-105 transform transition-all duration-300 ease-in-out" to="/whereandwhen">¿Dónde y cuando?</Link>
          </li>
          <li>
            <Link className="shadow-md shadow-orange-300 text-white font-bold rounded-r-lg py-2 px-4 text-center bg-org 
             hover:bg-orange-500 hover:scale-105 transform transition-all duration-300 ease-in-out" to="/seeforyourself">Míralo por ti mismo</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header