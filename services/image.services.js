const db = require('../config/db');

class ImageServices {
    async storeImageInDatabase(fileBuffer) {
        const collection = db.collection('images');

        try {
            const result = await collection.insertOne({ image: fileBuffer });
            return result;
        } catch (error) { 
            console.error('Error storing the image in database: ', error); 
            throw error;
        }
    }
}

module.exports = ImageServices;
