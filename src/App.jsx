import { useState } from "react";
import { Home, BookOpen } from "lucide-react";
import { Button } from "./components/ui/Button";
import { Card } from "./components/ui/Card";

// Import Chapters
import Chapter0 from "./chapters/Chapter0";
import Chapter1 from "./chapters/Chapter1";
import Chapter2 from "./chapters/Chapter2";
import Chapter3 from "./chapters/Chapter3";
import Chapter4 from "./chapters/Chapter4";
import Chapter5 from "./chapters/Chapter5";

// Data
const chapters = [
  {
    id: 0,
    title: "The Beginning",
    color: "bg-gray-500",
    units: 1,
    desc: "Basics: Alphabets, Numbers, Time",
  },
  { id: 1, title: "About Me", color: "bg-blue-500", units: 3 },
  { id: 2, title: "Culinary and Me", color: "bg-orange-500", units: 3 },
  { id: 3, title: "Home Sweet Home", color: "bg-green-500", units: 3 },
  { id: 4, title: "My School Activities", color: "bg-purple-500", units: 3 },
  { id: 5, title: "This is My School", color: "bg-pink-500", units: 3 },
];

// Components
function ChapterCard({ chapter, onSelect }) {
  return (
    <Card hover onClick={() => onSelect(chapter.id)}>
      <div
        className={`${chapter.color} h-32 rounded-lg mb-4 flex items-center justify-center`}>
        <BookOpen size={48} className="text-white" />
      </div>
      <h3 className="text-xl font-bold mb-2">Chapter {chapter.id}</h3>
      <p className="text-gray-600 mb-3">{chapter.title}</p>
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
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            English for Nusantara
          </h1>
          <p className="text-xl text-gray-600">
            Interactive Learning for Grade 7
          </p>
        </div>

        {/* Chapters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {chapters.map((chapter) => (
            <ChapterCard
              key={chapter.id}
              chapter={chapter}
              onSelect={onSelectChapter}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm">
          <p>Kurikulum Merdeka • SMP Muslimin Cililin</p>
        </div>
      </div>
    </div>
  );
}

// Main App
export default function App() {
  const [currentChapter, setCurrentChapter] = useState(null);

  const renderChapter = () => {
    switch (currentChapter) {
      case 0:
        return <Chapter0 />;

      case 1:
        return <Chapter1 />;

      case 2:
        return <Chapter2 />;

      case 3:
        return <Chapter3 />;

      case 4:
        return <Chapter4 />;

      case 5:
        return <Chapter5 />;

      default:
        return <HomePage onSelectChapter={setCurrentChapter} />;
    }
  };

  return (
    <div className="min-h-screen">
      {currentChapter !== null && (
        <button
          onClick={() => setCurrentChapter(null)}
          className="fixed top-4 left-4 z-50 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all">
          <Home size={24} className="text-gray-700" />
        </button>
      )}
      {renderChapter()}
    </div>
  );
}
