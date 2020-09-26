module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.js'],
    coveragePathIgnorePatterns: ['**/icons', '**/scripts'],
    coverageDirectory: './coverage/',
    coverageReporters: ['text', 'html'],
    coverageThreshold: {
        global: {
            branches: 70,
            functions: 70,
            lines: 70,
            statements: 70,
        },
    },
    setupFiles: ['./test/setup.js'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
};
