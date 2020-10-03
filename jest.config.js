module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "moduleFileExtensions": [
    "js",
    "ts",
    "json",
    // tell Jest to handle `*.vue` files
    "vue"
  ],
  "testMatch": [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.vue$": "vue-jest"
  }
};
