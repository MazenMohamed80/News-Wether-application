import { ThemeContext } from "../../context/ThemeContext";
import { getQuote } from "../../util/fetchFunctions";
import { useContext, useState } from "react";
function Quotes() {
  const { theme } = useContext(ThemeContext);
  const [quote, toggleQuote] = useState(null);
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
          <h2 className="card-title">
            {quote ? quote : "Welcome to the Quote Generator"}
          </h2>
          <button
            className="btn btn-success"
            onClick={() => {
              getQuote(toggleQuote);
            }}
          >
            {quote ? "Get Another Quote" : "Get Quote"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Quotes;
