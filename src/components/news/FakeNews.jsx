import { useEffect, useState } from "react";
import { fecthAll } from "../../util/fetchFunctions";
import NewsCard from "./NewsCard";

function FakeNews() {
  const [articles, setArticles] = useState(null);
  useEffect(() => {
    fecthAll(setArticles);
  }, []);
  if (articles == null) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container">
      <div className="row row-cols-3 justify-content-between align-items-center g-2 m-3">
        {articles.map((data) => (
          <NewsCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
}

export default FakeNews;
