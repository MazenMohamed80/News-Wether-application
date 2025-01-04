import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Link, useParams } from "react-router-dom";

function RealCard({ data }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={
        theme == "dark"
          ? `card text-center bg-${theme} text-light border-0 rounded`
          : `card text-center bg-${theme} text-dark border-0 rounded`
      }
    >
      {data.urlToImage ? (
        <img className="card-img-top" src={`${data.urlToImage}`} alt="Title" />
      ) : (
        ""
      )}
      <div className="card-body">
        <h4 className="card-title">{data.title}</h4>
        <p className="card-text">{data.content}</p>
        {!useParams() ? (
          ""
        ) : (
          <Link className="btn btn-success" to={"/real-news/" + data.name}>
            Details
          </Link>
        )}
      </div>
    </div>
  );
}

export default RealCard;
