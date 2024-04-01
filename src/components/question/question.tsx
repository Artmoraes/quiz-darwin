import React, { useState, useEffect } from "react";

interface CorrectAnswer {
  id: number;
  option: string;
}

interface Props {
  options: string[];
  selectedOption: string | null;
  correctAnswer: string;
  radioDisabled: boolean;
  inputRefs: React.MutableRefObject<HTMLInputElement[] | null>;
  handleOptionSelect: (
    option: string,
    index: number,
    correctAnswer: CorrectAnswer
  ) => void;
}

const Question: React.FC<Props> = ({
  options,
  selectedOption,
  correctAnswer,
  handleOptionSelect,
  radioDisabled,
  inputRefs,
}) => {
  const [correctAnswerObject, setCorrectAnswerObject] = useState<CorrectAnswer | null>(null);

  useEffect(() => {
    const correctIndex = options.findIndex(option => option === correctAnswer);
    if (correctIndex !== -1) {
      setCorrectAnswerObject({ id: correctIndex, option: correctAnswer });
    }
  }, [correctAnswer, options]);

  useEffect(() => {
    if (inputRefs.current) {
      inputRefs.current = inputRefs.current.slice(0, options.length);
    }
  }, [options, inputRefs]);

  return (
    <ul className="mt-2">
      {options.map((option, index) => (
        <li
          key={index}
          className="mb-2"
          id={String(index)}
          ref={(el) => {
            if (inputRefs.current) {
              inputRefs.current[index] = el;
            }
          }}
        >
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
                  correctAnswerObject || { id: -1, option: "" }
                )
              }
            />
            <span className="ml-2">{option}</span>
          </label>
        </li>
      ))}
    </ul>
  );
};

export default Question;
