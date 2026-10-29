# Ankush Classes

Official educational resource platform created by Ankush for students from Class 8 to Class 12 across ICSE, ISC, and CBSE.

**Permanent Website:** [https://ankushclasses.vercel.app/](https://ankushclasses.vercel.app/)  
**YouTube Channel:** [@ankushclassesjpg](https://www.youtube.com/@ankushclassesjpg)  
**Inquiries & Support:** [ankushchowrasiabusiness@gmail.com](mailto:ankushchowrasiabusiness@gmail.com)

---

## Overview

Ankush Classes provides structured study notes, revision guides, previous-year question papers, and educational resources with a focus on:
- **Humanities:** History, Sociology, Political Science, Geography, Civics
- **English:** Grammar, Language, Literature, Drama
- **Law Basics & Awareness:** Educational introductions to fundamental rights, constitutional principles, and legal literacy

---

## Project Structure

```
/
├── index.html                   # Official Homepage
├── courses.html                 # Comprehensive Courses & Subjects Catalog
├── study-materials.html         # Study Materials Hub (Class 10 ICSE & Class 12 ISC)
├── about.html                   # About Ankush Classes & Platform Mission
├── contact.html                 # Contact Page with AJAX Formspree submission
├── support.html                 # Student Support & Help Center
├── privacy-policy.html          # Privacy Policy
├── terms.html                   # Terms & Conditions
├── 404.html                     # Custom 404 Error Page
├── vercel.json                  # Vercel routing, clean URLs & security headers
├── robots.txt                   # Search crawler directives
├── sitemap.xml                  # XML Sitemap for search engines
├── favicon.png                  # Browser favicon
│
├── assets/
│   ├── images/                  # Media assets
│   └── logo/
│       ├── ankush-classes-logo.png  # Official Ankush Classes Logo
│       ├── apple-touch-icon.png     # Apple device icon
│       └── favicon.png              # Favicon asset
│
├── css/
│   └── styles.css               # Core Stylesheet (Pure Black & #00BF63 Green)
│
├── data/
│   ├── courses.js               # Structured catalog data
│   └── materials.js             # Data-driven registry for PDF documents
│
└── js/
    ├── main.js                  # Navigation & Formspree AJAX handler
    └── materials.js             # Dynamic study materials renderer
```

---

## Adding New PDFs & Study Materials

The study materials page is completely data-driven. To add a new PDF:

1. Open `data/materials.js`.
2. Add a new document entry to the `materialsData` array:
   ```javascript
   {
     id: "hist-12-001",
     title: "Cold War Era Comprehensive Revision Notes",
     class: "12",
     board: "ISC",
     subject: "History",
     resourceType: "Notes", // "Notes" | "Question Paper" | "Sample Paper" | "Important Questions" | "Study Material"
     fileUrl: "https://your-storage-host.com/path-to-pdf.pdf",
     description: "Covers key postwar alliances, diplomatic tensions, and crisis points.",
     dateAdded: "2026-10-29"
   }
   ```
3. Save the file. The document will immediately appear under the corresponding subject on the Study Materials page.

---

## Deployment

The platform is configured for zero-configuration deployment on **Vercel** connected directly to the GitHub repository `main` branch.

All canonical URLs, Open Graph metadata, sitemap definitions, and security headers point to:
`https://ankushclasses.vercel.app/`
