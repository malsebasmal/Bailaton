import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">
          <img src="dance.svg" alt="dance" />
        </Link>
        <ul>
          <li><Link to="/whatis">Link for other route</Link></li>
          <li><Link to="/whereandwhen">Link for other route</Link></li>
          <li><Link to="/seeforyourself">Link for other route</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header