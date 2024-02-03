import "./css/New.css";

export default function New() {
  return (
    <>
      <h1 className="titre-New">News</h1>
      <div className="contenair">
        <div className="news-item">
          <img  className="img-news" src="public\patchNotes.png" alt="img" />
          <p className="text-new">PATCH NOTES 1.10 - December 7th, 2023</p>
        </div>
        <div className="news-item">
          <img className="img-news" src="public\Maintenance.png" alt="img" />
          <p className="text-new">[Complete] Maintenance Notice</p>
        </div>
        <div className="news-item">
          <img className="img-news" src="public\NewPerso.png" alt="img" />
          <p className="text-new">
Tsubame Play Event</p>
        </div>
      </div>
    </>
  );
}
