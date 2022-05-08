import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MovieList, MovieDetail } from "./pages";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie-detail/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
}
