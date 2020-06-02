# Simple Upload
Simple file upload using [Cloudinary](https://cloudinary.com/) and React. Code is an updated version from [Damonbauer's react-cloudinary](https://github.com/damonbauer/react-cloudinary.git). Changes include code updates to using [React-Dropzone](https://react-dropzone.js.org/), loading message during POST request for Cloudinary, and local enviornment variable setup to prevent sharing Cloudinary API.<br>
Upload application lives within src/components/upload

![Example](https://media.giphy.com/media/ckYzZeIAttB6sOmmlI/giphy.gif)

## Set environment variables
Create a <b>.env</b> file and follow the .env_sample variables. Change the variables while refering to Cloudinary notes below.

## Cloudinary notes
1. To enable API calls with this code, create a new preset through Settings -> Upload -> Upload presets. Add an <b>unsigned</b> upload preset and copy name to .env file for variable REACT_APP_PRESET.
2. To get CLOUDINARY_UPLOAD_URL, go to dashboard, click 'more' (if other URLs are collapesed), click on lower arrow on API Base URL. Use image upload URL, which should look like https://api.cloudinary.com/v1_1/YOUR_CLOUDINARY_CLOUD_NAME/image/upload. Set the .env for variable REACT_APP_API.

## To run code
1. Create Cloudinary account
2. ```$ npm install ```
3. ```$ npm start```