const downloadPDF = (req, res) => {};

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
