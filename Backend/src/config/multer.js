const multer = require('multer');
const path = require("path");
const crypto = require("crypto");

const multerS3 = require("multer-s3");
const aws = require("aws-sdk");

const storageTypes = {
  local: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'public'),
    filename: (req, file, callback) => {
      // callback(null, new Date().toISOString().replace(/:/g, '-') + file.originalname)
      crypto.randomBytes(16, (err, hash) =>{
        if(err){ 
          callback(err);
        }

        file.key = `${hash.toString('hex')}-${file.originalname}`

        callback(null, file.key);
        })
    }
  }),
  s3: multerS3({
    s3: new aws.S3(),
    bucket: 'testeinteract',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'public-read',
    key: (req, file, cb) => {

      crypto.randomBytes(16, (err, hash) =>{

        if(err){ 
          cb(err);
        }

        const filename = `${hash.toString('hex')}-${file.originalname}`

        cb(null, filename);
        
      });
    }
  })
}

  const fileFilter = (req, file, callback) =>{
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg'){
        callback(null, true);
    }else{ 
        callback(null, false);
    }
}

const upload = multer({
  storage: storageTypes[process.env.STORAGE_TYPE],
  fileFilter: fileFilter
});


module.exports = upload;