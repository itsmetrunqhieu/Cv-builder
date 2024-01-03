const PDFDocument = require("pdfkit");
const { CV } = require("../models");
const fs = require("fs");

const downloadPDF = async (req, res, next) => {
  try {
    const originalFilePath = req.file.path;
    const pdfFilePath = `pdfs/${req.file.fileName}.pdf`;

    const doc = new PDFDocument();

    const stream = fs.createWriteStream(pdfFilePath);

    doc.pipe(stream);

    fs.readFile(originalFilePath, "utf-8", (error, fileContent) => {
      if (error) next(error);
      doc.text(fileContent);

      doc.end();
      fs.unlink(originalFilePath, (error) => {
        if (error) next(error);
      });
    });

    stream.on("finish", () => {
      res.download(pdfFilePath, (error) => {
        if (error) next(error);
        fs.unlink(pdfFilePath, (error) => {
          if (error) next(error);
        });
      });
    });
  } catch (error) {
    next(error);
  }
};

const saveUserCV = (req, res) => {
  try {
    const userId = req.body.id;
    const filePath = req.file.path;

    CV.create({
      html_dir: filePath,
      UserId: userId,
    }).then((cv) => {
      res.status(200).send("File uploaded and path saved to successfully");
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  downloadPDF,
  saveUserCV,
};
