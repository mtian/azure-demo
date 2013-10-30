// The module to bootstrap
var loadModule = "root/server";

// Configuration object for Dojo Loader
dojoConfig = {
  baseUrl: __dirname,
  async: 1,
  hasCache: {
    "host-node": 1, // ensure we force the Loader into NodeJS mode
    "dom": 0 // ensure none of the code assumes we have a dom
  },
  packages: [{
    name: "dojo",
    location: "public/libs/dojo"
  }, {
    name: "dijit",
    location: "public/libs/dijit"
  }, {
    name: "dojox",
    location: "public/libs/dojox"
  }, {
    name: "app",
    location: "public/javascripts/app"
  }, {
    name: "root",
    location: "."
  }],
  deps: [ loadModule ]
};

// Now load the Dojo Loader
require('./public/libs/dojo/dojo.js');