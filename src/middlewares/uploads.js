const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage(
    {
        destination : (req, file, callback) => {
            callback(null, path.join(_dirname, "../uploaded_files"));
        },
        filename : (req, file, callback) => {
            const uniquePrefix = Date.now();
            callback(null, uniquePrefix + "-" + file.originalname);
        }
    }
);

const fileFilter = (req, file, callback) => {
    if(file.mimetype === image/jpeg || file.mimetype === image/jpg || file.mimetype === image/png){
        callback(null, true);
    }
    else{
        callback(new Error("mimetype not supported"), false);
    }
};

const option = {
    storage, fileFilter, limits: {fileSize: 1024*1024*5},
};

const Upload = multer(option);

module.exports = Upload;