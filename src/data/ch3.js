export const ch3Data = {
  title: "Home Sweet Home",
  description: "Learn about rooms, house chores, and cleaning activities",
  units: [
    {
      id: 1,
      title: "My House",
      description: "Learn about different rooms in a house",
    },
    {
      id: 2,
      title: "My House Chores",
      description: "Learn about household chores and responsibilities",
    },
    {
      id: 3,
      title: "Let's Clean Up!",
      description: "Practice cleaning activities and teamwork",
    },
  ],

  // VOCABULARY ACTIVITIES
  vocabularyMatching: {
    title: "Match the Rooms",
    instruction: "Match the room names with their descriptions",
    pairs: [
      { id: 1, indonesian: "Kamar tidur", english: "Bedroom", image: "🛏️" },
      { id: 2, indonesian: "Dapur", english: "Kitchen", image: "🍳" },
      { id: 3, indonesian: "Kamar mandi", english: "Bathroom", image: "🚿" },
      { id: 4, indonesian: "Ruang tamu", english: "Living room", image: "🛋️" },
      { id: 5, indonesian: "Ruang makan", english: "Dining room", image: "🍽️" },
      { id: 6, indonesian: "Garasi", english: "Garage", image: "🚗" },
      { id: 7, indonesian: "Taman", english: "Garden", image: "🌳" },
      { id: 8, indonesian: "Halaman", english: "Yard", image: "🏡" },
    ],
  },

  // HOUSE CHORES VOCABULARY
  choresVocabulary: {
    title: "House Chores Vocabulary",
    instruction: "Match the chores with their meanings",
    pairs: [
      {
        id: 1,
        indonesian: "Menyapu lantai",
        english: "Sweep the floor",
        image: "🧹",
      },
      {
        id: 2,
        indonesian: "Mengepel lantai",
        english: "Mop the floor",
        image: "🪣",
      },
      {
        id: 3,
        indonesian: "Mencuci piring",
        english: "Wash the dishes",
        image: "🍽️",
      },
      {
        id: 4,
        indonesian: "Mencuci baju",
        english: "Do the laundry",
        image: "👕",
      },
      { id: 5, indonesian: "Menyetrika", english: "Iron clothes", image: "👔" },
      {
        id: 6,
        indonesian: "Merapikan tempat tidur",
        english: "Make the bed",
        image: "🛏️",
      },
      {
        id: 7,
        indonesian: "Membuang sampah",
        english: "Take out the trash",
        image: "🗑️",
      },
      {
        id: 8,
        indonesian: "Menyiram tanaman",
        english: "Water the plants",
        image: "💧",
      },
    ],
  },

  // FILL IN THE BLANK
  fillInTheBlank: {
    title: "Complete the Sentences",
    instruction: "Fill in the blanks with the correct words",
    questions: [
      {
        id: 1,
        sentence: "I sleep in the _____.",
        answer: "bedroom",
        options: ["bedroom", "kitchen", "bathroom", "garage"],
      },
      {
        id: 2,
        sentence: "Mom cooks in the _____.",
        answer: "kitchen",
        options: ["bedroom", "kitchen", "living room", "garage"],
      },
      {
        id: 3,
        sentence: "We eat together in the _____.",
        answer: "dining room",
        options: ["bedroom", "bathroom", "dining room", "garage"],
      },
      {
        id: 4,
        sentence: "I _____ the floor every morning.",
        answer: "sweep",
        options: ["sweep", "cook", "sleep", "watch"],
      },
      {
        id: 5,
        sentence: "Dad _____ the dishes after dinner.",
        answer: "washes",
        options: ["washes", "makes", "takes", "irons"],
      },
      {
        id: 6,
        sentence: "My sister _____ her bed every day.",
        answer: "makes",
        options: ["sweeps", "washes", "makes", "mops"],
      },
      {
        id: 7,
        sentence: "I _____ out the trash on Monday.",
        answer: "take",
        options: ["take", "make", "do", "sweep"],
      },
      {
        id: 8,
        sentence: "We _____ the plants in the garden.",
        answer: "water",
        options: ["water", "sweep", "wash", "iron"],
      },
    ],
  },

  // CHORES SCHEDULE
  choresSchedule: {
    title: "Weekly Chores Schedule",
    instruction: "Match the day with the correct chore",
    schedule: [
      { day: "Monday", chore: "Sweep the floor", person: "Galang" },
      { day: "Tuesday", chore: "Wash the dishes", person: "Monita" },
      { day: "Wednesday", chore: "Do the laundry", person: "Mom" },
      { day: "Thursday", chore: "Water the plants", person: "Dad" },
      { day: "Friday", chore: "Take out the trash", person: "Galang" },
      { day: "Saturday", chore: "Mop the floor", person: "Monita" },
      { day: "Sunday", chore: "Clean the bathroom", person: "Everyone" },
    ],
  },

  // DIALOGUE PRACTICE
  dialogues: [
    {
      id: 1,
      title: "Asking About the House",
      situation: "Andre visits Galang's house",
      conversation: [
        { speaker: "Andre", text: "Wow, your house is nice!" },
        { speaker: "Galang", text: "Thank you! Let me show you around." },
        { speaker: "Andre", text: "How many bedrooms do you have?" },
        { speaker: "Galang", text: "We have three bedrooms upstairs." },
        { speaker: "Andre", text: "Do you have a garden?" },
        {
          speaker: "Galang",
          text: "Yes, we have a small garden in the backyard.",
        },
      ],
    },
    {
      id: 2,
      title: "Talking About Chores",
      situation: "Monita asks Galang about his chores",
      conversation: [
        { speaker: "Monita", text: "What chores do you do at home?" },
        {
          speaker: "Galang",
          text: "I sweep the floor and take out the trash.",
        },
        { speaker: "Monita", text: "When do you do them?" },
        {
          speaker: "Galang",
          text: "I sweep every morning and take out trash on Monday.",
        },
        {
          speaker: "Monita",
          text: "That's good! I wash the dishes after meals.",
        },
        { speaker: "Galang", text: "We all help at home." },
      ],
    },
    {
      id: 3,
      title: "Let's Clean Up!",
      situation: "Friends cleaning the classroom together",
      conversation: [
        { speaker: "Teacher", text: "Let's clean up the classroom!" },
        { speaker: "Galang", text: "I will sweep the floor." },
        { speaker: "Monita", text: "I will arrange the chairs." },
        { speaker: "Andre", text: "I will clean the board." },
        { speaker: "Pipit", text: "I will water the plants." },
        { speaker: "Teacher", text: "Great teamwork, everyone!" },
      ],
    },
  ],

  // QUESTION FORMATION
  questionPractice: {
    title: "Ask Questions About the House",
    instruction: "Form questions using the given words",
    exercises: [
      {
        id: 1,
        words: ["many", "rooms", "have", "you", "do", "?"],
        answer: "How many rooms do you have?",
        type: "house",
      },
      {
        id: 2,
        words: ["where", "sleep", "you", "do", "?"],
        answer: "Where do you sleep?",
        type: "house",
      },
      {
        id: 3,
        words: ["what", "chores", "you", "do", "?"],
        answer: "What chores do you do?",
        type: "chores",
      },
      {
        id: 4,
        words: ["when", "sweep", "you", "do", "floor", "the", "?"],
        answer: "When do you sweep the floor?",
        type: "chores",
      },
      {
        id: 5,
        words: ["who", "dishes", "washes", "the", "?"],
        answer: "Who washes the dishes?",
        type: "chores",
      },
    ],
  },

  // DESCRIBING YOUR HOUSE
  houseDescription: {
    title: "Describe Your House",
    instruction: "Complete the description with correct words",
    template: [
      "My house is _____. (big/small)",
      "It has _____ bedrooms.",
      "The living room is _____. (large/cozy)",
      "I like the _____ because _____.",
      "My favorite room is the _____.",
    ],
    examples: [
      {
        description:
          "My house is small but cozy. It has two bedrooms. The living room is large and comfortable. I like the kitchen because I can help mom cook. My favorite room is the bedroom.",
      },
    ],
  },

  // TRUE OR FALSE
  trueOrFalse: {
    title: "True or False",
    instruction: "Read the text and decide if the statements are true or false",
    text: "My name is Galang. I live in a small house with my family. We have two bedrooms, one bathroom, a kitchen, and a living room. Every morning, I make my bed and sweep the floor. My sister washes the dishes after breakfast. On weekends, we clean the house together. My mom mops the floor and my dad takes care of the garden. We all help at home.",
    statements: [
      { id: 1, statement: "Galang lives in a big house.", answer: false },
      { id: 2, statement: "They have two bedrooms.", answer: true },
      {
        id: 3,
        statement: "Galang washes the dishes every morning.",
        answer: false,
      },
      { id: 4, statement: "His sister sweeps the floor.", answer: false },
      {
        id: 5,
        statement: "The family cleans together on weekends.",
        answer: true,
      },
      { id: 6, statement: "Mom takes care of the garden.", answer: false },
      { id: 7, statement: "Everyone helps at home.", answer: true },
    ],
  },
};
