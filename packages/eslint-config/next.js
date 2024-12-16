const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier"
  ],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
  },
  plugins: ["only-warn"],
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    ".*.js",
    "node_modules/",
  ],
  rules: {
    "import/order": [
      "warn",
      {
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'import/no-named-as-default': 'off'
  },
  overrides: [{ files: ["*.js?(x)", "*.ts?(x)"] }],
};
