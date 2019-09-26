# Como criar um novo projeto no node

Para criar um novo projeto no node:
```
node init -y
```



# Como instalar as bibliotecas necessárias para usar o socket io
É necessároo instalar a biblioteca do express :
```
npm install --save express@4.15.2
npm install --save socket.io

```

# As funções básicas do socket io

O socket io tem duas funções principais: 
- A função na qual você relaciona uma callback a um determinado evento;
- A função que aciona os eventos. 

## on

Esse evento pode ser personalizado e o nome dele é definido no primeiro argumento que é passado para a função. A função que vai ser invocada quando for ativado o  evento é o segundo parametro que se passa no metodo "on". 
```
socket.on("nome_evento",callback)
```


## emit
O primeiro parametro do método emit é o nome do evento que quer ser acionado. E o segundo parametro são os dados que serão enviados.

```
socket.emit("nome_evento", dados)
```


