import { useState } from "react";
import { Volume2, Palette, Check, X } from "lucide-react";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";

export function ColorsView({ section, themeColor = "blue" }) {
  const { content } = section;
  const [selectedColor, setSelectedColor] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const colorClasses = {
    blue: "text-blue-600",
    orange: "text-orange-600",
    green: "text-green-600",
    purple: "text-purple-600",
    pink: "text-pink-600",
    gray: "text-gray-600",
  };

  const colors = content.colors || [
    { english: "Red", hex: "#EF4444", indonesian: "Merah" },
    { english: "Blue", hex: "#3B82F6", indonesian: "Biru" },
    { english: "Yellow", hex: "#EAB308", indonesian: "Kuning" },
    { english: "Green", hex: "#22C55E", indonesian: "Hijau" },
    { english: "Orange", hex: "#F97316", indonesian: "Jingga" },
    { english: "Purple", hex: "#A855F7", indonesian: "Ungu" },
    { english: "Pink", hex: "#EC4899", indonesian: "Merah Muda" },
    { english: "Brown", hex: "#92400E", indonesian: "Coklat" },
    { english: "Black", hex: "#000000", indonesian: "Hitam" },
    { english: "White", hex: "#FFFFFF", indonesian: "Putih" },
    { english: "Gray", hex: "#6B7280", indonesian: "Abu-abu" },
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

  const quizQuestions = [
    { question: "What color is the sky?", answer: "Blue", hex: "#3B82F6" },
    { question: "What color is grass?", answer: "Green", hex: "#22C55E" },
    { question: "What color is the sun?", answer: "Yellow", hex: "#EAB308" },
    { question: "What color is an apple?", answer: "Red", hex: "#EF4444" },
  ];

  const handleQuizAnswer = (questionIndex, answer) => {
    setQuizAnswers({ ...quizAnswers, [questionIndex]: answer });
  };

  const colorExamples = {
    Red: ["🍎 Apple", "🌹 Rose", "❤️ Heart"],
    Blue: ["💙 Heart", "🌊 Ocean", "🦋 Butterfly"],
    Yellow: ["☀️ Sun", "🍋 Lemon", "⭐ Star"],
    Green: ["🌿 Leaf", "🐸 Frog", "🥒 Cucumber"],
    Orange: ["🍊 Orange", "🥕 Carrot", "🦊 Fox"],
    Purple: ["🍇 Grape", "🦄 Unicorn", "💜 Heart"],
    Pink: ["🌸 Flower", "🐷 Pig", "💗 Heart"],
    Brown: ["🐻 Bear", "🪵 Wood", "🍫 Chocolate"],
    Black: ["🐈‍⬛ Cat", "🦇 Bat", "🖤 Heart"],
    White: ["☁️ Cloud", "🐑 Sheep", "🤍 Heart"],
    Gray: ["🐘 Elephant", "🪨 Rock", "🩶 Heart"],
  };

  if (showQuiz) {
    const correctCount = Object.keys(quizAnswers).filter(
      (key) => quizAnswers[key] === quizQuestions[key]?.answer
    ).length;

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold text-gray-800">Colors Quiz 🎨</h3>
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
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {colors.map((color) => (
                    <button
                      key={color.english}
                      onClick={() => handleQuizAnswer(index, color.english)}
                      disabled={showResults}
                      className={`p-3 rounded-lg border-2 transition-all flex flex-col items-center gap-1 ${
                        userAnswer === color.english
                          ? showResults && isCorrect
                            ? "border-green-500 bg-green-100"
                            : showResults && !isCorrect
                            ? "border-red-500 bg-red-100"
                            : "border-blue-500 bg-blue-100"
                          : "border-gray-200 hover:border-gray-400"
                      } ${
                        showResults ? "cursor-not-allowed" : "cursor-pointer"
                      }`}>
                      <div
                        className="w-8 h-8 rounded-full border-2 border-gray-300"
                        style={{ backgroundColor: color.hex }}></div>
                      <span className="text-xs font-medium">
                        {color.english}
                      </span>
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
                        <div
                          className="w-6 h-6 rounded-full border-2 border-gray-300 ml-2"
                          style={{ backgroundColor: q.hex }}></div>
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
          <Card className="bg-purple-50 border-purple-300">
            <div className="text-center">
              <div className="text-4xl mb-2">
                {correctCount === quizQuestions.length ? "🎉" : "💪"}
              </div>
              <h3 className="text-2xl font-bold text-purple-900 mb-2">
                Score: {correctCount}/{quizQuestions.length}
              </h3>
              <p className="text-purple-700">
                {correctCount === quizQuestions.length
                  ? "Perfect! You're a color master! 🌈"
                  : "Keep practicing! You're doing great! 🎨"}
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
            🔊 Click any color to hear its pronunciation!
          </p>
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {colors.map((item, idx) => {
          const isSelected = selectedColor?.english === item.english;
          const textColor = item.hex === "#FFFFFF" ? "#000000" : "#FFFFFF";

          return (
            <div
              key={idx}
              onClick={() => {
                setSelectedColor(item);
                speak(item.english);
              }}
              className={`cursor-pointer transition-all duration-300 ${
                isSelected
                  ? "scale-105 ring-4 ring-blue-400"
                  : "hover:scale-105"
              }`}>
              <div
                className="rounded-xl shadow-lg p-6 text-center h-40 flex flex-col items-center justify-center relative overflow-hidden"
                style={{
                  backgroundColor: item.hex,
                  color: textColor,
                  border: item.hex === "#FFFFFF" ? "2px solid #E5E7EB" : "none",
                }}>
                <div className="text-2xl font-bold mb-2">{item.english}</div>
                <div className="text-sm opacity-90">{item.indonesian}</div>
                <div className="text-xs opacity-75 mt-1 font-mono">
                  {item.hex}
                </div>
                <div className="absolute top-2 right-2 opacity-75">
                  <Volume2 size={16} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {selectedColor && (
        <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-purple-900 mb-1">
                {selectedColor.english}
              </h3>
              <p className="text-purple-700 text-lg">
                {selectedColor.indonesian}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => speak(selectedColor.english)}
                className="bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-full transition-colors">
                <Volume2 size={20} />
              </button>
              <div
                className="w-12 h-12 rounded-full border-4 border-white shadow-lg"
                style={{ backgroundColor: selectedColor.hex }}></div>
            </div>
          </div>

          <div className="bg-white/50 rounded-lg p-4">
            <h4 className="font-semibold text-purple-900 mb-2">
              Examples of {selectedColor.english}:
            </h4>
            <div className="flex flex-wrap gap-2">
              {colorExamples[selectedColor.english]?.map((example, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 shadow-sm">
                  {example}
                </span>
              ))}
            </div>
          </div>
        </Card>
      )}

      <div className="flex gap-3 justify-center flex-wrap">
        <Button
          onClick={() => {
            colors.forEach((color, i) => {
              setTimeout(() => speak(color.english), i * 800);
            });
          }}
          variant="secondary">
          <Volume2 size={20} className="mr-2" />
          Play All Colors
        </Button>
        <Button onClick={() => setShowQuiz(true)}>
          <Palette size={20} className="mr-2" />
          Take Quiz 🎨
        </Button>
      </div>

      <Card className="bg-blue-50 border-blue-300">
        <h4 className="font-semibold text-blue-900 mb-2">🌈 Color Fun Facts</h4>
        <ul className="text-blue-800 text-sm space-y-1">
          <li>• Red is often associated with love and passion ❤️</li>
          <li>• Blue is the most popular favorite color worldwide 💙</li>
          <li>• Yellow is the most visible color to the human eye 👁️</li>
          <li>• Green represents nature and growth 🌿</li>
        </ul>
      </Card>
    </div>
  );
}
