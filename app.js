const app = require('express')()

app.get('/', (req, res) => {
  res.send("HHHello from Appsodyy Demoo! to Hell0 from Cloud Paks!!");
});
 
module.exports.app = app;
