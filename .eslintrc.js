module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  plugins: ["react", "react-native"],
  env: {
    "react-native/react-native": true,
  },
  ignorePatterns: ["**/__tests__/", "*.generated.*"],
  rules: {
    // disable the rule for all files
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/ban-types": "off",
    "jsx-a11y/accessible-emoji": "off",
    "react/display-name": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
    "react/prop-types": "off",
    "react/no-unescaped-entities": 0,
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/member-delimiter-style": ["error", { multiline: { delimiter: "semi" } }], // Require a specific member delimiter style for interfaces and type literals
    "@typescript-eslint/member-ordering": "warn", // Require a consistent member declaration order
    "@typescript-eslint/brace-style": ["error", "1tbs"], // Enforce consistent brace style for blocks
    "@typescript-eslint/quotes": ["error", "double", { avoidEscape: true }], // Enforce the consistent use of either backticks, double, or single quotes
    "@typescript-eslint/func-call-spacing": ["error", "never"], // Require or disallow spacing between function identifiers and their invocations
    "@typescript-eslint/no-useless-constructor": "error", // Disallow unnecessary constructors
    "@typescript-eslint/no-parameter-properties": "off", // Disallow the use of parameter properties in class constructors
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_", varsIgnorePattern: "^_$" }],
    "constructor-super": "off", // ts(2335) & ts(2377)
    "getter-return": "off", // ts(2378)
    "no-const-assign": "off", // ts(2588)
    "no-dupe-args": "off", // ts(2300)
    "no-dupe-class-members": "off", // ts(2393) & ts(2300)
    "no-dupe-keys": "off", // ts(1117)
    "no-func-assign": "off", // ts(2539)
    "no-import-assign": "off", // ts(2539) & ts(2540)
    "no-new-symbol": "off", // ts(2588)
    "no-obj-calls": "off", // ts(2349)
    "no-redeclare": "off", // ts(2451)
    "no-setter-return": "off", // ts(2408)
    "no-this-before-super": "off", // ts(2376)
    "no-undef": "off", // ts(2304)
    "no-unreachable": "off", // ts(7027)
    "no-unsafe-negation": "off", // ts(2365) & ts(2360) & ts(2358)
    "no-var": "error", // ts transpiles let/const to var, so no need for vars any more
    "prefer-const": "error", // ts provides better types with const
    "prefer-rest-params": "error", // ts provides better types with rest args over arguments
    "prefer-spread": "error", // ts transpiles spread to apply, so no need for manual apply
    "valid-typeof": "off", // ts(2367)
    "react/jsx-curly-brace-presence": "error",
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 2,
    "react-native/no-raw-text": 2,
    "react-native/no-single-element-style-arrays": 2,
  },
  extends: [
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from @typescript-eslint/eslint-plugin
    "plugin:prettier/recommended",
    "plugin:react-native/all",
  ],
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
};
