# [Elephas React](https://cft-group.github.io/elephas-react/)

[![npm version](https://img.shields.io/npm/v/@elephas/react-core/latest)](https://www.npmjs.com/package/@elephas/react-core) ![Build status](https://img.shields.io/github/workflow/status/cft-group/elephas-react/Tests)

Elephas Design System was created to build consistent user interfaces across different teams and products at [Center of Financial Technologies](https://cft.group/en/). Our goal is to maintain great developer experience for software engineers, no matter which platform they are building on.

Elephas React is a library that implements [Elephas Design System components](https://github.com/cft-group/elephas) using [React](https://github.com/facebook/react/). It has a [Storybook documentation](https://cft-group.github.io/elephas-react/) describing all available components.

## Installation and Usage

1. Install Elephas React and CSS packages. 

```bash
# Yarn
yarn add @elephas/core @elephas/layout @elephas/react-core @elephas/react-layout

# npm
npm install @elephas/core @elephas/layout @elephas/react-core @elephas/react-layout
```

2. Make sure you have installed peer dependencies.

```bash
# Yarn
yarn add react react-dom mime

# npm
npm install react react-dom mime
```

3. Add [Inter font](https://github.com/rsms/inter) to your project.

4. Import CSS in your `index.js` file.

```js
import '@elephas/layout/styles.min.css';
import '@elephas/core/styles.min.css';
```

5. Use components as following:

```jsx
import React from 'react';
import { Button } from '@elephas/react-core';

function MyComponent() {
  return (
    <Button appearance="primary">Click Me</Button>
  );
}
```

## License

Source code is under a [custom license](https://github.com/cft-group/elephas-react/blob/master/LICENSE.md) based on MIT. The license restricts Elephas usage to applications that integrate or interoperate with Center of Financial Technologies software or services, with additional restrictions for external, stand-alone applications.
