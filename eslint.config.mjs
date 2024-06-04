import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "commonjs" },
  },
  {
    rules: {
      indent: ["error", 2],
      // "linebreak-style": ["error", "unix"],
      quotes: ["error", "double"],
      semi: ["error", "always"],
    },
  },
  {
    languageOptions: { globals: globals.node },
  },
  pluginJs.configs.recommended,
];
