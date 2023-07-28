// importing fs, path and csv model
const fs = require("fs");
const path = require("path");
const csvFile = require("../model/csv");

// home controller
module.exports.home = async (req, res) => {
  try {
    const files = await csvFile.find({});
    return res.render("Home", {
      title: "Home",
      Files: files,
    });
  } catch (error) {
    console.log("Error", error);
  }
};

// upload file
module.exports.upload = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send("Please Upload any CSV File!!");
    }
    if (!req.file.mimetype.startsWith("text/csv")) {
      return res.status(400).send("Please selcet CSV files only!");
    }
  } catch (error) {
    console.log("Error in uploading files", error);
  }

  const { originalname, path, filename } = req.file;

  const data = await csvFile.create({
    FileName: originalname,
    FilePath: path,
    File: filename,
  });

  return res.redirect("/");
};

// Delete file
module.exports.delete = async (req, res) => {
  try {
    const isFile = await csvFile.findById(req.params.id);
    if (!isFile) {
      return res.redirect("/");
    }
    await csvFile.findByIdAndDelete(req.params.id);
    const filePath = path.join(__dirname, "../uploadFiles", isFile.File);

    fs.unlink(filePath, function (err) {
      if (err) {
        console.error("Error", err);
        return res.redirect("/");
      } else {
        return res.redirect("/");
      }
    });
  } catch (error) {
    console.log("Error", error);
    res.status(500).send("Something went wrong!");
  }
};
