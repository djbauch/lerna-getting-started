![sample](https://raw.githubusercontent.com/djbauch/lerna-getting-started/main/packages/classification-banner/docs/assets/banners.png)

## Overview

A react component that displays classification banners.

## Usage

Install classification-banners via npm.

`npm install @djbauch/classification-banner`

or

`yarn add @djbauch/classification-banner`

Import the component and the CSS file from the library...
```jsx
import { ClassificationBanner } from '@djbauch/classification-banner'
import '@djbauch/classification-banner/dist/ClassificationBanner.css'
```
&hellip; and add the JSX to use the component in your `render` function:

```jsx
<ClassificationBanner placement="top" classification="U">
```

CodeSandbox example: https://codesandbox.io/p/sandbox/nervous-fermi-932hvk