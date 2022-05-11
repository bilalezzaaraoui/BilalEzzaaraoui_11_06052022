import { Fragment } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import "./Layout.scss";

const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <div className="main">{props.children}</div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
