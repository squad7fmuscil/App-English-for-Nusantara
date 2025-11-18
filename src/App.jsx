import { useState, lazy, Suspense } from "react";
import { BookOpen, Loader2, GraduationCap, ChevronRight } from "lucide-react";

// Grade data structure with lazy loaded components
const grades = {
  7: {
    title: "Kelas 7",
    color: "from-blue-500 to-blue-600",
    chapters: [
      {
        id: 0,
        title: "The Beginning",
        color: "bg-gray-500",
        units: 1,
        desc: "Basics: Alphabets, Numbers, Time",
        component: lazy(() => import("./chapters/grade7/Chapter0")), // ✅ FIXED
      },
      {
        id: 1,
        title: "About Me",
        color: "bg-blue-500",
        units: 3,
        component: lazy(() => import("./chapters/grade7/Chapter1")), // ✅ FIXED
      },
      {
        id: 2,
        title: "Culinary and Me",
        color: "bg-orange-500",
        units: 3,
        component: lazy(() => import("./chapters/grade7/Chapter2")), // ✅ FIXED
      },
      {
        id: 3,
        title: "Home Sweet Home",
        color: "bg-green-500",
        units: 3,
        component: lazy(() => import("./chapters/grade7/Chapter3")), // ✅ FIXED
      },
      {
        id: 4,
        title: "My School Activities",
        color: "bg-purple-500",
        units: 3,
        component: lazy(() => import("./chapters/grade7/Chapter4")), // ✅ FIXED
      },
      {
        id: 5,
        title: "This is My School",
        color: "bg-pink-500",
        units: 3,
        component: lazy(() => import("./chapters/grade7/Chapter5")), // ✅ FIXED
      },
    ],
  },
  8: {
    title: "Kelas 8",
    color: "from-green-500 to-green-600",
    chapters: [
      {
        id: 0,
        title: "My Uncle is a Zookeeper",
        color: "bg-gray-500",
        units: 3,
        component: lazy(() => import("./chapters/grade8/Chapter0")), // ✅ READY FOR FUTURE
      },
      {
        id: 1,
        title: "Kindness Begins with Me",
        color: "bg-blue-500",
        units: 3,
        component: lazy(() => import("./chapters/grade8/Chapter1")), // ✅ READY FOR FUTURE
      },
      {
        id: 2,
        title: "Love Our World",
        color: "bg-orange-500",
        units: 3,
        component: lazy(() => import("./chapters/grade8/Chapter2")), // ✅ READY FOR FUTURE
      },
      {
        id: 3,
        title: "Celebrating Independence Day",
        color: "bg-green-500",
        units: 3,
        component: lazy(() => import("./chapters/grade8/Chapter3")), // ✅ READY FOR FUTURE
      },
      {
        id: 4,
        title: "Embrace Yourself",
        color: "bg-purple-500",
        units: 3,
        component: lazy(() => import("./chapters/grade8/Chapter4")), // ✅ READY FOR FUTURE
      },
      {
        id: 5,
        title: "I'm Proud of My School",
        color: "bg-pink-500",
        units: 3,
        component: lazy(() => import("./chapters/grade8/Chapter5")), // ✅ READY FOR FUTURE
      },
    ],
  },
  9: {
    title: "Kelas 9",
    color: "from-purple-500 to-purple-600",
    chapters: [
      {
        id: 0,
        title: "Exploring Fauna of Indonesia",
        color: "bg-gray-500",
        units: 3,
        component: lazy(() => import("./chapters/grade9/Chapter0")), // ✅ READY FOR FUTURE
      },
      {
        id: 1,
        title: "Taking Trips",
        color: "bg-blue-500",
        units: 3,
        component: lazy(() => import("./chapters/grade9/Chapter1")), // ✅ READY FOR FUTURE
      },
      {
        id: 2,
        title: "My School's Moments",
        color: "bg-orange-500",
        units: 3,
        component: lazy(() => import("./chapters/grade9/Chapter2")), // ✅ READY FOR FUTURE
      },
      {
        id: 3,
        title: "Upcycling Used Materials",
        color: "bg-green-500",
        units: 3,
        component: lazy(() => import("./chapters/grade9/Chapter3")), // ✅ READY FOR FUTURE
      },
      {
        id: 4,
        title: "Consuming Healthy Foods",
        color: "bg-purple-500",
        units: 3,
        component: lazy(() => import("./chapters/grade9/Chapter4")), // ✅ READY FOR FUTURE
      },
      {
        id: 5,
        title: "Dreams Come True",
        color: "bg-pink-500",
        units: 3,
        component: lazy(() => import("./chapters/grade9/Chapter5")), // ✅ READY FOR FUTURE
      },
    ],
  },
};

// Card Components
function Card({ children, onClick, hover }) {
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-xl p-6 shadow-md transition-all duration-300 ${
        hover ? "cursor-pointer hover:shadow-xl hover:-translate-y-1" : ""
      }`}>
      {children}
    </div>
  );
}

function Loader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="text-center">
        <Loader2 className="w-16 h-16 animate-spin text-blue-500 mx-auto mb-4" />
        <p className="text-xl text-gray-600">Loading chapter...</p>
      </div>
    </div>
  );
}

// Grade Selection Card
function GradeCard({ gradeNum, gradeData, onSelect }) {
  const totalChapters = gradeData.chapters.length;

  return (
    <Card hover onClick={() => onSelect(gradeNum)}>
      <div
        className={`bg-gradient-to-br ${gradeData.color} h-40 rounded-lg mb-4 flex flex-col items-center justify-center text-white transition-transform hover:scale-105`}>
        <GraduationCap size={56} className="mb-2" />
        <h3 className="text-2xl font-bold">{gradeData.title}</h3>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-gray-600">{totalChapters} Chapters</span>
        <ChevronRight className="text-blue-600" size={24} />
      </div>
    </Card>
  );
}

// Chapter Card
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

// Grade Selection Page
function GradeSelectionPage({ onSelectGrade }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            English For Nusantara
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Interactive English Learning
          </p>
          <p className="text-md text-gray-500">
            Kurikulum Merdeka • SMP Muslimin Cililin
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
            Pilih Kelas Kamu
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(grades).map(([gradeNum, gradeData]) => (
              <GradeCard
                key={gradeNum}
                gradeNum={gradeNum}
                gradeData={gradeData}
                onSelect={onSelectGrade}
              />
            ))}
          </div>
        </div>

        <div className="text-center text-gray-400 text-sm mt-12">
          <p>© 2025 English For Nusantara</p>
        </div>
      </div>
    </div>
  );
}

// Chapters Page
function ChaptersPage({ grade, onSelectChapter, onBack }) {
  const gradeData = grades[grade];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="mb-6 flex items-center text-gray-600 hover:text-gray-800 transition-colors">
          <ChevronRight className="rotate-180 mr-2" size={20} />
          <span>Kembali ke Pilihan Kelas</span>
        </button>

        {/* Header */}
        <div className="text-center mb-12">
          <div
            className={`inline-block bg-gradient-to-r ${gradeData.color} text-white px-6 py-2 rounded-full mb-4`}>
            <h2 className="text-2xl font-bold">{gradeData.title}</h2>
          </div>
        </div>

        {/* Chapters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gradeData.chapters.map((chapter) => (
            <ChapterCard
              key={chapter.id}
              chapter={chapter}
              onSelect={onSelectChapter}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Placeholder Chapter Component (for chapters without content yet)
function ChapterPlaceholder({ grade, chapterId, onBack }) {
  const gradeData = grades[grade];
  const chapter = gradeData.chapters.find((ch) => ch.id === chapterId);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={onBack}
          className="mb-6 flex items-center text-gray-600 hover:text-gray-800 transition-colors">
          <ChevronRight className="rotate-180 mr-2" size={20} />
          <span>Kembali ke Chapters</span>
        </button>

        <Card>
          <div
            className={`${chapter.color} h-48 rounded-lg mb-6 flex items-center justify-center`}>
            <BookOpen size={80} className="text-white" />
          </div>

          <h1 className="text-3xl font-bold mb-2">
            Kelas {grade} - Chapter {chapter.id}
          </h1>
          <h2 className="text-2xl text-gray-600 mb-4">{chapter.title}</h2>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <p className="text-yellow-800">
              <strong>Coming Soon!</strong> Chapter content will be loaded here.
            </p>
            <p className="text-sm text-yellow-700 mt-2">
              Materi untuk chapter ini sedang dalam pengembangan. Nanti bakal
              dimuat dari:{" "}
              <code>
                chapters/grade{grade}/Chapter{chapterId}.jsx
              </code>
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">
              Struktur yang Direkomendasikan:
            </h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>
                • <code>src/chapters/grade7/Chapter0.jsx</code> - Chapter 0
                Kelas 7 ✅
              </li>
              <li>
                • <code>src/chapters/grade8/Chapter0.jsx</code> - Chapter 0
                Kelas 8 (Coming Soon)
              </li>
              <li>
                • <code>src/chapters/grade9/Chapter0.jsx</code> - Chapter 0
                Kelas 9 (Coming Soon)
              </li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
}

// Main App
export default function App() {
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);

  const handleGradeSelect = (grade) => {
    setSelectedGrade(grade);
    setSelectedChapter(null);
  };

  const handleChapterSelect = (chapterId) => {
    setSelectedChapter(chapterId);
  };

  const handleBackToGrades = () => {
    setSelectedGrade(null);
    setSelectedChapter(null);
  };

  const handleBackToChapters = () => {
    setSelectedChapter(null);
  };

  // Get current grade and chapter data
  const gradeData = selectedGrade ? grades[selectedGrade] : null;
  const currentChapter =
    gradeData && selectedChapter !== null
      ? gradeData.chapters.find((ch) => ch.id === selectedChapter)
      : null;
  const ChapterComponent = currentChapter?.component;

  // Show appropriate view
  if (selectedGrade === null) {
    return <GradeSelectionPage onSelectGrade={handleGradeSelect} />;
  }

  if (selectedChapter === null) {
    return (
      <ChaptersPage
        grade={selectedGrade}
        onSelectChapter={handleChapterSelect}
        onBack={handleBackToGrades}
      />
    );
  }

  // Load actual chapter component if exists
  if (ChapterComponent) {
    return (
      <Suspense fallback={<Loader />}>
        <div className="min-h-screen">
          <div className="bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-8 py-4">
              <button
                onClick={handleBackToChapters}
                className="flex items-center text-gray-600 hover:text-gray-800 transition-colors">
                <ChevronRight className="rotate-180 mr-2" size={20} />
                <span>Kembali ke Chapters</span>
              </button>
            </div>
          </div>
          <ChapterComponent />
        </div>
      </Suspense>
    );
  }

  // If component doesn't exist yet, show placeholder
  return (
    <ChapterPlaceholder
      grade={selectedGrade}
      chapterId={selectedChapter}
      onBack={handleBackToChapters}
    />
  );
}
