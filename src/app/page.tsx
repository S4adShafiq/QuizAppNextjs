"use client"

import { useState } from "react";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ["Shakespeare", "Hemingway", "Tolkien", "Austen"],
    answer: "Shakespeare",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    answer: "Pacific",
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Ag", "Au", "Pb", "Fe"],
    answer: "Au",
  },
];

export default function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selectedOption : string) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="bg-black-100 px-110 py-40">
      <div className="p-6 w-full max-w-md text-center bg-white ">
        {showResult ? (
          <div>
            <h2 className="text-2xl font-bold  text-black">Quiz Completed!</h2>
            <p className="text-lg mt-2  text-black">Your Score: {score} / {questions.length}</p>
          </div>
        ) : (
          <div>
            <h2 className="text-xl mb-4 text-black">
              {questions[currentQuestion].question}
            </h2>
            <div className="flex flex-row gap-14">
              {questions[currentQuestion].options.map((option, index) => (
                <button 
                  className="p-2 bg-blue-400 text-white rounded-md" 
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
