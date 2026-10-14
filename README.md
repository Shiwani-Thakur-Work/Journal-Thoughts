# 🌿 Daybook

> A minimalist, typography-first personal archive of observations, field notes, and quiet musings.  
> Penned by Shiwani. Built for zero-friction writing and distraction-free reading.

🔗 **Live Website:** [https://shiwani-thakur-work.github.io/Journal-Thoughts/](https://shiwani-thakur-work.github.io/Journal-Thoughts/)  
📦 **Repository:** [https://github.com/Shiwani-Thakur-Work/Journal-Thoughts](https://github.com/Shiwani-Thakur-Work/Journal-Thoughts)

---

## ✨ Features

- **Quiet Editorial Aesthetics:** Dual theme support—*Warm Paper* (day) and *Obsidian Night* (evening), paired with literary typography (`Instrument Serif`, `Newsreader`, `Inter`, `JetBrains Mono`).
- **Archetype Streams:** Filter by *Noticed* (field notes), *Musings* (epiphanies & habits), and *Liked* (curated quotes & ideas).
- **Distraction-Free Reader Mode:** Single-column layout with estimated read times, clean back navigation, share links, and next/prev thought hops.
- **Instant Search:** Press `/` anywhere to focus search and instantly filter thoughts across titles, content, and tags.
- **Direct GitHub Deployment:** 100% native GitHub Pages deployment via GitHub Actions with **zero third-party platforms**.

---

## 🚀 Quick Start (Running Locally)

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## ✍️ How to Add a New Thought

Adding a new thought requires **no database, no backend, and no CMS overhead**:

1. Open [`src/content/thoughts.js`](file:///c:/Users/shiwa/OneDrive/Desktop/Journal-Thoughts/src/content/thoughts.js).
2. Add a new object at the top of the `THOUGHTS` array:

```javascript
{
  id: "your-thought-slug",
  slug: "your-thought-slug",
  title: "A Line I Heard on the Train",
  date: "Oct 15, 2026",
  year: "2026",
  category: "Noticed", // "Noticed" | "Musings" | "Liked"
  readTime: "1 min read",
  tags: ["#subway", "#dialogue"],
  excerpt: "A brief one-sentence hook that shows in the timeline feed.",
  content: `
    <p>Your thought here. You can use standard HTML like &lt;p&gt;, &lt;blockquote&gt;, or &lt;em&gt;.</p>
  `
}
```

3. Save the file. Your new thought is live immediately!

---

## 🚢 Deploying Directly to GitHub Pages (Zero 3rd-Party Apps)

This project contains a pre-configured GitHub Actions workflow in [`.github/workflows/deploy.yml`](file:///.github/workflows/deploy.yml).

### Steps to Deploy:
1. Initialize a git repository and commit your code:
   ```bash
   git init
   git add .
   git commit -m "feat: initial journal of thoughts release"
   ```
2. Create a new repository on [GitHub](https://github.com/new).
3. Link and push to your GitHub repo:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
4. On your GitHub repository:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
   - The deployment workflow will run automatically on every push to `main`!

---

## 📁 Project Structure

```text
Journal-Thoughts/
├── docs/
│   ├── context.md               # Concept understanding & karthis.com breakdown
│   └── implementation_plan.md   # Architectural & phased implementation details
├── .github/
│   └── workflows/
│       └── deploy.yml           # Automated GitHub Pages CI/CD workflow
├── src/
│   ├── components/
│   │   ├── Header.jsx           # Monogram, bio, theme toggle, about trigger
│   │   ├── FilterBar.jsx        # Archetype pills, instant search, count
│   │   ├── ThoughtCard.jsx      # Stream card with hover reveal
│   │   ├── ThoughtReader.jsx    # Focused reading view with share and navigation
│   │   ├── AboutModal.jsx       # Personal ethos dialog
│   │   └── Footer.jsx           # Colophon and back to top
│   ├── content/
│   │   └── thoughts.js          # The thought archive & categories
│   ├── App.jsx                  # Main application & routing state
│   └── index.css                # Pure Vanilla CSS design system
└── vite.config.js               # Configured with base: './' for GitHub Pages
```
