import topShape from "../assets/topShape.png";
import bottomShape from "../assets/bottomShape.png";

function BackgroundImages() {
  return (
    <>
      <img src={topShape} alt="" className="main-shape1" />
      <img src={bottomShape} alt="" className="main-shape2" />
    </>
  );
}

export default BackgroundImages;
