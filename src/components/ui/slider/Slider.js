import { Fragment, useState } from "react";
import ChevronRight from "../../../assets/img/chevronRight.png";
import ChevronLeft from "../../../assets/img/chevronLeft.png";
import "./Slider.scss";

const Slider = (props) => {
  const [arrow, setArrow] = useState(true);
  const [marker, setMarker] = useState(0);
  const imagesArr = props.images;

  if (imagesArr.length === 1) {
    setArrow(false);
  }

  const handleLeftClick = () => {
    // Suivant
    if (marker >= imagesArr.length - 1) {
      setMarker(0);
    } else {
      setMarker(marker + 1);
    }
  };

  const handleRightClick = () => {
    // Précedent
    if (marker <= 0) {
      setMarker(imagesArr.length - 1);
    } else {
      setMarker(marker - 1);
    }
  };

  return (
    <div
      className="slider"
      style={{ backgroundImage: `url(${imagesArr[marker]})` }}
    >
      {arrow && (
        <Fragment>
          <img
            src={ChevronRight}
            alt="chevron-right"
            className="chevronRight"
            onClick={handleLeftClick}
          />
          <img
            src={ChevronLeft}
            alt="chevron-left"
            className="chevronLeft"
            onClick={handleRightClick}
          />
        </Fragment>
      )}
    </div>
  );
};

export default Slider;
