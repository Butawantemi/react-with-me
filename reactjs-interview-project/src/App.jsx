import Accordian from "./Component/accordian";
import ImageSlider from "./Component/image-slider";
import LoadMoreData from "./Component/load-more-data";
import QRCodeGenerator from "./Component/qr-code-generator";
import RandomColor from "./Component/random-color";
import StarRating from "./Component/star-rating";
import TreeView from "./Component/tree-view";
import menus from "./Component/tree-view/data";

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
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}

      {/* Loading more data component */}
      {/* <LoadMoreData /> */}

      {/* Tree view component */}
      {/* <TreeView menus={menus}/> */}

      {/* QR code generator component */}
      <QRCodeGenerator />
    </div>
  );
}
