# gatsby-plugin-github-avatar

[![Build Status](https://travis-ci.org/micalgenus/gatsby-plugin-github-avatar.svg?branch=master)](https://travis-ci.org/micalgenus/gatsby-plugin-github-avatar)
[![npm version](https://img.shields.io/npm/v/@micalgenus/gatsby-plugin-github-avatar.svg)](https://www.npmjs.com/package/@micalgenus/gatsby-plugin-github-avatar)
[![npm total downloads](https://img.shields.io/npm/dt/@micalgenus/gatsby-plugin-github-avatar.svg?style=flat)](https://www.npmjs.com/package/@micalgenus/gatsby-plugin-github-avatar)

## Install

```
yarn add @micalgenus/gatsby-plugin-github-avatar
or
npm install --save @micalgenus/gatsby-plugin-github-avatar
```

## How to use

```js
// gatsby-config.js

module.exports = {
  plugins: [
    {
      resolve: `@micalgenus/gatsby-plugin-github-avatar`,
      options: {
        username: `micalgenus`, // Github username
      },
    },
  ],
};
```

### Example usage

```jsx
// example.jsx

import React from 'react';
import Avatar from '@micalgenus/gatsby-plugin-github-avatar';

export class ExampleComponent extends React.Component {
  render() {
    return <Avatar />;
  }
}
```
