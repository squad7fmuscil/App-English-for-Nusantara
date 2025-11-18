import { BookOpen, Construction } from "lucide-react";

export default function Chapter0() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-block bg-gray-500 text-white px-6 py-2 rounded-full mb-4">
              <span className="font-bold">KELAS 9</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Chapter 0</h1>
            <h2 className="text-2xl text-gray-600 mb-4">
              My Uncle is a Zookeeper
            </h2>
          </div>

          {/* Coming Soon Notice */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6 rounded-lg">
            <div className="flex items-start">
              <Construction
                className="text-yellow-600 mr-4 flex-shrink-0 mt-1"
                size={32}
              />
              <div>
                <h3 className="text-xl font-bold text-yellow-800 mb-2">
                  🚧 Under Construction
                </h3>
                <p className="text-yellow-700 mb-2">
                  Materi untuk chapter ini sedang dalam proses pengembangan.
                </p>
                <p className="text-sm text-yellow-600">
                  Chapter ini akan berisi materi tentang profesi, kegiatan
                  sehari-hari, dan Simple Present Tense.
                </p>
              </div>
            </div>
          </div>

          {/* Preview Info */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center">
                <BookOpen className="mr-2" size={20} />
                Akan Dipelajari:
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Professions & Jobs</li>
                <li>• Daily Activities</li>
                <li>• Simple Present Tense</li>
                <li>• Describing Routines</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-blue-800 mb-3">
                📚 Units (Coming Soon):
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Unit 1: My Uncle's Job</li>
                <li>• Unit 2: Daily Routines</li>
                <li>• Unit 3: Describing Activities</li>
              </ul>
            </div>
          </div>

          {/* Placeholder Image */}
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-64 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <BookOpen size={80} className="text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 font-semibold text-lg">
                Content Coming Soon
              </p>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-8 text-center text-gray-500 text-sm">
            <p>Silakan cek kembali nanti untuk materi lengkap! 🎓</p>
          </div>
        </div>
      </div>
    </div>
  );
}
