import puppeteer from 'puppeteer';
import fs from 'fs'
import Mustache from 'mustache'

(async () => {

    const data = {
        invoiceNumber: "#12345",
        invoiceName: "Alan Sha Salim",
        invoiceAddress: "FRS Villa, 208, TRV, Kerala, India"
    }

  // Create a browser instance
  const browser = await puppeteer.launch();

  // Create a new page
  const page = await browser.newPage();

  //Get HTML content from HTML file
  const html = fs.readFileSync('./templates/invoice.html', 'utf-8');
  const filledTemplate = Mustache.render(html, data);

  await page.setContent(filledTemplate, { waitUntil: 'domcontentloaded' });

  // To reflect CSS used for screens instead of print
  await page.emulateMediaType('screen');

  // Downlaod the PDF
  const pdf = await page.pdf({
    path: './templates/result.pdf',
    margin: { top: '50px', right: '50px', bottom: '50px', left: '50px' },
    printBackground: true,
    format: 'A4',
  });

  // Close the browser instance
  await browser.close();
})();