import React, { useState } from "react";

const SwitchButton: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleToggleOption = () => {
    setSelectedOption((prevOption) =>
      prevOption === "option1" ? "option2" : "option1"
    );
  };

  return (
    <div className="relative flex items-center mt-3">
      <button
        className={`${
          selectedOption === "option1" ? "bg-green-500" : "bg-gray-200"
        } text-white font-bold py-2 px-4 rounded-l focus:outline-none`}
        onClick={handleToggleOption}
      >
        Opção 1
      </button>
      <button
        className={`${
          selectedOption === "option2" ? "bg-green-500" : "bg-gray-200"
        } text-white font-bold py-2 px-4 rounded-r focus:outline-none`}
        onClick={handleToggleOption}
      >
        Opção 2
      </button>
      <div
        className={`absolute bg-gray-300 w-8 h-8 rounded-full transition-transform duration-300 ${
          selectedOption === "option1" ? "left-0" : "right-0"
        }`}
      />
    </div>
  );
};

export default SwitchButton;
