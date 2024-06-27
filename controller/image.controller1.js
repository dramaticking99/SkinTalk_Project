const ImageServices = require('../services/image.services');
const { spawn } = require('child_process');


machine_learning = (tempImagePath, callback) => {
    const pythonProcess = spawn('/usr/bin/python3', ['machine_learning_module.py', tempImagePath]);
    let outputData = '';
  
    pythonProcess.stdout.on('data', (data) => {
      outputData += data.toString();
    });
    
    pythonProcess.on('error', (error) => {
      console.error(`Python script error: ${error}`);
      callback(error, null); // Pass the error to the callback
    });
  
    pythonProcess.on('exit', (code) => {
      if (code === 0) {
        console.log('Python script executed successfully.');
        // Parse the output data as needed
        try {
          const outputResult = JSON.parse(outputData);
          callback(null, outputResult); // Pass the result to the callback
        } catch (parseError) {
          console.error(`Error parsing the Python script output: ${parseError}`);
          callback(parseError, null); // Pass the parsing error to the callback
        }
      } else {
        console.error(`Python script exited with code ${code}`);
        callback(`Python script exited with code ${code}`, null); // Pass the error to the callback
      }
    });
  };


exports.uploadImage = async (req, res, cb) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).send('No File Uploaded.');
    }

    // Assuming you have a tempImagePath based on the uploaded file, replace this with your logic.
    const tempImagePath = '/Users/chetansanwariya/Desktop/SkinTalk_Project/public/Image2.jpg';

    // Call the machine_learning function and handle its response
    machine_learning(tempImagePath, (err, machineLearningResponse) => {
      if (err) {
        console.error('Error running machine learning:', err);
        return res.status(500).send('Error running machine learning');
      }

      // Use machineLearningResponse as needed in the response to the client
      console.log(json({ machineLearningResult: machineLearningResponse }));
      return res.status(200).json({ machineLearningResult: machineLearningResponse });
      
    });
  } catch (error) {
    console.error('Error handling the file upload:', error);
    return res.status(500).send('Error handling the file upload.');
  }
};

