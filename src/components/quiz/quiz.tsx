import React, { useState, useEffect, useRef } from "react";
import data from "./data.json";
import Question from "../question/question";
import Result from "../result/result";
import Header from "../header/header";
import "./quizz.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { createRoot } from "react-dom/client";

interface Quiz {
  title: string;
  icon: string;
  questions: {
    question: string;
    options: string[];
    answer: string;
  }[];
}

interface ErrorAndCorrect {
  error: string | number;
  correct: string | number;
}

interface CorrectAnswer {
  id: number;
  option: string;
}

const Quiz: React.FC<{ subject: string }> = ({ subject }) => {
  const [currentQuiz, setCurrentQuiz] = useState<Quiz | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showNextButton, setShowNextButton] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [radioDisabled, setRadioDisabled] = useState<boolean>(false);
  const [errorAndCorrect, setErrorAndCorrect] = useState<ErrorAndCorrect>({
    error: "",
    correct: "",
  });
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const [elementCorrect, setElementCorrect] = useState<HTMLElement | null>(
    null
  );
  const [elementWrong, setElementWrong] = useState<HTMLElement | null>(null);

  const loadQuiz = () => {
    const selectedQuiz = data.quizzes.find((quiz) => quiz.title === subject);
    if (selectedQuiz) {
      setCurrentQuiz(selectedQuiz);
    }
  };

  useEffect(() => {
    loadQuiz();
  }, []);

  const handleOptionSelect = (
    option: string,
    index: number,
    correctAnswer: CorrectAnswer
  ) => {
    setSelectedOption(option);
    setErrorAndCorrect({ error: index, correct: correctAnswer.id });
  };

  const managerButtons = () => {
    if (showNextButton) {
      return (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none mt-4"
          onClick={handleNextQuestion}
        >
          Próxima Questão
        </button>
      );
    } else {
      return (
        <button
          className={`bg-${
            !radioDisabled ? "purple-400" : "purple-600"
          } text-white font-bold py-2 px-4 rounded-2xl mt-4 ht-18`}
          onClick={handleCheckQuestion}
          disabled={!selectedOption}
        >
          Enviar Resposta
        </button>
      );
    }
  };

  const createIconToQuestion = (icon: typeof faCheckCircle) => {
    const iconElement = document.createElement("span");
    iconElement.classList.add("ml-2");
    createRoot(iconElement).render(<FontAwesomeIcon icon={icon} />);
    return iconElement;
  };

  const handleCheckQuestion = () => {
    const correctOptionIndex = Number(errorAndCorrect.correct);
    const errorOptionIndex = Number(errorAndCorrect.error);

    if (
      selectedOption === currentQuiz?.questions[currentQuestionIndex].answer
    ) {
      setScore(score + 1);
      inputRefs.current[correctOptionIndex].classList.add("correct");

      const iconElement = createIconToQuestion(faCheckCircle);
      inputRefs.current[correctOptionIndex].appendChild(iconElement);
      setElementCorrect(iconElement);
    } else {
      inputRefs.current[correctOptionIndex].classList.add("correct");
      inputRefs.current[errorOptionIndex].classList.add("incorrect");

      const correctIconElement = createIconToQuestion(faCheckCircle);
      inputRefs.current[correctOptionIndex].appendChild(correctIconElement);
      setElementCorrect(correctIconElement);

      const errorIconElement = createIconToQuestion(faTimesCircle);
      inputRefs.current[errorOptionIndex].appendChild(errorIconElement);
      setElementWrong(errorIconElement);
    }
    setRadioDisabled(true);
    setShowNextButton(true);
  };

  const handleNextQuestion = () => {
    setShowNextButton(false);
    setSelectedOption(null);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setRadioDisabled(false);

    const correctOptionIndex = Number(errorAndCorrect.correct);
    const errorOptionIndex = Number(errorAndCorrect.error);

    errorAndCorrect.correct !== "" &&
      inputRefs.current[correctOptionIndex].classList.remove("correct");
    errorAndCorrect.error !== "" &&
      inputRefs.current[errorOptionIndex].classList.remove("incorrect");
    elementCorrect && elementCorrect.remove();
    elementWrong && elementWrong.remove();
    setErrorAndCorrect({ error: "", correct: "" });
  };

  return (
    <div className="mt-8">
      {currentQuiz && currentQuiz.questions.length > currentQuestionIndex ? (
        <div className="mt-4">
          <Header title={subject} icon={subject} />
          <div className="flex flex-col md:flex-row items-start md:items-center justify-center md:justify-between mt-8 sm:mx-12">
            <div className="w-100 mb-auto mt-4 sm:w-full div-title h-3/3">
              <p className="mt-6 text-xl md:text-base mb-6">
                Question {currentQuestionIndex + 1} of{" "}
                {currentQuiz.questions.length}
              </p>
              <div className="text-left md:text-start md:mr-8">
                <h2 className="text-3xl md:text-4xl font-medium">
                  {currentQuiz.questions[currentQuestionIndex].question}
                </h2>
              </div>
              <p className="mt-6 text-xl md:text-base w-2/3 h-3/3">
                <div className="h-4 bg-white mt-2 rounded-lg overflow-hidden">
                  <div
                    className="bg-purple-500 h-full"
                    style={{
                      width: `${
                        ((currentQuestionIndex + 1) /
                          currentQuiz.questions.length) *
                        100
                      }%`,
                    }}
                  ></div>
                </div>
              </p>
            </div>
            <div className="mt-4 md:mt-0 md:w-3/4 sm:w-4/4 sm:w-full div-btns">
              <div className="flex flex-col">
                <Question
                  options={currentQuiz.questions[currentQuestionIndex].options}
                  correctAnswer={
                    currentQuiz.questions[currentQuestionIndex].answer
                  }
                  selectedOption={selectedOption}
                  radioDisabled={radioDisabled}
                  inputRefs={inputRefs}
                  handleOptionSelect={handleOptionSelect}
                />
                {managerButtons()}
              </div>
            </div>
          </div>
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
