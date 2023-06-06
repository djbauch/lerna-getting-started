import type { Config } from 'jest'
const config: Config = {
    testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    testEnvironment: "jsdom"
    }
export default config