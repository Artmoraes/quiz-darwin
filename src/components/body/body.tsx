import React from "react";
import Header from "../header/header";
import { useNavigate } from "react-router-dom";
import Icons from "../icons/icons";

const Body: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row items-start md:items-center justify-center md:justify-between mt-8 sm:mx-12">
        <div className="w-100 mb-auto mt-4 sm:w-full div-title">
          <div className="text-left md:text-start md:mr-8">
            <h1 className="text-3xl md:text-6xl font-medium">
              Welcome to the <b>Frontend Quiz!</b>
            </h1>
            <p className="mt-6 text-xl md:text-base">
              Pick a subject to get started
            </p>
          </div>
        </div>

        <div className="mt-4 md:mt-0 md:w-3/4 sm:w-4/4 sm:w-full div-btns">
          <div className="flex flex-col">
            <button 
            onClick={() => navigate('/html')}
            className="bg-white hover:bg-purple-500 mt-4 font-medium py-2 px-4 rounded-3xl focus:outline-none md:mb-0">
              <div className="flex flex-row items-center">
                <Icons nameIcon={"HTML"} size="56px"/>
                <h1 className="ml-4 text-2xl">
                  HTML
                </h1>
              </div>
            </button>
            <button 
            onClick={() => navigate('/css')}
            className="bg-white hover:bg-purple-500 mt-4 font-medium py-2 px-4 rounded-3xl focus:outline-none md:mb-0">
              <div className="flex flex-row items-center">
                <Icons nameIcon={"CSS"} size="56px"/>
                <h1 className="ml-4 text-2xl">
                  CSS
                </h1>
              </div>
            </button>
            <button 
            onClick={() => navigate('/javascript')}
            className="bg-white hover:bg-purple-500 mt-4 font-medium py-2 px-4 rounded-3xl focus:outline-none md:mb-0">
              <div className="flex flex-row items-center">
                <Icons nameIcon={"JavaScript"} size="56px"/>
                <h1 className="ml-4 text-2xl">
                  JavaScript
                </h1>
              </div>
            </button>
            <button 
            onClick={() => navigate('/accessibility')}
            className="bg-white hover:bg-purple-500 mt-4 font-medium py-2 px-4 rounded-3xl focus:outline-none md:mb-0">
              <div className="flex flex-row items-center">
                <Icons nameIcon={"Accessibility"} size="56px"/>
                <h1 className="ml-4 text-2xl">
                  Accessibility
                </h1>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
