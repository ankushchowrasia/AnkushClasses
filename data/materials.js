// Ankush Classes - Study Materials Data Store
// Easy-to-maintain schema for adding future PDFs, notes, and question papers.
//
// HOW TO ADD A NEW DOCUMENT:
// 1. Add an object to the `materialsData` array below.
// 2. Set `class` ("10" or "12"), `board` ("ICSE" or "ISC"), and `subject` (matching defined subjects).
// 3. Provide `title`, `resourceType` ("Notes", "Question Paper", "Sample Paper", "Important Questions", or "Study Material"),
//    and the permalink in `fileUrl`.
// 4. The UI automatically displays the document under that subject!

const studyStructure = [
  {
    classId: "class-10-icse",
    className: "Class 10",
    board: "ICSE",
    description: "Curated academic resources and preparation materials for ICSE Class 10 board examinations.",
    subjects: [
      {
        id: "icse-10-history-civics",
        name: "History & Civics",
        description: "Indian National Movement, Contemporary World, Union Legislature, Executive, and Judiciary."
      },
      {
        id: "icse-10-geography",
        name: "Geography",
        description: "Topography, Climate, Soil, Water Resources, Minerals, Agriculture, and Industries."
      },
      {
        id: "icse-10-english-language",
        name: "English Language",
        description: "Composition, letter writing, notice/email writing, unseen comprehension, and grammar rules."
      },
      {
        id: "icse-10-english-literature",
        name: "English Literature",
        description: "Analytical guides, character sketches, summaries, and model answers for prescribed texts."
      }
    ]
  },
  {
    classId: "class-12-isc",
    className: "Class 12",
    board: "ISC",
    description: "In-depth Humanities and Arts stream study notes, past papers, and reference guides for ISC Class 12.",
    subjects: [
      {
        id: "isc-12-english",
        name: "English",
        description: "Language paper strategies, directed writing, literary analysis, and textual commentaries."
      },
      {
        id: "isc-12-history",
        name: "History",
        description: "Modern India, World History, Cold War developments, and thematic essay preparation."
      },
      {
        id: "isc-12-geography",
        name: "Geography",
        description: "Physical environment, regional studies, resource management, and map interpretation."
      },
      {
        id: "isc-12-political-science",
        name: "Political Science",
        description: "Forms of government, constitution, fundamental rights, judiciary, and international relations."
      },
      {
        id: "isc-12-sociology",
        name: "Sociology",
        description: "Social institutions, caste, tribal communities, social change, and contemporary issues."
      },
      {
        id: "isc-12-physical-education",
        name: "Physical Education",
        description: "Health, fitness, physiology, sports psychology, and specialized game guidelines."
      }
    ]
  }
];

// Document Registry: Add verified PDF documents here
const materialsData = [
  // Example entry format:
  // {
  //   id: "mat-001",
  //   title: "Revolt of 1857 Comprehensive Notes",
  //   class: "10",
  //   board: "ICSE",
  //   subject: "History & Civics",
  //   resourceType: "Notes", // "Notes" | "Question Paper" | "Sample Paper" | "Important Questions" | "Study Material"
  //   fileUrl: "https://example.com/permalink.pdf",
  //   description: "Structured summary of causes, events, and consequences.",
  //   dateAdded: "2026-10-29"
  // }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { studyStructure, materialsData };
}
