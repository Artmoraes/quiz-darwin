import React, { useState, useEffect } from "react";
import data from "./data.json";
import Question from "../question/question";
import Result from "../result/result";
import Header from "../header/header";

interface Quiz {
  title: string;
  icon: string;
  questions: {
    question: string;
    options: string[];
    answer: string;
  }[];
}

const Quiz: React.FC<{ subject: string }> = ({ subject }) => {
  const [currentQuiz, setCurrentQuiz] = useState<Quiz | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showNextButton, setShowNextButton] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

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
    if (
      selectedOption === currentQuiz?.questions[currentQuestionIndex].answer
    ) {
      setScore(score + 1);
    }
    setSelectedOption(null);
    setShowNextButton(false);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return (
    <div className="mt-8">
      {currentQuiz && currentQuiz.questions.length > currentQuestionIndex ? (
        <div className="mt-4">
          <div className="flex items-center mt-2">
            <Header title={subject} icon={subject} />
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
      ) : (
        <Result
          score={score || 0}
          totalQuestions={currentQuiz?.questions.length || 0}
          subject={subject}
          onPlayAgain={() => {
            setCurrentQuestionIndex(0);
            setScore(0);
          }}
        />
      )}
    </div>
  );
};

export default Quiz;
