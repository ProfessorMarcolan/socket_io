const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static("./assets"));

//const {Sala, salas} = require("./classes/sala.js")


io.on('connection', CONECTANDO);

function CONECTANDO (socket){
    

    //esta conectando o sinal "conecta sala" so socket para a funcção configura sala
    socket.on("conecta_sala", (sala)=>{
        socket.join(sala)
        console.log(`O socket ${socket.id} se conectou na sal ${sala}`)
    
        socket.on("mensagem", (mensagem) =>{
    
            //pega as salas que o socket esta conetaco
            let room = Object.keys(socket.rooms);
    
            //essa funcao vai enviar a mensagem para todo mundo que esta na sala menos para o socket.
            //a ultima sala sempre é a room que ele ta conectado
            socket.broadcast.to(room[1]).emit("SEND_CHAT_LOBBY", mensagem)
            io.in(room[1]).emit('SEND_CHAT_LOBBY', 'Essa mensagem vai ser enviada para todos os clientes conectados na sala');
            
            //https://socket.io/docs/emit-cheatsheet/

            })
        })

    socket.on("desconecta_sala",()=>{

        let room = Object.keys(this.rooms);
    
        this.leave(room[1]);
    
        console.log("desconetando")})

}

    







app.get('/', (req, res) => {
    res.sendFile(__dirname + './assets/index.html');
   });

const salas =["asdyuagsd123"]
//construir uma rota para pegar todos os jgoso ativos
app.get('/pega_salas', (req, res) => {
    let jogos_id = salas //salas.map((ele)=> {return ele.nome_sala})
    //refatorar o nome disso aqui
    res.json(salas);
   });




http.listen(3000, () => {
    console.log('listening on *:3000');
  });

