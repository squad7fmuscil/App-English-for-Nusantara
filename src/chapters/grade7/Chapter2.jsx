import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ch2Data } from "@/data/chapters/grade7/ch2";

// Import shared activity components
import {
  LessonView,
  FlashcardView,
  QuizView,
  MatchingView,
  DragDropView,
} from "@/components/activities";

// ============================================
// UNIT CARD COMPONENT (Style kayak Chapter 3)
// ============================================
function UnitCard({ unit, onSelect }) {
  return (
    <div
      onClick={() => onSelect(unit)}
      className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-2">
      <div className="text-7xl mb-4 text-center">{unit.emoji}</div>
      <h3 className="text-2xl font-bold text-orange-600 mb-3 text-center">
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
// MAIN CHAPTER 2 COMPONENT
// ============================================
export default function Chapter2() {
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);

  // Unit Selection View (Style kayak Chapter 3)
  if (!selectedUnit) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header with Icon */}
          <div className="text-center mb-12">
            <div className="text-8xl mb-4">🍳</div>
            <h1 className="text-5xl font-bold text-orange-600 mb-4">
              {ch2Data.title}
            </h1>
            <p className="text-xl text-gray-600">{ch2Data.description}</p>
          </div>

          {/* Unit Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ch2Data.units.map((unit) => (
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
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 p-8">
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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 p-8">
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

          {selectedSection.type === "lesson" && (
            <LessonView section={selectedSection} themeColor="orange" />
          )}
          {selectedSection.type === "flashcard" && (
            <FlashcardView section={selectedSection} themeColor="orange" />
          )}
          {selectedSection.type === "quiz" && (
            <QuizView section={selectedSection} themeColor="orange" />
          )}
          {selectedSection.type === "dragdrop" && (
            <DragDropView section={selectedSection} themeColor="orange" />
          )}
          {selectedSection.type === "matching" && (
            <MatchingView section={selectedSection} themeColor="orange" />
          )}
        </Card>
      </div>
    </div>
  );
}
