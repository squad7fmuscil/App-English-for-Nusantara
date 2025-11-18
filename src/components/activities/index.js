// ============================================
// BARREL EXPORT - activities/index.js
// ============================================
// Import semua activity components dari file terpisah
// dan re-export biar import jadi clean

// Original Components (from SharedActivities)
export { VocabularyMatching } from "./VocabularyMatching";
export { FillInTheBlank } from "./FillInTheBlank";
export { DialoguePractice } from "./DialoguePractice";
export { TrueFalseActivity } from "./TrueFalseActivity";
export { QuestionFormation } from "./QuestionFormation";
export { LessonView } from "./LessonView";
export { FlashcardView } from "./FlashcardView";
export { QuizView } from "./QuizView";
export { MatchingView } from "./MatchingView";
export { DragDropView } from "./DragDropView";

// New Components
export { DaysView } from "./DaysView";
export { MonthsView } from "./MonthsView";
export { ColorsView } from "./ColorsView";

// Already existing (if they exist)
// export { ListeningActivity } from './ListeningActivity';
// export { SpeakingActivity } from './SpeakingActivity';

// ============================================
// USAGE EXAMPLE:
// ============================================
// Before (messy):
// import { QuizView } from '../components/activities/SharedActivities';
// import { FlashcardView } from '../components/activities/SharedActivities';
//
// After (clean):
// import { QuizView, FlashcardView, DaysView } from '../components/activities';
//
// or even cleaner:
// import * as Activities from '../components/activities';
// <Activities.QuizView ... />
// ============================================
