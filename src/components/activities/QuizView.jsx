import { useState } from "react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

export function QuizView({ section, themeColor = "blue" }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const { questions } = section.content;
  const question = questions[currentQuestion];

  const colorClasses = {
    blue: "bg-blue-500 hover:bg-blue-600",
    orange: "bg-orange-500 hover:bg-orange-600",
    green: "bg-green-500 hover:bg-green-600",
    purple: "bg-purple-500 hover:bg-purple-600",
    pink: "bg-pink-500 hover:bg-pink-600",
    gray: "bg-gray-500 hover:bg-gray-600",
  };

  const handleAnswer = (index) => {
    setSelectedAnswer(index);
    setShowExplanation(true);
    if (index === question.correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setCompleted(false);
  };

  if (completed) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="max-w-2xl mx-auto text-center">
        <Card className="bg-gradient-to-br from-green-50 to-blue-50">
          <div className="text-6xl mb-4">{percentage >= 70 ? "🎉" : "💪"}</div>
          <h2 className="text-3xl font-bold mb-4">
            {percentage >= 70 ? "Great Job!" : "Keep Practicing!"}
          </h2>
          <div className="text-5xl font-bold text-blue-600 mb-2">
            {score} / {questions.length}
          </div>
          <p className="text-xl text-gray-600 mb-6">
            You got {percentage}% correct!
          </p>
          <Button onClick={handleRestart}>Try Again</Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <p className="text-gray-600">
          Question {currentQuestion + 1} of {questions.length}
        </p>
      </div>

      <Card className="mb-6">
        <h3 className="text-xl font-bold mb-6">{question.question}</h3>

        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={showExplanation}
              className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                showExplanation
                  ? index === question.correct
                    ? "bg-green-100 border-green-500 font-bold"
                    : index === selectedAnswer
                    ? "bg-red-100 border-red-500"
                    : "bg-gray-100 border-gray-300 opacity-50"
                  : "bg-white border-gray-300 hover:border-blue-500 hover:bg-blue-50 cursor-pointer"
              }`}>
              <span className="font-semibold mr-2">
                {String.fromCharCode(65 + index)}.
              </span>
              {option}
            </button>
          ))}
        </div>

        {showExplanation && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm font-semibold text-blue-800 mb-2">
              Explanation:
            </p>
            <p className="text-gray-700">{question.explanation}</p>
          </div>
        )}
      </Card>

      {showExplanation && (
        <div className="text-center">
          <Button onClick={handleNext} className={colorClasses[themeColor]}>
            {currentQuestion < questions.length - 1
              ? "Next Question →"
              : "See Results"}
          </Button>
        </div>
      )}
    </div>
  );
}
