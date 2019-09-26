var socket = io();

socket.emit("connect");


//estou plorando coisas queu nao deveria estar explorando
//HUADSHUASDHUASDHUAHUSDhuASD
//mas isso nao é uma live didatica SHAUDHUASDHUADSHUAHUDShuads
//refatore essa gambiarra XD

let nome_sala = "oi_mundo"



//sinal para enviar para o servidor
function sinal_conecta_sala(){
    console.log("enviando o sinal para conectar no servidor")
    //enviando sinal para o servidor
    socket.emit("conecta_sala",nome_sala);

}


//conectando o socket ao evento "send_chat_lobby" e passando uma funcao para lidar quando o evento ocorrer
socket.on("SEND_CHAT_LOBBY",(msg)=>{
    console.log(msg)
})



function criando_botao_interface(){
    
    let buto = $(`<button>${nome_sala}</button>`)
    buto.on("click",() => sinal_conecta_sala())
    $('#sala').append(buto);
    
}
criando_botao_interface()


function envia_msg_pessoas_conectada_sala(){
    socket.emit("mensagem","oi pessoas do chat")
}





