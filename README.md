# Customer List Test Project

Thanks for taking the time to look at this code test project. This project aims to give a reasonable baseline view of the tools and structure we work with, it is far from perfect and plays fast with some of the rules, but the overall structure looks a lot like something you'd see in an Alinta Energy project.

This project implements a customer list using a redux store, with a Formik form for adding customers. It is styled using styled-components at the most minimal level; our regular projects use a shared component library (ASG) which handles most elements and layout out of the box.

The redux store follows the slightly dated pattern of having actions, reducers and types in separate files. This is deliberate as it mirrors many of our existing projects, which were built before Redux Toolkit was available and stable.

## Setup

This project is bootstrapped from react-create-app which allow you to use any of the [documentation for CRA](https://create-react-app.dev/docs/getting-started).

### Initial Set up steps:

- Run `yarn` this will install the needed npm packages and only needs to be run once.
- Run `yarn start` to run the app locally this will open a browser window for the site.
- Run `yarn test` to run the test. The results will display in the terminal window.

## Tasks

Please attempt one or more of the following improvement tasks on this project, and then either make a PR for review or submit a zip of the project.

**Time box yourself to 1 to 2 hours of work.**

We realise your time is valuable and don't need to see all these issues resolved. Pick a task or area that you excel or are passionate about. Complete as much as you can in the time you choose. We'll review your code in the technical interview, discuss choices you made and anything you'd like to improve if you had the time.

### Suggested Tasks

Use one of our suggested tasks or complete your own improvement to the project if you see something we haven't listed.

- Move the Add new customer, form it takes up a lot of space on mobile. It could move to another page or be hidden in an accordion.
- Add a birthday to the customers. Consider using a date-picker and it's pros and cons.
- Add validation. Currently, the form allows blank customers to be submitted; we only want customers with all fields filled in. Add validation that handles phone numbers in different formats.
- Improve accessibility. Add extra aria for screen readers and ensure users with other disabilities are catered for in the design.
- Convert the customer list to a table. The block layout is hard for users to scan down.
- Add search and sorting. As the list grows, users want to be able to search by name or phone number.
- Add a duplicate customer check. Prevent users from entering users with the same first and last name or phone number.
- Refactor the store; this is an expansive task. You could update the IDs to be unique and convert the customer list to a map to make editing more efficient. Or convert to a Redux Toolkit slices structure. Whatever you do, make sure it improves the implementation.
- Improve the tests. The current tests work as little more than a smoke test. They should be testing the functionality of the form and the delete button at a minimum.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
