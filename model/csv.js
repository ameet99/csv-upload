const mongoose = require("mongoose");

// Schema for the csv
const csvSchema = new mongoose.Schema(
  {
    FileName: {
      type: String,
    },

    FilePath: {
      type: String,
    },

    File: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Files = mongoose.model("Files", csvSchema);

// export
module.exports = Files;
