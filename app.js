const express = require('express');
const upload = require('./middleware');
const path = require('path');
const viewController = require('./controller/image.controller.main');


const app = express();
app.post('/upload', upload.single('file'), viewController.uploadImage);


/*

const { exec } = require('child_process');

function love(){
    const apiUrl = 'http://127.0.0.1:5000/predict';
const imagePath = 'public/image2.jpeg';

const curlCommand = `curl -X POST -F "image=@${imagePath}" ${apiUrl}`;

exec(curlCommand, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error}`);
    return;
  }

  console.log(`Response fg: ${stdout}`);
});

}

love()
*/


module.exports = app;


