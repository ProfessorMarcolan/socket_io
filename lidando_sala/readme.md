# ENTENDENDO socket io

## Conectando em uma sala você precisa usar a fucntion
```
socket.join("nome_da_sala")
```
## Para sair de uma sala
```
socket.leave("nome_da_sala")
```

## Para conectar eventos a funcoes do socket
```
socket.on("nome_do_evento",funcion_ser_chamada)

```

## Para emitir determinados eventos para as pessoas na sala
Enviar o evento para todas as pessoas conectadas na sala incluindo a pessoa que engatilhou o sinal inicialmente
```
io.in("sala").emit('SEND_CHAT_LOBBY', 'Essa mensagem vai ser enviada para todos os clientes conectados na sala');
```

Ou enviar para todos na sala menos a pessoa detentora do socket
```
socket.broadcast.to("sala").emit("SEND_CHAT_LOBBY", mensagem)
```

Ou enviar para todas as pessoas conectadas no server
```
io.emit("SEND_CHAT_LOBBY"," Envia mensagem para todas as pessoas conectadas no servidor")
```
- ref https://socket.io/docs/emit-cheatsheet/


## Para encontrar a sala que socket esta conectados
```
let room = Object.keys(this.rooms);
let sala_conectada = room[1]
```





# Instalando o nodemon
```
npm install nodemon --global
```

# Como instalar os pacotes do package.json
```
npm install
```


