module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  "transform": {
    "^.+\\.svelte$": "svelte-jester"
  },
  // "moduleFileExtensions": [
  //   "js",
  //   "svelte"
  // ],
  "setupFilesAfterEnv": [
    "@testing-library/jest-dom/extend-expect"
  ]
};
