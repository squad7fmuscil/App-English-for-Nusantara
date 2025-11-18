import React, { useState } from "react";
import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { VocabularyMatching } from "../../components/activities/VocabularyMatching";
import { FillInTheBlank } from "../../components/activities/FillInTheBlank";
import { DialoguePractice } from "../../components/activities/DialoguePractice";
import { TrueFalseActivity } from "../../components/activities/TrueFalseActivity";
import { QuestionFormation } from "../../components/activities/QuestionFormation";
import { ch5Data } from "../../data/chapters/grade7/ch5";

export default function Chapter5() {
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [selectedActivity, setSelectedActivity] = useState(null);

  const themeColor = "purple";

  const renderUnitContent = (unitId) => {
    const activities = getActivitiesForUnit(unitId);

    return (
      <div className="space-y-6">
        <Button onClick={() => setSelectedUnit(null)} className="mb-4">
          ← Back to Units
        </Button>

        <h2 className="text-2xl font-bold text-purple-600">
          {ch5Data.units.find((u) => u.id === unitId)?.title}
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
      case 1: // School Buildings
        return [
          {
            id: "vocab-buildings",
            title: "Match School Buildings",
            description: "Learn vocabulary about school places",
            icon: "🏫",
            component: () => (
              <VocabularyMatching
                data={ch5Data.buildingsVocabulary}
                themeColor={themeColor}
                onComplete={() => setSelectedActivity(null)}
              />
            ),
          },
          {
            id: "fill-buildings",
            title: "Complete Sentences",
            description: "Fill in blanks about school buildings",
            icon: "✏️",
            component: () => (
              <FillInTheBlank
                data={{
                  ...ch5Data.fillInTheBlank,
                  questions: ch5Data.fillInTheBlank.questions.slice(0, 4),
                }}
                themeColor={themeColor}
                onComplete={() => setSelectedActivity(null)}
              />
            ),
          },
          {
            id: "dialogue-tour",
            title: "School Tour Dialogue",
            description: "Practice showing around the school",
            icon: "💬",
            component: () => (
              <DialoguePractice
                data={{
                  title: ch5Data.dialogues[0].title,
                  instruction: "Practice the school tour dialogue",
                  dialogues: [ch5Data.dialogues[0]],
                }}
                themeColor={themeColor}
                onComplete={() => setSelectedActivity(null)}
              />
            ),
          },
          {
            id: "question-buildings",
            title: "Ask About School Buildings",
            description: "Form questions about school places",
            icon: "❓",
            component: () => (
              <QuestionFormation
                data={{
                  ...ch5Data.questionPractice,
                  exercises: ch5Data.questionPractice.exercises.filter(
                    (e) => e.type === "buildings"
                  ),
                }}
                themeColor={themeColor}
                onComplete={() => setSelectedActivity(null)}
              />
            ),
          },
        ];

      case 2: // Extracurricular Activities
        return [
          {
            id: "vocab-clubs",
            title: "Match the Clubs",
            description: "Learn extracurricular vocabulary",
            icon: "🎯",
            component: () => (
              <VocabularyMatching
                data={ch5Data.extracurricularVocabulary}
                themeColor={themeColor}
                onComplete={() => setSelectedActivity(null)}
              />
            ),
          },
          {
            id: "fill-clubs",
            title: "Complete Sentences",
            description: "Fill in blanks about clubs",
            icon: "✏️",
            component: () => (
              <FillInTheBlank
                data={{
                  ...ch5Data.fillInTheBlank,
                  questions: ch5Data.fillInTheBlank.questions.slice(4, 6),
                }}
                themeColor={themeColor}
                onComplete={() => setSelectedActivity(null)}
              />
            ),
          },
          {
            id: "dialogue-club",
            title: "Joining a Club",
            description: "Practice talking about clubs",
            icon: "💬",
            component: () => (
              <DialoguePractice
                data={{
                  title: ch5Data.dialogues[1].title,
                  instruction: "Practice the club dialogue",
                  dialogues: [ch5Data.dialogues[1]],
                }}
                themeColor={themeColor}
                onComplete={() => setSelectedActivity(null)}
              />
            ),
          },
          {
            id: "question-clubs",
            title: "Ask About Clubs",
            description: "Form questions about extracurricular",
            icon: "❓",
            component: () => (
              <QuestionFormation
                data={{
                  ...ch5Data.questionPractice,
                  exercises: ch5Data.questionPractice.exercises.filter(
                    (e) => e.type === "extracurricular"
                  ),
                }}
                themeColor={themeColor}
                onComplete={() => setSelectedActivity(null)}
              />
            ),
          },
        ];

      case 3: // School Festival
        return [
          {
            id: "vocab-festival",
            title: "Festival Vocabulary",
            description: "Learn festival activities vocabulary",
            icon: "🎉",
            component: () => (
              <VocabularyMatching
                data={ch5Data.festivalVocabulary}
                themeColor={themeColor}
                onComplete={() => setSelectedActivity(null)}
              />
            ),
          },
          {
            id: "fill-festival",
            title: "Complete Sentences",
            description: "Fill in blanks about festivals",
            icon: "✏️",
            component: () => (
              <FillInTheBlank
                data={{
                  ...ch5Data.fillInTheBlank,
                  questions: ch5Data.fillInTheBlank.questions.slice(6, 8),
                }}
                themeColor={themeColor}
                onComplete={() => setSelectedActivity(null)}
              />
            ),
          },
          {
            id: "dialogue-festival",
            title: "Planning the Festival",
            description: "Practice festival planning dialogue",
            icon: "💬",
            component: () => (
              <DialoguePractice
                data={{
                  title: ch5Data.dialogues[2].title,
                  instruction: "Practice planning the festival",
                  dialogues: [ch5Data.dialogues[2]],
                }}
                themeColor={themeColor}
                onComplete={() => setSelectedActivity(null)}
              />
            ),
          },
          {
            id: "question-festival",
            title: "Ask About Festival",
            description: "Form questions about school festival",
            icon: "❓",
            component: () => (
              <QuestionFormation
                data={{
                  ...ch5Data.questionPractice,
                  exercises: ch5Data.questionPractice.exercises.filter(
                    (e) => e.type === "festival"
                  ),
                }}
                themeColor={themeColor}
                onComplete={() => setSelectedActivity(null)}
              />
            ),
          },
          {
            id: "truefalse",
            title: "True or False",
            description: "Read about school and answer",
            icon: "📖",
            component: () => (
              <TrueFalseActivity
                data={ch5Data.trueOrFalse}
                themeColor={themeColor}
                onComplete={() => setSelectedActivity(null)}
              />
            ),
          },
          {
            id: "vocab-review",
            title: "Chapter Review",
            description: "Review all vocabulary",
            icon: "🔄",
            component: () => (
              <VocabularyMatching
                data={{
                  title: "Chapter 5 Review",
                  instruction: "Match all vocabulary from this chapter",
                  pairs: [
                    ...ch5Data.buildingsVocabulary.pairs.slice(0, 4),
                    ...ch5Data.extracurricularVocabulary.pairs.slice(0, 4),
                  ],
                }}
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
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-8">
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
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-8">
        <div className="max-w-6xl mx-auto">
          {renderUnitContent(selectedUnit)}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🏫</div>
          <h1 className="text-4xl font-bold text-purple-600 mb-2">
            {ch5Data.title}
          </h1>
          <p className="text-gray-600 text-lg">{ch5Data.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ch5Data.units.map((unit) => (
            <Card
              key={unit.id}
              className="cursor-pointer hover:shadow-xl transition-all transform hover:-translate-y-1"
              onClick={() => setSelectedUnit(unit.id)}>
              <div className="text-center">
                <div className="text-5xl mb-4">
                  {unit.id === 1 ? "🏛️" : unit.id === 2 ? "🎯" : "🎉"}
                </div>
                <h3 className="text-xl font-bold text-purple-600 mb-2">
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
