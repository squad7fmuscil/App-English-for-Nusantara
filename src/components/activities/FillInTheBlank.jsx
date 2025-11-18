import { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

export function FillInTheBlank({ data, themeColor = "blue", onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const question = data.questions[currentQuestion];

  const colorClasses = {
    blue: "bg-blue-600",
    orange: "bg-orange-600",
    green: "bg-green-600",
    purple: "bg-purple-600",
    pink: "bg-pink-600",
    gray: "bg-gray-600",
  };

  const handleAnswer = (option) => {
    setSelectedAnswer(option);
    setShowResult(true);
    if (option === question.answer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < data.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setCompleted(false);
  };

  if (completed) {
    const percentage = Math.round((score / data.questions.length) * 100);
    return (
      <div className="max-w-2xl mx-auto text-center">
        <Card className="bg-gradient-to-br from-green-50 to-blue-50">
          <div className="text-6xl mb-4">{percentage >= 70 ? "🎉" : "💪"}</div>
          <h2 className="text-3xl font-bold mb-4">Activity Completed!</h2>
          <div
            className={`text-5xl font-bold ${colorClasses[themeColor].replace(
              "bg-",
              "text-"
            )} mb-2`}>
            {score} / {data.questions.length}
          </div>
          <p className="text-xl text-gray-600 mb-6">
            You got {percentage}% correct!
          </p>
          <div className="flex gap-4 justify-center">
            <Button onClick={handleRestart}>Try Again</Button>
            {onComplete && <Button onClick={onComplete}>Continue</Button>}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">{data.title}</h2>
        <p className="text-gray-600">{data.instruction}</p>
      </div>

      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>
            Question {currentQuestion + 1} of {data.questions.length}
          </span>
          <span>Score: {score}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`${colorClasses[themeColor]} h-2 rounded-full transition-all`}
            style={{
              width: `${
                ((currentQuestion + 1) / data.questions.length) * 100
              }%`,
            }}
          />
        </div>
      </div>

      <Card>
        <h3 className="text-2xl font-bold mb-6">{question.sentence}</h3>
        <div className="space-y-3">
          {question.options.map((option, idx) => {
            let bgColor = "bg-gray-50 hover:bg-gray-100";
            let borderColor = "border-gray-200";
            let icon = null;

            if (showResult) {
              if (option === question.answer) {
                bgColor = "bg-green-100";
                borderColor = "border-green-500";
                icon = <CheckCircle className="text-green-600" />;
              } else if (option === selectedAnswer) {
                bgColor = "bg-red-100";
                borderColor = "border-red-500";
                icon = <XCircle className="text-red-600" />;
              }
            }

            return (
              <button
                key={idx}
                onClick={() => !showResult && handleAnswer(option)}
                disabled={showResult}
                className={`w-full p-4 rounded-lg border-2 ${borderColor} ${bgColor} text-left font-semibold transition-all flex items-center justify-between ${
                  !showResult && "cursor-pointer"
                }`}>
                <span>{option}</span>
                {icon}
              </button>
            );
          })}
        </div>

        {showResult && (
          <div className="mt-6">
            <Button onClick={handleNext} className="w-full">
              {currentQuestion < data.questions.length - 1
                ? "Next Question →"
                : "See Results"}
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
}
