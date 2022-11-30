import "../App.css";
import { useEffect, useState, useReducer } from "react";
import Category from "./Category";
import Card from "./Card";
import Checkbox from "./Checkbox";
import Search from "./Search";
import "flowbite";

function Content({ fav, handleFav }) {
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

  const handleSearch = (event) => {
    event.preventDefault();
    const param = event.target.query.value;
    const fetchData = async () => {
      let response = await fetch(
        `https://api.publicapis.org/entries?title=${param}`
      );
      let data = await response.json();
      setItems(data.entries);
    };
    fetchData();
  };

  return (
    <div className="App">
      <main>
        <div>
          <Category category={categories} handleClick={selectCategory} />
        </div>
        <div className="mt-5 lg:pl-80">
          <div className="sticky top-0 z-40 w-full m-auto">
            <div className="grid lg:grid-cols-2">
              <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li class="w-full dark:border-gray-600">
                  <div class="flex items-left pl-3">
                    Filter by Authentication
                  </div>
                </li>
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
              </ul>
              <Search handleSearch={handleSearch} />
            </div>
          </div>
          <div>
            <Card
              items={items}
              checked={checked}
              fav={fav}
              handleFav={handleFav}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Content;
