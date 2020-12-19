module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    node: true,
    es6: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {},
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  plugins: ["@typescript-eslint", "simple-import-sort"],
  rules: {
    "max-len": ["error", { code: 160, ignoreUrls: true }],
    "prettier/prettier": ["error", { singleQuote: false, arrowParens: "always", printWidth: 160 }],
  },
};
