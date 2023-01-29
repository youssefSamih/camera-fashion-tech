## Install

- `npm install`
- `npx husky add .husky/pre-commit "npm run pre-commit"`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

The app will reload if you make any updates.

### `npm run lint`

Runs eslint with to see any lint issues

### `npm run ios`

Run the app for ios mobile devices

### `npm run prepare`

run after `npm install` by default to run install husky

### `npm run pre-commit`

for pre commit git hook that run using husky on every commit made to check the lint issues and try to fix them, also prettier write command to fix any prettier issues
