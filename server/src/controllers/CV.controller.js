const PDFDocument = require("pdfkit");
const puppeteer = require("puppeteer");
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

const saveUserCV = async (req, res) => {
  try {
    const htmlfile = req.file;
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const fileContent = htmlfile.buffer.toString("utf-8");
    console.log(fileContent);
    await page.setContent(fileContent);

    const screenshot = await page.screenshot({
      path: path.join(
        __dirname,
        "../../Data/images",
        `${htmlfile.originalname}.png`
      ),
    });
    const { UserId, CVtmplateId } = req.body.id;
    const preview_dir = screenshot.path;
    const html_dir = htmlfile.path;

    CV.create({
      html_dir: html_dir,
      CVtmplateId: CVtmplateId,
      UserId: UserId,
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
