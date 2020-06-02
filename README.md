# Simple Upload
Simple file upload using [Cloudinary](https://cloudinary.com/) and React. Code is an updated version from [Damonbauer's react-cloudinary](https://github.com/damonbauer/react-cloudinary.git). Changes include code updates to using [React-Dropzone](https://react-dropzone.js.org/), loading message during POST request for Cloudinary, and local enviornment variable setup to prevent sharing Cloudinary API.

![Example](https://media.giphy.com/media/eeogcYlc1lZZmS7Z6z/giphy.gif)

## To run code
1. Create Cloudinary account
2. ```$ npm install ```
3. Specificy environment variables for CLOUDINARY_UPLOAD_PRESET & CLOUDINARY_UPLOAD_URL (refer to notes on where to find URL)
4. ```$ npm start```

## Cloudinary notes
1. To enable API calls with this code, create a new preset through Settings -> Upload -> Upload presets. Add an <b>unsigned</b> upload preset and copy name to CLOUDINARY_UPLOAD_PRESET.
2. To get CLOUDINARY_UPLOAD_URL, go to dashboard, click 'more' (if other URLs are collapesed), click on lower arrow on API Base URL. Use image upload URL, which should look like https://api.cloudinary.com/v1_1/{cloudinary cloud name}/image/upload 
