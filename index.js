var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get("/seki", function(req,res){

  res.json({ username: 'seki' })

})

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on("mensagem",(msg)=>{
    console.log("recebeu uma mesnagem")
    console.log(msg)
    io.emit('dados_importantes', msg);
  })

  
});


http.listen(port, function(){
  console.log('listening on *:' + port);
});