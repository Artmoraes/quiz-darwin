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
  const [correctAnswerObject, setCorrectAnswerObject] = useState<CorrectAnswer | null>(
    null
  );

  useEffect(() => {
    const correctIndex = options.findIndex((option) => option === correctAnswer);
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
    <div className="mt-2 flex flex-col">
      {options.map((option, index) => (
          <button
            key={index}
            onClick={() =>
              handleOptionSelect(
                option,
                index,
                correctAnswerObject || { id: -1, option: "" }
              )
            }
            className="group bg-white h-18 mt-4 font-medium py-2 px-4 rounded-2xl focus:outline-none md:mb-0"
            disabled={radioDisabled}
          >
            <div className="flex flex-row items-center">
              <div className="w-14 h-14 bg-gray-100 rounded-xl group-hover:bg-purple-100">
                <span className="text-2xl h-full w-full font-medium text-gray-500 flex justify-center items-center">
                  {String.fromCharCode(65 + index)}
                </span>
              </div>
              <h1 className="text-2xl ml-6">{option}</h1>
            </div>
          </button>
      ))}
    </div>
  );
};

export default Question;
