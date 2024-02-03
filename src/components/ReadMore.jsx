import React from "react";
import { Link } from "react-router-dom";
import "./css/ReadMore.css";

export default function ReadMore() {
  return (
    <>
      <div className="center-content-2">
        <video autoPlay muted loop className="background-video-2">
          <source src="./public/intro.mp4" type="video/mp4" />
        </video>
        <div className="contenair-text-read-more">
          <h1 className="titre-read-more">
            Do Whatever It Takes To <span className="survive">Survive</span>
          </h1>
          <p className="text-read-more">
            On the remote island named Lumia, the scientific group AGLAIA conducts secret experiments on humans in search to
            perfect <br />
            a new race of extraordinary humans.
            <br /> Craft weapons and armor that are required for you to survive.
            <br /> Squad up with your teammates to take down the other 7 teams and become the last team standing.
          </p>
          <h1 className="titre-read-more  ">
            <span className="survive">Multiplayer Online Survival Arena </span>
          </h1>

          <button className="btn_read_more">
            <Link className="btn_read_more" to="/more">
              Read More
            </Link>
          </button>
        </div>
        <div className="black">

        </div>
      </div>
    </>
  );
}
