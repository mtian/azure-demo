define([], function(){ return { 
    // GET: Index
    index: function(req, res) { 
      console.log(req.route);

      var currentUser = "The current user is: " + req.param('user');
      console.log(currentUser);
      console.log("Method is: " + req.method);


      res.render('index', { title: 'azure-demo' }); 
    }
  };
});