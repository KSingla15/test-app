# Quiz CLI (`quiz-cli`)

An interactive command-line quiz game for learning JavaScript and general programming concepts. The game runs entirely in Node.js (ES Modules), uses the built-in `readline` API for input, and loads questions from a JSON file.

## Features

- Interactive terminal quiz with:
  - Category selection
  - Choose question count (All / 3 / 5, depending on category size)
  - Multiple-choice answers (select by number)
  - Instant feedback + explanation per question
  - Progress bar and final score summary
  - Review list for incorrect answers
- No external npm dependencies (Node built-ins only)
- ANSI color output via a small internal helper (`src/colors.js`)

## Requirements

- **Node.js >= 18** (per `package.json` → `engines.node`)
- npm (typically bundled with Node)

## Setup

```bash
git clone https://github.com/KSingla15/test-app.git
cd test-app
```

This project has no declared npm dependencies, but you can still run:

```bash
npm install
```

## Run

### Using npm

```bash
npm start
```

### Directly with Node

```bash
node test-app/index.js
```

## How to Play

1. Choose a category (e.g., *JavaScript Basics*, *Node.js Fundamentals*, *General Programming*).
2. Choose how many questions to answer (options depend on how many questions exist in that category).
3. For each question, type the option number and press Enter.
4. At the end, view your score and review any incorrect answers.
5. Choose whether to play again.

## Question Bank / Configuration

Questions are loaded from:

- `test-app/data/questions.json`

### File format

`data/questions.json` contains a top-level `categories` object. Each category has:

- `name`: Display name for the CLI
- `questions`: Array of questions, each with:
  - `question`: string
  - `options`: string[]
  - `answer`: number (0-based index into `options`)
  - `explanation`: string (optional but supported)

Example (from the repo):

```json
{
  "categories": {
    "javascript": {
      "name": "JavaScript Basics",
      "questions": [
        {
          "question": "What keyword is used to declare a constant in JavaScript?",
          "options": ["var", "let", "const", "define"],
          "answer": 2,
          "explanation": "The 'const' keyword declares a block-scoped constant that cannot be reassigned."
        }
      ]
    }
  }
}
```

### Adding a new category

1. Open `data/questions.json`
2. Add a new key under `categories` (e.g., `"typescript"`)
3. Provide a `name` and a `questions` array following the same schema

## Project Structure

```text
.
└── test-app/
    ├── index.js                # CLI entrypoint (loads questions, runs main loop)
    ├── package.json            # Scripts, Node engine requirement, ESM config
    ├── data/
    │   └── questions.json      # Question bank (categories + questions)
    └── src/
        ├── colors.js           # ANSI color helpers
        ├── input.js            # readline-based prompt/select/confirm utilities
        └── quiz.js             # Quiz class (shuffle, askQuestion, results)
```

## Scripts

From `package.json`:

- `npm start` → `node index.js` (run from `./test-app`)
- `npm test` → `node --test` (run from `./test-app`)

## Tests

The repo defines a test command (`node --test`), but **no test files were found in the repository structure**. Running `npm test` may therefore report zero tests.

## Troubleshooting

### “SyntaxError: Cannot use import statement outside a module”
This project is configured as ES Modules (`"type": "module"` in `package.json`). Ensure you are running it via `node test-app/index.js` (Node >= 18), and not copying files into a different project with incompatible module settings.

### Colors/symbols look odd in your terminal
The CLI uses ANSI escape codes for colors (`src/colors.js`) and prints some special characters (e.g., progress bar blocks). If your terminal does not support ANSI colors or Unicode well, output may appear unformatted.

## License

`package.json` declares the license as **MIT**. (No separate `LICENSE` file is present in the repository contents as analyzed.)
