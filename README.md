# Polynomial Curve Fitting

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://img.shields.io/npm/v/polynomial-curve-fitting.svg?style=flat)](https://www.npmjs.com/package/polynomial-curve-fitting)

_A React component to interactively compile polyomial curves with D3 using least squares regression_

![Preview](./assets/preview.gif)

## Installation

```bash
npm i polynomial-curve-fitting
```

## Usage

Use the react component generating a random curve:

```javascript
import React from 'react';
import CurveGenerator from 'polynomial-curve-fitting';

const App = () => <CurveGenerator></CurveGenerator>;

export default App;
```

### Specify a Curve

To provide initial information about the curve, there are three options:

1. Use `PropsBaseCurve` and specify the following fields (all optional):

   ```javascript
   const curve = {
     name: 'Fancy Polynomial',
     description: 'This polynomial is a random polynomial.',
     xAxis: { label: 'x Axis', min: 0, max: 10 },
     yAxis: { label: 'y Axis', min: 0, max: 10 },
   };
   ```

2. Use `PropsCurvePoints` to specify points for the least squares regression. The order of the polynomial will be one less than the number of provided points. The fields of `PropsBaseCurve` are still optional, but the `points` field is required:

   ```javascript
   const curve = {
     points: [
       [0, 0],
       [1, 1],
     ],
   };
   ```

3. Use `PropsCurveOrder` to specify the order of the polynomial. The points on the curve are randomly generated. The fields of `PropsBaseCurve` are still optional, but the `polynomialOrder` field is required:

   ```javascript
   const curve = {
     polynomialOrder: 2,
   };
   ```

Provide the information about the curve as follows:

```javascript
const App = () => <CurveGenerator curve={curve}></CurveGenerator>;
```

### Provide Settings

In addition to the `curve` prop, there is also a `settings` prop that allows to set the style of the drawn graph (e.g, the size of the svg, font sizes, colors, and spacing). Have a look at the [default props](./src/default-props.ts) to see the default settings and what can be changed.

```javascript
const App = () => <CurveGenerator settings={settings}></CurveGenerator>;
```

## Development

The following steps show how to make changes to `polynomial-curve-fitting` and use the component in an `pcf-example` react app. The commands used below assume that the two projects are sibling directories.

### Clone and Build `polynomial-curve-fitting`

Within the terminal, execute the following commands:

```bash
# clone the repository
git clone https://github.com/alexscheitlin/polynomial-curve-fitting.git

# install the dependencies
cd polynomial-curve-fitting
npm install

# continuously build the library
npm run build:watch
```

### Create new React App `pcf-example`

Open a new terminal tab and execute the following commands:

```bash
# create new react app with typescript
npx create-react-app pcf-example --template typescript

# install this library as a dependency
cd pcf-example
npm install ../polynomial-curve-fitting

# link react of the library with the one of the example react app
cd ../polynomial-curve-fitting/
npm link ../pcf-example/node_modules/react

# start the example react app
cd ../pcf-example/
npm run start
```

Add the react component to the `App.tsx` file (see Usage)
