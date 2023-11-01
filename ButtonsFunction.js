//DIMINUIR E AUMENTAR VALOR DA APOSTA
let NoModoTurbo = false;

let NoModoAutomatico = false;

let Diminuir = document.getElementsByClassName("ButtonFunction")[1];
				  
let Aumentar = document.getElementsByClassName("ButtonFunction")[2];
				
Diminuir.onclick = function(){
playSound("mixkit-game-click-1114.wav");
Aumentar.style.opacity="100%";
				  
				
let ValorDaAposta = document.getElementsByClassName("CardInfoValor")[1].innerText;
ValorDaAposta = ValorDaAposta.replace("R$","");
ValorDaAposta = ValorDaAposta.replace(" ","");
ValorDaAposta = ValorDaAposta.replace(".","");
				
				
let ValorDoCentavo = ValorDaAposta.substring(ValorDaAposta.indexOf(",")+1,ValorDaAposta.length);
ValorDaAposta = ValorDaAposta.substring(0, ValorDaAposta.indexOf(","));
				
				
let ValorDoSaldoDaAposta = ValorDaAposta;
if(ValorDoSaldoDaAposta!=1){
				
let ValorDaAposta = document.getElementsByClassName("CardInfoValor")[1];
ValorDaAposta.innerText = obterValorEmFormatoDeDinheiro(ValorDoSaldoDaAposta-1+"."+ValorDoCentavo);
				
}
				
if(ValorDoSaldoDaAposta==2){
Diminuir.style.opacity="50%";
}
				
};
				
				
				
				
				
Aumentar.onclick = function(){
playSound("mixkit-game-click-1114.wav");
Diminuir.style.opacity="100%";
				  
				
let ValorDaAposta = document.getElementsByClassName("CardInfoValor")[1].innerText;
ValorDaAposta = ValorDaAposta.replace("R$","");
ValorDaAposta = ValorDaAposta.replace(" ","");
ValorDaAposta = ValorDaAposta.replace(".","");
				
let ValorDoCentavo = ValorDaAposta.substring(ValorDaAposta.indexOf(",")+1,ValorDaAposta.length);
				
ValorDaAposta = ValorDaAposta.substring(0, ValorDaAposta.indexOf(","));
				
let ValorDoSaldoDaAposta = parseInt(ValorDaAposta);
				
if(ValorDoSaldoDaAposta!=100){
let ValorDaAposta = document.getElementsByClassName("CardInfoValor")[1];
ValorDaAposta.innerText = obterValorEmFormatoDeDinheiro(ValorDoSaldoDaAposta+1+"."+ValorDoCentavo);
}
				
if(ValorDoSaldoDaAposta==99){
Aumentar.style.opacity="50%";
}
				
};
//FIM

//MODO TURBO
let ModoTurbo = document.getElementsByClassName("ButtonFunction")[0];
				  
ModoTurbo.onclick = function(){
playSound("mixkit-game-click-1114.wav");
if(!NoModoTurbo){
ModoTurbo.style.opacity="100%";
NoModoTurbo = true;
BlocosCount = 3;
}else{
ModoTurbo.style.opacity="50%";
NoModoTurbo = false;
BlocosCount = 30;
}
};
//

//MODO AUTOMATICO
let ModoAutomatico = document.getElementsByClassName("ButtonFunction")[3];
ModoAutomatico.onclick = function(){
playSound("mixkit-game-click-1114.wav");
if(!NoModoAutomatico){
ModoAutomatico.style.opacity="100%";
NoModoAutomatico = true;
}else{
ModoAutomatico.style.opacity="50%";
NoModoAutomatico = false;
}
};
//
