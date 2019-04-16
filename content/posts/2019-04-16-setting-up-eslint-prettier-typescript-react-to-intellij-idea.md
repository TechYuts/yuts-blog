---
template: post
title: Setting up Eslint + Prettier + Typescript + React to IntelliJ Idea
slug: posts/settingEslintOnIdea
draft: true
date: 2019-04-16T02:03:12.914Z
description: >-
  No one wants to see messy code. Writing readable codes makes you a good
  programmer but how can you know when your code is "Readable"? And here comes
  the lint to help you. Linting is very important when it comes to tidying up
  your own code, and there are two option when it comes to typescript...
category: web development
tags:
  - programming
  - frontend
---
No one wants to see messy code. Writing readable codes makes you a good programmer but how can you know when your code is "Readable"? And here comes the lint to help you. Linting is very important when it comes to tidying up your own code, and there are two option when it comes to typescript.

[TSLint](https://palantir.github.io/tslint/) and [ESlint](https://eslint.org/)

Personally, I would recommend using ESLint because **ESLint has better features then TSlint and it supports both javascript and typescript**. 

Let's create some typescript react project

## Use node 

```bash
$ npx create-react-app sample_ts --typescript
```

this command will create boilerplate for your react project

## Setting up ESlint
