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
  // } else if (number === 0) {
  //   console.log("0");
  //   for (let i = 0; i < 5; i++) {
  //     starsTotal.push(<Stars key={i} image={starsGrey} />);
  //   }
  // }

  // if (number > 0 && starsTotal.length !== 5) {
  //   console.log("Ok");
  //   // const target = starsTotal.length - 1;
  //   // for (let i = target; target < 5; i++) {
  //   //   starsTotal.push(<Stars key={i} image={starsGrey} />);
  //   // }
  // }

  return starsTotal;
};

export default StarsList;
