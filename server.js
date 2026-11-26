// Explore Rajasthan: small Express server.
// It serves the page (views/index.ejs) and everything in /public (css, js).
const path = require('path');
const express = require('express');
const config = require('./config');

const app = express();
const isProd = process.env.NODE_ENV === 'production';

app.disable('x-powered-by');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files: /css/... and /js/...
app.use(express.static(path.join(__dirname, 'public'), { maxAge: isProd ? '1d' : 0 }));

// The site is one page; the #hash in the address picks which inner page shows.
app.get('/', (req, res) => res.render('index', { config }));

app.use((req, res) => res.status(404).type('text/plain').send('Page not found'));

const PORT = process.env.PORT || 3000;
if (require.main === module) {
  app.listen(PORT, () => console.log(`Explore Rajasthan running at http://localhost:${PORT}`));
}

module.exports = app;
