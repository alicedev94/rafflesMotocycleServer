const PDFDocument = require("pdfkit");
const doc = new PDFDocument();

const fs = require("fs");

function cmToPt(cm) {
  return cm * 28.3465;
}

const pdfKit = async () => {
  // Create a document
  doc.pipe(fs.createWriteStream("C:/Users/d.marcano/Desktop/file.pdf")); // write to PDF                                   // HTTP response

  // line cap settings
  doc
    .rect(10, 20, cmToPt(12, 10), cmToPt(8, 9))
    .dash(4, { space: 2.5 })
    .stroke();
  doc.end();
};

pdfKit();
// const a =
// console.log(a)
