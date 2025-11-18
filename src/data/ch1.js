// Chapter 1: About Me - Data

export const chapter1Data = {
  title: "About Me",
  units: [
    {
      id: 1,
      title: "Galang from Kalimantan",
      activities: [
        {
          type: "vocab-match",
          title: "Personal Identity Vocabulary",
          instruction: "Match the words with their meanings",
          pairs: [
            { id: 1, word: "Name", meaning: "Nama", image: "👤" },
            { id: 2, word: "Age", meaning: "Umur", image: "🎂" },
            { id: 3, word: "Origin", meaning: "Asal", image: "🗺️" },
            { id: 4, word: "Address", meaning: "Alamat", image: "🏠" },
            { id: 5, word: "Hobby", meaning: "Hobi", image: "⚽" },
            { id: 6, word: "Sibling", meaning: "Saudara", image: "👨‍👩‍👧‍👦" },
          ],
        },
        {
          type: "fill-blank",
          title: "Complete Galang's Introduction",
          instruction: "Fill in the blanks with correct words",
          text: "Hello. My ____ is Galang. I'm ____ years old. I come from ____. I live on Jalan ____. I have two ____.",
          answers: ["name", "13", "Kalimantan", "Teratai", "sisters"],
          options: [
            "name",
            "13",
            "Kalimantan",
            "Teratai",
            "sisters",
            "brothers",
            "12",
            "Java",
          ],
        },
        {
          type: "conversation",
          title: "Greeting Practice",
          instruction: "Complete the conversation",
          dialogue: [
            { speaker: "Andre", text: "Hi! What's your name?" },
            { speaker: "You", text: "____ name is ____.", answer: "My" },
            { speaker: "Andre", text: "Where are you from?" },
            { speaker: "You", text: "I'm ____ Bali.", answer: "from" },
            { speaker: "Andre", text: "Nice to meet you!" },
            { speaker: "You", text: "Nice to meet you, ____!", answer: "too" },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "I Love Fishing",
      activities: [
        {
          type: "vocab-match",
          title: "Hobbies Vocabulary",
          instruction: "Match the hobbies with their pictures",
          pairs: [
            { id: 1, word: "Fishing", meaning: "Memancing", image: "🎣" },
            { id: 2, word: "Reading", meaning: "Membaca", image: "📚" },
            { id: 3, word: "Cycling", meaning: "Bersepeda", image: "🚴" },
            { id: 4, word: "Gaming", meaning: "Bermain game", image: "🎮" },
            { id: 5, word: "Drawing", meaning: "Menggambar", image: "🎨" },
            {
              id: 6,
              word: "Playing Badminton",
              meaning: "Main bulu tangkis",
              image: "🏸",
            },
          ],
        },
        {
          type: "frequency",
          title: "How Often?",
          instruction: "Match the frequency with activities",
          items: [
            { activity: "I go fishing", frequency: "once a week", emoji: "🎣" },
            {
              activity: "I play badminton",
              frequency: "twice a week",
              emoji: "🏸",
            },
            { activity: "I read novels", frequency: "every day", emoji: "📚" },
            { activity: "I play games", frequency: "sometimes", emoji: "🎮" },
          ],
        },
        {
          type: "pronoun-practice",
          title: "Pronouns: I, He, She, They",
          instruction: "Choose the correct pronoun",
          questions: [
            {
              sentence: "____ likes fishing.",
              options: ["I", "He", "She", "They"],
              answer: "He",
              subject: "Galang",
            },
            {
              sentence: "____ love manga.",
              options: ["I", "He", "She", "They"],
              answer: "They",
              subject: "Monita and Andre",
            },
            {
              sentence: "____ goes cycling.",
              options: ["I", "He", "She", "They"],
              answer: "She",
              subject: "Sinta",
            },
            {
              sentence: "____ like reading.",
              options: ["I", "He", "She", "They"],
              answer: "I",
              subject: "You",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      title: "My Friends and I",
      activities: [
        {
          type: "vocab-match",
          title: "Physical Features",
          instruction: "Match the words with meanings",
          pairs: [
            { id: 1, word: "Tall", meaning: "Tinggi", image: "🧍" },
            { id: 2, word: "Short", meaning: "Pendek", image: "🧒" },
            { id: 3, word: "Curly", meaning: "Keriting", image: "🦱" },
            { id: 4, word: "Straight", meaning: "Lurus", image: "💇" },
            { id: 5, word: "Friendly", meaning: "Ramah", image: "😊" },
            { id: 6, word: "Cheerful", meaning: "Ceria", image: "😄" },
          ],
        },
        {
          type: "describe-person",
          title: "Describe Your Friend",
          instruction: "Complete the description",
          template: {
            name: "",
            age: "",
            physicalTraits: [],
            personalityTraits: [],
            hobby: "",
            frequency: "",
          },
          options: {
            physicalTraits: [
              "tall",
              "short",
              "curly hair",
              "straight hair",
              "skinny",
              "chubby",
            ],
            personalityTraits: ["friendly", "cheerful", "honest", "kind"],
            frequency: [
              "every day",
              "once a week",
              "twice a week",
              "sometimes",
            ],
          },
        },
        {
          type: "verb-practice",
          title: "Present Simple Verbs",
          instruction: "Choose the correct verb form",
          questions: [
            {
              sentence: "He ____ basketball.",
              options: ["play", "plays"],
              answer: "plays",
            },
            {
              sentence: "They ____ to school.",
              options: ["go", "goes"],
              answer: "go",
            },
            {
              sentence: "She ____ books.",
              options: ["read", "reads"],
              answer: "reads",
            },
            {
              sentence: "We ____ soccer.",
              options: ["like", "likes"],
              answer: "like",
            },
          ],
        },
      ],
    },
  ],
};

export default chapter1Data;
