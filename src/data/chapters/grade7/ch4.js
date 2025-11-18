export const ch4Data = {
  title: "My School Activities",
  description: "Learn about class schedules, online classes, and study habits",
  units: [
    {
      id: 1,
      title: "My Class Schedule",
      description: "Learn about subjects and daily schedules",
    },
    {
      id: 2,
      title: "My Online Class",
      description: "Learn about online learning activities",
    },
    {
      id: 3,
      title: "My Study Habits",
      description: "Learn about good study habits and routines",
    },
  ],

  // SUBJECTS VOCABULARY
  subjectsVocabulary: {
    title: "Match the Subjects",
    instruction: "Match the school subjects with their meanings",
    pairs: [
      { id: 1, indonesian: "Matematika", english: "Mathematics", image: "🔢" },
      { id: 2, indonesian: "Bahasa Inggris", english: "English", image: "📖" },
      {
        id: 3,
        indonesian: "Ilmu Pengetahuan Alam",
        english: "Science",
        image: "🔬",
      },
      {
        id: 4,
        indonesian: "Ilmu Pengetahuan Sosial",
        english: "Social Studies",
        image: "🌍",
      },
      { id: 5, indonesian: "Seni Budaya", english: "Arts", image: "🎨" },
      {
        id: 6,
        indonesian: "Pendidikan Jasmani",
        english: "Physical Education",
        image: "⚽",
      },
      {
        id: 7,
        indonesian: "Bahasa Indonesia",
        english: "Indonesian",
        image: "🇮🇩",
      },
      { id: 8, indonesian: "Agama", english: "Religion", image: "🕌" },
    ],
  },

  // DAYS AND TIME
  scheduleVocabulary: {
    title: "Days and Time",
    instruction: "Match the days with Indonesian",
    pairs: [
      { id: 1, indonesian: "Senin", english: "Monday", image: "📅" },
      { id: 2, indonesian: "Selasa", english: "Tuesday", image: "📅" },
      { id: 3, indonesian: "Rabu", english: "Wednesday", image: "📅" },
      { id: 4, indonesian: "Kamis", english: "Thursday", image: "📅" },
      { id: 5, indonesian: "Jumat", english: "Friday", image: "📅" },
      { id: 6, indonesian: "Sabtu", english: "Saturday", image: "📅" },
      { id: 7, indonesian: "Minggu", english: "Sunday", image: "📅" },
    ],
  },

  // ONLINE CLASS VOCABULARY
  onlineClassVocabulary: {
    title: "Online Class Activities",
    instruction: "Match online learning vocabulary",
    pairs: [
      {
        id: 1,
        indonesian: "Menyalakan kamera",
        english: "Turn on camera",
        image: "📹",
      },
      {
        id: 2,
        indonesian: "Mematikan mikrofon",
        english: "Mute microphone",
        image: "🎤",
      },
      {
        id: 3,
        indonesian: "Berbagi layar",
        english: "Share screen",
        image: "💻",
      },
      {
        id: 4,
        indonesian: "Mengangkat tangan",
        english: "Raise hand",
        image: "✋",
      },
      {
        id: 5,
        indonesian: "Mengirim pesan",
        english: "Send message",
        image: "💬",
      },
      {
        id: 6,
        indonesian: "Bergabung ke rapat",
        english: "Join meeting",
        image: "🔗",
      },
      {
        id: 7,
        indonesian: "Meninggalkan kelas",
        english: "Leave class",
        image: "🚪",
      },
      {
        id: 8,
        indonesian: "Mengerjakan tugas",
        english: "Do assignment",
        image: "📝",
      },
    ],
  },

  // FILL IN THE BLANK
  fillInTheBlank: {
    title: "Complete the Sentences",
    instruction: "Fill in the blanks with correct words",
    questions: [
      {
        id: 1,
        sentence: "I have _____ class on Monday morning.",
        answer: "Mathematics",
        options: ["Mathematics", "English", "Science", "Arts"],
      },
      {
        id: 2,
        sentence: "My favorite subject is _____.",
        answer: "English",
        options: ["English", "boring", "difficult", "Monday"],
      },
      {
        id: 3,
        sentence: "We have Physical Education on _____.",
        answer: "Friday",
        options: ["Friday", "morning", "afternoon", "subject"],
      },
      {
        id: 4,
        sentence: "Please _____ your camera during online class.",
        answer: "turn on",
        options: ["turn on", "turn off", "close", "open"],
      },
      {
        id: 5,
        sentence: "Don't forget to _____ your microphone when not speaking.",
        answer: "mute",
        options: ["mute", "open", "close", "raise"],
      },
      {
        id: 6,
        sentence: "I _____ my homework every evening.",
        answer: "do",
        options: ["do", "make", "play", "watch"],
      },
      {
        id: 7,
        sentence: "She _____ for the test every night.",
        answer: "studies",
        options: ["studies", "plays", "watches", "goes"],
      },
      {
        id: 8,
        sentence: "We should _____ attention in class.",
        answer: "pay",
        options: ["pay", "give", "make", "take"],
      },
    ],
  },

  // CLASS SCHEDULE
  classSchedule: {
    title: "Galang's Class Schedule",
    schedule: {
      Monday: [
        { time: "07:00 - 08:00", subject: "Mathematics", teacher: "Mr. Ahmad" },
        { time: "08:00 - 09:00", subject: "English", teacher: "Mrs. Sarah" },
        { time: "09:30 - 10:30", subject: "Science", teacher: "Mr. Budi" },
      ],
      Tuesday: [
        { time: "07:00 - 08:00", subject: "Indonesian", teacher: "Mrs. Dewi" },
        {
          time: "08:00 - 09:00",
          subject: "Social Studies",
          teacher: "Mr. Andi",
        },
        { time: "09:30 - 10:30", subject: "Arts", teacher: "Ms. Rina" },
      ],
      Wednesday: [
        { time: "07:00 - 08:00", subject: "Mathematics", teacher: "Mr. Ahmad" },
        { time: "08:00 - 09:00", subject: "Religion", teacher: "Mr. Hasan" },
        { time: "09:30 - 10:30", subject: "English", teacher: "Mrs. Sarah" },
      ],
    },
  },

  // DIALOGUES
  dialogues: [
    {
      id: 1,
      title: "Talking About Schedule",
      situation: "Monita asks Galang about his class schedule",
      conversation: [
        { speaker: "Monita", text: "What's your first class on Monday?" },
        { speaker: "Galang", text: "I have Mathematics at 7 o'clock." },
        { speaker: "Monita", text: "Who's your Math teacher?" },
        { speaker: "Galang", text: "Mr. Ahmad. He's very good." },
        { speaker: "Monita", text: "What time does the class finish?" },
        { speaker: "Galang", text: "It finishes at 8 o'clock." },
      ],
    },
    {
      id: 2,
      title: "Online Class Instructions",
      situation: "Teacher gives instructions for online class",
      conversation: [
        {
          speaker: "Teacher",
          text: "Good morning, everyone! Please join the meeting.",
        },
        { speaker: "Galang", text: "Good morning, Ma'am!" },
        { speaker: "Teacher", text: "Turn on your cameras, please." },
        { speaker: "Students", text: "Yes, Ma'am!" },
        { speaker: "Teacher", text: "If you have questions, raise your hand." },
        { speaker: "Monita", text: "Understood, Ma'am!" },
      ],
    },
    {
      id: 3,
      title: "Study Habits",
      situation: "Friends talking about study habits",
      conversation: [
        { speaker: "Andre", text: "How do you prepare for tests?" },
        { speaker: "Galang", text: "I study every evening for one hour." },
        { speaker: "Andre", text: "Do you study alone?" },
        { speaker: "Galang", text: "Sometimes I study with my friends." },
        { speaker: "Monita", text: "I make study notes and review them." },
        { speaker: "Andre", text: "That's a good habit!" },
      ],
    },
  ],

  // QUESTION FORMATION
  questionPractice: {
    title: "Ask About School Activities",
    instruction: "Form questions using the given words",
    exercises: [
      {
        id: 1,
        words: ["what", "your", "favorite", "subject", "is", "?"],
        answer: "What is your favorite subject?",
        type: "schedule",
      },
      {
        id: 2,
        words: ["when", "you", "have", "English", "do", "class", "?"],
        answer: "When do you have English class?",
        type: "schedule",
      },
      {
        id: 3,
        words: ["who", "your", "Math", "teacher", "is", "?"],
        answer: "Who is your Math teacher?",
        type: "schedule",
      },
      {
        id: 4,
        words: ["how", "you", "join", "do", "online", "the", "class", "?"],
        answer: "How do you join the online class?",
        type: "online",
      },
      {
        id: 5,
        words: ["do", "you", "study", "where", "?"],
        answer: "Where do you study?",
        type: "study",
      },
      {
        id: 6,
        words: ["how", "long", "you", "study", "do", "every", "day", "?"],
        answer: "How long do you study every day?",
        type: "study",
      },
    ],
  },

  // TRUE OR FALSE
  trueOrFalse: {
    title: "True or False",
    instruction: "Read about Galang's school day and answer",
    text: "My name is Galang. I am a grade 7 student. My school day starts at 7 in the morning. My first class on Monday is Mathematics. I like Math because it's interesting. After Math, I have English class with Mrs. Sarah. She is very kind. We have a break at 9 o'clock. During online classes, I always turn on my camera and mute my microphone when I'm not speaking. I study for one hour every evening to prepare for tests. On weekends, I review my notes and do my homework.",
    statements: [
      { id: 1, statement: "Galang is in grade 8.", answer: false },
      {
        id: 2,
        statement: "His school starts at 7 in the morning.",
        answer: true,
      },
      { id: 3, statement: "He doesn't like Mathematics.", answer: false },
      { id: 4, statement: "Mrs. Sarah teaches English.", answer: true },
      { id: 5, statement: "Break time is at 10 o'clock.", answer: false },
      {
        id: 6,
        statement: "He turns on his camera during online class.",
        answer: true,
      },
      { id: 7, statement: "He studies every evening.", answer: true },
      {
        id: 8,
        statement: "He doesn't do homework on weekends.",
        answer: false,
      },
    ],
  },

  // STUDY HABITS TIPS
  studyTips: {
    title: "Good Study Habits",
    tips: [
      {
        icon: "📚",
        habit: "Study every day",
        description: "Set aside time daily for studying",
      },
      {
        icon: "📝",
        habit: "Take notes",
        description: "Write important points during class",
      },
      {
        icon: "❓",
        habit: "Ask questions",
        description: "Don't hesitate to ask your teacher",
      },
      {
        icon: "👥",
        habit: "Study together",
        description: "Form study groups with friends",
      },
      {
        icon: "🎯",
        habit: "Set goals",
        description: "Have clear learning objectives",
      },
      {
        icon: "💪",
        habit: "Stay focused",
        description: "Avoid distractions while studying",
      },
      {
        icon: "😴",
        habit: "Get enough rest",
        description: "Sleep well before tests",
      },
      {
        icon: "🔄",
        habit: "Review regularly",
        description: "Go over your notes frequently",
      },
    ],
  },
};
