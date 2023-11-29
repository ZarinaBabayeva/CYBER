import "../styles/Footer.css";
import { NavLink, Link } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <div className="fo-row1 j-flex">
        <div className="logo-container j-flex">
          <img
            src="../src/media/icons8-cyber-64.png"
            alt="logo"
            className="logo-img"
          />
          <h2 className="logo">TuringSec</h2>
        </div>
        <ul className="page-column j-flex">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/">Customers</NavLink>
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
        <ul className="icon j-flex">
          <li>
            <Link>
              <i className="fa-brands fa-instagram"></i>
            </Link>
          </li>
          <li>
            <Link>
              <i className="fa-brands fa-square-facebook"></i>
            </Link>
          </li>
          <li>
            <Link>
              <i className="fa-brands fa-twitter"></i>
            </Link>
          </li>
          <li>
            <Link>
              <i className="fa-brands fa-github"></i>
            </Link>
          </li>
        </ul>
      </div>
      <div className="fo-row2 j-flex">
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
            saepe ipsam impedit natus! Mollitia ipsum, quasi provident unde,
            quidem non explicabo, consequatur inventore reiciendis sapiente quae
            aut labore cumque modi!
          </p>
        </div>
        <div>
          <form className="contact-box">
            <label htmlFor="email-box">Contact us</label>
            <input
              type="email"
              name="email-box"
              id="email-box"
              placeholder="Enter your email"
            />
            <button id="contact-box-btn">Send</button>
          </form>
        </div>
        <div>
          <ul className="contact-info">
            <li>
              <i className="fa-solid fa-phone"></i>
              +994 00 000 00 00
            </li>
            <li>
              <i className="fa-solid fa-location-dot"></i>
              Azerbaijan Republic, Baku city
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              turingsec@gmail.com
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
