import React from "react";
import Header from "../header/header";

const Body: React.FC = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row items-start md:items-center justify-center md:justify-between mt-8">
        <div className="text-left md:text-center md:mr-8">
          <h1 className="text-3xl md:text-4xl font-bold">
            Welcome to the <b>Frontend Quiz!</b>
          </h1>
          <p className="mt-4 text-sm md:text-base">
            Pick a subject to get started
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex flex-col md:flex-row">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none mb-2 md:mb-0 md:mr-2">
            HTML
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none mb-2 md:mb-0 md:mr-2">
            CSS
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none mb-2 md:mb-0 md:mr-2">
            JavaScript
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none">
            Accessibility
          </button>
        </div>
      </div>
    </>
  );
};

export default Body;
