import { useState } from "react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

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
    if (matched.includes(id) && side === "left") return;
    if (matched.some((mId) => mId === id) && side === "right") return;

    const newSelected = { ...selected, [side]: id };
    setSelected(newSelected);

    if (newSelected.left && newSelected.right) {
      if (newSelected.left === newSelected.right) {
        const newMatched = [...matched, newSelected.left];
        setMatched(newMatched);
        if (newMatched.length === data.pairs.length) {
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
          <div className="flex gap-4 justify-center">
            <Button onClick={handleRestart}>Try Again</Button>
            {onComplete && <Button onClick={onComplete}>Continue</Button>}
          </div>
        </Card>
      </div>
    );
  }

  const rightPairs = [...data.pairs].sort(() => Math.random() - 0.5);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">{data.title}</h2>
        <p className="text-gray-600">{data.instruction}</p>
      </div>

      <div className="grid grid-cols-2 gap-8">
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
