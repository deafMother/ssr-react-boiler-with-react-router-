// render the react app and return the string

import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Routes from "../client/Routets";

export default (req) => {
  /*
  note: we are sending HTML code and not JS like in normal react apps
  so we need to hydrate  and have sencond client bundle
  */
  // static router must be given the  current url
  const content = renderToString(
    <StaticRouter location={req.path} context={{}}>
      <Routes />
    </StaticRouter>
  );

  /*
    add html script tp inject the client bundle js into the html content above
  */
  const html = `
  <html>
    <head>
    </head>
    <body>
      <div id="root">${content}</div>
      <script src="bundle.js"></script>
    </body>  

  </html>
  `;

  return html;
};
