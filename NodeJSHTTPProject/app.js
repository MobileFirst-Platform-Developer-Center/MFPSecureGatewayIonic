const express = require('express')
const app = express()
var fs = require('fs')
xmlReader = require('read-xml');
const port = 3000
var xmlfile = __dirname + "/writers.xml";

xmlReader.readXML(fs.readFileSync(xmlfile), function(err, data) {
    if (err) {
      console.error(err);
    }
       app.get('/feed.xml/', (req, res) => res.send(fs.readFileSync(xmlfile)))
       app.get('/Messege/', (req, res) => res.send('Hello your http server is up and running '))

  });
  
app.listen(port, () => console.log(`your app  is listening at http://localhost/Messege:${port}`))