const bodyParser = require('body-parser');

module.exports = function(app) {
     app.use(bodyParser.json());       // to support JSON-encoded bodies
     app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
         extended: true
      }));

   app.get('/', function (req, res) {
      res.render('index.html')
   });
   app.get('/about', function (req, res) {
      res.render('about.html');
   });
   app.get('/basic-grid', function (req, res) {
      res.render('basic-grid.html');
   });
   app.get('/full-width', function (req, res) {
      res.render('full-width.html');
   });
   app.get('/sidebar-left', function (req, res) {
      res.render('sidebar-left.html');
   });
   app.get('/sidebar-right', function (req, res) {
      res.render('sidebar-right.html');
   });
   app.get('/font-icons', function (req, res) {
      res.render('font-icons.html');
   });
   app.get('/gallery', function (req, res) {
      res.render('gallery.html');
   });
     
    app.get('/listall', function (req, res) {
      //res.render('about.html');
      console.log('listall...');
      const getNumber = req.body.getNumber;
      let response = {
            'result': 'true',
            'getLists': getNumber 
      }
      
      console.log('response : ' + response);
      res.status(200).json(response);
   });  // end of get
     
}
