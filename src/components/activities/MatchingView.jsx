import { useState } from "react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

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
      const pair = pairs.find(
        (p) =>
          (p.left === newSelected.left && p.right === newSelected.right) ||
          (p.left === newSelected.right && p.right === newSelected.left)
      );

      if (pair) {
        setMatched([...matched, pair.left]);
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

  const rightPairs = [...pairs].sort(() => Math.random() - 0.5);

  return (
    <div className="max-w-4xl mx-auto">
      <p className="text-center text-gray-600 mb-6">
        {section.content.instruction}
      </p>
      <div className="grid grid-cols-2 gap-8">
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
        <div className="space-y-3">
          {rightPairs.map((pair) => (
            <button
              key={pair.right}
              onClick={() => handleSelect("right", pair.right)}
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
