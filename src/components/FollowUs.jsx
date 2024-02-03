import { FaDiscord, FaTwitter, FaFacebook, FaYoutube, FaRedditAlien, FaInstagram, FaTwitch } from 'react-icons/fa';
import "./css/FollowUs.css";
export default function FollowUs() {
  return (
    <>
      <div className="social-media">
        <h1 className="social-media-title">Follow us </h1>
        <div className="social-media-icon">
          <a href="https://discord.gg" target="_blank" rel="noreferrer">
            <FaDiscord />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.facebook.com/PlayToEarnGame" target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
            <FaYoutube />
          </a>
          <a href="https://www.reddit.com" target="_blank" rel="noreferrer">
            <FaRedditAlien />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.twitch.tv" target="_blank" rel="noreferrer">
            <FaTwitch />
          </a>
        </div>
      </div>
    </>
  );
}
