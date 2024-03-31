import React from "react";

interface Props {
  options: string[];
  selectedOption: string | null;
  handleOptionSelect: (option: string) => void;
}

const Question: React.FC<Props> = ({ options, selectedOption, handleOptionSelect }) => {
  return (
    <ul className="mt-2">
      {options.map((option, index) => (
        <li key={index} className="mb-2">
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio"
              checked={option === selectedOption}
              onChange={() => handleOptionSelect(option)}
            />
            <span className="ml-2">{option}</span>
          </label>
        </li>
      ))}
    </ul>
  );
};

export default Question;
