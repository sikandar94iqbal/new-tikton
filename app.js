const app = require('express')()

app.get('/', (req, res) => {
  res.send("Ello from Appsodyy Demoo! to Hell0 from Cloud Paks!!");
});
 
module.exports.app = app;
