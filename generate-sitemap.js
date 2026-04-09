const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/projects', changefreq: 'weekly', priority: 0.8 },
  { url: '/about', changefreq: 'monthly', priority: 0.6 },
  { url: '/contact', changefreq: 'monthly', priority: 0.6 }
];

const sitemap = new SitemapStream({ hostname: 'https://umeshmali.tech' });

const writeStream = createWriteStream('./public/sitemap.xml');

links.forEach(link => sitemap.write(link));

sitemap.end();

streamToPromise(sitemap).then(data => {
  writeStream.write(data.toString());
});