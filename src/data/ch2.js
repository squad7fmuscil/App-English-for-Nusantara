// Chapter 2: Culinary and Me - Data

export const ch2Data = {
  id: 2,
  title: "Culinary and Me",
  color: "bg-orange-500",
  description: "Learn about food, meals, and healthy eating habits",

  units: [
    {
      id: 1,
      title: "Breakfast Time",
      description: "Learn about breakfast foods and morning routines",

      sections: [
        {
          id: 1,
          type: "lesson",
          title: "Breakfast Vocabulary",
          content: {
            text: "Let's learn common breakfast foods and drinks!",
            vocabulary: [
              { word: "Bread", translation: "Roti", image: "🍞" },
              { word: "Egg", translation: "Telur", image: "🥚" },
              { word: "Milk", translation: "Susu", image: "🥛" },
              { word: "Butter", translation: "Mentega", image: "🧈" },
              { word: "Cereal", translation: "Sereal", image: "🥣" },
              { word: "Pancake", translation: "Panekuk", image: "🥞" },
              { word: "Orange Juice", translation: "Jus Jeruk", image: "🧃" },
              { word: "Coffee", translation: "Kopi", image: "☕" },
              { word: "Tea", translation: "Teh", image: "🍵" },
              { word: "Toast", translation: "Roti Panggang", image: "🍞" },
            ],
          },
        },

        {
          id: 2,
          type: "matching",
          title: "Match Breakfast Items",
          content: {
            instruction: "Match the food with its translation",
            pairs: [
              { left: "Bread", right: "Roti" },
              { left: "Egg", right: "Telur" },
              { left: "Milk", right: "Susu" },
              { left: "Cereal", right: "Sereal" },
              { left: "Pancake", right: "Panekuk" },
            ],
          },
        },

        {
          id: 3,
          type: "quiz",
          title: "Breakfast Quiz",
          content: {
            questions: [
              {
                id: 1,
                question: "What do you drink in the morning?",
                options: ["Bread", "Milk", "Egg", "Butter"],
                correct: 1,
                explanation: "Milk is a drink we have in the morning.",
              },
              {
                id: 2,
                question: "What food is made from flour and eggs?",
                options: ["Milk", "Coffee", "Pancake", "Juice"],
                correct: 2,
                explanation: "Pancakes are made from flour and eggs.",
              },
              {
                id: 3,
                question: "Which is NOT a breakfast food?",
                options: ["Toast", "Cereal", "Pizza", "Egg"],
                correct: 2,
                explanation: "Pizza is typically not eaten for breakfast.",
              },
            ],
          },
        },
      ],
    },

    {
      id: 2,
      title: "Lunch and Dinner",
      description: "Explore main meals and Indonesian dishes",

      sections: [
        {
          id: 1,
          type: "lesson",
          title: "Indonesian Food Vocabulary",
          content: {
            text: "Learn about popular Indonesian dishes!",
            vocabulary: [
              { word: "Rice", translation: "Nasi", image: "🍚" },
              { word: "Fried Rice", translation: "Nasi Goreng", image: "🍛" },
              { word: "Chicken", translation: "Ayam", image: "🍗" },
              { word: "Fish", translation: "Ikan", image: "🐟" },
              { word: "Vegetables", translation: "Sayuran", image: "🥗" },
              { word: "Soup", translation: "Sop", image: "🍲" },
              { word: "Noodles", translation: "Mie", image: "🍜" },
              { word: "Satay", translation: "Sate", image: "�串" },
              { word: "Tofu", translation: "Tahu", image: "🧊" },
              { word: "Tempeh", translation: "Tempe", image: "🟫" },
            ],
          },
        },

        {
          id: 2,
          type: "dragdrop",
          title: "Indonesian Dishes",
          content: {
            instruction: "Match the English name to Indonesian name",
            pairs: [
              {
                id: 1,
                left: "Fried Rice",
                right: "Nasi Goreng",
                leftEmoji: "🍛",
                rightEmoji: "📝",
              },
              {
                id: 2,
                left: "Chicken Satay",
                right: "Sate Ayam",
                leftEmoji: "🍗",
                rightEmoji: "📝",
              },
              {
                id: 3,
                left: "Fried Noodles",
                right: "Mie Goreng",
                leftEmoji: "🍜",
                rightEmoji: "📝",
              },
              {
                id: 4,
                left: "Vegetable Soup",
                right: "Sayur Sop",
                leftEmoji: "🥗",
                rightEmoji: "📝",
              },
              {
                id: 5,
                left: "Fried Tempeh",
                right: "Tempe Goreng",
                leftEmoji: "🟫",
                rightEmoji: "📝",
              },
            ],
          },
        },

        {
          id: 3,
          type: "quiz",
          title: "Indonesian Food Quiz",
          content: {
            questions: [
              {
                id: 1,
                question: "What is 'Nasi Goreng' in English?",
                options: [
                  "White Rice",
                  "Fried Rice",
                  "Rice Cake",
                  "Rice Porridge",
                ],
                correct: 1,
                explanation: "Nasi Goreng means Fried Rice.",
              },
              {
                id: 2,
                question: "Which food is made from soybeans?",
                options: ["Rice", "Chicken", "Tempeh", "Fish"],
                correct: 2,
                explanation: "Tempeh is made from fermented soybeans.",
              },
              {
                id: 3,
                question: "What is the main food in Indonesia?",
                options: ["Bread", "Pasta", "Rice", "Potato"],
                correct: 2,
                explanation:
                  "Rice (nasi) is the main staple food in Indonesia.",
              },
            ],
          },
        },
      ],
    },

    {
      id: 3,
      title: "Healthy Eating",
      description: "Learn about nutrition and healthy food choices",

      sections: [
        {
          id: 1,
          type: "lesson",
          title: "Food Groups",
          content: {
            text: "Understanding different food groups for a balanced diet",
            vocabulary: [
              {
                word: "Carbohydrates",
                translation: "Karbohidrat",
                image: "🍚",
                example: "rice, bread, pasta",
              },
              {
                word: "Protein",
                translation: "Protein",
                image: "🍗",
                example: "chicken, fish, eggs",
              },
              {
                word: "Vegetables",
                translation: "Sayuran",
                image: "🥦",
                example: "broccoli, carrot, spinach",
              },
              {
                word: "Fruits",
                translation: "Buah-buahan",
                image: "🍎",
                example: "apple, banana, orange",
              },
              {
                word: "Dairy",
                translation: "Produk Susu",
                image: "🥛",
                example: "milk, cheese, yogurt",
              },
            ],
            tips: [
              {
                tip: "Eat vegetables every day",
                indonesian: "Makan sayur setiap hari",
              },
              {
                tip: "Drink plenty of water",
                indonesian: "Minum air yang cukup",
              },
              { tip: "Limit sugary foods", indonesian: "Batasi makanan manis" },
              {
                tip: "Eat fruit for snacks",
                indonesian: "Makan buah untuk cemilan",
              },
            ],
          },
        },

        {
          id: 2,
          type: "flashcard",
          title: "Food Groups Flashcards",
          content: {
            cards: [
              {
                front: "🍚",
                back: "Carbohydrates",
                detail: "Rice, Bread, Pasta",
              },
              { front: "🍗", back: "Protein", detail: "Chicken, Fish, Eggs" },
              {
                front: "🥦",
                back: "Vegetables",
                detail: "Broccoli, Carrot, Spinach",
              },
              { front: "🍎", back: "Fruits", detail: "Apple, Banana, Orange" },
              { front: "🥛", back: "Dairy", detail: "Milk, Cheese, Yogurt" },
            ],
          },
        },

        {
          id: 3,
          type: "quiz",
          title: "Healthy Eating Quiz",
          content: {
            questions: [
              {
                id: 1,
                question: "Which food group gives us energy?",
                options: ["Vegetables", "Carbohydrates", "Fruits", "Dairy"],
                correct: 1,
                explanation:
                  "Carbohydrates give us energy for daily activities.",
              },
              {
                id: 2,
                question: "Which is a good source of protein?",
                options: ["Apple", "Rice", "Chicken", "Potato"],
                correct: 2,
                explanation:
                  "Chicken is a good source of protein for our body.",
              },
              {
                id: 3,
                question: "What should we drink plenty of every day?",
                options: ["Soda", "Coffee", "Water", "Juice"],
                correct: 2,
                explanation:
                  "We should drink plenty of water every day to stay healthy.",
              },
              {
                id: 4,
                question: "Which food is rich in vitamins?",
                options: ["Candy", "Fruits", "Chips", "Cookies"],
                correct: 1,
                explanation:
                  "Fruits are rich in vitamins that keep us healthy.",
              },
            ],
          },
        },

        {
          id: 4,
          type: "matching",
          title: "Match Food to Food Group",
          content: {
            instruction: "Match each food to its food group",
            pairs: [
              { left: "Apple", right: "Fruits" },
              { left: "Chicken", right: "Protein" },
              { left: "Broccoli", right: "Vegetables" },
              { left: "Rice", right: "Carbohydrates" },
              { left: "Milk", right: "Dairy" },
            ],
          },
        },
      ],
    },
  ],

  vocabulary: [
    { word: "meal", translation: "makanan/hidangan", category: "food" },
    { word: "breakfast", translation: "sarapan", category: "meals" },
    { word: "lunch", translation: "makan siang", category: "meals" },
    { word: "dinner", translation: "makan malam", category: "meals" },
    { word: "snack", translation: "cemilan", category: "meals" },
    { word: "healthy", translation: "sehat", category: "health" },
    { word: "delicious", translation: "enak", category: "taste" },
    { word: "spicy", translation: "pedas", category: "taste" },
    { word: "sweet", translation: "manis", category: "taste" },
    { word: "salty", translation: "asin", category: "taste" },
  ],
};

export default ch2Data;
