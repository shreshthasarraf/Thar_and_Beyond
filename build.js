// Builds the site as plain static files for hosting (e.g. Vercel).
// It renders views/index.ejs into public/index.html, using the WhatsApp number from config.js.
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const config = require('./config');

ejs.renderFile(path.join(__dirname, 'views', 'index.ejs'), { config }, (err, html) => {
  if (err) { console.error(err); process.exit(1); }
  fs.writeFileSync(path.join(__dirname, 'public', 'index.html'), html);
  console.log('Built public/index.html' + (config.whatsappNumber ? '' : ' (WhatsApp number not set)'));
});
