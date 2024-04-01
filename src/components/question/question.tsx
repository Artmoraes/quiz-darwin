import React, { useState, useEffect } from "react";

interface Props {
  options: string[];
  selectedOption: string | null;
  correctAnswer: string;
  radioDisabled: boolean;
  inputRefs: React.MutableRefObject<HTMLInputElement[] | null>;
  handleOptionSelect: (
    option: string,
    index: number,
    correctAnswer: object
  ) => void;
  handleToggleColor: (index: number) => void;
}

const Question: React.FC<Props> = ({
  options,
  selectedOption,
  correctAnswer,
  handleOptionSelect,
  radioDisabled,
  inputRefs,
  handleToggleColor,
}) => {
  const [correctAnswerObject, setCorrectAnswerObject] = useState<{
    id: number;
    answer: string;
  } | null>(null);

  useEffect(() => {
    options.forEach((option, index) => {
      if (option === correctAnswer) {
        setCorrectAnswerObject({ id: index, answer: option });
        return;
      }
    });
  }, [correctAnswer, options]);

  useEffect(() => {
    if (inputRefs.current) {
      inputRefs.current = inputRefs.current.slice(0, options.length);
    }
  }, [options, inputRefs]);

  return (
    <ul className="mt-2">
      {options.map((option, index) => (
        <li key={index} className="mb-2">
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio"
              value={option}
              checked={option === selectedOption}
              disabled={radioDisabled}
              onChange={() =>
                handleOptionSelect(
                  option,
                  index,
                  correctAnswerObject || { id: -1, answer: "" }
                )
              }
              onClick={() => handleToggleColor(index)}
            />
            <span
              className="ml-2"
              id={String(index)}
              ref={(el) => {
                if (inputRefs.current) {
                  inputRefs.current[index] = el;
                }
              }}
            >
              {option}
            </span>
          </label>
        </li>
      ))}
    </ul>
  );
};

export default Question;
