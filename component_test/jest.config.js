const config = {
    verbose: true,
    testMatch: ["**/(*.)test.js", "**/(*.)spec.js"],
    collectCoverageFrom: [
        "**/*.{js,jsx}",
        "!**/node_modules/**",
        "!**/vendor/**",
    ],
};

module.exports = config;
