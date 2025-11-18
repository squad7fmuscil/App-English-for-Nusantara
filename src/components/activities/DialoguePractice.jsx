import { useState } from "react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

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
