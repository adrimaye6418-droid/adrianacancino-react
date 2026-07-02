import "../css/Navbar.css";
import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <NavLink to="/" className="nav-link">
        <img className="nav-logo" alt="logo" src="../logo.png" />
      </NavLink>
      <NavLink to="/category/camping" className="nav-link">Camping</NavLink>
      <NavLink to="/category/senderismo" className="nav-link">Senderismo</NavLink>
      <NavLink to="/cart" style={{textDecoration:'none', color: 'black'}}><CartWidget /></NavLink>
    </nav>
  )

}

export default Navbar;