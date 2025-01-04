import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function Index() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{ height: "90vh" }}
    >
      <div
        className={
          theme == "dark"
            ? `card text-center bg-${theme} text-light border-0 rounded`
            : `card text-center bg-${theme} text-dark border-0 rounded`
        }
      >
        <div className="card-header">
          <h2 className="card-title">Helloo Thereeee</h2>
          <p className="card-text">
            Welcome to the websites of WONDERRRSSS!!!!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Index;
