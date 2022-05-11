import { Link } from "react-router-dom";
import logo from "../../../assets/img/FOOTERLOGO.png";
import "./Footer.scss";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="centered">
        <Link to="/home">
          <img src={logo} alt="logo-footer" />
        </Link>
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
