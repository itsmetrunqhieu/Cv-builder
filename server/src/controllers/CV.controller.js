const PDFDocument = require("pdfkit");
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
    const newCV = req.params.fileName;
  } catch (error) {
    next(error);
  }
};

module.exports = {
  downloadPDF,
  saveUserCV,
};
