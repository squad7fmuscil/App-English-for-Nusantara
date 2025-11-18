import { useState } from "react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

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
