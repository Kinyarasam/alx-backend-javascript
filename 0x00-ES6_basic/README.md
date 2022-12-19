# 0x00. ES6 Basics

`Javascript` `ES6`

For this project, we expect you to look at these concepts:
- [Mordern Javascript](https://alx-intranet.hbtn.io/concepts/541)
- [Software Linter](https://alx-intranet.hbtn.io/concepts/542)

---
![img](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/08806026ef621f900121.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20221219%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20221219T072939Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=11c23ecc35b028a5817fd8a604dbc6fb01915d97b4fd0d1ab666ec9d1b36817f)

## Resources

#### Read or watch:
- [ECMAScript 6 - ECMAScript 2015](https://www.w3schools.com/js/js_es6.asp)
- [Statement and declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)
- [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- [Rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [Javascript ES^ --- Iterables and Iterators](https://towardsdatascience.com/javascript-es6-iterables-and-iterators-de18b54f4d4?gi=13e736e7df4f)

## Learning Objectives

At the end of this project, you are expected to be able to [explain to anyone](https://fs.blog/feynman-learning-technique/), **without the help of Google:**
- What ES6 is
- New features introduced in ES6
- The difference between a constant and a variable
- Block-scoped variables
- Arrow functions and function parameters default to them
- Rest and spread function parameters
- String templating in ES6
- Object creation and their properties in ES6
- Iterators and for-of loops

## Requirements

### General

- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All your files should end with a new line
- A `README.md` file, at the root of the folder of the project, is mandatory
- Your code should use the `js` extension
- Your code will be tested using the [Jest Testing Framework](https://jestjs.io/)
- Your code will be analyzed using thte linter [ESLint](https://eslint.org/) along with specific rules that we'll provide.
- All of your functions must be exported

## Setup

### Install NodeJS 12.11.x

(In your home directory):

~~~
Curl -SL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
~~~

~~~
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
~~~


### Install Jest, Babel, and ESLint
in your project directory:
- Install Jest using: `npm install --save-dev jest`
- Install Babel using: `npm install --save-dev babel-jest @babel/core @babel/preset-env`
- Install ESLint using: `npm install --save-dev eslint`

## Configuration files

### `package.json`
<details>
Click to show/hide file contents
<summary>
~~~
code
~~~
</summary>
</details>
