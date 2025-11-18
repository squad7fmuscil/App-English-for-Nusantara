export const ch0Data = {
  id: 0,
  title: "The Beginning",
  color: "bg-gray-500",
  description: "Learn the basics: Alphabets, Numbers, and Time",

  units: [
    {
      id: 1,
      title: "English Alphabet & Basic Sounds",
      description: "Learn letters A-Z and their sounds",

      sections: [
        {
          id: 1,
          type: "lesson",
          title: "The Alphabet",
          content: {
            text: "The English alphabet has 26 letters. Let's learn them!",
            vocabulary: [
              { letter: "A", sound: "/eɪ/", example: "Apple" },
              { letter: "B", sound: "/biː/", example: "Ball" },
              { letter: "C", sound: "/siː/", example: "Cat" },
              { letter: "D", sound: "/diː/", example: "Dog" },
              { letter: "E", sound: "/iː/", example: "Elephant" },
              { letter: "F", sound: "/ɛf/", example: "Fish" },
              { letter: "G", sound: "/dʒiː/", example: "Goat" },
              { letter: "H", sound: "/eɪtʃ/", example: "Hat" },
              { letter: "I", sound: "/aɪ/", example: "Ice" },
              { letter: "J", sound: "/dʒeɪ/", example: "Juice" },
              { letter: "K", sound: "/keɪ/", example: "Kite" },
              { letter: "L", sound: "/ɛl/", example: "Lion" },
              { letter: "M", sound: "/ɛm/", example: "Monkey" },
              { letter: "N", sound: "/ɛn/", example: "Nest" },
              { letter: "O", sound: "/oʊ/", example: "Orange" },
              { letter: "P", sound: "/piː/", example: "Pen" },
              { letter: "Q", sound: "/kjuː/", example: "Queen" },
              { letter: "R", sound: "/ɑːr/", example: "Rabbit" },
              { letter: "S", sound: "/ɛs/", example: "Sun" },
              { letter: "T", sound: "/tiː/", example: "Tiger" },
              { letter: "U", sound: "/juː/", example: "Umbrella" },
              { letter: "V", sound: "/viː/", example: "Van" },
              { letter: "W", sound: "/ˈdʌbəl.juː/", example: "Water" },
              { letter: "X", sound: "/ɛks/", example: "Box" },
              { letter: "Y", sound: "/waɪ/", example: "Yellow" },
              { letter: "Z", sound: "/ziː/", example: "Zebra" },
            ],
          },
        },

        {
          id: 2,
          type: "flashcard",
          title: "Alphabet Flashcards",
          content: {
            cards: [
              { front: "A", back: "Apple", image: "🍎" },
              { front: "B", back: "Ball", image: "⚽" },
              { front: "C", back: "Cat", image: "🐱" },
              { front: "D", back: "Dog", image: "🐕" },
              { front: "E", back: "Elephant", image: "🐘" },
              { front: "F", back: "Fish", image: "🐟" },
              { front: "G", back: "Goat", image: "🐐" },
              { front: "H", back: "Hat", image: "🎩" },
              { front: "I", back: "Ice", image: "🧊" },
              { front: "J", back: "Juice", image: "🧃" },
            ],
          },
        },

        {
          id: 3,
          type: "quiz",
          title: "Alphabet Quiz",
          content: {
            questions: [
              {
                id: 1,
                question: "What letter comes after B?",
                options: ["A", "C", "D", "E"],
                correct: 1,
                explanation: "C comes after B in the alphabet.",
              },
              {
                id: 2,
                question: "Which word starts with the letter 'D'?",
                options: ["Cat", "Dog", "Apple", "Fish"],
                correct: 1,
                explanation: "Dog starts with the letter D.",
              },
              {
                id: 3,
                question: "How many letters are in the English alphabet?",
                options: ["24", "25", "26", "27"],
                correct: 2,
                explanation: "The English alphabet has 26 letters.",
              },
            ],
          },
        },

        {
          id: 4,
          type: "dragdrop",
          title: "Match Letters to Words",
          content: {
            instruction: "Drag the letter to match the correct word",
            pairs: [
              {
                id: 1,
                left: "A",
                right: "Apple",
                leftEmoji: "🔤",
                rightEmoji: "🍎",
              },
              {
                id: 2,
                left: "B",
                right: "Ball",
                leftEmoji: "🔤",
                rightEmoji: "⚽",
              },
              {
                id: 3,
                left: "C",
                right: "Cat",
                leftEmoji: "🔤",
                rightEmoji: "🐱",
              },
              {
                id: 4,
                left: "D",
                right: "Dog",
                leftEmoji: "🔤",
                rightEmoji: "🐕",
              },
              {
                id: 5,
                left: "E",
                right: "Elephant",
                leftEmoji: "🔤",
                rightEmoji: "🐘",
              },
            ],
          },
        },
      ],
    },

    {
      id: 2,
      title: "Numbers 1-100",
      description: "Learn to count in English",

      sections: [
        {
          id: 1,
          type: "lesson",
          title: "Numbers 1-20",
          content: {
            text: "Let's learn numbers in English!",
            numbers: [
              { num: 1, word: "one" },
              { num: 2, word: "two" },
              { num: 3, word: "three" },
              { num: 4, word: "four" },
              { num: 5, word: "five" },
              { num: 6, word: "six" },
              { num: 7, word: "seven" },
              { num: 8, word: "eight" },
              { num: 9, word: "nine" },
              { num: 10, word: "ten" },
              { num: 11, word: "eleven" },
              { num: 12, word: "twelve" },
              { num: 13, word: "thirteen" },
              { num: 14, word: "fourteen" },
              { num: 15, word: "fifteen" },
              { num: 16, word: "sixteen" },
              { num: 17, word: "seventeen" },
              { num: 18, word: "eighteen" },
              { num: 19, word: "nineteen" },
              { num: 20, word: "twenty" },
            ],
          },
        },

        {
          id: 2,
          type: "quiz",
          title: "Numbers Quiz",
          content: {
            questions: [
              {
                id: 1,
                question: "How do you spell the number 3?",
                options: ["tree", "three", "thre", "thee"],
                correct: 1,
                explanation: "The number 3 is spelled 'three'.",
              },
              {
                id: 2,
                question: "What number is 'fifteen'?",
                options: ["5", "50", "15", "14"],
                correct: 2,
                explanation: "Fifteen is the number 15.",
              },
              {
                id: 3,
                question: "What comes after nineteen?",
                options: ["eighteen", "twenty", "twenteen", "ninety"],
                correct: 1,
                explanation: "Twenty comes after nineteen.",
              },
            ],
          },
        },

        {
          id: 3,
          type: "matching",
          title: "Match Numbers",
          content: {
            instruction: "Match the number with its word",
            pairs: [
              { left: "7", right: "seven" },
              { left: "12", right: "twelve" },
              { left: "18", right: "eighteen" },
              { left: "5", right: "five" },
              { left: "20", right: "twenty" },
            ],
          },
        },
      ],
    },

    {
      id: 3,
      title: "Telling Time",
      description: "Learn to read and tell time",

      sections: [
        {
          id: 1,
          type: "lesson",
          title: "Basic Time Expressions",
          content: {
            text: "Let's learn how to tell time in English!",
            vocabulary: [
              {
                time: "1:00",
                expression: "one o'clock",
                indonesian: "jam satu",
              },
              {
                time: "2:15",
                expression: "two fifteen / quarter past two",
                indonesian: "jam dua seperempat",
              },
              {
                time: "3:30",
                expression: "three thirty / half past three",
                indonesian: "jam tiga setengah",
              },
              {
                time: "4:45",
                expression: "four forty-five / quarter to five",
                indonesian: "jam lima kurang seperempat",
              },
              {
                time: "12:00 AM",
                expression: "midnight",
                indonesian: "tengah malam",
              },
              {
                time: "12:00 PM",
                expression: "noon / midday",
                indonesian: "tengah hari",
              },
            ],
            phrases: [
              { english: "What time is it?", indonesian: "Jam berapa?" },
              { english: "It's seven o'clock", indonesian: "Ini jam tujuh" },
              { english: "in the morning", indonesian: "pagi" },
              { english: "in the afternoon", indonesian: "siang/sore" },
              { english: "in the evening", indonesian: "malam" },
            ],
          },
        },

        {
          id: 2,
          type: "quiz",
          title: "Time Quiz",
          content: {
            questions: [
              {
                id: 1,
                question: "How do you say '3:00' in English?",
                options: [
                  "three hours",
                  "three o'clock",
                  "three times",
                  "three clocks",
                ],
                correct: 1,
                explanation: "We say 'three o'clock' for 3:00.",
              },
              {
                id: 2,
                question: "What time is 'half past four'?",
                options: ["4:15", "4:30", "4:45", "5:00"],
                correct: 1,
                explanation: "Half past four means 4:30.",
              },
              {
                id: 3,
                question: "What is 12:00 PM called?",
                options: ["midnight", "noon", "morning", "evening"],
                correct: 1,
                explanation: "12:00 PM is called noon or midday.",
              },
            ],
          },
        },

        {
          id: 3,
          type: "dragdrop",
          title: "Match Time Expressions",
          content: {
            instruction: "Match the time with its English expression",
            pairs: [
              {
                id: 1,
                left: "1:00",
                right: "one o'clock",
                leftEmoji: "🕐",
                rightEmoji: "📝",
              },
              {
                id: 2,
                left: "2:30",
                right: "half past two",
                leftEmoji: "🕝",
                rightEmoji: "📝",
              },
              {
                id: 3,
                left: "3:15",
                right: "quarter past three",
                leftEmoji: "🕒",
                rightEmoji: "📝",
              },
              {
                id: 4,
                left: "4:45",
                right: "quarter to five",
                leftEmoji: "🕟",
                rightEmoji: "📝",
              },
              {
                id: 5,
                left: "12:00",
                right: "noon",
                leftEmoji: "🕛",
                rightEmoji: "📝",
              },
            ],
          },
        },
      ],
    },
  ],

  // Overall chapter vocabulary
  vocabulary: [
    { word: "alphabet", translation: "abjad", category: "basics" },
    { word: "letter", translation: "huruf", category: "basics" },
    { word: "number", translation: "angka", category: "basics" },
    { word: "time", translation: "waktu", category: "basics" },
    { word: "clock", translation: "jam", category: "basics" },
    { word: "hour", translation: "jam (durasi)", category: "basics" },
    { word: "minute", translation: "menit", category: "basics" },
  ],
};
