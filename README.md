# Design System Component Library

This project is to create React component library using:

- [Rollup](https://github.com/rollup/rollup)
- [Sass](https://sass-lang.com/)
- [TypeScript](https://www.typescriptlang.org/)

It also features:

- [Storybook](https://storybook.js.org/) to help you create and show off your components
- [Jest](https://jestjs.io/) and [React Testing Library](https://github.com/testing-library/react-testing-library) enabling testing of the components

## Development

### Testing

```
npm run test
```

### Building

```
npm run build
```

### Storybook

To run a live-reload Storybook server on your local machine:

```
npm run storybook
```

To export your Storybook as static files:

```
npm run storybook:export
```

You can then serve the files under `storybook-static` using S3, GitHub pages, Express etc.

### Installing Component Library Locally

Let's say you have another project (`test-app`) on your machine that you want to try installing the component library into without having to first publish the component library. In the `test-app` directory, you can run:

```
npm i --save ../ds-component-library
```

which will install the local component library as a dependency in `test-app`. It'll then appear as a dependency in `package.json` like:

```JSON
  ...
  "dependencies": {
    ...
    "@dansiew-component-library": "file:../ds-component-library",
    ...
  },
  ...
```

Your components can then be imported and used in that project.

## Publishing

### Hosting via NPM

## Usage

```TSX
import React from "react";
import { DsButton } from "ds-component-library";
import "ds-component-library/dist/styles.css";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
      <h1>Test App</h1>
      <h1>{count}</h1>
      <div className="card">
        <DsButton
          label="Count Up"
          onClick={() => setCount((count) => count + 1)}
          type="button"
          buttonType="primary"
          size="medium"
          event=""
        />
    </>
  );
};

export default App;
```

### Using Component Library SASS Variables

## Additional Help

### Using Alternatives to Sass

#### Less or Stylus

#### CSS Modules

```

```

```
