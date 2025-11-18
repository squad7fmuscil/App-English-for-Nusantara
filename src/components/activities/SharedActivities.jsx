import { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

// ============================================
// VOCABULARY MATCHING COMPONENT (NEW & IMPROVED)
// ============================================
export function VocabularyMatching({ data, themeColor = "blue", onComplete }) {
  const [selected, setSelected] = useState({ left: null, right: null });
  const [matched, setMatched] = useState([]);
  const [completed, setCompleted] = useState(false);

  const colorClasses = {
    blue: "bg-blue-50 border-blue-300 hover:border-blue-500",
    orange: "bg-orange-50 border-orange-300 hover:border-orange-500",
    green: "bg-green-50 border-green-300 hover:border-green-500",
    purple: "bg-purple-50 border-purple-300 hover:border-purple-500",
    pink: "bg-pink-50 border-pink-300 hover:border-pink-500",
    gray: "bg-gray-50 border-gray-300 hover:border-gray-500",
  };

  const handleSelect = (side, id) => {
    // Prevent selection if already matched
    if (matched.includes(id) && side === "left") return;
    if (matched.some((mId) => mId === id) && side === "right") return;

    const newSelected = { ...selected, [side]: id };
    setSelected(newSelected);

    if (newSelected.left && newSelected.right) {
      if (newSelected.left === newSelected.right) {
        // Correct match
        const newMatched = [...matched, newSelected.left];
        setMatched(newMatched);
        if (newMatched.length === data.pairs.length) {
          setCompleted(true);
          // onComplete is called on the completion screen for better UX flow
        }
      }
      // Clear selection after a check (correct or incorrect)
      setSelected({ left: null, right: null });
    }
  };

  const handleRestart = () => {
    setMatched([]);
    setSelected({ left: null, right: null });
    setCompleted(false);
  };

  if (completed) {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <Card className="bg-gradient-to-br from-green-50 to-blue-50">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold mb-4">Perfect Match!</h2>
          <p className="text-xl text-gray-600 mb-6">
            You matched all pairs correctly!
          </p>
          <div className="flex gap-4 justify-center">
            <Button onClick={handleRestart}>Try Again</Button>
            {onComplete && <Button onClick={onComplete}>Continue</Button>}
          </div>
        </Card>
      </div>
    );
  }

  // Shuffle the right side for a real matching challenge
  const rightPairs = [...data.pairs].sort(() => Math.random() - 0.5);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">{data.title}</h2>
        <p className="text-gray-600">{data.instruction}</p>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {/* Left Side (e.g., Indonesian) - Original Order */}
        <div className="space-y-3">
          {data.pairs.map((pair) => (
            <button
              key={pair.id}
              onClick={() => handleSelect("left", pair.id)}
              disabled={matched.includes(pair.id)}
              className={`w-full p-4 rounded-lg border-2 transition-all ${
                matched.includes(pair.id)
                  ? "bg-green-100 border-green-500 opacity-50"
                  : selected.left === pair.id
                  ? `${colorClasses[themeColor].replace("hover:", "")} border-4`
                  : `${colorClasses[themeColor]} cursor-pointer`
              }`}>
              <div className="flex items-center gap-3">
                <span className="text-2xl">{pair.image}</span>
                <span className="font-bold text-lg">{pair.indonesian}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Right Side (e.g., English) - Shuffled Order */}
        <div className="space-y-3">
          {rightPairs.map((pair) => (
            <button
              key={pair.id}
              onClick={() => handleSelect("right", pair.id)}
              disabled={matched.includes(pair.id)}
              className={`w-full p-4 rounded-lg border-2 transition-all ${
                matched.includes(pair.id)
                  ? "bg-green-100 border-green-500 opacity-50"
                  : selected.right === pair.id
                  ? "bg-purple-200 border-purple-500 border-4"
                  : "bg-purple-50 border-purple-300 hover:border-purple-500 cursor-pointer"
              }`}>
              <span className="font-bold text-lg">{pair.english}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-gray-600">
          Matched: {matched.length} / {data.pairs.length}
        </p>
      </div>
    </div>
  );
}

// ============================================
// FILL IN THE BLANK COMPONENT (NEW)
// ============================================
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

// ============================================
// DIALOGUE PRACTICE COMPONENT (NEW)
// ============================================
export function DialoguePractice({ data, themeColor = "blue", onComplete }) {
  const [currentDialogue, setCurrentDialogue] = useState(0);

  const dialogue = data.dialogues[currentDialogue];

  const handleNext = () => {
    if (currentDialogue < data.dialogues.length - 1) {
      setCurrentDialogue(currentDialogue + 1);
    } else if (onComplete) {
      onComplete();
    }
  };

  const handlePrev = () => {
    if (currentDialogue > 0) {
      setCurrentDialogue(currentDialogue - 1);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">{data.title}</h2>
        <p className="text-gray-600">{data.instruction}</p>
      </div>

      <Card className="mb-6">
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-2">{dialogue.title}</h3>
          <p className="text-gray-600 italic">{dialogue.situation}</p>
        </div>

        <div className="space-y-4">
          {dialogue.conversation.map((line, idx) => (
            <div
              key={idx}
              className={`flex ${
                line.speaker === dialogue.conversation[0].speaker
                  ? "justify-start"
                  : "justify-end"
              }`}>
              <div
                className={`max-w-md p-4 rounded-lg ${
                  line.speaker === dialogue.conversation[0].speaker
                    ? "bg-gray-100"
                    : "bg-blue-100"
                }`}>
                <p className="font-bold text-sm mb-1">{line.speaker}</p>
                <p className="text-gray-800">{line.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="flex justify-between items-center">
        <Button
          variant="secondary"
          onClick={handlePrev}
          disabled={currentDialogue === 0}>
          ← Previous
        </Button>
        <span className="text-gray-600">
          {currentDialogue + 1} of {data.dialogues.length}
        </span>
        <Button onClick={handleNext}>
          {currentDialogue < data.dialogues.length - 1 ? "Next →" : "Complete"}
        </Button>
      </div>
    </div>
  );
}

// ============================================
// TRUE OR FALSE ACTIVITY COMPONENT (NEW)
// ============================================
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

      {/* Reading Text - Only show on first statement or if specifically designed to be always visible */}
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

// ============================================
// QUESTION FORMATION COMPONENT (NEW)
// ============================================
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

  // Filter words that are not in the current answer array
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

        {/* User's Answer Area */}
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

        {/* Available Words */}
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

        {/* Check/Result */}
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

// ============================================
// LESSON VIEW COMPONENT (ORIGINAL)
// ============================================
export function LessonView({ section, themeColor = "blue" }) {
  const { content } = section;

  const colorClasses = {
    blue: "text-blue-600",
    orange: "text-orange-600",
    green: "text-green-600",
    purple: "text-purple-600",
    pink: "text-pink-600",
    gray: "text-gray-600",
  };

  return (
    <div className="space-y-6">
      <p className="text-lg text-gray-700 mb-6">{content.text}</p>

      {content.vocabulary && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {content.vocabulary.map((item, idx) => (
            <Card
              key={idx}
              className="text-center hover:shadow-xl transition-all">
              <div className="text-5xl mb-3">{item.image}</div>
              <div
                className={`text-xl font-bold ${colorClasses[themeColor]} mb-1`}>
                {item.letter || item.word}
              </div>
              <div className="text-gray-600">
                {item.translation || item.example || item.sound}
              </div>
              {item.room && (
                <div className="text-xs text-gray-500 mt-2">{item.room}</div>
              )}
            </Card>
          ))}
        </div>
      )}

      {content.numbers && (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {content.numbers.map((item, idx) => (
            <Card key={idx} className="text-center">
              <div
                className={`text-3xl font-bold ${colorClasses[themeColor]} mb-2`}>
                {item.num}
              </div>
              <div className="text-gray-700 font-semibold">{item.word}</div>
            </Card>
          ))}
        </div>
      )}

      {content.tips && (
        <div className="mt-8">
          <h3 className={`text-2xl font-bold mb-4 ${colorClasses[themeColor]}`}>
            💡 Tips
          </h3>
          <div className="grid gap-3">
            {content.tips.map((item, idx) => (
              <Card key={idx} className="bg-green-50">
                <div className="flex justify-between items-center">
                  <div className="text-gray-700 font-semibold">{item.tip}</div>
                  <div className="text-gray-500 text-sm">{item.indonesian}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {content.phrases && (
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Useful Phrases:</h3>
          <div className="grid gap-3">
            {content.phrases.map((item, idx) => (
              <Card key={idx} className="bg-green-50">
                <div className="flex justify-between items-center">
                  <div className="text-gray-700 font-semibold">
                    {item.english}
                  </div>
                  <div className="text-gray-500 text-sm">{item.indonesian}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================
// FLASHCARD VIEW COMPONENT (ORIGINAL - FIX on next button disabled)
// ============================================
export function FlashcardView({ section, themeColor = "blue" }) {
  const [currentCard, setCurrentCard] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const { cards } = section.content;

  const nextCard = () => {
    setFlipped(false);
    setCurrentCard((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setFlipped(false);
    setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const card = cards[currentCard];

  const gradients = {
    blue: {
      front: "from-blue-100 to-purple-100",
      back: "from-green-100 to-blue-100",
    },
    orange: {
      front: "from-orange-100 to-yellow-100",
      back: "from-green-100 to-blue-100",
    },
    green: {
      front: "from-green-100 to-emerald-100",
      back: "from-blue-100 to-purple-100",
    },
    purple: {
      front: "from-purple-100 to-pink-100",
      back: "from-blue-100 to-green-100",
    },
    pink: {
      front: "from-pink-100 to-rose-100",
      back: "from-purple-100 to-blue-100",
    },
    gray: {
      front: "from-gray-100 to-blue-100",
      back: "from-green-100 to-blue-100",
    },
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <p className="text-gray-600">
          Card {currentCard + 1} of {cards.length}
        </p>
      </div>

      <div
        onClick={() => setFlipped(!flipped)}
        className="relative h-80 cursor-pointer mb-6"
        style={{ perspective: "1000px" }}>
        <div
          className={`absolute w-full h-full transition-transform duration-500 ${
            flipped ? "rotate-y-180" : ""
          }`}
          style={{ transformStyle: "preserve-3d" }}>
          <Card
            className={`absolute w-full h-full flex flex-col items-center justify-center bg-gradient-to-br ${gradients[themeColor].front}`}
            style={{ backfaceVisibility: "hidden" }}>
            <div className="text-9xl mb-4">{card.front || card.image}</div>
            <p className="text-gray-500 mt-4">Click to flip</p>
          </Card>

          <Card
            className={`absolute w-full h-full flex flex-col items-center justify-center bg-gradient-to-br ${gradients[themeColor].back}`}
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}>
            <div className="text-4xl font-bold text-green-600 mb-2">
              {card.back}
            </div>
            {card.detail && (
              <div className="text-xl text-gray-600">{card.detail}</div>
            )}
            <p className="text-gray-500 mt-4">Click to flip back</p>
          </Card>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Button
          variant="secondary"
          onClick={prevCard}
          disabled={currentCard === 0}>
          ← Previous
        </Button>
        <Button variant="outline" onClick={() => setFlipped(!flipped)}>
          Flip Card
        </Button>
        {/* FIX: Use cards.length in disabled check */}
        <Button
          variant="secondary"
          onClick={nextCard}
          disabled={currentCard === cards.length - 1}>
          Next →
        </Button>
      </div>

      <style>{`.rotate-y-180 { transform: rotateY(180deg); }`}</style>
    </div>
  );
}

// ============================================
// QUIZ VIEW COMPONENT (ORIGINAL)
// ============================================
export function QuizView({ section, themeColor = "blue" }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const { questions } = section.content;
  const question = questions[currentQuestion];

  const colorClasses = {
    blue: "bg-blue-600",
    orange: "bg-orange-600",
    green: "bg-green-600",
    purple: "bg-purple-600",
    pink: "bg-pink-600",
    gray: "bg-gray-600",
  };

  const handleAnswer = (optionIndex) => {
    setSelectedAnswer(optionIndex);
    setShowResult(true);
    if (optionIndex === question.correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
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
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="max-w-2xl mx-auto text-center">
        <Card className="bg-gradient-to-br from-green-50 to-blue-50">
          <div className="text-6xl mb-4">{percentage >= 70 ? "🎉" : "💪"}</div>
          <h2 className="text-3xl font-bold mb-4">Quiz Completed!</h2>
          <div
            className={`text-5xl font-bold ${colorClasses[themeColor].replace(
              "bg-",
              "text-"
            )} mb-2`}>
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
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <span>Score: {score}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`${colorClasses[themeColor]} h-2 rounded-full transition-all`}
            style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`,
            }}
          />
        </div>
      </div>

      <Card>
        <h3 className="text-2xl font-bold mb-6">{question.question}</h3>
        <div className="space-y-3">
          {question.options.map((option, idx) => {
            let bgColor = "bg-gray-50 hover:bg-gray-100";
            let borderColor = "border-gray-200";
            let icon = null;

            if (showResult) {
              if (idx === question.correct) {
                bgColor = "bg-green-100";
                borderColor = "border-green-500";
                icon = <CheckCircle className="text-green-600" />;
              } else if (idx === selectedAnswer) {
                bgColor = "bg-red-100";
                borderColor = "border-red-500";
                icon = <XCircle className="text-red-600" />;
              }
            }

            return (
              <button
                key={idx}
                onClick={() => !showResult && handleAnswer(idx)}
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
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-gray-700">
              <strong>Explanation:</strong> {question.explanation}
            </p>
            <Button onClick={handleNext} className="mt-4">
              {currentQuestion < questions.length - 1
                ? "Next Question →"
                : "See Results"}
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
}

// ============================================
// MATCHING VIEW COMPONENT (ORIGINAL)
// ============================================
export function MatchingView({ section, themeColor = "blue" }) {
  const [pairs] = useState(section.content.pairs);
  const [selected, setSelected] = useState({ left: null, right: null });
  const [matched, setMatched] = useState([]);
  const [completed, setCompleted] = useState(false);

  const colorClasses = {
    blue: {
      left: "bg-blue-50 border-blue-300 hover:border-blue-500",
      selected: "bg-blue-200 border-blue-500",
    },
    orange: {
      left: "bg-orange-50 border-orange-300 hover:border-orange-500",
      selected: "bg-orange-200 border-orange-500",
    },
    green: {
      left: "bg-green-50 border-green-300 hover:border-green-500",
      selected: "bg-green-200 border-green-500",
    },
    purple: {
      left: "bg-purple-50 border-purple-300 hover:border-purple-500",
      selected: "bg-purple-200 border-purple-500",
    },
    pink: {
      left: "bg-pink-50 border-pink-300 hover:border-pink-500",
      selected: "bg-pink-200 border-pink-500",
    },
    gray: {
      left: "bg-gray-50 border-gray-300 hover:border-gray-500",
      selected: "bg-gray-200 border-gray-500",
    },
  };

  const handleSelect = (side, value) => {
    const newSelected = { ...selected, [side]: value };
    setSelected(newSelected);

    if (newSelected.left && newSelected.right) {
      // Find the pair that matches the selected values on both sides
      const pair = pairs.find(
        (p) =>
          (p.left === newSelected.left && p.right === newSelected.right) ||
          (p.left === newSelected.right && p.right === newSelected.left) // Check both directions just in case
      );

      if (pair) {
        setMatched([...matched, pair.left]); // Add the 'left' value as the identifier for the matched pair
        if (matched.length + 1 === pairs.length) {
          setCompleted(true);
        }
      }
      setSelected({ left: null, right: null });
    }
  };

  const handleRestart = () => {
    setMatched([]);
    setSelected({ left: null, right: null });
    setCompleted(false);
  };

  if (completed) {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <Card className="bg-gradient-to-br from-green-50 to-blue-50">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold mb-4">Perfect Match!</h2>
          <p className="text-xl text-gray-600 mb-6">
            You matched all pairs correctly!
          </p>
          <Button onClick={handleRestart}>Try Again</Button>
        </Card>
      </div>
    );
  }

  // Shuffle the right side for a real matching challenge
  const rightPairs = [...pairs].sort(() => Math.random() - 0.5);

  return (
    <div className="max-w-4xl mx-auto">
      <p className="text-center text-gray-600 mb-6">
        {section.content.instruction}
      </p>
      <div className="grid grid-cols-2 gap-8">
        {/* Left Side (Original Order) */}
        <div className="space-y-3">
          {pairs.map((pair) => (
            <button
              key={pair.left}
              onClick={() => handleSelect("left", pair.left)}
              disabled={matched.includes(pair.left)}
              className={`w-full p-4 rounded-lg border-2 font-bold text-xl transition-all ${
                matched.includes(pair.left)
                  ? "bg-green-100 border-green-500 opacity-50"
                  : selected.left === pair.left
                  ? colorClasses[themeColor].selected
                  : `${colorClasses[themeColor].left} cursor-pointer`
              }`}>
              {pair.left}
            </button>
          ))}
        </div>
        {/* Right Side (Shuffled Order) */}
        <div className="space-y-3">
          {rightPairs.map((pair) => (
            <button
              key={pair.right}
              onClick={() => handleSelect("right", pair.right)}
              // The disabled check needs to check if the 'left' key of the pair is matched
              disabled={matched.includes(pair.left)}
              className={`w-full p-4 rounded-lg border-2 font-bold text-xl transition-all ${
                matched.includes(pair.left)
                  ? "bg-green-100 border-green-500 opacity-50"
                  : selected.right === pair.right
                  ? "bg-purple-200 border-purple-500"
                  : "bg-purple-50 border-purple-300 hover:border-purple-500 cursor-pointer"
              }`}>
              {pair.right}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-6 text-center">
        <p className="text-gray-600">
          Matched: {matched.length} / {pairs.length}
        </p>
      </div>
    </div>
  );
}

// ============================================
// DRAG DROP VIEW COMPONENT (ORIGINAL - ADD onComplete)
// ============================================
export function DragDropView({ section, themeColor = "blue", onComplete }) {
  const [pairs] = useState(section.content.pairs);
  const [matched, setMatched] = useState([]);
  const [draggedItem, setDraggedItem] = useState(null);
  const [completed, setCompleted] = useState(false);

  const colorClasses = {
    blue: "bg-blue-50 border-blue-300 hover:border-blue-500",
    orange: "bg-orange-50 border-orange-300 hover:border-orange-500",
    green: "bg-green-50 border-green-300 hover:border-green-500",
    purple: "bg-purple-50 border-purple-300 hover:border-purple-500",
    pink: "bg-pink-50 border-pink-300 hover:border-pink-500",
    gray: "bg-gray-50 border-gray-300 hover:border-gray-500",
  };

  const handleDragStart = (item) => {
    setDraggedItem(item);
  };

  const handleDrop = (targetItem) => {
    if (draggedItem && draggedItem.right === targetItem.right) {
      // Check match based on the 'right' value of both
      const newMatched = [...matched, draggedItem.id];
      setMatched(newMatched);
      if (newMatched.length === pairs.length) {
        setCompleted(true);
      }
    }
    setDraggedItem(null);
  };

  const handleRestart = () => {
    setMatched([]);
    setCompleted(false);
  };

  if (completed) {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <Card className="bg-gradient-to-br from-green-50 to-blue-50">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold mb-4">Perfect Match!</h2>
          <p className="text-xl text-gray-600 mb-6">
            You matched all pairs correctly!
          </p>
          <div className="flex gap-4 justify-center">
            <Button onClick={handleRestart}>Try Again</Button>
            {onComplete && <Button onClick={onComplete}>Continue</Button>}
          </div>
        </Card>
      </div>
    );
  }

  // Shuffle the right side targets
  const rightTargets = [...pairs].sort(() => Math.random() - 0.5);

  return (
    <div className="max-w-4xl mx-auto">
      <p className="text-center text-gray-600 mb-6">
        {section.content.instruction}
      </p>
      <div className="grid grid-cols-2 gap-8">
        {/* Draggable Items (Left Side) */}
        <div className="space-y-3">
          {pairs.map(
            (pair) =>
              !matched.includes(pair.id) && ( // Only show items not yet matched
                <div
                  key={pair.id}
                  draggable
                  onDragStart={() => handleDragStart(pair)}
                  className={`p-4 rounded-lg border-2 cursor-move transition-all ${colorClasses[themeColor]}`}>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{pair.leftEmoji}</span>
                    <span className="font-bold text-xl">{pair.left}</span>
                  </div>
                </div>
              )
          )}
          {/* Placeholder for matched items on the left side */}
          {matched.map((id) => {
            const pair = pairs.find((p) => p.id === id);
            return (
              <div
                key={id}
                className={`p-4 rounded-lg border-2 bg-green-100 border-green-500 opacity-50`}>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{pair.leftEmoji}</span>
                  <span className="font-bold text-xl">{pair.left}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Drop Targets (Right Side - Shuffled) */}
        <div className="space-y-3">
          {rightTargets.map((pair) => (
            <div
              key={pair.id}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop(pair)}
              className={`p-4 rounded-lg border-2 border-dashed transition-all ${
                matched.includes(pair.id)
                  ? "bg-green-100 border-green-500"
                  : "bg-gray-50 border-gray-300 hover:border-purple-500 hover:bg-purple-50"
              }`}>
              <div className="flex items-center gap-3">
                <span className="text-2xl">{pair.rightEmoji}</span>
                <span
                  className={`font-bold text-xl ${
                    matched.includes(pair.id)
                      ? "text-green-600"
                      : "text-gray-400"
                  }`}>
                  {matched.includes(pair.id) ? pair.right : "Drop here"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 text-center">
        <p className="text-gray-600">
          Matched: {matched.length} / {pairs.length}
        </p>
      </div>
    </div>
  );
}
