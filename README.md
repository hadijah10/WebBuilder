# Overview
### The project involves using webpack to bundle all .scss,assests and ts files into one file to be used as well as incoporate babel for compatibility

## Setting Up guide
1. Run git clone https://github.com/hadijah10/WebBuilder.git.
2. Run npm install in the terminal.
   
## Run Instructions
1. Run npm build to build the application for deployment.
2. Run npm run dev to serve the application on a local server(localhost) at port 3000.
3. Run npm format to format the content of ts,js and sass files per the prettier requirements.
4. Run npm check to run linting, fix linting and format file content.
5. Run npm run test to run the unit tests
6. Run npm run precommit to run npm check and test before each commit. You could opt to to commit a change to run precommit.

## Build Process
#### Webpack
Webpack helps to bundle all js,sass and asset into somy of point. It uses loader to be able to run the and  html together. Webpack and webpack cli were first installed. Webpack loaders for typescript, sass and style were added to the configuration. For linting rules, semicolons was enforced. To be able to import the json file, "resolveJsonModule": true, was added to the tsconfig file.

npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
prettier to istall prettier libraries.
eslint-plugin-prettier: Runs Prettier as an ESLint rule
eslint-config-prettier: Disables ESLint rules that conflict with Prettier

noEmit set to false. noEmit: Ensure that the noEmit option is not set to true. If it is, TypeScript will not emit any output files. 
noEmitOnError: If this is set to true, TypeScript will not emit output if there are any type errors. Consider setting it to false during debugging.

For prettier.
semi: Adds semicolons
singleQuote: Use single quotes
printWidth: Max line length
trailingComma: Adds trailing commas where valid in ES5 (objects, arrays, etc.)
prettier: The core formatter

eslint-plugin-prettier: Runs Prettier as an ESLint rule

eslint-config-prettier: Disables ESLint rules that conflict with Prettier,
Create a .prettierignore file to avoid formatting unnecessary files:

"format": "prettier --write \"src/**/*.{ts,js,json,css,scss,html}\"",. --write means overrite the file after formatting.
 "check":"npm run lint && npm run lint:fix && npm run format"

A precommit-hook script or command that runs automatically right before you make a Git commit.It aborts the commit once there is an error.
npm install --save-dev husky lint-staged.
Husky: manages Git hooks easily (like pre-commit)
lint-staged: runs commands on only staged files for speed.
npm install --save-dev husky 

 
#### Babel set up
npm install -D babel-loader @babel/core @babel/preset-env  "noEmit": true, ensures typescript doesn't output babel does it not
Testign.
package.json
  "jest": {
    "preset": "ts-jest",
    "testEnvironment": "jsdom", 
    "moduleFileExtensions": ["ts", "js", "json"],
    "testMatch": ["**/test/*.test.ts"]
  },

 "no-undef": "warn"
Meaning:
Warns you if you use a variable that hasn’t been declared."no-unused-vars": "warn"
Meaning:
Warns you if you declare variables (or functions, imports, parameters, etc.) but never use them in your code.