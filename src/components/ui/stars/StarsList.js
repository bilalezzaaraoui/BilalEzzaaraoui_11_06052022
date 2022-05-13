import Stars from "./Stars";
import starsColored from "../../../assets/img/stars/starsColored.png";
import starsGrey from "../../../assets/img/stars/starsGrey.png";
import "./StarsList.scss";

const StarsList = (props) => {
  const number = +props.value;
  let starsTotal = [];

  if (number >= 0 && number <= 5) {
    for (let i = 0; i < number; i++) {
      starsTotal.push(<Stars key={i} image={starsColored} />);
    }

    for (let i = starsTotal.length; i < 5; i++) {
      starsTotal.push(<Stars key={i} image={starsGrey} />);
    }
  } else {
    for (let i = 0; i < 5; i++) {
      starsTotal.push(<Stars key={i} image={starsColored} />);
    }
  }

  return starsTotal;
};

export default StarsList;
