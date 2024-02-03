import { Link } from "react-router-dom";
import "./css/PlayNow.css";

export default function PlayNow() {
  return (
    <>
      <div className="center-content">
        <video autoPlay muted loop className="background-video">
          <source src="public\Vacance_ENG.mp4" type="video/mp4" />
        </video>
        <img src="public\logo_white.png" alt="logo" className="img-titre" />
        <button className="btn_jouer">
          <Link className="btn_jouer" to="/game">
            Play now !
          </Link>
        </button>
      </div>
      <div className="steam">
        <img src="public\logo-steam-white.svg" />
      </div>
    </>
  );
}
