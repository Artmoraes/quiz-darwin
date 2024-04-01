import React, { useState, useEffect, useRef } from "react";
import data from "./data.json";
import Question from "../question/question";
import Result from "../result/result";
import Header from "../header/header";
import "./quizz.css";

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
  error: string | number,
  correct: string | number,
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
  const [answeredCorrectly, setAnsweredCorrectly] = useState<boolean>(false);
  const [radioDisabled, setRadioDisabled] = useState<boolean>(false);
  const [errorAndCorrect, setErrorAndCorrect] = useState<ErrorAndCorrect>({
    error: "",
    correct: "",
  });
  const inputRefs = useRef<HTMLInputElement[]>([]);


  const loadQuiz = () => {
    const selectedQuiz = data.quizzes.find((quiz) => quiz.title === subject);
    if (selectedQuiz) {
      setCurrentQuiz(selectedQuiz);
    }
  };

  useEffect(() => {
    loadQuiz();
  }, []);

  const handleToggleColor = (index: number) => {
    console.log("index handleToggleColor", index);
    
  };

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
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none mt-4"
          onClick={handleCheckQuestion}
        >
          Enviar Resposta
        </button>
      );
    }
  };

  const handleCheckQuestion = () => {
    console.log("errorAndCorrect.correct ", errorAndCorrect);
    if (
      selectedOption === currentQuiz?.questions[currentQuestionIndex].answer
    ) {
      setScore(score + 1);
      setAnsweredCorrectly(true);
      inputRefs.current[String(errorAndCorrect.correct)].classList.add("correct");
    } else {
      setAnsweredCorrectly(false);
      inputRefs.current[String(errorAndCorrect.correct)].classList.add("correct");

      inputRefs.current[String(errorAndCorrect.error)].classList.add("incorrect");
    }
    if (errorAndCorrect.error) {
    } else if (errorAndCorrect.correct) {
    }
    setRadioDisabled(true);
    setShowNextButton(true);
  };

  const handleNextQuestion = () => {
    setShowNextButton(false);
    setSelectedOption(null);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setRadioDisabled(false);
    if (errorAndCorrect.correct !== "") {
      inputRefs.current[String(errorAndCorrect.correct)].classList.remove("correct");
    }
    if (errorAndCorrect.error !== "") {
      inputRefs.current[String(errorAndCorrect.error)].classList.remove("incorrect");
    }
    setErrorAndCorrect({ error: "", correct: "" });
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
            correctAnswer={currentQuiz.questions[currentQuestionIndex].answer}
            selectedOption={selectedOption}
            radioDisabled={radioDisabled}
            inputRefs={inputRefs}
            handleOptionSelect={handleOptionSelect}
            handleToggleColor={handleToggleColor}
          />
          {managerButtons()}
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
