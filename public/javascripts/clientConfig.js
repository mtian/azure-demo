var dojoConfig = {
  baseUrl: '/',
  parseOnLoad: false,
  packages: [
    { name: 'dojo', location: 'public/libs/dojo' },
    { name: 'dijit', location: 'public/libs/dijit' },
    { name: 'dojox', location: 'public/libs/dojox' },
    { name: 'application', location: 'public/javascripts/application' },
  ],
  deps: [ 'application' ],
  locale: 'en-us',
  async: true
};