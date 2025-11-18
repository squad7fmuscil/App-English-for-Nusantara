import { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

export function TrueFalseActivity({ data, themeColor = "blue", onComplete }) {
  const [currentStatement, setCurrentStatement] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const statement = data.statements[currentStatement];

  const colorClasses = {
    blue: "bg-blue-600",
    orange: "bg-orange-600",
    green: "bg-green-600",
    purple: "bg-purple-600",
    pink: "bg-pink-600",
    gray: "bg-gray-600",
  };

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    setShowResult(true);
    if (answer === statement.answer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentStatement < data.statements.length - 1) {
      setCurrentStatement(currentStatement + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentStatement(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setCompleted(false);
  };

  if (completed) {
    const percentage = Math.round((score / data.statements.length) * 100);
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
            {score} / {data.statements.length}
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

      {data.text && currentStatement === 0 && (
        <Card className="mb-6 bg-gradient-to-br from-blue-50 to-purple-50">
          <p className="text-gray-800 leading-relaxed">{data.text}</p>
        </Card>
      )}

      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>
            Statement {currentStatement + 1} of {data.statements.length}
          </span>
          <span>Score: {score}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`${colorClasses[themeColor]} h-2 rounded-full transition-all`}
            style={{
              width: `${
                ((currentStatement + 1) / data.statements.length) * 100
              }%`,
            }}
          />
        </div>
      </div>

      <Card>
        <h3 className="text-2xl font-bold mb-6">{statement.statement}</h3>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "TRUE ✓", value: true, color: "green" },
            { label: "FALSE ✗", value: false, color: "red" },
          ].map((option) => {
            let bgColor = "bg-gray-50 hover:bg-gray-100";
            let borderColor = "border-gray-200";
            let icon = null;

            if (showResult) {
              if (option.value === statement.answer) {
                bgColor = "bg-green-100";
                borderColor = "border-green-500";
                icon = <CheckCircle className="text-green-600" />;
              } else if (option.value === selectedAnswer) {
                bgColor = "bg-red-100";
                borderColor = "border-red-500";
                icon = <XCircle className="text-red-600" />;
              }
            }

            return (
              <button
                key={option.label}
                onClick={() => !showResult && handleAnswer(option.value)}
                disabled={showResult}
                className={`p-6 rounded-lg border-2 ${borderColor} ${bgColor} font-bold text-xl transition-all flex flex-col items-center gap-2 ${
                  !showResult && "cursor-pointer"
                }`}>
                <span>{option.label}</span>
                {icon}
              </button>
            );
          })}
        </div>

        {showResult && (
          <div className="mt-6">
            <Button onClick={handleNext} className="w-full">
              {currentStatement < data.statements.length - 1
                ? "Next Statement →"
                : "See Results"}
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
}
