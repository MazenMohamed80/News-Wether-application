import { useContext } from "react";
import Index from "./components/index/Index";
import Navbar from "./components/navbar/Navbar";
import FakeNews from "./components/news/FakeNews";
import RealNews from "./components/news/RealNews";
import Quotes from "./components/quotes/Quotes";
import Weather from "./components/weather/Weather";
import { Routes, Route } from "react-router-dom";
import { ThemeContext } from "./context/ThemeContext";
import NewsShow from "./components/news/NewsShow";

function App() {
  const { theme } = useContext(ThemeContext);
  console.log(theme);

  return (
    <div
      className={theme == "dark" ? "bg-dark text-light" : ""}
      style={{ minHeight: "100vh" }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/fake-news" element={<FakeNews />} />
        <Route path="/fake-news/:id" element={<NewsShow />} />
        <Route path="/real-news" element={<RealNews />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </div>
  );
}

export default App;
