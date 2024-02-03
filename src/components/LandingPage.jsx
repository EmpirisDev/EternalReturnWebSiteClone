import FavoritePlatforms from "./FavoritePlatforms";
import FollowUs from "./FollowUs";
import New from "./New";
import PlayNow from "./PlayNow";
import ReadMore from "./ReadMore";

export default function LandingPage() {
  return (
    <>
      <PlayNow />
      <New />
      <ReadMore />
      <FavoritePlatforms />
      <FollowUs />
    </>
  );
}
