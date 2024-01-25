module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "react-app",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:tailwindcss/recommended",
    "next",
  ],
  plugins: ["react", "react-hooks", "@typescript-eslint", "prettier"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      jest: true,
    },
  },
  env: {
    browser: true,
    jasmine: true,
    jest: true,
    node: true,
    "cypress/globals": true,
  },
  rules: {
    "react/prop-types": 1,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/display-name": 0,
    "tailwindcss/no-arbitrary-value": "off",
    "tailwindcss/no-custom-classname": "off",
    "import/no-anonymous-default-export": "off",
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
      ],
      rules: {
        "@typescript-eslint/explicit-function-return-type": 0,
        "@typescript-eslint/interface-name-prefix": 0,
        "@typescript-eslint/camelcase": 0,
        "@typescript-eslint/explicit-module-boundary-types": 0,
        "@typescript-eslint/ban-ts-comment": 0,
        "@typescript-eslint/ban-types": 0,
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            args: "none",
            varsIgnorePattern: "_",
            ignoreRestSiblings: true,
          },
        ],
        "@next/next/no-img-element": 0,
      },
    },
    {
      files: ["**/*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
    "import/resolver": {
      "babel-module": {},
    },
  },
};
