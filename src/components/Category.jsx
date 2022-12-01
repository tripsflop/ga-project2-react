import React from "react";

function Category({ category, handleClick }) {
  return (
    <div className="overflow-y-auto pb-10 px-3 right-auto w-[19.5rem] top-0  scrolling-touch max-w-2xs lg:h-[calc(100vh-3rem)] hidden lg:block lg:fixed bg-gray-50 rounded dark:bg-gray-800">
      <ul className="space-y-2">
        {category?.map((entry, index) => (
          <li key={index} onClick={() => handleClick({ entry })}>
            <a
              href="#"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                  clipRule="evenodd"
                ></path>
              </svg>

              <span className="ml-3">{entry}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
