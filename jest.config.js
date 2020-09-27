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
    moduleNameMapper: {
        '@b/([^\\.]*)$': '<rootDir>/src/$1',
        '@ui/([^\\.]*)$': '<rootDir>src/shared/ui/$1',
    },
    setupFiles: ['./test/setup.js'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
};
