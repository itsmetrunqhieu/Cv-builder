const PDFDocument = require("pdfkit");
const puppeteer = require("puppeteer");
const path = require("path");
const { CV, CV_tmplt } = require("../models");
const fs = require("fs");
const { error } = require("console");

const downloadPDF = async (req, res, next) => {
  try {
    const htmlContent = req.body.html; // Assuming the client sends the HTML content in the request body

    // Launch a headless browser
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Set the HTML content of the page
    await page.setContent(htmlContent);

    // Generate a PDF from the rendered page
    const pdfBuffer = await page.pdf();

    // Close the browser
    await browser.close();

    // Set response headers for download
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=downloaded.pdf");

    // Send the PDF data to the client for download
    res.end(pdfBuffer);
  } catch (error) {
    console.error("Error converting HTML to PDF:", error);
    res.status(500).send("Internal Server Error");
  }
};

const saveUserCV = async (req, res, next) => {
  try {
    const htmlfile = req.file;
    const fileContent = fs.readFileSync(htmlfile.path, "utf-8");
    console.log(fileContent);
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(fileContent);
    console.log(page);
    const screenshotPath = path.join(
      __dirname,
      "../../Data/images",
      `${htmlfile.originalname}.png`
    );
    const screenshot = await page.screenshot({
      path: screenshotPath,
    });
    console.log(screenshot);
    const UserId = req.user.id;
    const CVtmpltId = req.query.id;
    const validCVtmplt = await CV_tmplt.findByPk(CVtmpltId);
    const preview_dir = screenshotPath;
    console.log(validCVtmplt.dataValues.id);
    console.log(preview_dir);
    const html_dir = htmlfile.path;

    CV.create({
      html_dir: html_dir,
      preview_dir: preview_dir,
      CVtmpltId: validCVtmplt.id,
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
