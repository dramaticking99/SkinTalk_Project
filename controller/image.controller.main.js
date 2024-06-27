const { exec } = require('child_process');

exports.uploadImage = async (req, res) => {
    try {
        const file = req.file;
        const userId = req.file.originalname;

        function love(){
            const apiUrl = 'http://127.0.0.1:5000/predict';
        const imagePath = 'public/' + userId;
        
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

    } catch (error) {
        res.status(500).send("cant upload the file");
    }
}