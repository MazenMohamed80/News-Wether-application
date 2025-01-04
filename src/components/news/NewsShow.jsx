import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchOne } from "../../util/fetchFunctions";
import NewsCard from "./NewsCard";

function NewsShow() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  useEffect(() => {
    fetchOne(setArticle, id);
  }, [id]);
  if (article == null) {
    return <div>Loading...</div>;
  }
  return <NewsCard data={article} />;
}

export default NewsShow;
