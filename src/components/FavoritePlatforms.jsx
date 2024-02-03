import "./css/FavoritePlatforms.css";

export default function FavoritePlatforms() {
  return (
    <>
      <div className="center-content-3">
        <img src="./public/bg-play-er.jpg" alt="" className="center-content-3-img" />
        <img src="./public/img-play-er.png" alt="" className="img-perso" />
        <div className="contenair-text-favorite-platforms">
          <h2>Multiplayer Online Survival Arena</h2>
          <p>A new type of survival game with unique crafting systems.</p>
          <h1>
            Play <span className="survive">Eternal Return</span> on your favorite platforms!
          </h1>
          <button className="btn_play_favorite">
            <a className="" href="https://store.steampowered.com/app/1049590/Eternal_Return_Black_Survival/" target="_blank" rel="noopener noreferrer">
              <img src="public\logo-steam-white.svg" />
            </a>
          </button>
        </div>
      </div>
    </>
  );
}
