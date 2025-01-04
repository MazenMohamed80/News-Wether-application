import { useEffect, useState } from "react";
import { fetchNew } from "../../util/fetchFunctions";
import RealCard from "./RealCard";

function RealNews() {
  const [articles, setArticles] = useState(null);
  useEffect(() => {
    fetchNew(setArticles);
  }, []);
  if (articles == null) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container">
      <div className="row row-cols-3 justify-content-around align-items-center g-2 m-3">
        {articles.map((data) => (
          <RealCard
            key={data.id ? data.id : data.title ? data.title : ""}
            data={data}
          />
        ))}
      </div>
    </div>
  );
}

export default RealNews;
