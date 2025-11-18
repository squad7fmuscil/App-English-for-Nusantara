import { useState } from "react";
import { ArrowLeft, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import chapter1Data from "@/data/chapters/grade7/ch1";

// ============================================
// UNIT CARD COMPONENT (Style kayak Chapter 3)
// ============================================
function UnitCard({ unit, onSelect }) {
  return (
    <div
      onClick={() => onSelect(unit)}
      className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-2">
      <div className="text-7xl mb-4 text-center">{unit.emoji}</div>
      <h3 className="text-2xl font-bold text-blue-600 mb-3 text-center">
        Unit {unit.id}
      </h3>
      <h4 className="text-xl font-semibold text-gray-800 mb-2 text-center">
        {unit.title}
      </h4>
      <p className="text-gray-600 text-center text-sm">
        {unit.description || `Learn about ${unit.title.toLowerCase()}`}
      </p>
    </div>
  );
}

// ============================================
// CHAPTER 1 SPECIFIC ACTIVITIES
// ============================================

// VOCAB MATCH - Similar to Matching but with images
function VocabMatchActivity({ activity }) {
  const [selected, setSelected] = useState({ left: null, right: null });
  const [matched, setMatched] = useState([]);
  const [completed, setCompleted] = useState(false);

  const handleSelect = (side, id) => {
    const newSelected = { ...selected, [side]: id };
    setSelected(newSelected);

    if (newSelected.left && newSelected.right) {
      const pair = activity.pairs.find((p) => p.id === newSelected.left);
      if (pair && pair.id === newSelected.right) {
        setMatched([...matched, pair.id]);
        if (matched.length + 1 === activity.pairs.length) {
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
            You matched all vocabulary correctly!
          </p>
          <Button onClick={handleRestart}>Try Again</Button>
        </Card>
      </div>
    );
  }

  const rightSide = [...activity.pairs].sort(() => Math.random() - 0.5);

  return (
    <div className="max-w-4xl mx-auto">
      <p className="text-center text-gray-600 mb-6">{activity.instruction}</p>

      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-3">
          {activity.pairs.map((pair) => (
            <button
              key={pair.id}
              onClick={() => handleSelect("left", pair.id)}
              disabled={matched.includes(pair.id)}
              className={`w-full p-4 rounded-lg border-2 font-bold text-lg transition-all ${
                matched.includes(pair.id)
                  ? "bg-green-100 border-green-500 opacity-50"
                  : selected.left === pair.id
                  ? "bg-blue-200 border-blue-500"
                  : "bg-blue-50 border-blue-300 hover:border-blue-500 cursor-pointer"
              }`}>
              <div className="flex items-center gap-3">
                <span className="text-3xl">{pair.image}</span>
                <span>{pair.word}</span>
              </div>
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {rightSide.map((pair) => (
            <button
              key={pair.id}
              onClick={() => handleSelect("right", pair.id)}
              disabled={matched.includes(pair.id)}
              className={`w-full p-4 rounded-lg border-2 font-bold text-lg transition-all ${
                matched.includes(pair.id)
                  ? "bg-green-100 border-green-500 opacity-50"
                  : selected.right === pair.id
                  ? "bg-purple-200 border-purple-500"
                  : "bg-purple-50 border-purple-300 hover:border-purple-500 cursor-pointer"
              }`}>
              {pair.meaning}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-gray-600">
          Matched: {matched.length} / {activity.pairs.length}
        </p>
      </div>
    </div>
  );
}

// FILL IN THE BLANK
function FillBlankActivity({ activity }) {
  const [userAnswers, setUserAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const blanks = activity.text.split("____").length - 1;

  const handleAnswer = (index, value) => {
    setUserAnswers({ ...userAnswers, [index]: value });
  };

  const handleSubmit = () => {
    let correct = 0;
    activity.answers.forEach((answer, idx) => {
      if (userAnswers[idx]?.toLowerCase() === answer.toLowerCase()) {
        correct++;
      }
    });
    setScore(correct);
    setShowResult(true);
  };

  const handleRestart = () => {
    setUserAnswers({});
    setShowResult(false);
    setScore(0);
  };

  if (showResult) {
    const percentage = Math.round((score / activity.answers.length) * 100);
    return (
      <div className="max-w-2xl mx-auto text-center">
        <Card className="bg-gradient-to-br from-green-50 to-blue-50">
          <div className="text-6xl mb-4">{percentage >= 70 ? "🎉" : "💪"}</div>
          <h2 className="text-3xl font-bold mb-4">
            {percentage >= 70 ? "Great Job!" : "Keep Practicing!"}
          </h2>
          <div className="text-5xl font-bold text-blue-600 mb-2">
            {score} / {activity.answers.length}
          </div>
          <p className="text-xl text-gray-600 mb-6">
            You got {percentage}% correct!
          </p>

          <div className="bg-white rounded-lg p-4 mb-6 text-left">
            <h3 className="font-bold mb-2">Correct Answers:</h3>
            <p className="text-gray-700">
              {activity.text.split("____").map((part, idx) => (
                <span key={idx}>
                  {part}
                  {idx < activity.answers.length && (
                    <span className="font-bold text-green-600">
                      {activity.answers[idx]}
                    </span>
                  )}
                </span>
              ))}
            </p>
          </div>

          <Button onClick={handleRestart}>Try Again</Button>
        </Card>
      </div>
    );
  }

  const parts = activity.text.split("____");

  return (
    <div className="max-w-3xl mx-auto">
      <p className="text-center text-gray-600 mb-6">{activity.instruction}</p>

      <Card>
        <div className="text-lg leading-relaxed mb-6">
          {parts.map((part, idx) => (
            <span key={idx}>
              {part}
              {idx < blanks && (
                <select
                  value={userAnswers[idx] || ""}
                  onChange={(e) => handleAnswer(idx, e.target.value)}
                  className="mx-2 px-3 py-1 border-2 border-blue-300 rounded-lg font-bold text-blue-600 bg-blue-50 focus:border-blue-500 focus:outline-none">
                  <option value="">___</option>
                  {activity.options.map((opt, i) => (
                    <option key={i} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              )}
            </span>
          ))}
        </div>

        <Button
          onClick={handleSubmit}
          disabled={Object.keys(userAnswers).length < blanks}>
          Check Answers
        </Button>
      </Card>
    </div>
  );
}

// CONVERSATION PRACTICE
function ConversationActivity({ activity }) {
  const [userAnswers, setUserAnswers] = useState({});
  const [showFeedback, setShowFeedback] = useState({});
  const [completed, setCompleted] = useState(false);

  const handleAnswer = (idx, value) => {
    const isCorrect =
      value.toLowerCase() === activity.dialogue[idx].answer.toLowerCase();
    setUserAnswers({ ...userAnswers, [idx]: value });
    setShowFeedback({ ...showFeedback, [idx]: isCorrect });

    const allAnswered = activity.dialogue
      .filter((line) => line.answer)
      .every(
        (line, i) => userAnswers[activity.dialogue.indexOf(line)] || i === idx
      );

    if (isCorrect && allAnswered) {
      setTimeout(() => setCompleted(true), 500);
    }
  };

  const handleRestart = () => {
    setUserAnswers({});
    setShowFeedback({});
    setCompleted(false);
  };

  if (completed) {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <Card className="bg-gradient-to-br from-green-50 to-blue-50">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold mb-4">Conversation Complete!</h2>
          <p className="text-xl text-gray-600 mb-6">
            Great job practicing greetings!
          </p>
          <Button onClick={handleRestart}>Practice Again</Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <p className="text-center text-gray-600 mb-6">{activity.instruction}</p>

      <Card>
        <div className="space-y-4">
          {activity.dialogue.map((line, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-lg ${
                line.speaker === "You"
                  ? "bg-blue-50 border-l-4 border-blue-500"
                  : "bg-gray-50 border-l-4 border-gray-300"
              }`}>
              <div className="font-bold text-sm text-gray-600 mb-2">
                {line.speaker}:
              </div>

              {line.answer ? (
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    value={userAnswers[idx] || ""}
                    onChange={(e) => handleAnswer(idx, e.target.value)}
                    placeholder="Type your answer..."
                    className="flex-1 px-4 py-2 border-2 border-blue-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  />
                  {showFeedback[idx] !== undefined && (
                    <div>
                      {showFeedback[idx] ? (
                        <CheckCircle className="text-green-600" size={24} />
                      ) : (
                        <XCircle className="text-red-600" size={24} />
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-gray-700">{line.text}</div>
              )}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

// ============================================
// MAIN CHAPTER 1 COMPONENT
// ============================================
export default function Chapter1() {
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [selectedActivity, setSelectedActivity] = useState(null);

  // Unit Selection View (Style kayak Chapter 3)
  if (!selectedUnit) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header with Icon */}
          <div className="text-center mb-12">
            <div className="text-8xl mb-4">👤</div>
            <h1 className="text-5xl font-bold text-blue-600 mb-4">
              {chapter1Data.title}
            </h1>
            <p className="text-xl text-gray-600">
              Learn to introduce yourself and talk about your identity
            </p>
          </div>

          {/* Unit Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {chapter1Data.units.map((unit) => (
              <UnitCard key={unit.id} unit={unit} onSelect={setSelectedUnit} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Activity Selection View
  if (!selectedActivity) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 p-8">
        <div className="max-w-6xl mx-auto">
          <Button
            variant="secondary"
            onClick={() => setSelectedUnit(null)}
            className="mb-6">
            <ArrowLeft size={20} className="mr-2" />
            Back to Units
          </Button>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Unit {selectedUnit.id}: {selectedUnit.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {selectedUnit.activities.map((activity, idx) => (
              <Card
                key={idx}
                hover
                onClick={() => setSelectedActivity(activity)}>
                <div className="flex items-center gap-4">
                  <div className="text-4xl">
                    {activity.type === "vocab-match" && "📚"}
                    {activity.type === "fill-blank" && "✏️"}
                    {activity.type === "conversation" && "💬"}
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase mb-1">
                      {activity.type}
                    </div>
                    <h3 className="text-xl font-bold">{activity.title}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Activity View
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 p-8">
      <div className="max-w-6xl mx-auto">
        <Button
          variant="secondary"
          onClick={() => setSelectedActivity(null)}
          className="mb-6">
          <ArrowLeft size={20} className="mr-2" />
          Back to Activities
        </Button>

        <Card>
          <h2 className="text-3xl font-bold mb-6">{selectedActivity.title}</h2>

          {selectedActivity.type === "vocab-match" && (
            <VocabMatchActivity activity={selectedActivity} />
          )}
          {selectedActivity.type === "fill-blank" && (
            <FillBlankActivity activity={selectedActivity} />
          )}
          {selectedActivity.type === "conversation" && (
            <ConversationActivity activity={selectedActivity} />
          )}
        </Card>
      </div>
    </div>
  );
}
