//  the rentry point of the client  code base
// intended to run only on the client side

// treat this file as a normal react normal index setup
// we can do the normal set in this app like we do in normal react apps

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routets";

// note: at this point the sever has already sent the
// html template to the client so we can render this react
// component to that "root" element
ReactDOM.hydrate(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.querySelector("#root")
);
// hydrate is like render

// note: the BrowserRouter will not work on the server side
// there we need to use StaticRouter
