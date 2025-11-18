import { useState } from "react";
import { ArrowLeft, Volume2 } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { ch0Data } from "../../data/chapters/grade7/ch0";

// Import shared activity components
import { LessonView } from "../../components/activities/LessonView";
import { FlashcardView } from "../../components/activities/FlashcardView";
import { QuizView } from "../../components/activities/QuizView";
import { MatchingView } from "../../components/activities/MatchingView";
import { DragDropView } from "../../components/activities/DragDropView";
import { DaysView } from "../../components/activities/DaysView";
import { MonthsView } from "../../components/activities/MonthsView";
import { ColorsView } from "../../components/activities/ColorsView";

// ============================================
// UNIT CARD COMPONENT (Style kayak Chapter 3)
// ============================================
function UnitCard({ unit, onSelect }) {
  return (
    <div
      onClick={() => onSelect(unit)}
      className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-2">
      <div className="text-7xl mb-4 text-center">{unit.emoji}</div>
      <h3 className="text-2xl font-bold text-gray-600 mb-3 text-center">
        Unit {unit.id}
      </h3>
      <h4 className="text-xl font-semibold text-gray-800 mb-2 text-center">
        {unit.title}
      </h4>
      <p className="text-gray-600 text-center text-sm">{unit.description}</p>
    </div>
  );
}

// ============================================
// ALPHABET LESSON WITH AUDIO
// ============================================
function AlphabetLessonView({ section }) {
  const [activeButton, setActiveButton] = useState(null);

  const speak = (letter, example) => {
    if ("speechSynthesis" in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();

      // Speak the letter
      const letterUtterance = new SpeechSynthesisUtterance(letter);
      letterUtterance.lang = "en-US";
      letterUtterance.rate = 0.8;
      letterUtterance.pitch = 1;

      // Then speak the example word
      const exampleUtterance = new SpeechSynthesisUtterance(example);
      exampleUtterance.lang = "en-US";
      exampleUtterance.rate = 0.8;

      // Speak letter first, then example
      letterUtterance.onend = () => {
        setTimeout(() => {
          window.speechSynthesis.speak(exampleUtterance);
        }, 200);
      };

      window.speechSynthesis.speak(letterUtterance);
    }
  };

  const handleLetterClick = (letter, example, index) => {
    setActiveButton(index);
    speak(letter, example);

    // Reset active state after animation
    setTimeout(() => {
      setActiveButton(null);
    }, 600);
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <p className="text-lg text-gray-700">{section.content.text}</p>
        <p className="text-sm text-gray-500 mt-2">
          🔊 Click any letter to hear its pronunciation!
        </p>
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-3">
        {section.content.vocabulary.map((item, index) => (
          <button
            key={index}
            onClick={() => handleLetterClick(item.letter, item.example, index)}
            className={`
              relative group bg-gradient-to-br from-blue-50 to-blue-100 
              hover:from-blue-100 hover:to-blue-200
              rounded-xl p-4 transition-all duration-300
              hover:scale-110 hover:shadow-lg
              border-2 border-blue-200 hover:border-blue-400
              ${
                activeButton === index
                  ? "scale-110 shadow-lg border-blue-500 bg-gradient-to-br from-blue-200 to-blue-300"
                  : ""
              }
            `}>
            {/* Letter */}
            <div className="text-4xl font-bold text-blue-600 mb-1">
              {item.letter}
            </div>

            {/* Sound indicator */}
            <div className="text-xs text-gray-500 mb-2">{item.sound}</div>

            {/* Example word */}
            <div className="text-sm text-gray-700 font-medium">
              {item.example}
            </div>

            {/* Hover indicator */}
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Volume2 size={16} className="text-blue-500" />
            </div>

            {/* Active animation */}
            {activeButton === index && (
              <div className="absolute inset-0 rounded-xl border-4 border-blue-500 animate-pulse"></div>
            )}
          </button>
        ))}
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg mt-6">
        <div className="flex items-start gap-3">
          <Volume2 className="text-blue-500 mt-1 flex-shrink-0" size={24} />
          <div>
            <h4 className="font-semibold text-blue-900 mb-1">How to Use:</h4>
            <p className="text-blue-800 text-sm">
              Click on any letter to hear how it's pronounced in English. You'll
              hear the letter name first, followed by an example word.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// MAIN CHAPTER 0 COMPONENT
// ============================================
export default function Chapter0() {
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);

  // Unit Selection View (Style kayak Chapter 3)
  if (!selectedUnit) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header with Icon */}
          <div className="text-center mb-12">
            <div className="text-8xl mb-4">📚</div>
            <h1 className="text-5xl font-bold text-gray-600 mb-4">
              {ch0Data.title}
            </h1>
            <p className="text-xl text-gray-600">{ch0Data.description}</p>
          </div>

          {/* Unit Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ch0Data.units.map((unit) => (
              <UnitCard key={unit.id} unit={unit} onSelect={setSelectedUnit} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Section Selection View
  if (!selectedSection) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
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
            <p className="text-gray-600">{selectedUnit.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {selectedUnit.sections.map((section) => (
              <Card
                key={section.id}
                hover
                onClick={() => setSelectedSection(section)}>
                <div className="flex items-center gap-4">
                  <div className="text-4xl">
                    {section.type === "lesson" && "📖"}
                    {section.type === "flashcard" && "🎴"}
                    {section.type === "quiz" && "❓"}
                    {section.type === "dragdrop" && "🎯"}
                    {section.type === "matching" && "🔗"}
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase mb-1">
                      {section.type}
                    </div>
                    <h3 className="text-xl font-bold">{section.title}</h3>
                    {section.type === "lesson" &&
                      section.id === 1 &&
                      selectedUnit.id === 1 && (
                        <p className="text-sm text-blue-600 mt-1">
                          🔊 With Audio
                        </p>
                      )}
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
      <div className="max-w-6xl mx-auto">
        <Button
          variant="secondary"
          onClick={() => setSelectedSection(null)}
          className="mb-6">
          <ArrowLeft size={20} className="mr-2" />
          Back to Activities
        </Button>

        <Card>
          <h2 className="text-3xl font-bold mb-6">{selectedSection.title}</h2>

          {/* Use custom views based on title */}
          {selectedSection.title === "The Alphabet" ? (
            <AlphabetLessonView section={selectedSection} />
          ) : selectedSection.title === "Days of the Week" ? (
            <DaysView section={selectedSection} themeColor="gray" />
          ) : selectedSection.title === "Months of the Year" ? (
            <MonthsView section={selectedSection} themeColor="gray" />
          ) : selectedSection.title === "Colors" ? (
            <ColorsView section={selectedSection} themeColor="gray" />
          ) : (
            <>
              {selectedSection.type === "lesson" && (
                <LessonView section={selectedSection} themeColor="gray" />
              )}
              {selectedSection.type === "flashcard" && (
                <FlashcardView section={selectedSection} themeColor="gray" />
              )}
              {selectedSection.type === "quiz" && (
                <QuizView section={selectedSection} themeColor="gray" />
              )}
              {selectedSection.type === "dragdrop" && (
                <DragDropView section={selectedSection} themeColor="gray" />
              )}
              {selectedSection.type === "matching" && (
                <MatchingView section={selectedSection} themeColor="gray" />
              )}
            </>
          )}
        </Card>
      </div>
    </div>
  );
}
