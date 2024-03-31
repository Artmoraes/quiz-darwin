import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faHtml5, faJs } from "@fortawesome/free-brands-svg-icons";
import data from "./data.json";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import Question from "../question/question";

interface Quiz {
  title: string;
  icon: string;
  questions: {
    question: string;
    options: string[];
    answer: string;
  }[];
}

interface Icones {
  [key: string]: typeof faHtml5;
}

const icon: Icones = {
  HTML: faHtml5,
  CSS: faCss3,
  JavaScript: faJs,
  Accessibility: faPerson,
};

const Quiz: React.FC<{ subject: string }> = ({ subject }) => {
  const [currentQuiz, setCurrentQuiz] = useState<Quiz | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showNextButton, setShowNextButton] = useState<boolean>(false);

  const loadQuiz = () => {
    const selectedQuiz = data.quizzes.find((quiz) => quiz.title === subject);
    if (selectedQuiz) {
      setCurrentQuiz(selectedQuiz);
    }
  };

  useEffect(() => {
    loadQuiz();
  }, []);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setShowNextButton(true);
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setShowNextButton(false);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return (
    <div className="mt-8">
      {currentQuiz && currentQuiz.questions.length > currentQuestionIndex && (
        <div className="mt-4">
          <h2 className="text-2xl font-bold">{currentQuiz.title}</h2>
          <div className="flex items-center mt-2">
            <FontAwesomeIcon icon={icon[subject]} size="2x" color="#E34F26" />
            <span className="ml-2">{currentQuiz.title}</span>
          </div>
          <p className="mt-4">
            {currentQuiz.questions[currentQuestionIndex].question}
          </p>
          <Question
            options={currentQuiz.questions[currentQuestionIndex].options}
            selectedOption={selectedOption}
            handleOptionSelect={handleOptionSelect}
          />
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none mt-4 ${
              !showNextButton && "opacity-50 cursor-not-allowed"
            }`}
            onClick={handleNextQuestion}
            disabled={!showNextButton}
          >
            Próxima Questão
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
