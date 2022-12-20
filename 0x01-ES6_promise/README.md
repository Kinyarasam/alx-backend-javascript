# 0x01. ES6 Promises

`Javascript` `ES6`

For this project, we expect you to look at these concepts:
- [Mordern Javascript](https://alx-intranet.hbtn.io/concepts/541)
- [Software Linter](https://alx-intranet.hbtn.io/concepts/542)

---
![75862d67ca51a042003c.jpeg](./asset/75862d67ca51a042003c.jpeg)

## Resources

#### Read or watch:
- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [JavaScript Promise: An introduction](https://web.dev/promises/)
- [Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
- [Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Throw / Try](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)


## Learning Objectives

At the end of this project, you are expected to be able to [explain to anyone](https://fs.blog/feynman-learning-technique/), **without the help of Google:**
- Promises (how, why and what)
- How to use the `then`, `resolve`, `catch` methods
- How to use every method of the Promise object
- Throw / try
- The await operator
- How to use an `async` function

## Requirements

- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All your files should end with a new line
- A `README.md` file, at the root of the folder of the project, is mandatory
- Your code should use the `js` extension
- Your code will be tested using the [Jest Testing Framework](https://jestjs.io/)
- Your code will be tested using `jest` and the command `npm run test`
- Your code will be analyzed using the linter [ESLint](https://eslint.org/) along with specific rules that we'll provide.
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
<summary>
Click to show/hide file contents
</summary>
<pre>
{
	"scripts": {
		"lint": "./node_modules/.bin/eslint",
		"check-lint": "lint [0-9]*.js",
		"dev": "npx babel-node",
		"test": "jest",
		"full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
	},
	"devDependencies": {
		"@babel/core": "^7.6.0",
		"@babel/node": "^7.8.0",
		"@babel/preset-env": "^7.6.0",
		"eslint": "^6.4.0",
		"eslint-config-airbnb-base": "^14.0.0",
		"eslint-plugin-import": "^2.18.2",
		"eslint-plugin-jest": "^22.17.0",
		"jest": "^24.9.0"
	}
}
</pre>
</details>

### `babel.config.js`

<details>
<summary>Click to show/hide file contents</summary>
<pre>

module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				targets: {
					node: 'current',
				},
			},
		],
	],
};

</pre>
</details>

### `utils.js`
<details>
Use when you get tasks requiring `uploadPhoto` and `createUser`.
<summary>Click to show/hide file contents</summary>
<pre>

export function uploadPhoto() {
	return Promise.resolve({
		status: 200,
		body: 'photo-profile-1',
	});
}


export function createUser() {
	return Promise.resolve({
		firstName: 'Guillaume',
		lastName: 'Salva',
	});
}


</pre>
</details>

### `.eslintrc.js`

<details>
<summary>Click to show/hide file contents</summary>
<pre>

module.exports = {
	env: {
		browser: false,
		es6: true,
		jest: true,
	},
	extends: [
		'airbnb-base',
		'plugin:jest/all',
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
	}
	Plugins: ['jest'],
	rules: {
		'no-console': 'off',
		'no-shadow': 'off',
		'no-restricted-syntax': [
			'error',
			'LabeledStatement',
			'WithStatement',
		],
	},
	overrides: [
		{
			files: ['*.js'],
			excludedFiles: 'babel.config.js',
		}
	]
};

</pre>
</details>

### and...
Don't forget to run `$ npm install` when you have the `package.json`

## Response Data Format
`uploadPhoto` returns a response with the format

~~~
{
	status: 200,
	body: 'photo-profile-1',
}
~~~
`createUser` returns a response with thw format
~~~
{
	firstName: 'Guillaume',
	lastName: 'Salva',
}
~~~
