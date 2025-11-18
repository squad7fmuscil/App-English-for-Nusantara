import { useState } from "react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

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

  const rightTargets = [...pairs].sort(() => Math.random() - 0.5);

  return (
    <div className="max-w-4xl mx-auto">
      <p className="text-center text-gray-600 mb-6">
        {section.content.instruction}
      </p>
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-3">
          {pairs.map(
            (pair) =>
              !matched.includes(pair.id) && (
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
