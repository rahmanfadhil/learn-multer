const express = require("express");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "./uploads",
  filename(req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
const upload = multer({ storage });
const app = express();

app.use(express.static("public"));

app.post("/upload", upload.single("image"), (req, res) => {
  res.send({ filename: req.file.filename });
});

app.listen(3000, () => {
  console.log("Server has started!");
});
