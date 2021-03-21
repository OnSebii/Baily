var shortUrl = require('node-url-shortener');

shortUrl.short('https://baily.at', function (err, url) {
  console.log(url);
});
