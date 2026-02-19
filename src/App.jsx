import React from "react";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";

import NewsPage from "./pages/NewsPage";
import NewsContextProvider from "./context/News";
import FullNewsPage from "./pages/FullNewsPage";

// https://dummyjson.com/posts
const App = () => {
  return (
    <NewsContextProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:id" element={<FullNewsPage />} />
      </Routes>
    </NewsContextProvider>
  );
};

export default App;
