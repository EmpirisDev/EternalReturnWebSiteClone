
import { Link } from "react-router-dom";
import "./css/NavBar.css";

export default function NavBar() {
  return (
    <>
      <div className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item-image">
            <Link to="/">
              <img src="public/er-logo-white@2x.png" alt="Game Icon" className="navbar-icon" />
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/game">
              Game
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/news">
              News
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/search">
              Search
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/community">
              Community
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/stats">
              Stats
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/support">
              Support
            </Link>
          </li>
          <li className="navbar-item-right">
            <Link className="navbar-item-right" to="/play">
              Play Now!
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
