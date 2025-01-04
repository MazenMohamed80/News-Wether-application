import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Link, useParams } from "react-router-dom";

function NewsCard({ data }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={
        theme == "dark"
          ? `card text-center bg-${theme} text-light border-0 rounded`
          : `card text-center bg-${theme} text-dark border-0 rounded`
      }
    >
      {data.image ? (
        <img className="card-img-top" src={`${data.image}`} alt="Title" />
      ) : (
        ""
      )}
      <div className="card-body">
        <h4 className="card-title">{data.title}</h4>
        <p className="card-text">{data.content}</p>
        {useParams() ? (
          ""
        ) : (
          <Link className="btn btn-success" to={"/fake-news/" + data.id}>
            Details
          </Link>
        )}
      </div>
    </div>
  );
}

export default NewsCard;
