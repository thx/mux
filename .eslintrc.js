module.exports = {
  "extends": "react-app",
  // overrid eslint-plugin-react-app rules
  "globals": {
  },
  "rules": {
    "indent": [
      "error",
      2, {
        "SwitchCase": 1
      }
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "no-useless-escape": 0,
    "no-mixed-operators": 0,
    "no-cond-assign": 0,
    'strict': 0,
    "eqeqeq": 0
  }
};
