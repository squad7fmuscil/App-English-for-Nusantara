import { useState, lazy, Suspense } from "react";
import { BookOpen, Loader2 } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { Card } from "./components/ui/Card";
import MainLayout from "./components/layout/MainLayout";
import PageTransition from "./components/PageTransition";

// Chapter data with lazy loading
const chapters = [
  {
    id: 0,
    title: "The Beginning",
    color: "bg-gray-500",
    units: 1,
    desc: "Basics: Alphabets, Numbers, Time",
    component: lazy(() => import("./chapters/Chapter0")),
  },
  {
    id: 1,
    title: "About Me",
    color: "bg-blue-500",
    units: 3,
    component: lazy(() => import("./chapters/Chapter1")),
  },
  {
    id: 2,
    title: "Culinary and Me",
    color: "bg-orange-500",
    units: 3,
    component: lazy(() => import("./chapters/Chapter2")),
  },
  {
    id: 3,
    title: "Home Sweet Home",
    color: "bg-green-500",
    units: 3,
    component: lazy(() => import("./chapters/Chapter3")),
  },
  {
    id: 4,
    title: "My School Activities",
    color: "bg-purple-500",
    units: 3,
    component: lazy(() => import("./chapters/Chapter4")),
  },
  {
    id: 5,
    title: "This is My School",
    color: "bg-pink-500",
    units: 3,
    component: lazy(() => import("./chapters/Chapter5")),
  },
];

function ChapterLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="text-center">
        <Loader2 className="w-16 h-16 animate-spin text-blue-500 mx-auto mb-4" />
        <p className="text-xl text-gray-600">Loading chapter...</p>
      </div>
    </div>
  );
}

function ChapterCard({ chapter, onSelect }) {
  return (
    <Card hover onClick={() => onSelect(chapter.id)}>
      <div
        className={`${chapter.color} h-32 rounded-lg mb-4 flex items-center justify-center transition-transform hover:scale-105`}>
        <BookOpen size={48} className="text-white" />
      </div>
      <h3 className="text-xl font-bold mb-2">Chapter {chapter.id}</h3>
      <p className="text-gray-600 mb-3">{chapter.title}</p>
      {chapter.desc && (
        <p className="text-sm text-gray-500 mb-3">{chapter.desc}</p>
      )}
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>{chapter.units} Units</span>
        <span className="text-blue-600 font-semibold">Start →</span>
      </div>
    </Card>
  );
}

function HomePage({ onSelectChapter }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            English for Nusantara
          </h1>
          <p className="text-xl text-gray-600">
            Interactive Learning for Grade 7
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {chapters.map((chapter) => (
            <ChapterCard
              key={chapter.id}
              chapter={chapter}
              onSelect={onSelectChapter}
            />
          ))}
        </div>

        <div className="text-center text-gray-500 text-sm">
          <p>Kurikulum Merdeka • SMP Muslimin Cililin</p>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [currentChapter, setCurrentChapter] = useState(null);
  const activeChapter = chapters.find((ch) => ch.id === currentChapter);
  const ChapterComponent = activeChapter?.component;

  return (
    <MainLayout
      showHomeButton={currentChapter !== null}
      onHomeClick={() => setCurrentChapter(null)}>
      {currentChapter === null ? (
        <HomePage onSelectChapter={setCurrentChapter} />
      ) : (
        <Suspense fallback={<ChapterLoader />}>
          {ChapterComponent && <ChapterComponent />}
        </Suspense>
      )}
    </MainLayout>
  );
}
