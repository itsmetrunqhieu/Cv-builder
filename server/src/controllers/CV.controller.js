const PDFDocument = require("pdfkit");
const puppeteer = require("puppeteer");
const path = require("path");
const { CV, CV_tmplt } = require("../models");
const fs = require("fs");
const { error } = require("console");

const downloadPDF = async (req, res, next) => {
  try {
    const htmlContent = req.body.html; // Assuming the client sends the HTML content in the request body
    const styleContent = req.body.style; // Assuming the client sends the CSS content in the request body
    // console.log(htmlContent);
    // console.log(styleContent);
    // Launch a headless browser
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Set the HTML content of the page
    await page.evaluate((htmlContent, styleContent) => {
      const html = document.createElement("html");
      html.innerHTML = htmlContent;
      const style = document.createElement("style");
      style.innerHTML = styleContent;
      const head = document.createElement("head");
      head.appendChild(style);
      html.prepend(head);
      document.body.innerHTML = html.outerHTML;
    }
    , htmlContent, styleContent);

    // Generate a PDF from the rendered page
    const pdfBuffer = await page.pdf({printBackground: true});

    // save PDF to file
    fs.writeFileSync("page.pdf", pdfBuffer);

    // Close the browser
    await browser.close();

    // Set response headers for download
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=downloaded.pdf");

    // Send the PDF data to the client for download
    res.status(200).end(pdfBuffer);
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
      UserId: UserId,
      CVTmpltId: validCVtmplt.id,
    }).then((cv) => {
      res.status(200).send("File uploaded and path saved to successfully");
    });
  } catch (error) {
    next(error);
  }
};

const getUserCVList = async (req, res, next) =>{
  try {
    const CVList = await CV.findAll({
      where: {UserId: req.user.id},
      attributes: ["id", "preview_dir", "CVTmpltId"],
    });
    var List = [];
    CVList.forEach((CV) => {
      base64preview = fs.readFileSync(
        CV.preview_dir,
        "base64"
      );
      List.push(new Object({ ID: CV.id, CVTmpltId: CV.CVTmpltId, Base64: base64preview}));
    });
    //convert list to json and send.
    const listjson = JSON.stringify(List);
    return res.status(200).send(listjson);   
  } catch (error) {
    next(error)
  }
}

module.exports = {
  downloadPDF,
  saveUserCV,
  getUserCVList
};
