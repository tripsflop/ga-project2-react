import "./App.css";
import { useEffect, useState } from "react";
import Category from "./components/Category";
import Card from "./components/Card";
import Checkbox from "./components/Checkbox";

function App() {
  //List of the categories
  const [categories, setCategories] = useState([]);
  //Category Selected
  const [selection, setSelection] = useState(null);
  //List of the items under the category
  const [items, setItems] = useState([]);

  const [checked, setChecked] = useState({
    null: true,
    oAuth: true,
    apikey: true,
    https: true,
  });

  const handlenullChange = () => {
    setChecked({ ...checked, null: !checked.null });
  };

  const handleoAuthChange = () => {
    setChecked({ ...checked, oAuth: !checked.oAuth });
  };
  const handleapiKeyChange = () => {
    setChecked({ ...checked, apikey: !checked.apikey });
  };
  const handlehttpsChange = () => {
    setChecked({ ...checked, https: !checked.https });
  };

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch("https://api.publicapis.org/categories");
      let data = await response.json();
      setCategories(data.categories);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchEntries = async () => {
      let response = await fetch(
        "https://api.publicapis.org/entries?category=Animals"
      );
      let data = await response.json();
      setItems(data.entries);
    };
    fetchEntries();
  }, []);

  const selectCategory = (item) => {
    const fetchData = async () => {
      let response = await fetch(
        `https://api.publicapis.org/entries?category=${item.entry}`
      );
      let data = await response.json();
      setItems(data.entries);
    };
    setSelection(item.entry);
    fetchData();
  };

  if (items !== null && categories !== null) {
    return (
      <div className="App">
        <Category category={categories} handleClick={selectCategory} />
        <Checkbox
          label="null"
          value={checked.null}
          onChange={handlenullChange}
        />
        <Checkbox
          label="oAuth"
          value={checked.oAuth}
          onChange={handleoAuthChange}
        />
        <Checkbox
          label="apiKey"
          value={checked.apikey}
          onChange={handleapiKeyChange}
        />
        <Checkbox
          label="https"
          value={checked.https}
          onChange={handlehttpsChange}
        />
        <Card items={items} checked={checked} />
      </div>
    );
  }
}

export default App;
