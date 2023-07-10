const { file } = require("googleapis/build/src/apis/file");
const multer = require("multer");

//set Storage
const storage = multer.diskStorage({
  //Destination
  destination: function (req, res, cb) {
    cb(null, "./uploads");
  },
  //fileName
  filename: function (req, res, cb) {
    cb(null, (file.fieldname = "-" + Date.now() + file.originalname));
  },
});
const filerFilter = (req, file, c) => {
  cb(null, true);
};
let upload = multer({
  storage: storage,
  filerFilter: filerFilter,
});

module.exports = upload.single("avatar");
