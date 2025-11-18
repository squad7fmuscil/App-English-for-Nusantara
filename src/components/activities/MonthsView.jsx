import { Card } from "../ui/Card";

export function MonthsView({ section, themeColor = "blue" }) {
  const { content } = section;

  const colorClasses = {
    blue: "text-blue-600 bg-blue-50",
    orange: "text-orange-600 bg-orange-50",
    green: "text-green-600 bg-green-50",
    purple: "text-purple-600 bg-purple-50",
    pink: "text-pink-600 bg-pink-50",
    gray: "text-gray-600 bg-gray-50",
  };

  const months = content.months || [
    { month: "January", emoji: "❄️", indonesian: "Januari", season: "Winter" },
    {
      month: "February",
      emoji: "💝",
      indonesian: "Februari",
      season: "Winter",
    },
    { month: "March", emoji: "🌸", indonesian: "Maret", season: "Spring" },
    { month: "April", emoji: "🌷", indonesian: "April", season: "Spring" },
    { month: "May", emoji: "🌺", indonesian: "Mei", season: "Spring" },
    { month: "June", emoji: "☀️", indonesian: "Juni", season: "Summer" },
    { month: "July", emoji: "🏖️", indonesian: "Juli", season: "Summer" },
    { month: "August", emoji: "🌞", indonesian: "Agustus", season: "Summer" },
    {
      month: "September",
      emoji: "🍂",
      indonesian: "September",
      season: "Fall",
    },
    { month: "October", emoji: "🎃", indonesian: "Oktober", season: "Fall" },
    { month: "November", emoji: "🍁", indonesian: "November", season: "Fall" },
    {
      month: "December",
      emoji: "🎄",
      indonesian: "Desember",
      season: "Winter",
    },
  ];

  return (
    <div className="space-y-6">
      {content.text && (
        <p className="text-lg text-gray-700 mb-6">{content.text}</p>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {months.map((item, idx) => (
          <Card
            key={idx}
            className={`text-center hover:shadow-xl transition-all ${
              colorClasses[themeColor].split(" ")[1]
            }`}>
            <div className="text-5xl mb-3">{item.emoji}</div>
            <div
              className={`text-xl font-bold ${
                colorClasses[themeColor].split(" ")[0]
              } mb-1`}>
              {item.month}
            </div>
            <div className="text-gray-600 mb-1">{item.indonesian}</div>
            {item.season && (
              <div className="text-xs text-gray-500 mt-2">({item.season})</div>
            )}
          </Card>
        ))}
      </div>

      {content.tips && (
        <div className="mt-8">
          <h3
            className={`text-2xl font-bold mb-4 ${
              colorClasses[themeColor].split(" ")[0]
            }`}>
            💡 Tips
          </h3>
          <div className="grid gap-3">
            {content.tips.map((tip, idx) => (
              <Card key={idx} className="bg-green-50">
                <p className="text-gray-700">{tip}</p>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
