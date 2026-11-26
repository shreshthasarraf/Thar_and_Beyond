# Explore Rajasthan

The Explore Rajasthan website, moved from one big HTML file into a small Node.js project.
The look and behaviour are the same as before. Only the way the code is organised has changed.

## Run it

```
npm install
npm start
```

Then open http://localhost:3000.

## WhatsApp enquiries

The contact form sends each enquiry to your WhatsApp number. Set the number once, in `config.js`
(country code first, digits only, for example `919876543210`), or start the server with:

```
WHATSAPP_NUMBER=919876543210 npm start
```

Until a number is set, the form shows a polite "not available" message. For auto-restart while editing, use `npm run dev`.

## Where to find things

| I want to change... | Open this |
|---|---|
| A photo (destination, group, experience) | `public/js/data/photos.js` |
| Destination text, history, best season | `public/js/data/destinations.js` |
| Group types (schools, colleges...) | `public/js/data/groups.js` |
| Activities and where they happen | `public/js/data/activities.js` |
| City details (food, festivals, geography) | `public/js/data/city-details.js` |
| Experience cards and pages | `public/js/data/experience-cards.js`, `public/js/data/experiences.js` |
| Page wording (hero, about, FAQ, contact) | `views/partials/*.ejs` |
| Colours and layout | `public/css/` (files are numbered in the order they load; later files override earlier ones). Destination cards: `08-destination-cards.css` |
| Menu, carousel, animals, contact form | `public/js/ui/` |
| Hover effects, fade-ins, FAQ look, back-to-top button | `public/css/09-enhancements.css`, `public/js/ui/polish.js` |
| How inner pages are built | `public/js/pages/` |
| Which page shows for each `#link` | `public/js/app.js` |

## Folder map

```
server.js            starts the website
views/               the page, split into one small file per section
  index.ejs          puts the sections together
  partials/          hero, about, destinations, faq, contact, footer...
public/
  css/               styles, 01 to 07
  js/
    data/            all the content (text, photos, itineraries)
    core/            small shared helpers
    ui/              menu, carousel, animals, forms
    pages/           inner pages (cities, groups, activities)
    app.js           shows the right page for the link
```

The order of the script tags is listed in `views/partials/scripts.ejs`.
Keep that order: a file can only use things defined in files above it.

## Deploy to Vercel

The site is built into plain static files, so no server is needed online.
`vercel.json` already tells Vercel to run `npm run build` and publish the `public` folder.
Before deploying, add your number in Vercel under Project Settings, then Environment Variables:
`WHATSAPP_NUMBER` = `919876543210` (use your own). Redeploy after changing it.
