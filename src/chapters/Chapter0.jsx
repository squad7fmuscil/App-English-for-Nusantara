import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { ch0Data } from "../data/ch0";

// Import shared activity components
import {
  LessonView,
  FlashcardView,
  QuizView,
  MatchingView,
  DragDropView,
} from "../components/activities/SharedActivities";

// ============================================
// MAIN CHAPTER 0 COMPONENT
// ============================================
export default function Chapter0() {
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);

  // Unit Selection View
  if (!selectedUnit) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              {ch0Data.title}
            </h1>
            <p className="text-gray-600">{ch0Data.description}</p>
          </div>

          <div className="grid gap-4">
            {ch0Data.units.map((unit) => (
              <Card key={unit.id} hover onClick={() => setSelectedUnit(unit)}>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      Unit {unit.id}: {unit.title}
                    </h3>
                    <p className="text-gray-600">{unit.description}</p>
                    <div className="mt-3 text-sm text-gray-500">
                      {unit.sections.length} Activities
                    </div>
                  </div>
                  <Button>Start →</Button>
                </div>
              </Card>
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
        </Card>
      </div>
    </div>
  );
}
