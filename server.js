const path = require('path');
const http = require('http');
const express = require('express');
const expressStaticGzip = require("express-static-gzip");
const compression = require('compression');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 8080;


// app.use(express.static(__dirname + './', {maxage: '7d'}));
app.use(express.static(__dirname + './'));

//set up compression and static dir
app.use(expressStaticGzip("./"));
app.use(compression({
  level: 2,               // set compression level from 1 to 9 (6 by default)
  // filter: shouldCompress, // set predicate to determine whether to compress
}));

app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname + "/index.html"));
})

app.listen(PORT, function () {
  console.log('Example app listening on port 8080!')
})
