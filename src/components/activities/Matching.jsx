import { useState, useEffect } from "react";
import { CheckCircle, XCircle, RotateCcw, Trophy } from "lucide-react";

// Shuffle helper
const shuffle = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

export default function Matching({ data, onComplete }) {
  const [leftItems, setLeftItems] = useState([]);
  const [rightItems, setRightItems] = useState([]);
  const [selected, setSelected] = useState(null);
  const [matched, setMatched] = useState([]);
  const [wrong, setWrong] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    initGame();
  }, [data]);

  const initGame = () => {
    const left = data.pairs.map((p) => ({
      id: p.id,
      content: p.word,
      image: p.image,
      type: "word",
    }));
    const right = shuffle(
      data.pairs.map((p) => ({ id: p.id, content: p.meaning, type: "meaning" }))
    );

    setLeftItems(left);
    setRightItems(right);
    setMatched([]);
    setSelected(null);
    setWrong(null);
    setScore(0);
  };

  const handleSelect = (item, side) => {
    if (matched.includes(item.id)) return;

    if (!selected) {
      setSelected({ ...item, side });
      return;
    }

    if (selected.side === side) {
      setSelected({ ...item, side });
      return;
    }

    // Check match
    if (selected.id === item.id) {
      setMatched([...matched, item.id]);
      setSelected(null);
      setScore(score + 10);

      if (matched.length + 1 === data.pairs.length) {
        setTimeout(() => {
          if (onComplete) onComplete(score + 10);
        }, 500);
      }
    } else {
      setWrong([selected.id, item.id]);
      setTimeout(() => {
        setWrong(null);
        setSelected(null);
      }, 1000);
    }
  };

  const isSelected = (item) => selected?.id === item.id;
  const isMatched = (item) => matched.includes(item.id);
  const isWrong = (item) => wrong?.includes(item.id);

  const getItemStyle = (item) => {
    if (isMatched(item))
      return "bg-green-100 border-green-500 cursor-not-allowed opacity-50";
    if (isWrong(item)) return "bg-red-100 border-red-500 animate-pulse";
    if (isSelected(item))
      return "bg-blue-100 border-blue-500 ring-4 ring-blue-300";
    return "bg-white border-gray-300 hover:border-blue-400 hover:shadow-lg cursor-pointer";
  };

  const allMatched = matched.length === data.pairs.length;

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-4xl font-bold mb-2">{data.title}</h2>
        <p className="text-xl text-gray-600 mb-4">{data.instruction}</p>
        <div className="flex items-center gap-6">
          <div className="text-2xl font-bold text-blue-600">Score: {score}</div>
          <div className="text-xl text-gray-600">
            Matched: {matched.length}/{data.pairs.length}
          </div>
          <button
            onClick={initGame}
            className="ml-auto flex items-center gap-2 px-6 py-3 bg-gray-200 hover:bg-gray-300 rounded-lg font-semibold transition-all">
            <RotateCcw size={20} />
            Reset
          </button>
        </div>
      </div>

      {/* Game Complete */}
      {allMatched && (
        <div className="mb-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl p-8 text-center text-white">
          <Trophy size={64} className="mx-auto mb-4" />
          <h3 className="text-3xl font-bold mb-2">Perfect! 🎉</h3>
          <p className="text-xl">Final Score: {score} points</p>
        </div>
      )}

      {/* Matching Grid */}
      <div className="grid grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-gray-700 mb-4">English</h3>
          {leftItems.map((item) => (
            <div
              key={`left-${item.id}`}
              onClick={() => handleSelect(item, "left")}
              className={`p-6 rounded-xl border-4 transition-all transform hover:scale-105 ${getItemStyle(
                item
              )}`}>
              <div className="flex items-center gap-4">
                <span className="text-5xl">{item.image}</span>
                <span className="text-2xl font-semibold">{item.content}</span>
                {isMatched(item) && (
                  <CheckCircle className="ml-auto text-green-600" size={32} />
                )}
                {isWrong(item) && (
                  <XCircle className="ml-auto text-red-600" size={32} />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-gray-700 mb-4">Indonesian</h3>
          {rightItems.map((item) => (
            <div
              key={`right-${item.id}`}
              onClick={() => handleSelect(item, "right")}
              className={`p-6 rounded-xl border-4 transition-all transform hover:scale-105 ${getItemStyle(
                item
              )}`}>
              <div className="flex items-center gap-4">
                <span className="text-2xl font-semibold">{item.content}</span>
                {isMatched(item) && (
                  <CheckCircle className="ml-auto text-green-600" size={32} />
                )}
                {isWrong(item) && (
                  <XCircle className="ml-auto text-red-600" size={32} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-8 p-6 bg-blue-50 rounded-xl">
        <p className="text-lg text-gray-700">
          <strong>How to play:</strong> Tap a word on the left, then tap its
          matching meaning on the right. Match all pairs to complete the
          activity!
        </p>
      </div>
    </div>
  );
}
