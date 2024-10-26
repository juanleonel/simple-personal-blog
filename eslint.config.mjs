import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,
  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error",
    },
    ignores: [
      "build/**/*", // ignore all contents in and under `build/` directory but not the `build/` directory itself
      "!build/test.js", // unignore `!build/test.js`
    ],
  },
];
