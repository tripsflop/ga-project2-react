import React from "react";
import { useState, useEffect } from "react";
function Home() {
  // const [count, setCount] = useState("");
  // const [category, setCategories] = useState("");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     let response = await fetch("https://api.publicapis.org/entries");
  //     let data = await response.json();
  //     setCount(data.count);
  //   };
  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     let response = await fetch("https://api.publicapis.org/categories");
  //     let data = await response.json();
  //     setCategories(data.count);
  //   };
  //   fetchData();
  // }, []);

  return (
    <section id="hero">
      <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left drop-shadow-lg">
            Discover a collective list of free APIs for use in software and web
            development
          </h1>
          <div className="max-w-sm text-center text-gray-800 md:text-left font-semibold">
            {/* {`${category} Categories, ${count} APIs`} */}
            51 Categories, 1425 APIs
          </div>
        </div>
        <div className="md:w-1/2 pb-10">
          <img src="src/assets/output.png"></img>
        </div>
      </div>
    </section>
  );
}

export default Home;
