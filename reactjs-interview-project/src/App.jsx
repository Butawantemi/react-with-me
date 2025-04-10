import Accordian from "./Component/accordian";
import ImageSlider from "./Component/image-slider";
import RandomColor from "./Component/random-color";
import StarRating from "./Component/star-rating";

export default function App() {
  return (
    <div>
      {/* Accordian component */}
      {/* <Accordian /> */}

      {/* Random color component */}
      {/*  <RandomColor /> */}

      {/* Star rating component */}
      {/* <StarRating noOfStar={10}/> */}

      {/* Image slider component */}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
    </div>
  );
}
