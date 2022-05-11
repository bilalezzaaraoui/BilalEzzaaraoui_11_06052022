import { Fragment } from "react";
import Banner from "../components/ui/banner/Banner";
import CollapseList from "../components/ui/collapseDetails/CollapseList";
import BackgroundAbout from "../assets/img/backgroundAbout.png";
import "./About.scss";

const About = (props) => {
  return (
    <Fragment>
      <Banner cover={BackgroundAbout} />
      <CollapseList />
    </Fragment>
  );
};

export default About;
