// Ankush Classes - Course Catalog Data
// Easily extensible for future subjects and categories

const coursesData = [
  {
    category: "Humanities",
    categoryDescription: "Comprehensive academic coverage across core Humanities subjects with structured explanations, study resources, and exam preparation.",
    subjects: [
      {
        name: "History",
        description: "Understand historical events, developments, movements and important themes through structured explanations and study resources.",
        badge: "Classes 8–12",
        board: "ICSE • ISC • CBSE"
      },
      {
        name: "Sociology",
        description: "Explore society, social institutions, relationships, change and important sociological concepts in a simple and structured way.",
        badge: "Classes 11–12",
        board: "ISC • CBSE"
      },
      {
        name: "Political Science",
        description: "Build a clear understanding of political systems, institutions, government, rights, constitutions and important political concepts.",
        badge: "Classes 11–12",
        board: "ISC • CBSE"
      },
      {
        name: "Geography",
        description: "Study physical and human geography through clear explanations, concepts, maps and exam-focused resources.",
        badge: "Classes 8–12",
        board: "ICSE • ISC • CBSE"
      },
      {
        name: "Civics",
        description: "Learn about government, citizenship, rights, responsibilities and democratic institutions.",
        badge: "Classes 8–10",
        board: "ICSE • CBSE"
      },
      {
        name: "Other Humanities",
        description: "Flexible coverage for emerging and supplementary Humanities areas as the curriculum and study material collection expands.",
        badge: "Foundation & Advanced",
        board: "Academic Resources"
      }
    ]
  },
  {
    category: "English",
    categoryDescription: "Strong fundamentals in language analysis, written expression, and literary appreciation for board examinations.",
    subjects: [
      {
        name: "Grammar",
        description: "Build stronger grammar fundamentals through clear explanations and practice-oriented resources.",
        badge: "Classes 8–12",
        board: "All Boards"
      },
      {
        name: "Language",
        description: "Develop language skills through structured explanations, writing guidance and exam-oriented resources.",
        badge: "Classes 8–12",
        board: "ICSE • ISC • CBSE"
      },
      {
        name: "Literature",
        description: "Study literary texts with accessible explanations, important themes and useful revision material.",
        badge: "Classes 8–12",
        board: "Prescribed Syllabi"
      },
      {
        name: "Drama",
        description: "Explore prescribed drama texts through structured explanations, characters, themes and important points.",
        badge: "Classes 9–12",
        board: "Board Curricula"
      }
    ]
  },
  {
    category: "Law",
    categoryDescription: "Foundational legal literacy and awareness for students curious about legal principles and constitutional mechanisms.",
    disclaimer: "Educational information only. This section is intended for learning and general awareness and does not constitute professional legal advice.",
    subjects: [
      {
        name: "Law Basics & Awareness",
        description: "An introductory space for students interested in understanding basic legal concepts, constitutional ideas, rights and the foundations of law.",
        badge: "General Awareness",
        board: "Educational Series"
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = coursesData;
}
