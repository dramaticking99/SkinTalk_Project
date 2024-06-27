const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public');
    },
    filename: function (req, file, cb) {
        const filename = file.originalname;
        cb(null, filename);
    }
});

const upload = multer({ storage });


module.exports = upload;