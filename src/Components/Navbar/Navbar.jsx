import "./Navbar.css";
import img from "/images/logo.png";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo-container">
          <a>
            <img src={img} alt="logo" />
          </a>
        </div>
        <ul>
          <li>
            <a href="#root">/root</a>
          </li>
          <li>
            <a href="#about_me">/about_me</a>
          </li>
          <li>
            <a href="#projects">/logs</a>
          </li>
          <li>
            <a href="#contact">/contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
