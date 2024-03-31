import React from "react";
import Icons from "../icons/icons";
import Header from "../header/header";

interface Props {
  score: number | 0;
  totalQuestions: number | 0;
  subject: string;
  onPlayAgain: () => void;
}

const Result: React.FC<Props> = ({ score, totalQuestions, subject, onPlayAgain }) => {
  return (
    <>
      <Header title={subject} icon={subject} />
      <div className="flex justify-center items-center mt-8">
        <div className="text-left mr-8">
          <h2 className="text-2xl font-bold">Quiz Completed</h2>
          <p className="mt-4">
            You Scored {score} out of {totalQuestions}
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none mt-4"
            onClick={onPlayAgain}
          >
            Play Again
          </button>
        </div>
        <div className="rounded-full border border-gray-300 p-4">
          <Icons nameIcon={subject} /> {subject}
        </div>
      </div>
    </>
  );
};

export default Result;
