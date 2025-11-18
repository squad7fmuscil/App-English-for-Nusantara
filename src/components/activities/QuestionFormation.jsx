import { useState } from "react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

export function QuestionFormation({ data, themeColor = "blue", onComplete }) {
  const [currentExercise, setCurrentExercise] = useState(0);
  const [userAnswer, setUserAnswer] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const exercise = data.exercises[currentExercise];

  const colorClasses = {
    blue: "bg-blue-600",
    orange: "bg-orange-600",
    green: "bg-green-600",
    purple: "bg-purple-600",
    pink: "bg-pink-600",
    gray: "bg-gray-600",
  };

  const handleWordClick = (word) => {
    if (!showResult) {
      setUserAnswer([...userAnswer, word]);
    }
  };

  const handleRemoveWord = (index) => {
    if (!showResult) {
      setUserAnswer(userAnswer.filter((_, i) => i !== index));
    }
  };

  const handleCheck = () => {
    const userSentence = userAnswer.join(" ");
    setShowResult(true);
    if (userSentence === exercise.answer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentExercise < data.exercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
      setUserAnswer([]);
      setShowResult(false);
    } else {
      setCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentExercise(0);
    setUserAnswer([]);
    setShowResult(false);
    setScore(0);
    setCompleted(false);
  };

  if (completed) {
    const percentage = Math.round((score / data.exercises.length) * 100);
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
            {score} / {data.exercises.length}
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

  const remainingWords = exercise.words.filter(
    (word) => !userAnswer.includes(word)
  );

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">{data.title}</h2>
        <p className="text-gray-600">{data.instruction}</p>
      </div>

      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>
            Question {currentExercise + 1} of {data.exercises.length}
          </span>
          <span>Score: {score}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`${colorClasses[themeColor]} h-2 rounded-full transition-all`}
            style={{
              width: `${
                ((currentExercise + 1) / data.exercises.length) * 100
              }%`,
            }}
          />
        </div>
      </div>

      <Card>
        <h3 className="text-xl font-bold mb-4">Form a question:</h3>

        <div className="min-h-20 p-4 bg-gray-50 rounded-lg border-2 border-gray-300 mb-4">
          {userAnswer.length === 0 ? (
            <p className="text-gray-400 text-center">
              Click words below to form a question
            </p>
          ) : (
            <div className="flex flex-wrap gap-2">
              {userAnswer.map((word, idx) => (
                <button
                  key={idx}
                  onClick={() => handleRemoveWord(idx)}
                  className="px-4 py-2 bg-blue-100 border-2 border-blue-500 rounded-lg font-semibold hover:bg-blue-200 transition-all">
                  {word}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {remainingWords.map((word, idx) => (
            <button
              key={idx}
              onClick={() => handleWordClick(word)}
              disabled={showResult}
              className={`px-4 py-2 bg-purple-50 border-2 border-purple-300 rounded-lg font-semibold hover:bg-purple-100 transition-all ${
                showResult ? "opacity-50" : "cursor-pointer"
              }`}>
              {word}
            </button>
          ))}
        </div>

        {!showResult ? (
          <Button
            onClick={handleCheck}
            disabled={userAnswer.length === 0}
            className="w-full">
            Check Answer
          </Button>
        ) : (
          <div>
            <div
              className={`p-4 rounded-lg mb-4 ${
                userAnswer.join(" ") === exercise.answer
                  ? "bg-green-100 border-2 border-green-500"
                  : "bg-red-100 border-2 border-red-500"
              }`}>
              <p className="font-bold mb-2">
                {userAnswer.join(" ") === exercise.answer
                  ? "✓ Correct!"
                  : "✗ Incorrect"}
              </p>
              <p className="text-gray-700">
                <strong>Correct answer:</strong> {exercise.answer}
              </p>
            </div>
            <Button onClick={handleNext} className="w-full">
              {currentExercise < data.exercises.length - 1
                ? "Next Question →"
                : "See Results"}
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
}
