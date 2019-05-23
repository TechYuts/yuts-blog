---
template: post
title: Setting up Eslint + Prettier + Typescript + React to IntelliJ Idea
slug: posts/settingEslintOnIdea
draft: false
date: 2019-04-16T02:03:12.914Z
description: >-
  No one wants to see messy code. Writing readable codes makes you a good
  programmer but how can you know when your code is "Readable"? And here comes
  the lint to help you. Linting is very important when it comes to tidying up
  your own code, and there are two option when it comes to typescript...
category: web development
tags:
  - programming
---
No one wants to see messy code. Writing readable codes makes you a good programmer but how can you know when your code is "Readable"? And here comes the lint to help you. Linting is very important when it comes to tidying up your own code, and there are two option when it comes to typescript.

[TSLint](https://palantir.github.io/tslint/) and [ESlint](https://eslint.org/)

Personally, I would recommend using ESLint because **ESLint has better features then TSlint and it supports both javascript and typescript**. 

Let's create some typescript react project

## Create Typescript react project

```bash
$ npx create-react-app sample_ts --typescript
```

this will create boilerplate for your react project

## Setting up ESlint in your project

this could be done globally but I prefer setting up per project.

we could use npm or yarn,

```bash
$ npm i eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
$ npm i eslint-plugin-react --save-dev
```

## Setting up prettier

Install prettier plugin from IntelliJ IDEA app marketplace 

*VSCode users could download prettier extension

they recommends installing an exact version of prettier so there will be no conflict whenever the style changes due to updates.

```bash
$ npm i prettier@1.17.0 --save-dev --save-exact
$ npm i eslint-config-prettier eslint-plugin-prettier --save-dev
```

## create config files for prettier and eslint

create these files in your project root folder

- .eslintrc.js
- .prettierrc.js

#### .eslintrc.js

```javascript
module.exports =  {
  parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
  extends:  [
    'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint',  // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended',  // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parserOptions:  {
    ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
    sourceType:  'module',  // Allows for the use of imports
  },
};
```

#### .prettierrc.js

```javascript
module.exports =  {
  semi:  true,
  trailingComma:  'all',
  singleQuote:  true,
  printWidth:  100,
  tabWidth:  2,
};
```

this prettier style is what i commonly use, you can use different styling rules just look other options from their website.

https://prettier.io/docs/en/options.html

thats all for project setting. Now we need the IDEA to recognize this setting and setup auto code formatting.

## IntelliJ IDEA ESLint Setting

go to

preferences > Language & Frameworks > JavaScript > Code Quality Tools > ESlint

- choose manual ESLint Configuration
- set the ESLint package field to `~/path/to/project/node_modules/eslint`

**Configuration file**
- choose automatic search

press ok.

## Setup auto code formatter

intall `file watcher` plugin, 

https://plugins.jetbrains.com/plugin/7177-file-watchers

Setup file watchers in your IDE

preferences > Tools > FileWatchers

- press `+` at bottom
- choose Prettier
- Set File Type to `Typescript JSX`

press `OK`

Here you go, we done setting up linter for your React Typescript project using IntelliJ IDEA. This should keep your code tidy and presentable at all times! 
