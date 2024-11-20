import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full h-20 flex justify-center items-center">
      <nav className="w-full h-full bg-gray-600 flex justify-around items-center">
        <Link to="/">
          <img className="w-10" src="dance.svg" alt="dance" />
        </Link>
        <ul className="flex gap-6">
          <li>
            <Link className="py-2 px-4 text-center rounded-br-lg bg-yellow-300" to="/whatis">¿Qué es?</Link>
          </li>
          <li>
            <Link className="py-2 px-4 text-center rounded-br-lg bg-yellow-300" to="/whereandwhen">¿Dónde y cuando?</Link>
          </li>
          <li>
            <Link className="py-2 px-4 text-center rounded-br-lg bg-yellow-300" to="/seeforyourself">Míralo por ti mismo</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header