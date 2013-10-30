define([
  /**
   * Module dependencies.
   */
  'dojo/_base/config',
  'dojo/node!express',
  'dojo/node!swig',
  'dojo/node!http',
  'dojo/node!path',
  'dojo/node!util',
  'root/routes/home'
  ], function(config, express, swig, http, path, util, home){

  var app = express();

  // all environments
  app.configure(function(){
    app.engine('html', swig.renderFile);
    app.set('port', process.env.PORT || 3000);
    app.set('views', path.join(config.baseUrl, 'views'));
    app.set('view engine', 'html');
    app.set('view cache', false);
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(express.multipart({ defer: true }));
    app.use(express.methodOverride());
    app.use(express.cookieParser('your secret here'));
    app.use(express.session());
    app.use(app.router);
    app.use(express.static(config.baseUrl));
  });

  // development only
  if ('development' == app.get('env')) {
    app.use(express.errorHandler());
  }

  app.get('/', home.index);

  http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
  });

});