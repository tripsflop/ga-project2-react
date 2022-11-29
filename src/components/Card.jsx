import React from "react";

function Card({ items, checked, fav, handleFav }) {
  //If no results
  if (items == null) {
    return <div>Nothing to see here...</div>;
  }

  function filterByAuth(item) {
    if (item.Auth == "" && checked.null) {
      return true;
    }
    if (item.Auth == "OAuth" && checked.oAuth) {
      return true;
    }
    if (item.Auth == "apiKey" && checked.apikey) {
      return true;
    }
    return false;
  }

  function filterByHttp(item) {
    if (item.HTTPS == true && checked.https) {
      return true;
    }
    return false;
  }

  const authFiltered = items.filter(filterByAuth);
  const httpFiltered = authFiltered.filter(filterByHttp);

  //if no results return refine query

  return (
    <div className="relative mt-8 grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-10">
      {httpFiltered.map((item, index) => (
        <div
          key={index}
          className="block max-w-sm p-6 bg-white border border-gray-200 
          rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-1"
        >
          <div className="relative">
            <h1 class="inline mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item.API}
            </h1>
            {fav.findIndex((fav) => fav.Link === item.Link) === -1 ? (
              <button
                onClick={() => {
                  handleFav({ type: "ADD", payload: { item } });
                }}
                class="absolute right-0 p-0 w-6 h-6 bg-green-600 rounded-full hover:bg-green-700 
                      active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
              >
                <svg
                  viewBox="0 0 20 20"
                  enable-background="new 0 0 20 20"
                  class="w-6 h-6 inline-block"
                ></svg>
              </button>
            ) : (
              <button
                onClick={() => {
                  handleFav({ type: "DEL", payload: { item } });
                }}
                class="absolute right-0 p-0 w-6 h-6 bg-red-600 rounded-full hover:bg-red-700 
                      active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
              >
                <svg
                  viewBox="0 0 20 20"
                  enable-background="new 0 0 20 20"
                  class="w-6 h-6 inline-block"
                ></svg>
              </button>
            )}
          </div>

          <p class="font-normal text-gray-700 dark:text-gray-400">
            {item.Description}
          </p>
          <a
            href={item.Link}
            class="inline-flex items-center font-medium text-blue-600 hover:text-blue-800
             dark:text-blue-500 dark:hover:text-blue-700"
          >
            Explore
          </a>

          <div className="hidden md:flex space-x-6 font-semibold">
            {item.Auth != "" ? (
              <span
                class="bg-green-100 text-green-800 text-sm font-medium mr-0.5 px-2.5 py-0.5 mt-7 rounded
               dark:bg-green-200 dark:text-green-900"
              >
                {item.Auth.toUpperCase()}
              </span>
            ) : (
              ""
            )}
            {item.Cors == "yes" ? (
              <span
                class="bg-green-100 text-green-800 text-sm font-medium mr-0.5 px-2.5 py-0.5 mt-7 rounded
               dark:bg-green-200 dark:text-green-900"
              >
                CORS
              </span>
            ) : (
              ""
            )}
            {item.Cors == "no" ? (
              <span
                class="bg-red-100 text-red-800 text-sm font-medium mr-0.5 px-2.5 py-0.5 mt-7 rounded
               dark:bg-red-200 dark:text-red-900"
              >
                NO CORS
              </span>
            ) : (
              ""
            )}
            {item.Cors == "unknown" ? (
              <span
                class="bg-red-100 text-red-800 text-sm font-medium mr-0.5 px-2.5 py-0.5 mt-7 rounded
               dark:bg-red-200 dark:text-red-900"
              >
                CORS UNKOWN
              </span>
            ) : (
              ""
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
