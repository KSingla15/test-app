# test-app (quiz-cli)

A lightweight, dependency-free interactive quiz CLI built with Node.js. The app loads question sets from JSON, lets you choose a category and number of questions, and then runs a scored quiz session with immediate feedback and a results summary.

> Note: The project’s actual Node package is located under the nested `test-app/` directory and is named **`quiz-cli`** in `test-app/package.json`.

## Key Features

- Loads quiz content from `test-app/data/questions.json`
- Interactive category selection
- Choose how many questions to answer (`all`, `3`, or `5`, based on availability)
- Shuffled questions per session
- Progress display during the quiz
- Immediate feedback (correct/incorrect) and optional explanations
- Final results summary:
  - score and percentage
  - performance message
  - review of incorrect answers (with the correct answer)
- “Play again” prompt to rerun a new session

## Technology Stack

- **Runtime:** Node.js **>= 18**
- **Language:** JavaScript (ES Modules via `"type": "module"`)
- **Dependencies:** None (built-in modules only)
- **Node built-ins used:** `readline`, `fs/promises`, `path`, `url`

## Project Structure

The runnable package lives inside the nested `test-app/` folder:

```text
.
└── test-app/
    ├── index.js                 # CLI entry point
    ├── package.json             # Package metadata & scripts (name: quiz-cli)
    ├── data/
    │   └── questions.json        # Quiz categories and question bank
    └── src/
        ├── colors.js             # ANSI color/styling helpers
        ├── input.js              # readline prompt/select/confirm utilities
        └── quiz.js               # Quiz engine (shuffle, ask, scoring, results)
```

## Prerequisites

- **Node.js >= 18**
- npm (typically included with Node.js)

## Installation

From the repository root:

```bash
cd test-app
npm install
```

> There are no external dependencies, but `npm install` is still safe and standard for setting up the package.

## Configuration / Customization

### Editing or adding questions

Questions are stored in:

- `test-app/data/questions.json`

The JSON contains **categories** and their **questions**. Each question includes:
- `question` (string)
- `options` (array of strings)
- `answer` (**0-based index** into the `options` array)
- `explanation` (optional string)

Example (illustrative format):

```json
{
  "categories": [
    {
      "name": "JavaScript",
      "questions": [
        {
          "question": "Which keyword declares a constant?",
          "options": ["var", "let", "const"],
          "answer": 2,
          "explanation": "`const` declares a block-scoped constant."
        }
      ]
    }
  ]
}
```

Important:
- `answer: 0` means the **first** option is correct.
- `answer: 1` means the **second**, etc.

## How to Run

### Option A: Run from inside `test-app/`

```bash
cd test-app
npm start
```

### Option B: Run from the repository root (by targeting the nested package)

```bash
npm --prefix test-app start
```

Once started, the CLI will guide you to:
1. Pick a category
2. Choose number of questions (`all`, `3`, or `5` when available)
3. Answer questions and see feedback
4. Review results and optionally play again

## Testing

The package defines a test script using Node’s built-in test runner:

```bash
cd test-app
npm test
```

Or from the repository root:

```bash
npm --prefix test-app test
```

Under the hood, this runs:

```bash
node --test
```

> There are currently no test files included in the repository, so the test runner may report that no tests were found.

## License

`test-app/package.json` indicates the project is licensed under **MIT**. However, there is **no `LICENSE` file** currently present in the repository. If you intend to distribute or reuse this project, consider adding a `LICENSE` file to match the declared license.
