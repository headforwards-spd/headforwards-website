module.exports = {
    snapshotSerializers: ['enzyme-to-json/serializer'],
    setupFiles: ['./setupEnzyme.js', `<rootDir>/loadershim.js`],
    transform: {
        '^.+\\.jsx?$': `<rootDir>/jest-preprocess.js`,
    },
    moduleNameMapper: {
        '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
        '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`,
        '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css|less|scss)$':
            '<rootDir>/__mocks__/fileMock.js',
        gatsby: '<rootDir>/__mocks__/gatsby.js',
        '^config(.*)$': '<rootDir>/gatsby$1',
        '^cms(.*)$': '<rootDir>/src/js/cms$1',
        '^components(.*)$': '<rootDir>/src/js/components$1',
        '^pages(.*)$': '<rootDir>/src/js/pages$1',
        '^partials(.*)$': '<rootDir>/src/js/partials$1',
        '^prop-types(.*)$': '<rootDir>/src/js/prop-types$1',
        '^templates(.*)$': '<rootDir>/src/js/templates$1',
    },
    testPathIgnorePatterns: [`node_modules`, `.cache`],
    transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
    testResultsProcessor: 'jest-sonar-reporter',
    collectCoverage: true,
    coverageDirectory: 'reports',
    collectCoverageFrom: ['./{.storybook,gatsby,lambda,src,static}/**/*.js', './gatsby-*.js', './optimise.js'],
    coverageReporters: ['lcov', 'text-summary'],
    globals: {
        __PATH_PREFIX__: ``,
    },
    testURL: `http://localhost`,
};
