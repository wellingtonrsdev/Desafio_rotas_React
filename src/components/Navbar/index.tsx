import { NavLink } from "react-router-dom";
import homeImg from "../../assets/home.svg";
import "./styles.css";

export default function Navbar() {
  return (
    <header>
      <div className="container navbar-content">
        <nav>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? "menu-item-header menu-active" : "menu-item-header"
            }
          >
            Início
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "menu-item-header menu-active" : "menu-item-header"
            }
          >
            Produtos
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "menu-item-header menu-active" : "menu-item-header"
            }
          >
            Sobre nós
          </NavLink>
        </nav>
        <NavLink to="/home" className="menu-home">
          <img src={homeImg} alt="home" />
        </NavLink>
      </div>
    </header>
  );
}
