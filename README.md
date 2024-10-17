# Step 1: Requiremnt Analysis & Planning 

At first, I went through the project's details & tried to understand the requirements. Then I started thinking which technology stack & resources should I use. 

I started reading & following :

1. https://reactjs.org/docs/create-a-new-react-app.html

2. https://tailwindcss.com/docs/guides/create-react-app

3. https://www.freecodecamp.org/news/build-a-search-filter-using-react-and-react-hooks/

# Step 2: Spliting UI


Rental Software

- [x] Displaying Data from Json
- [x] SearchBox (Dynamic serach by using stringify)
- [x] Two buttons
- [x] Checking whether product available for rent or not , If availibity true then product available for booking either available for returing.  
- [x] Modal/PopUp for Booking 
  - [x] Product dropdown
  - [x] Showing Product & checking condition
  - [x] Start date
  - [x] End date
- [x] Book confirm popup
  - [x] Pop Up message 
  - [x] Confirmation whether Yes Or No
- [x] Return Modal
- [x] Return confirm popup
- [x] Confirm button


# Step 3: Resoures I have used:

1.  Material UI https://mui.com/
2. Date Range Picker https://www.daterangepicker.com/
3. https://date-fns.org/
4. https://jestjs.io/docs/tutorial-react 



# Step 4: Figuring out how to store data as it suggested not to use backend 

As it's recommended not to use backend, so we don't have any database. So, i figured out Js has already awesome solution that ia localStorage/sessionStorage oobject. So for fetching & storing data I have used localStorage.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
