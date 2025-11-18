import { useState } from "react";
import { Volume2, Check, X } from "lucide-react";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";

export function DaysView({ section, themeColor = "blue" }) {
  const { content } = section;
  const [flippedCards, setFlippedCards] = useState([]);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const colorClasses = {
    blue: "from-blue-400 to-blue-600",
    orange: "from-orange-400 to-orange-600",
    green: "from-green-400 to-green-600",
    purple: "from-purple-400 to-purple-600",
    pink: "from-pink-400 to-pink-600",
    gray: "from-gray-400 to-gray-600",
  };

  const days = content.days || [
    { english: "Monday", emoji: "🌙", indonesian: "Senin" },
    { english: "Tuesday", emoji: "🔥", indonesian: "Selasa" },
    { english: "Wednesday", emoji: "🌊", indonesian: "Rabu" },
    { english: "Thursday", emoji: "⚡", indonesian: "Kamis" },
    { english: "Friday", emoji: "🎉", indonesian: "Jumat" },
    { english: "Saturday", emoji: "🌟", indonesian: "Sabtu" },
    { english: "Sunday", emoji: "☀️", indonesian: "Minggu" },
  ];

  const speak = (text) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US";
      utterance.rate = 0.8;
      window.speechSynthesis.speak(utterance);
    }
  };

  const toggleFlip = (index) => {
    if (flippedCards.includes(index)) {
      setFlippedCards(flippedCards.filter((i) => i !== index));
    } else {
      setFlippedCards([...flippedCards, index]);
    }
  };

  const quizQuestions = [
    { question: "What day comes after Monday?", answer: "Tuesday" },
    { question: "What is the first day of the week?", answer: "Monday" },
    { question: "What day comes before Sunday?", answer: "Saturday" },
    { question: "What is the last day of the week?", answer: "Sunday" },
  ];

  const handleQuizAnswer = (questionIndex, answer) => {
    setQuizAnswers({ ...quizAnswers, [questionIndex]: answer });
  };

  if (showQuiz) {
    const correctCount = Object.keys(quizAnswers).filter(
      (key) => quizAnswers[key] === quizQuestions[key]?.answer
    ).length;

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold text-gray-800">Days Quiz 📝</h3>
          <Button onClick={() => setShowQuiz(false)} variant="secondary">
            Back to Learning
          </Button>
        </div>

        <div className="space-y-4">
          {quizQuestions.map((q, index) => {
            const userAnswer = quizAnswers[index];
            const isCorrect = userAnswer === q.answer;

            return (
              <div
                key={index}
                className={`p-4 rounded-lg border-2 ${
                  showResults
                    ? isCorrect
                      ? "border-green-300 bg-green-50"
                      : userAnswer
                      ? "border-red-300 bg-red-50"
                      : "border-gray-200"
                    : "border-gray-200 bg-white"
                }`}>
                <p className="font-semibold mb-3">{q.question}</p>
                <div className="grid grid-cols-2 gap-2">
                  {days.map((day) => (
                    <button
                      key={day.english}
                      onClick={() => handleQuizAnswer(index, day.english)}
                      disabled={showResults}
                      className={`p-3 rounded-lg border-2 transition-all ${
                        userAnswer === day.english
                          ? showResults && isCorrect
                            ? "border-green-500 bg-green-100"
                            : showResults && !isCorrect
                            ? "border-red-500 bg-red-100"
                            : "border-blue-500 bg-blue-100"
                          : "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                      } ${
                        showResults ? "cursor-not-allowed" : "cursor-pointer"
                      }`}>
                      {day.english}
                    </button>
                  ))}
                </div>
                {showResults && (
                  <div className="mt-3 flex items-center gap-2">
                    {isCorrect ? (
                      <>
                        <Check className="text-green-600" size={20} />
                        <span className="text-green-600 font-semibold">
                          Correct!
                        </span>
                      </>
                    ) : userAnswer ? (
                      <>
                        <X className="text-red-600" size={20} />
                        <span className="text-red-600">
                          Wrong! Correct answer: {q.answer}
                        </span>
                      </>
                    ) : (
                      <span className="text-gray-500">Not answered</span>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {showResults && (
          <Card className="bg-blue-50 border-blue-300">
            <div className="text-center">
              <div className="text-4xl mb-2">
                {correctCount === quizQuestions.length ? "🎉" : "💪"}
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">
                Score: {correctCount}/{quizQuestions.length}
              </h3>
              <p className="text-blue-700">
                {correctCount === quizQuestions.length
                  ? "Perfect! You're a days master! 🌟"
                  : "Keep practicing! You're doing great! 📚"}
              </p>
            </div>
          </Card>
        )}

        <div className="flex gap-3">
          {!showResults ? (
            <Button onClick={() => setShowResults(true)} className="w-full">
              Check Answers
            </Button>
          ) : (
            <Button
              onClick={() => {
                setQuizAnswers({});
                setShowResults(false);
              }}
              className="w-full">
              Try Again
            </Button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {content.text && (
        <div className="text-center mb-6">
          <p className="text-lg text-gray-700 mb-2">{content.text}</p>
          <p className="text-sm text-gray-500">
            🔊 Click cards to flip and hear pronunciation!
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {days.map((day, index) => (
          <div
            key={index}
            className="relative h-48 cursor-pointer"
            style={{ perspective: "1000px" }}
            onClick={() => toggleFlip(index)}>
            <div
              className={`relative w-full h-full transition-transform duration-500`}
              style={{
                transformStyle: "preserve-3d",
                transform: flippedCards.includes(index)
                  ? "rotateY(180deg)"
                  : "rotateY(0deg)",
              }}>
              {/* Front */}
              <div
                className="absolute w-full h-full"
                style={{ backfaceVisibility: "hidden" }}>
                <div
                  className={`h-full bg-gradient-to-br ${colorClasses[themeColor]} rounded-xl shadow-lg flex flex-col items-center justify-center p-6 text-white`}>
                  <div className="text-5xl mb-3">{day.emoji}</div>
                  <h3 className="text-2xl font-bold">{day.english}</h3>
                  <p className="text-sm opacity-75 mt-2">Click to flip</p>
                </div>
              </div>

              {/* Back */}
              <div
                className="absolute w-full h-full"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}>
                <div className="h-full bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl shadow-lg flex flex-col items-center justify-center p-6 text-white">
                  <div className="text-5xl mb-3">{day.emoji}</div>
                  <h3 className="text-2xl font-bold mb-2">{day.indonesian}</h3>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      speak(day.english);
                    }}
                    className="mt-3 flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors">
                    <Volume2 size={20} />
                    <span>Listen</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-3 justify-center flex-wrap">
        <Button
          onClick={() => {
            days.forEach((day, i) => {
              setTimeout(() => speak(day.english), i * 800);
            });
          }}
          variant="secondary">
          <Volume2 size={20} className="mr-2" />
          Play All
        </Button>
        <Button onClick={() => setShowQuiz(true)}>Take Quiz 📝</Button>
      </div>

      {content.tips && (
        <Card className="bg-green-50 border-green-300">
          <h3 className="text-xl font-bold text-green-900 mb-3">💡 Tips</h3>
          <div className="space-y-2">
            {content.tips.map((tip, idx) => (
              <p key={idx} className="text-gray-700">
                • {tip}
              </p>
            ))}
          </div>
        </Card>
      )}

      <Card className="bg-blue-50 border-blue-300">
        <h4 className="font-semibold text-blue-900 mb-2">💡 Did you know?</h4>
        <ul className="text-blue-800 text-sm space-y-1">
          <li>• Monday comes from "Moon's day" 🌙</li>
          <li>• Friday comes from "Freya's day", Norse goddess of love 💕</li>
          <li>
            • Sunday and Saturday are named after the Sun ☀️ and Saturn 🪐
          </li>
        </ul>
      </Card>
    </div>
  );
}
