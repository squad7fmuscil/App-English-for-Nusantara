import React, { useState } from "react";
import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { VocabularyMatching } from "../../components/activities/VocabularyMatching";
import { FillInTheBlank } from "../../components/activities/FillInTheBlank";
import { DialoguePractice } from "../../components/activities/DialoguePractice";
import { TrueFalseActivity } from "../../components/activities/TrueFalseActivity";
import { QuestionFormation } from "../../components/activities/QuestionFormation";
import { ch4Data } from "../../data/chapters/grade7/ch4";

export default function Chapter4() {
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [selectedActivity, setSelectedActivity] = useState(null);

  const themeColor = "green";

  const renderUnitContent = (unitId) => {
    const activities = getActivitiesForUnit(unitId);

    return (
      <div className="space-y-6">
        <Button onClick={() => setSelectedUnit(null)} className="mb-4">
          ← Back to Units
        </Button>

        <h2 className="text-2xl font-bold text-green-600">
          {ch4Data.units.find((u) => u.id === unitId)?.title}
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
      case 1: // My Class Schedule
        return [
          {
            id: "vocab-subjects",
            title: "Match the Subjects",
            description: "Learn school subjects vocabulary",
            icon: "📚",
            component: () => (
              <VocabularyMatching
                data={ch4Data.subjectsVocabulary}
                themeColor={themeColor}
                onComplete={() => setSelectedActivity(null)}
              />
            ),
          },
          {
            id: "vocab-days",
            title: "Days of the Week",
            description: "Learn days vocabulary",
            icon: "📅",
            component: () => (
              <VocabularyMatching
                data={ch4Data.scheduleVocabulary}
                themeColor={themeColor}
                onComplete={() => setSelectedActivity(null)}
              />
            ),
          },
          {
            id: "fill-schedule",
            title: "Complete Sentences",
            description: "Fill in blanks about schedule",
            icon: "✏️",
            component: () => (
              <FillInTheBlank
                data={{
                  ...ch4Data.fillInTheBlank,
                  questions: ch4Data.fillInTheBlank.questions.slice(0, 3),
                }}
                themeColor={themeColor}
                onComplete={() => setSelectedActivity(null)}
              />
            ),
          },
          {
            id: "dialogue-schedule",
            title: "Schedule Dialogue",
            description: "Practice talking about schedule",
            icon: "💬",
            component: () => (
              <DialoguePractice
                data={{
                  title: ch4Data.dialogues[0].title,
                  instruction: "Practice this dialogue",
                  dialogues: [ch4Data.dialogues[0]],
                }}
                themeColor={themeColor}
                onComplete={() => setSelectedActivity(null)}
              />
            ),
          },
          {
            id: "question-schedule",
            title: "Ask About Schedule",
            description: "Form questions about class schedule",
            icon: "❓",
            component: () => (
              <QuestionFormation
                data={{
                  ...ch4Data.questionPractice,
                  exercises: ch4Data.questionPractice.exercises.filter(
                    (e) => e.type === "schedule"
                  ),
                }}
                themeColor={themeColor}
                onComplete={() => setSelectedActivity(null)}
              />
            ),
          },
        ];

      case 2: // My Online Class
        return [
          {
            id: "vocab-online",
            title: "Online Class Vocabulary",
            description: "Learn online learning terms",
            icon: "💻",
            component: () => (
              <VocabularyMatching
                data={ch4Data.onlineClassVocabulary}
                themeColor={themeColor}
                onComplete={() => setSelectedActivity(null)}
              />
            ),
          },
          {
            id: "fill-online",
            title: "Complete Sentences",
            description: "Fill in blanks about online class",
            icon: "✏️",
            component: () => (
              <FillInTheBlank
                data={{
                  ...ch4Data.fillInTheBlank,
                  questions: ch4Data.fillInTheBlank.questions.slice(3, 5),
                }}
                themeColor={themeColor}
                onComplete={() => setSelectedActivity(null)}
              />
            ),
          },
          {
            id: "dialogue-online",
            title: "Online Class Dialogue",
            description: "Practice online class instructions",
            icon: "💬",
            component: () => (
              <DialoguePractice
                data={{
                  title: ch4Data.dialogues[1].title,
                  instruction: "Practice online class dialogue",
                  dialogues: [ch4Data.dialogues[1]],
                }}
                themeColor={themeColor}
                onComplete={() => setSelectedActivity(null)}
              />
            ),
          },
          {
            id: "question-online",
            title: "Ask About Online Class",
            description: "Form questions about online learning",
            icon: "❓",
            component: () => (
              <QuestionFormation
                data={{
                  ...ch4Data.questionPractice,
                  exercises: ch4Data.questionPractice.exercises.filter(
                    (e) => e.type === "online"
                  ),
                }}
                themeColor={themeColor}
                onComplete={() => setSelectedActivity(null)}
              />
            ),
          },
        ];

      case 3: // My Study Habits
        return [
          {
            id: "dialogue-study",
            title: "Study Habits Dialogue",
            description: "Talk about study habits",
            icon: "📖",
            component: () => (
              <DialoguePractice
                data={{
                  title: ch4Data.dialogues[2].title,
                  instruction: "Practice talking about study habits",
                  dialogues: [ch4Data.dialogues[2]],
                }}
                themeColor={themeColor}
                onComplete={() => setSelectedActivity(null)}
              />
            ),
          },
          {
            id: "fill-study",
            title: "Complete Sentences",
            description: "Fill in blanks about study habits",
            icon: "✏️",
            component: () => (
              <FillInTheBlank
                data={{
                  ...ch4Data.fillInTheBlank,
                  questions: ch4Data.fillInTheBlank.questions.slice(5, 8),
                }}
                themeColor={themeColor}
                onComplete={() => setSelectedActivity(null)}
              />
            ),
          },
          {
            id: "truefalse",
            title: "True or False",
            description: "Read about study routines",
            icon: "📋",
            component: () => (
              <TrueFalseActivity
                data={ch4Data.trueOrFalse}
                themeColor={themeColor}
                onComplete={() => setSelectedActivity(null)}
              />
            ),
          },
          {
            id: "question-study",
            title: "Ask About Study Habits",
            description: "Form questions about studying",
            icon: "❓",
            component: () => (
              <QuestionFormation
                data={{
                  ...ch4Data.questionPractice,
                  exercises: ch4Data.questionPractice.exercises.filter(
                    (e) => e.type === "study"
                  ),
                }}
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
                  title: "Chapter 4 Review",
                  instruction: "Match all the vocabulary",
                  pairs: [
                    ...ch4Data.subjectsVocabulary.pairs.slice(0, 4),
                    ...ch4Data.onlineClassVocabulary.pairs.slice(0, 4),
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
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 p-8">
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
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 p-8">
        <div className="max-w-6xl mx-auto">
          {renderUnitContent(selectedUnit)}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📚</div>
          <h1 className="text-4xl font-bold text-green-600 mb-2">
            {ch4Data.title}
          </h1>
          <p className="text-gray-600 text-lg">{ch4Data.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ch4Data.units.map((unit) => (
            <Card
              key={unit.id}
              className="cursor-pointer hover:shadow-xl transition-all transform hover:-translate-y-1"
              onClick={() => setSelectedUnit(unit.id)}>
              <div className="text-center">
                <div className="text-5xl mb-4">
                  {unit.id === 1 ? "📅" : unit.id === 2 ? "💻" : "📖"}
                </div>
                <h3 className="text-xl font-bold text-green-600 mb-2">
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
