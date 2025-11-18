import React, { useState } from "react";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import {
  VocabularyMatching,
  FillInTheBlank,
  DialoguePractice,
  TrueFalseActivity,
  QuestionFormation,
} from "../components/activities/SharedActivities";
import { ch3Data } from "../data/ch3";

export default function Chapter3() {
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [selectedActivity, setSelectedActivity] = useState(null);

  const themeColor = "blue";

  const renderUnitContent = (unitId) => {
    const activities = getActivitiesForUnit(unitId);

    return (
      <div className="space-y-6">
        <Button onClick={() => setSelectedUnit(null)} className="mb-4">
          ← Back to Units
        </Button>

        <h2 className="text-2xl font-bold text-blue-600">
          {ch3Data.units.find((u) => u.id === unitId)?.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {activities.map((activity) => (
            <Card
              key={activity.id}
              className="cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setSelectedActivity(activity)}>
              <div className="text-4xl mb-2">{activity.icon}</div>
              <h3 className="font-semibold text-lg">{activity.title}</h3>
              <p className="text-sm text-gray-600">{activity.description}</p>
            </Card>
          ))}
        </div>
      </div>
    );
  };

  const getActivitiesForUnit = (unitId) => {
    switch (unitId) {
      case 1: // My House
        return [
          {
            id: "vocab-rooms",
            title: "Match the Rooms",
            description: "Learn vocabulary about rooms in a house",
            icon: "🏠",
            component: () => (
              <VocabularyMatching
                data={ch3Data.vocabularyMatching}
                themeColor={themeColor}
                onComplete={() => setSelectedActivity(null)}
              />
            ),
          },
          {
            id: "fill-house",
            title: "Complete Sentences",
            description: "Fill in the blanks about the house",
            icon: "✏️",
            component: () => (
              <FillInTheBlank
                data={{
                  ...ch3Data.fillInTheBlank,
                  questions: ch3Data.fillInTheBlank.questions.slice(0, 3),
                }}
                themeColor={themeColor}
                onComplete={() => setSelectedActivity(null)}
              />
            ),
          },
          {
            id: "dialogue-house",
            title: "House Tour Dialogue",
            description: "Practice conversation about the house",
            icon: "💬",
            component: () => (
              <DialoguePractice
                data={{
                  title: ch3Data.dialogues[0].title,
                  instruction: "Practice this dialogue with a friend",
                  dialogues: [ch3Data.dialogues[0]],
                }}
                themeColor={themeColor}
                onComplete={() => setSelectedActivity(null)}
              />
            ),
          },
          {
            id: "question-house",
            title: "Ask About Houses",
            description: "Form questions about houses",
            icon: "❓",
            component: () => (
              <QuestionFormation
                data={{
                  ...ch3Data.questionPractice,
                  exercises: ch3Data.questionPractice.exercises.filter(
                    (e) => e.type === "house"
                  ),
                }}
                themeColor={themeColor}
                onComplete={() => setSelectedActivity(null)}
              />
            ),
          },
        ];

      case 2: // My House Chores
        return [
          {
            id: "vocab-chores",
            title: "Match the Chores",
            description: "Learn vocabulary about house chores",
            icon: "🧹",
            component: () => (
              <VocabularyMatching
                data={ch3Data.choresVocabulary}
                themeColor={themeColor}
                onComplete={() => setSelectedActivity(null)}
              />
            ),
          },
          {
            id: "fill-chores",
            title: "Complete Sentences",
            description: "Fill in the blanks about chores",
            icon: "✏️",
            component: () => (
              <FillInTheBlank
                data={{
                  ...ch3Data.fillInTheBlank,
                  questions: ch3Data.fillInTheBlank.questions.slice(3, 8),
                }}
                themeColor={themeColor}
                onComplete={() => setSelectedActivity(null)}
              />
            ),
          },
          {
            id: "dialogue-chores",
            title: "Chores Dialogue",
            description: "Talk about household chores",
            icon: "💬",
            component: () => (
              <DialoguePractice
                data={{
                  title: ch3Data.dialogues[1].title,
                  instruction: "Practice talking about chores",
                  dialogues: [ch3Data.dialogues[1]],
                }}
                themeColor={themeColor}
                onComplete={() => setSelectedActivity(null)}
              />
            ),
          },
          {
            id: "question-chores",
            title: "Ask About Chores",
            description: "Form questions about chores",
            icon: "❓",
            component: () => (
              <QuestionFormation
                data={{
                  ...ch3Data.questionPractice,
                  exercises: ch3Data.questionPractice.exercises.filter(
                    (e) => e.type === "chores"
                  ),
                }}
                themeColor={themeColor}
                onComplete={() => setSelectedActivity(null)}
              />
            ),
          },
        ];

      case 3: // Let's Clean Up!
        return [
          {
            id: "dialogue-cleanup",
            title: "Let's Clean Together",
            description: "Practice teamwork dialogue",
            icon: "👥",
            component: () => (
              <DialoguePractice
                data={{
                  title: ch3Data.dialogues[2].title,
                  instruction: "Practice cleaning up together",
                  dialogues: [ch3Data.dialogues[2]],
                }}
                themeColor={themeColor}
                onComplete={() => setSelectedActivity(null)}
              />
            ),
          },
          {
            id: "truefalse",
            title: "True or False",
            description: "Read and answer questions",
            icon: "📖",
            component: () => (
              <TrueFalseActivity
                data={ch3Data.trueOrFalse}
                themeColor={themeColor}
                onComplete={() => setSelectedActivity(null)}
              />
            ),
          },
          {
            id: "vocab-review",
            title: "Vocabulary Review",
            description: "Review all vocabulary",
            icon: "🔄",
            component: () => (
              <VocabularyMatching
                data={{
                  title: "Vocabulary Review",
                  instruction: "Match all the vocabulary you learned",
                  pairs: [
                    ...ch3Data.vocabularyMatching.pairs.slice(0, 4),
                    ...ch3Data.choresVocabulary.pairs.slice(0, 4),
                  ],
                }}
                themeColor={themeColor}
                onComplete={() => setSelectedActivity(null)}
              />
            ),
          },
          {
            id: "fill-review",
            title: "Complete Review",
            description: "Review all sentences",
            icon: "✅",
            component: () => (
              <FillInTheBlank
                data={ch3Data.fillInTheBlank}
                themeColor={themeColor}
                onComplete={() => setSelectedActivity(null)}
              />
            ),
          },
        ];

      default:
        return [];
    }
  };

  if (selectedActivity) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 p-8">
        <div className="max-w-4xl mx-auto">
          <Button onClick={() => setSelectedActivity(null)} className="mb-4">
            ← Back to Activities
          </Button>
          {selectedActivity.component()}
        </div>
      </div>
    );
  }

  if (selectedUnit) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 p-8">
        <div className="max-w-6xl mx-auto">
          {renderUnitContent(selectedUnit)}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🏠</div>
          <h1 className="text-4xl font-bold text-blue-600 mb-2">
            {ch3Data.title}
          </h1>
          <p className="text-gray-600 text-lg">{ch3Data.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ch3Data.units.map((unit) => (
            <Card
              key={unit.id}
              className="cursor-pointer hover:shadow-xl transition-all transform hover:-translate-y-1"
              onClick={() => setSelectedUnit(unit.id)}>
              <div className="text-center">
                <div className="text-5xl mb-4">
                  {unit.id === 1 ? "🏡" : unit.id === 2 ? "🧹" : "✨"}
                </div>
                <h3 className="text-xl font-bold text-blue-600 mb-2">
                  Unit {unit.id}
                </h3>
                <h4 className="font-semibold mb-2">{unit.title}</h4>
                <p className="text-sm text-gray-600">{unit.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
