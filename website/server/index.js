const express = require('express');
const { renderToString } = require('react-dom/server');
const SSR = require('../dist/bundle-server');

//! TODO

const server = (port) => {
  const app = express();
  app.use(express.static('dist'));

  app.get('/', (req, res) => {
    const html = htmlTemplate(renderToString(SSR));
    res.status(200).send(html);
  });

  app.listen(port, () => {
    console.info('Server is running');
  });
};

const htmlTemplate = (str) => `
<!doctype html>
  <html lang="en">
    <head>
      <meta charset="UTF-8"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width,initial-scale=1"/>
      <title>EMirror</title>
      <link href="main.css" rel="stylesheet">
    </head>
    <body>
      <div id="root">${str}</div>
      <script src="bundle.js">
      </script>
    </body>
</html>
`;

// server(process.env.PORT || 9091);
