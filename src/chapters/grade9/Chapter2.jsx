import { BookOpen, Construction } from "lucide-react";

export default function Chapter2() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-block bg-orange-500 text-white px-6 py-2 rounded-full mb-4">
              <span className="font-bold">KELAS 9</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Chapter 2</h1>
            <h2 className="text-2xl text-orange-600 mb-4">Love Our World</h2>
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
                  Chapter ini akan berisi materi tentang environment,
                  conservation, dan protecting nature.
                </p>
              </div>
            </div>
          </div>

          {/* Preview Info */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="font-bold text-orange-800 mb-3 flex items-center">
                <BookOpen className="mr-2" size={20} />
                Akan Dipelajari:
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Environmental Issues</li>
                <li>• Conservation</li>
                <li>• Protecting Nature</li>
                <li>• Imperative Sentences</li>
              </ul>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="font-bold text-amber-800 mb-3">
                📚 Units (Coming Soon):
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Unit 1: Our Environment</li>
                <li>• Unit 2: Save the Earth</li>
                <li>• Unit 3: Go Green</li>
              </ul>
            </div>
          </div>

          {/* Placeholder Image */}
          <div className="bg-gradient-to-br from-orange-100 to-amber-100 h-64 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <BookOpen size={80} className="text-orange-400 mx-auto mb-4" />
              <p className="text-orange-700 font-semibold text-lg">
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
