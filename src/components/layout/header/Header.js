import { NavLink } from "react-router-dom";
import logo from "../../../assets/img/LOGO.svg";
import "./Header.scss";

const Header = (props) => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="logo"></img>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <NavLink
              to="/"
              className={(navData) => (navData.isActive ? "active" : "")}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={(navData) => (navData.isActive ? "active" : "")}
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
