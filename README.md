# Lerna Getting Started Example

This repo is a small example of using Lerna 5+.

Watch this [10-minute walkthrough](https://youtu.be/1oxFYphTS4Y) to see how new versions of Lerna work.

This repo contains three packages or projects:

- `frequency-allocation-chart` (a library of React components)
- `classification-banner` (a library of React components)
- `storybook` (an app written using the Remix framework which depends on both `frequency-allocation-chart` and `classification-banner`)

```
packages/
    classification-banner/
        src/
            ...
        package.json
        rollup.config.json
        jest.config.js

    frequency-allocation-chart/
        src/
            ...
        package.json
        rollup.config.json
        jest.config.js

    storybook/
        .storybook/
            ...
        public/
        package.json
        remix.config.js

package.json
```

## Scripts

`npm run build` this runs the command `npx lerna run build`

`npm run graph`

`npm run storybook`