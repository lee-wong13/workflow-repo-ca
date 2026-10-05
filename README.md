# Workflow repo for the CA

A small venue site (list, single venue, login and register) set up with a development workflow: formatting, linting, Git hooks and unit tests.

## Tech

- HTML, JavaScript (ES modules) and [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) for linting and formatting
- [Husky](https://typicode.github.io/husky/) and [lint-staged](https://github.com/lint-staged/lint-staged) for Git hooks
- [Vitest](https://vitest.dev/) with [jsdom](https://github.com/jsdom/jsdom) for unit tests
- [PlayWright](https://playwright.dev/) for e2e testing.

## Getting started

```bash
git clone https://github.com/lee-wong13/workflow-repo-ca.git
cd workflow-repo-ca
npm install
```

`npm install` also runs the `prepare` script, which installs the Git hooks.

## Environment variables

Copy `.env.example` to `.env` and set `TEST_USER_EMAIL` and `TEST_USER_PASSWORD` to valid test-account credentials for the login E2E test. The `.env` file is ignored by Git. The API base URL is set in `js/config.js`.

## Scripts

- `npm run dev` – Builds the CSS and watches for changes.
- `npm run prepare` – Installs the Git hooks; runs during `npm install`.
- `npm run test` – Runs the Vitest unit tests in watch mode.
- `npm run test:e2e` – Runs the Playwright end-to-end tests.
- `npm run start` – Starts the local server used by Playwright.

## Git hooks

A pre-commit hook runs `lint-staged` on staged files:

- `*.js` – formatted with Prettier and linted with `eslint --fix`
- `*.html` – formatted with Prettier

The commit is stopped if ESLint finds errors it cannot fix.

## Testing

Tests live next to the code they test as `*.test.js` files. Vitest uses the jsdom environment (see `vitest.config.mjs`), so browser APIs like `localStorage` are available.

Current tests:

- `js/utils/userInterface.test.js` – `isActivePath`
