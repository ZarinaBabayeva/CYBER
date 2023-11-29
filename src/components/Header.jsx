import "../styles/Header.css";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <nav className="j-flex">
      <div className="logo-container j-flex">
        <img
          src="../src/media/icons8-cyber-64.png"
          alt="logo"
          className="logo-img"
        />
        <h2 className="logo">TuringSec</h2>
      </div>
      <ul className="menu j-flex">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/">Cyber</NavLink>
        </li>
        <li>
          <NavLink to="/">Hackers</NavLink>
        </li>
        <li>
          <NavLink to="/">About</NavLink>
        </li>
        <li>
          <NavLink to="/">Contact</NavLink>
        </li>
      </ul>
      <ul className="user-container j-flex">
        <li className="j-flex">
          <i className="fa-solid fa-user"></i>
          <NavLink>Sign In</NavLink>
        </li>
        <li className="j-flex">
        <i className="fa-regular fa-user"></i>
          <NavLink>Sign Up</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
