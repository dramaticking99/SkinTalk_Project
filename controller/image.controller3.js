const { spawn } = require('child_process');

exports.uploadImage = async (req,res) => {
    try {
        const file = req.file;

        if(!file){
            console.error('No file uploaded');
            return res.status(400).send('No File Uploaded');
        }
        //Path for the image
        const tempImagePath = '/Users/chetansanwariya/Desktop/SkinTalk_Project/public/Image2.jpg';

        //Defining the variables
        const outputData = '';
        const outputResult = '';

    //Python code call

        //Spawn the python file, this is a child_process method to spawn the python file, and the tempImagePath is created as a commndline parameter to be passed whenever required
        const pythonProcess = spawn('/usr/bin/python3', ['-c',  
        `import ../ML/ML/machine_learning_module ; machine_learning_module.ml_model(${tempImagePath});`]);

        //when ever the output is generated from the standard output stream of the Python process it is appended in the variable 'output data'
        pythonProcess.stdout.on('data', (data) => {
            outputData += data.toString();
          });

        //what to do on error in the python code  
        pythonProcess.on('error', (error) => {
            console.error(`Python script error: ${error}`);
            callback(error, null); // Pass the error to the callback
          });  

        //what is the code run when we exit the running the pythonprocess
        pythonProcess.on('exit', (code) => {
            if(code === 0){
                console.log('Python script executed successfully.')
                //parse the output data as needed
                try {
                    outputResult = JSON.parse(outputData);
                    // output data is stored in outputResult
                } 
                catch (parseError) {
                    console.error(`Error parsing the Python script output: ${parseError}`);
                }
            } else {
                console.log(`pythonScript exited with a code ${code}`);
            }

        console.log(outputResult); 

        });  

    } catch (error) {
        console.error('Error handeling the file upload');
        return res.status(500).send("Error handeling the file response")
    }
}