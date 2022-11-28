import React from "react";
import { useState, useEffect } from "react";
function Home() {
  const [count, setCount] = useState("");
  const [category, setCategories] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch("https://api.publicapis.org/entries");
      let data = await response.json();
      setCount(data.count);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch("https://api.publicapis.org/categories");
      let data = await response.json();
      setCategories(data.count);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>API Explorer</h1>
      <h3>Discover free APIs for use</h3>
      <h4>{`Number of APIs: ${count}`}</h4>
      <h4>{`Number of Categories: ${category}`}</h4>
      <a href="https://github.com/public-apis/public-apis">
        <h4>Github</h4>
      </a>
    </div>
  );
}

export default Home;
