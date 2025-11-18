import { Card } from "../ui/Card";

export function LessonView({ section, themeColor = "blue" }) {
  const { content } = section;

  const colorClasses = {
    blue: "text-blue-600",
    orange: "text-orange-600",
    green: "text-green-600",
    purple: "text-purple-600",
    pink: "text-pink-600",
    gray: "text-gray-600",
  };

  return (
    <div className="space-y-6">
      <p className="text-lg text-gray-700 mb-6">{content.text}</p>

      {content.vocabulary && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {content.vocabulary.map((item, idx) => (
            <Card
              key={idx}
              className="text-center hover:shadow-xl transition-all">
              <div className="text-5xl mb-3">{item.image}</div>
              <div
                className={`text-xl font-bold ${colorClasses[themeColor]} mb-1`}>
                {item.letter || item.word}
              </div>
              <div className="text-gray-600">
                {item.translation || item.example || item.sound}
              </div>
              {item.room && (
                <div className="text-xs text-gray-500 mt-2">{item.room}</div>
              )}
            </Card>
          ))}
        </div>
      )}

      {content.numbers && (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {content.numbers.map((item, idx) => (
            <Card key={idx} className="text-center">
              <div
                className={`text-3xl font-bold ${colorClasses[themeColor]} mb-2`}>
                {item.num}
              </div>
              <div className="text-gray-700 font-semibold">{item.word}</div>
            </Card>
          ))}
        </div>
      )}

      {content.tips && (
        <div className="mt-8">
          <h3 className={`text-2xl font-bold mb-4 ${colorClasses[themeColor]}`}>
            💡 Tips
          </h3>
          <div className="grid gap-3">
            {content.tips.map((item, idx) => (
              <Card key={idx} className="bg-green-50">
                <div className="flex justify-between items-center">
                  <div className="text-gray-700 font-semibold">{item.tip}</div>
                  <div className="text-gray-500 text-sm">{item.indonesian}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {content.phrases && (
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Useful Phrases:</h3>
          <div className="grid gap-3">
            {content.phrases.map((item, idx) => (
              <Card key={idx} className="bg-green-50">
                <div className="flex justify-between items-center">
                  <div className="text-gray-700 font-semibold">
                    {item.english}
                  </div>
                  <div className="text-gray-500 text-sm">{item.indonesian}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
