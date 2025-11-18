export const ch5Data = {
  title: "This is My School",
  description:
    "Learn about school buildings, extracurricular activities, and school festivals",
  units: [
    {
      id: 1,
      title: "School Buildings",
      description: "Learn about different places in school",
    },
    {
      id: 2,
      title: "Extracurricular Activities",
      description: "Learn about clubs and after-school activities",
    },
    {
      id: 3,
      title: "School Festival",
      description: "Learn about school events and celebrations",
    },
  ],

  // SCHOOL BUILDINGS VOCABULARY
  buildingsVocabulary: {
    title: "Match School Buildings",
    instruction: "Match the school places with their meanings",
    pairs: [
      { id: 1, indonesian: "Ruang kelas", english: "Classroom", image: "🏫" },
      { id: 2, indonesian: "Perpustakaan", english: "Library", image: "📚" },
      { id: 3, indonesian: "Laboratorium", english: "Laboratory", image: "🔬" },
      { id: 4, indonesian: "Kantin", english: "Canteen", image: "🍽️" },
      { id: 5, indonesian: "Lapangan", english: "Field", image: "⚽" },
      { id: 6, indonesian: "Aula", english: "Hall", image: "🎭" },
      {
        id: 7,
        indonesian: "Ruang guru",
        english: "Teachers' room",
        image: "👨‍🏫",
      },
      { id: 8, indonesian: "Toilet", english: "Restroom", image: "🚻" },
    ],
  },

  // EXTRACURRICULAR VOCABULARY
  extracurricularVocabulary: {
    title: "Match Extracurricular Activities",
    instruction: "Match the clubs with their meanings",
    pairs: [
      {
        id: 1,
        indonesian: "Klub basket",
        english: "Basketball club",
        image: "🏀",
      },
      {
        id: 2,
        indonesian: "Klub sepak bola",
        english: "Football club",
        image: "⚽",
      },
      { id: 3, indonesian: "Klub musik", english: "Music club", image: "🎵" },
      { id: 4, indonesian: "Klub seni", english: "Art club", image: "🎨" },
      {
        id: 5,
        indonesian: "Klub bahasa Inggris",
        english: "English club",
        image: "🗣️",
      },
      { id: 6, indonesian: "Pramuka", english: "Scouts", image: "⛺" },
      {
        id: 7,
        indonesian: "Klub komputer",
        english: "Computer club",
        image: "💻",
      },
      { id: 8, indonesian: "Klub tari", english: "Dance club", image: "💃" },
    ],
  },

  // FESTIVAL VOCABULARY
  festivalVocabulary: {
    title: "School Festival Vocabulary",
    instruction: "Match festival activities",
    pairs: [
      {
        id: 1,
        indonesian: "Lomba menyanyi",
        english: "Singing contest",
        image: "🎤",
      },
      {
        id: 2,
        indonesian: "Pertunjukan tari",
        english: "Dance performance",
        image: "💃",
      },
      {
        id: 3,
        indonesian: "Pameran seni",
        english: "Art exhibition",
        image: "🖼️",
      },
      {
        id: 4,
        indonesian: "Bazar makanan",
        english: "Food bazaar",
        image: "🍔",
      },
      { id: 5, indonesian: "Permainan", english: "Games", image: "🎮" },
      { id: 6, indonesian: "Karnaval", english: "Carnival", image: "🎪" },
    ],
  },

  // FILL IN THE BLANK
  fillInTheBlank: {
    title: "Complete the Sentences",
    instruction: "Fill in the blanks with correct words",
    questions: [
      {
        id: 1,
        sentence: "Students study and read books in the _____.",
        answer: "library",
        options: ["library", "canteen", "field", "hall"],
      },
      {
        id: 2,
        sentence: "We do science experiments in the _____.",
        answer: "laboratory",
        options: ["laboratory", "classroom", "library", "canteen"],
      },
      {
        id: 3,
        sentence: "Students buy food and drinks at the _____.",
        answer: "canteen",
        options: ["canteen", "library", "hall", "field"],
      },
      {
        id: 4,
        sentence: "We play football on the _____.",
        answer: "field",
        options: ["field", "hall", "canteen", "library"],
      },
      {
        id: 5,
        sentence: "I joined the _____ club to learn guitar.",
        answer: "music",
        options: ["music", "art", "sports", "science"],
      },
      {
        id: 6,
        sentence: "My friend is in the _____ club. She loves painting.",
        answer: "art",
        options: ["art", "music", "sports", "English"],
      },
      {
        id: 7,
        sentence: "The school _____ is held every year in August.",
        answer: "festival",
        options: ["festival", "class", "meeting", "exam"],
      },
      {
        id: 8,
        sentence: "There will be a singing _____ at the festival.",
        answer: "contest",
        options: ["contest", "class", "test", "homework"],
      },
    ],
  },

  // DIALOGUES
  dialogues: [
    {
      id: 1,
      title: "School Tour",
      situation: "A new student tours the school",
      conversation: [
        { speaker: "Andre", text: "Hi! I'm new here. Can you show me around?" },
        { speaker: "Galang", text: "Sure! This is our classroom building." },
        { speaker: "Andre", text: "Where is the library?" },
        {
          speaker: "Galang",
          text: "It's on the second floor, next to the computer lab.",
        },
        { speaker: "Andre", text: "How about the canteen?" },
        { speaker: "Galang", text: "The canteen is behind the main building." },
      ],
    },
    {
      id: 2,
      title: "Joining a Club",
      situation: "Monita invites Pipit to join a club",
      conversation: [
        { speaker: "Monita", text: "Are you joining any clubs this year?" },
        { speaker: "Pipit", text: "Not yet. What club are you in?" },
        {
          speaker: "Monita",
          text: "I'm in the English club. We meet every Friday.",
        },
        {
          speaker: "Pipit",
          text: "That sounds interesting! What do you do there?",
        },
        {
          speaker: "Monita",
          text: "We practice speaking, play games, and watch movies.",
        },
        { speaker: "Pipit", text: "Great! Can I join too?" },
        { speaker: "Monita", text: "Of course! Come with me on Friday!" },
      ],
    },
    {
      id: 3,
      title: "Planning the School Festival",
      situation: "Students discuss the school festival",
      conversation: [
        {
          speaker: "Teacher",
          text: "Our school festival is next month. Any ideas?",
        },
        { speaker: "Galang", text: "Can we have a singing contest?" },
        { speaker: "Monita", text: "Yes! And a food bazaar too!" },
        { speaker: "Andre", text: "How about an art exhibition?" },
        { speaker: "Teacher", text: "Excellent ideas! Let's organize them." },
        { speaker: "Pipit", text: "I can help with the decorations!" },
      ],
    },
  ],

  // QUESTION FORMATION
  questionPractice: {
    title: "Ask About School",
    instruction: "Form questions using the given words",
    exercises: [
      {
        id: 1,
        words: ["where", "the", "library", "is", "?"],
        answer: "Where is the library?",
        type: "buildings",
      },
      {
        id: 2,
        words: ["how", "many", "classrooms", "there", "are", "?"],
        answer: "How many classrooms are there?",
        type: "buildings",
      },
      {
        id: 3,
        words: ["what", "club", "you", "in", "are", "?"],
        answer: "What club are you in?",
        type: "extracurricular",
      },
      {
        id: 4,
        words: ["when", "the", "club", "does", "meet", "?"],
        answer: "When does the club meet?",
        type: "extracurricular",
      },
      {
        id: 5,
        words: ["when", "the", "school", "festival", "is", "?"],
        answer: "When is the school festival?",
        type: "festival",
      },
      {
        id: 6,
        words: [
          "what",
          "activities",
          "there",
          "are",
          "at",
          "the",
          "festival",
          "?",
        ],
        answer: "What activities are there at the festival?",
        type: "festival",
      },
    ],
  },

  // TRUE OR FALSE
  trueOrFalse: {
    title: "True or False",
    instruction: "Read about SMP Merdeka and answer",
    text: "Welcome to SMP Merdeka! Our school has 12 classrooms, a library, two laboratories, and a large sports field. The library is on the second floor and opens from 7 AM to 3 PM. We have many extracurricular activities. The most popular clubs are basketball, music, and English club. Students can join up to two clubs. Every year in August, we hold a big school festival. There are singing contests, dance performances, art exhibitions, and a food bazaar. Last year, over 500 students and parents attended the festival. It's the most exciting event of the year!",
    statements: [
      { id: 1, statement: "SMP Merdeka has 10 classrooms.", answer: false },
      { id: 2, statement: "The library is on the second floor.", answer: true },
      { id: 3, statement: "The library closes at 5 PM.", answer: false },
      {
        id: 4,
        statement: "Basketball is one of the popular clubs.",
        answer: true,
      },
      { id: 5, statement: "Students can join three clubs.", answer: false },
      { id: 6, statement: "The school festival is in August.", answer: true },
      {
        id: 7,
        statement: "There is no food bazaar at the festival.",
        answer: false,
      },
      {
        id: 8,
        statement: "The school festival is very popular.",
        answer: true,
      },
    ],
  },

  // SCHOOL MAP ACTIVITY
  schoolMap: {
    title: "Our School Map",
    instruction: "Learn about the school layout",
    locations: [
      { name: "Main Gate", position: "front", description: "School entrance" },
      {
        name: "Classroom Building",
        position: "center",
        description: "3 floors, 12 classrooms",
      },
      {
        name: "Library",
        position: "2nd floor",
        description: "Books and reading area",
      },
      {
        name: "Laboratory",
        position: "3rd floor",
        description: "Science experiments",
      },
      { name: "Canteen", position: "back", description: "Food and drinks" },
      {
        name: "Sports Field",
        position: "left",
        description: "Football and basketball",
      },
      { name: "Hall", position: "right", description: "Events and assemblies" },
    ],
  },

  // DESCRIBING YOUR SCHOOL
  schoolDescription: {
    title: "Describe Your School",
    instruction: "Complete the description",
    template: [
      "My school name is _____.",
      "It has _____ classrooms.",
      "The library is _____. (location)",
      "I am in the _____ club.",
      "My favorite place at school is _____.",
    ],
    examples: [
      {
        description:
          "My school name is SMP Merdeka. It has twelve classrooms. The library is on the second floor. I am in the music club. My favorite place at school is the sports field because I love playing football.",
      },
    ],
  },
};
