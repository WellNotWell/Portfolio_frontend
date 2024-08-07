import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./routes/Main";
import ComicPage from "./routes/ComicPage";

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/comic" element={<ComicPage />} />
    </Routes>
  </Router>
);

export default App;
