// src/components/App.js
import React from "react";
import blogData from "../data/blog"; // assuming this contains name, image, about, and posts
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

function App() {
  return (
    <div className="App"> {}
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
