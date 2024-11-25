import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full h-20 flex justify-center items-center">
      <nav className="w-full h-full bg-[#fffdc5] flex justify-around items-center">
        <Link to="/">
          <img className="w-14 drop-shadow-org" src="dance.svg" alt="dance" />
        </Link>
        <ul className="flex gap-6">
          <li>
            <Link className="shadow-md shadow-orange-300 text-white font-bold rounded-r-lg py-2 px-4 text-center bg-org" to="/whatis">¿Qué es?</Link>
          </li>
          <li>
            <Link className="shadow-md shadow-orange-300 text-white font-bold rounded-r-lg py-2 px-4 text-center bg-org" to="/whereandwhen">¿Dónde y cuando?</Link>
          </li>
          <li>
            <Link className="shadow-md shadow-orange-300 text-white font-bold rounded-r-lg py-2 px-4 text-center bg-org" to="/seeforyourself">Míralo por ti mismo</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header