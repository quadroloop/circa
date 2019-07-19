// circa
// Author: Bryce Narciso C. Mercines

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
var bodyParser = require('body-parser');
var fs = fs || require('fs');
var open = require('open');

// init lowdb
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

//db defaults


app.use(express.static('src'));


app.set('port', (process.env.PORT || 8000));
http.listen(process.env.PORT || 8000);

function guid() { 
    var d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
        d += performance.now(); 
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

// get current date scheme yy/mm/dd

function ndate(){
var d = new Date();

var month = d.getMonth()+1;
var day = d.getDate();

var formattedDate = d.getFullYear() + '/' +
    (month<10 ? '0' : '') + month + '/' +
    (day<10 ? '0' : '') + day;
  return formattedDate;
}


var route = "/";
app.get(route, function(req, res) {
  res.sendFile(path.join(__dirname, './src/index.html'));
});



var port = 8000;

// identify the user using ip
//welcome message
console.log("=======================")
console.log(" circa            ");
console.log("=======================")
console.log(" Running server...     ");
console.log("------------------------");
console.log("listening on port: "+port);

io.sockets.on('connection', function(socket) {
// socket communications fucntions

  socket.on("openMedia",()=>{
     open("./src/media");
  })

});

// watch for file changes

function emitFilechange() {
  console.log("file update event");
  io.emit('fUpdate',{data: "file event"});
}

// watch shar
var chokidar = require('chokidar');

var watcher = chokidar.watch('uploads', {ignored: /^\./, persistent: true});

watcher
  .on('add', function(path) {emitFilechange()})
  .on('change', function(path) {emitFilechange()})
  .on('unlink', function(path) {emitFilechange()})
  .on('error', function(error) {emitFilechange()})