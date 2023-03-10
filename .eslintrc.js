module.exports = {
  root: true,
  env: {
    node: true,
  },
  globals: {
    Promise: "readonly",
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"], // Your TypeScript files extension

      // As mentioned in the comments, you should extend TypeScript plugins here,
      // instead of extending them outside the `overrides`.
      // If you don't want to extend any rules, you don't need an `extends` attribute.
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],

      parserOptions: {
        project: ["./tsconfig.json"], // Specify it only for TypeScript files
      },
      rules: {
        "@typescript-eslint/no-floating-promises": "off",
      },
    },
  ],
};