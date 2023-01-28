import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "./navbar.css";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <>
      <header>
        <h1 className="logo">
          <Link to="/">Karibu</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="">Home</Link>
            </li>
            <li>
              <Link to="">About Us</Link>
            </li>
            <li>
              <Link to="">Our Agents</Link>
            </li>
            <li>
              <Link to="">Properties</Link>
            </li>
            <li>
              <Link to="">Gallery</Link>
            </li>
            <li>
              <Link to="">Blog</Link>
            </li>
            <li>
              <Link to="">Contact us</Link>
            </li>
            <li>
              <Link to="/login">
                <FaUserCircle />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
