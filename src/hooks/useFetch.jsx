import { useState, useEffect } from "react";

function useFetch(query) {
  const [categories, setCategories] = useState([]);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(query);
        if (!response.ok) {
          throw new Error("Network error");
        }
        const data = await response.json();
        setCategories(data);
        setStatus("done");
      } catch (error) {
        console.error(error);
        setStatus("error");
      }
    };
    setStatus("loading");
    fetchData();
  }, []);
  return categories;
}

export default useFetch;
