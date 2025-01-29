// Modulo de pruebas Jest para React
module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
      "^.+\\.svg$": "jest-svg-transformer",
      "^.+\\.(css|less|scss)$": "identity-obj-proxy",
      "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.cjs"
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
}