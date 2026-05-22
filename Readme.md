# 📖 Repo Story

Turn your Git history into a beautiful story.

Repo Story analyzes a Git repository and generates a clean summary containing:

- 📅 Commit Timeline
- 👥 Contributors
- 📊 Repository Statistics

Instead of scrolling through a long `git log`, Repo Story presents your project's journey in a simple and readable format.

---

## ✨ Features

- Generate a chronological project timeline
- View all contributors and their commit counts
- Display repository statistics
- Works on any Git repository
- Simple CLI interface
- Lightweight and fast
- No external APIs required

---

## 📦 Installation

Install globally using npm:

```bash
npm install -g repo-story
```

---

## 🚀 Usage

Navigate to any Git repository:

```bash
cd my-project
```

Run:

```bash
repo-story
```

---

## 📝 Example Output

```text
📖 Git Story
Repository: my-project

━━━━━━━━━━━━━━━━━━
📅 Timeline

22 May 2026 🚀 Initial project setup
23 May 2026 ✨ Added authentication
24 May 2026 🐛 Fixed login bug
25 May 2026 ♻️ Refactored API layer

━━━━━━━━━━━━━━━━━━
👥 Contributors

Harsha Hegde         12 commits (75%)
John Doe              4 commits (25%)

━━━━━━━━━━━━━━━━━━
📊 Stats

Total Commits      : 16
Total Contributors : 2
First Commit       : 22 May 2026
Latest Commit      : 25 May 2026
```

---

## 🎯 Supported Commit Types

Repo Story automatically detects common conventional commit prefixes and adds emojis.

| Prefix | Emoji | Meaning |
|---------|--------|----------|
| init | 🚀 | Project initialization |
| feat | ✨ | New feature |
| fix | 🐛 | Bug fix |
| docs | 📝 | Documentation |
| refactor | ♻️ | Refactoring |
| style | 🎨 | Styling changes |
| test | ✅ | Tests |
| other | 📌 | General commit |

Example:

```text
feat: Added authentication
```

becomes

```text
✨ Added authentication
```

---

## ⚠️ Requirements

- Node.js 18+
- Git installed and available in PATH

Verify installation:

```bash
node -v
git --version
```

---

## ❌ Not Inside a Git Repository

If Repo Story is executed outside a Git repository:

```bash
repo-story
```

Output:

```text
❌ Not inside a Git repository
```

---

## 🏗️ Built With

- Node.js
- Git CLI
- Child Process API

---

## 📂 Project Structure

```text
repo-story/
│
├── bin/
│   └── git-story.js
│
├── src/
│   ├── git.js
│   ├── timeline.js
│   ├── contributors.js
│   ├── stats.js
│   └── story.js
│
├── README.md
└── package.json
```

---

## 💡 Why Repo Story?

Git repositories often contain hundreds of commits.

Repo Story helps developers quickly understand:

- How a project evolved
- Who contributed to the repository
- Major milestones in development
- Repository activity at a glance

This makes it useful for:

- Portfolio projects
- Open source repositories
- Team projects
- Hackathon submissions
- Project documentation

---

## 🛣️ Roadmap

Planned features:

- Export story as Markdown
- Export story as JSON
- Commit activity charts
- Author contribution insights
- Custom themes
- Interactive terminal UI

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/my-feature
```

3. Commit your changes

```bash
git commit -m "feat: add amazing feature"
```

4. Push to GitHub

```bash
git push origin feature/my-feature
```

5. Open a Pull Request

---

## 📜 License

ISC License

---

## 👨‍💻 Author

Harsha Hegde

GitHub: https://github.com/harshahegde21

---

If you find this project useful, consider giving it a ⭐ on GitHub.