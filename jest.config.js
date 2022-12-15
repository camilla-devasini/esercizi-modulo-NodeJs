module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  clearMocks: true,
  setupFilesAfterEnv: [
    "./es-20/src/lib/prisma/client.mock.ts",
    "./es-20/src/lib/middleware/multer.mock.ts",
  ],

  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
};
