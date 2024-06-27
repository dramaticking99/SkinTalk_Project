const ImageServices = require('../services/image.services');
const { spawn } = require('child_process');

exports.uploadImage = async (req, res,cb) => {
    try {
        const file = req.file;

        if (!file) {
            return res.status(400).send('No File Uploaded.');
        }

        return res.status(200).send('File uploaded successfully.');I
    } catch (error) {
        console.error('Error handling the file upload:', error);
        return res.status(500).send('Error handling the file upload.');
    }
};

exports.machine_learning = async (req , res) => {
    try {

        const tempImagePath = "/Users/chetansanwariya/Desktop/SkinTalk_Project/public/Image2.jpg"
        const pythonProcess = spawn('python', ['my_ml_script.py', tempImagePath]);
        let outputData = '';

        pythonProcess.stdout.on('data', (data) => {
            outputData += data.toString();
          });
          pythonProcess.on('error', (error) => {
            console.error(`Python script error: ${error}`);
            res.status(500).json({ error: 'An error occurred while running the Python script' });
          });

          pythonProcess.on('exit', (code) => {
            if (code === 0) {
              console.log('Python script executed successfully.');
              // Parse the output data as needed
              const outputResult = JSON.parse(outputData);
      
              // Send the result as a response to the client
              res.status(200).json({ result: outputResult });
            } else {
              console.error(`Python script exited with code ${code}`);
              res.status(500).json({ error: 'Python script exited with an error' });
            }
          });
        }
       catch (error) {
        console.error('error processing the image');
        return res.status(500).send('Error processing the image');
    }
}
