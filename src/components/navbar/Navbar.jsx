import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";

function Navbar() {
    const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <nav className={`navbar navbar-expand-sm navbar-${theme} bg-${theme}`}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/" aria-current="page">
                Home
                <span className="visually-hidden">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/fake-news">
                Fake News
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/real-news">
                Real News
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/quotes">
                Quotes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/weather">
                Weather
              </Link>
            </li>
          </ul>
          <div className="d-flex my-2 my-lg-0">
            <button className="btn btn-success my-2 my-sm-0" onClick={toggleTheme}>Toggle Theme</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
