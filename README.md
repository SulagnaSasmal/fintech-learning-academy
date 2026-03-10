# FinTech Learning Academy

A multi-module, LMS-style learning site covering payments infrastructure, fraud detection, ACH processing, and regulatory compliance. Designed as a professional development resource for bank operations staff, compliance teams, and fintech developers.

**Live:** Part of the [Doc-Portal](https://sulagnasasmal.github.io/doc-portal/) portfolio by Sulagna Sasmal.

---

## Courses

| Course | Level | Modules | Lessons | Hours |
|--------|-------|---------|---------|-------|
| Payments Fundamentals | Beginner | 4 | 12 | ~3 |
| Fraud Detection & Prevention | Intermediate | 4 | 16 | ~4 |
| ACH Processing Deep Dive | Beginner | 3 | 10 | ~2.5 |
| AML & Compliance Fundamentals | Advanced | 4 | 18 | ~5 |

## Features

- **Module accordion navigation** — expand/collapse curriculum inline
- **Progress tracking** — localStorage-based lesson completion
- **Sample lesson** — full 800+ word article with content, callouts, code examples, and key term sidebar
- **Interactive quiz** — 5-question knowledge check with instant scoring
- **Certificate of completion** — printable, user-editable certificate UI
- **Responsive design** — 2-column → 1-column on mobile

## Stack

- HTML5 + CSS Custom Properties
- Vanilla JavaScript (no framework)
- LocalStorage for progress persistence

## Structure

```
fintech-learning-academy/
├── index.html               Course catalog home
├── course-payments.html     Payments Fundamentals course page
├── lesson.html              Sample lesson: Payment Definition & Types
├── quiz.html                Module 1 knowledge check quiz
├── certificate.html         Certificate of completion UI
├── assets/
│   ├── css/style.css        Full design system
│   └── js/progress.js       Progress tracking + accordion + quiz logic
└── README.md
```

## Running Locally

Open `index.html` in any modern browser. No build step, no dependencies.

---

*Part of the technical writing portfolio at [sulagnasasmal.com](https://sulagnasasmal.com)*

## Dark / Light Mode

All pages support dark and light themes via a toggle button (◐ / ☀) in the navigation bar. Theme preference persists in `localStorage`. System `prefers-color-scheme` is respected on first visit.

## Status

**Phase 5 — FinTech LMS — Complete**

| Area | Status |
|------|--------|
| Course catalog (4 courses) | Complete |
| Payments Fundamentals course page | Complete |
| Sample lesson with full content | Complete |
| Interactive quiz engine | Complete |
| Certificate of completion UI | Complete |
| Progress tracking (localStorage) | Complete |
| Dark / light theme support | Complete |

## Future Enhancements

- Full lesson content for all 4 courses (currently 1 sample lesson)
- All 3 remaining course pages (Fraud, ACH, AML)
- Video lesson embed support
- Downloadable PDF study guides
- Backend progress sync (beyond localStorage)
