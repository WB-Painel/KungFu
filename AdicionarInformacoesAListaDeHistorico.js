function FUNC(SLOT_1,SLOT_2,SLOT_3,SLOT_4,SLOT_5,SLOT_6,SLOT_7,SLOT_8,SLOT_9){
			
	        document.getElementsByClassName("NoHistory")[0].style.display="none";
			
			let Registros = document.getElementsByClassName("ViewHistoricoBottomInfoSubtitle")[0];
			
			let RegistrosCount = Registros.innerText.substring(0,Registros.innerText.indexOf(" "));
			RegistrosCount = parseInt(RegistrosCount)+1+" "+"Registros";
			Registros.innerText = RegistrosCount;// + "Registros";
					  
			let Data = new Date();
					  
			let Hora = Data.getHours();
					  
			let Minuto = Data.getMinutes();
					  
			let Segundos = Data.getSeconds();
	
					  
			let ViewHistoricoTop2 = document.getElementsByClassName("ViewHistoricoTop2")[0];
	
			
			let ValorDoHorarioDaAposta = document.createElement("h1");
			ValorDoHorarioDaAposta.setAttribute("class","ViewHistoricoCenterHorarioText");
			ValorDoHorarioDaAposta.style.height = ViewHistoricoTop2.clientHeight/1+"px";
			ValorDoHorarioDaAposta.style.fontSize = ViewHistoricoTop2.clientHeight/3+"px";
			ValorDoHorarioDaAposta.innerHTML = Hora+":"+Minuto+":"+Segundos;
			
			
			let ViewHistoricoCenterHorario = document.getElementsByClassName("ViewHistoricoCenterHorario")[0];
			ViewHistoricoCenterHorario.appendChild(ValorDoHorarioDaAposta);
					 
					  
			let ValorDaAposta1 = document.createElement("h1");
			ValorDaAposta1.setAttribute("class","ViewHistoricoCenterApostaText");
			ValorDaAposta1.style.height = ViewHistoricoTop2.clientHeight/1+"px";
			ValorDaAposta1.style.fontSize = ViewHistoricoTop2.clientHeight/3+"px";
			ValorDaAposta1.innerHTML = document.getElementsByClassName("CardInfoValor")[1].innerText;
					  
			
			let ViewHistoricoCenterAposta = document.getElementsByClassName("ViewHistoricoCenterAposta")[0];
			ViewHistoricoCenterAposta.appendChild(ValorDaAposta1);
					 
					  
			let ValorDaAposta2 = document.getElementsByClassName("CardInfoValor")[1].innerText;
			ValorDaAposta2 = ValorDaAposta2.replace("R$","");
			ValorDaAposta2 = ValorDaAposta2.replace(" ","");
			
			let Reais1 = ValorDaAposta2.substring(0,ValorDaAposta2.indexOf(","));
					  
			let Centavos1 = ValorDaAposta2.substring(ValorDaAposta2.indexOf(",")+1,ValorDaAposta2.length);
					  
					
			let ValorDoGanho = document.getElementsByClassName("CardInfoValor")[2].innerText;
			ValorDoGanho = ValorDoGanho.replace("R$","");
			ValorDoGanho = ValorDoGanho.replace(" ","");
					  
					  
			let Reais2 = ValorDoGanho.substring(0,ValorDoGanho.indexOf(","));
					  
			let Centavos2 = ValorDoGanho.substring(ValorDoGanho.indexOf(",")+1,ValorDoGanho.length);
					  
					  
			let NovoReal1 = parseInt(Reais2-Reais1);
					 
			let NovoCentavo1 = parseInt(Centavos2-Centavos1);
					 
			
			if(String(NovoCentavo1).includes("-")){
			NovoCentavo1 = parseInt(String(NovoCentavo1).replace("-",""));
			}
			
			let ViewHistoricoCenterLucro = document.getElementsByClassName("ViewHistoricoCenterLucro")[0];
					
			let ViewNovoValor = document.createElement("div");
			ViewNovoValor.setAttribute("class","ViewViewHistoricoCenterLucroText");
			ViewNovoValor.style.height = ViewHistoricoTop2.clientHeight/1+"px";
			ViewNovoValor.style.width = ViewHistoricoTop2.clientWidth/3+"px";
			
			ViewHistoricoCenterLucro.appendChild(ViewNovoValor);
					  
			let ValorDoSaldoDoLucro = document.createElement("h1");
			ValorDoSaldoDoLucro.setAttribute("class","ViewHistoricoCenterLucroText");
			ValorDoSaldoDoLucro.style.height = ViewHistoricoTop2.clientHeight/2+"px";
			ValorDoSaldoDoLucro.style.width = ViewHistoricoTop2.clientWidth/3-ViewHistoricoTop2.clientWidth/18+"px";
			ValorDoSaldoDoLucro.style.fontSize = ViewHistoricoTop2.clientHeight/3+"px";
			ValorDoSaldoDoLucro.innerHTML = "R$ "+NovoReal1+","+NovoCentavo1;
					
			let More = document.createElement("img");
			More.setAttribute("class","ViewHistoricoCenterApostaSeta");
			More.src = "image/transparent.png";
			More.style.height = ViewNovoValor.clientHeight/2+"px";
			More.style.width = ViewNovoValor.clientWidth/10+"px";
			
			ViewNovoValor.appendChild(ValorDoSaldoDoLucro);
			ViewNovoValor.appendChild(More);
			
			let ValorDaAposta3 = document.getElementsByClassName("CardInfoValor")[1];
					
			let ValorDoSaldoDaCarteira = document.getElementsByClassName("CardInfoValor")[0];
					
			ParseClick(
			ViewNovoValor,
			ValorDoHorarioDaAposta.innerText,
			ValorDaAposta3.innerText,
			ValorDoSaldoDoLucro.innerText,
			ValorDoSaldoDaCarteira.innerText, SLOT_1.cloneNode(true),SLOT_2.cloneNode(true),SLOT_3.cloneNode(true),SLOT_4.cloneNode(true),SLOT_5.cloneNode(true),SLOT_6.cloneNode(true),SLOT_7.cloneNode(true),SLOT_8.cloneNode(true),SLOT_9.cloneNode(true));
					
			let Aposta = document.getElementsByClassName("CardInfoValor")[1];
			let ValorDaAposta = Aposta.innerText;
			ValorDaAposta = ValorDaAposta.replace("R$","");
			ValorDaAposta = ValorDaAposta.replace(" ","");
			ValorDaAposta = ValorDaAposta.replace(".","");
					
			let ReaisDaAposta = ValorDaAposta.substring(0,ValorDaAposta.indexOf(","));
					  
			let CentavosDaAposta = ValorDaAposta.substring(ValorDaAposta.indexOf(",")+1,ValorDaAposta.length);
					
			let ViewHistoricoBottomInfoTotalDeApostas = document.getElementsByClassName("ViewHistoricoBottomInfoGanhos")[0];
			let ValorDoHistoricoBottomInfoTotalDeApostas = ViewHistoricoBottomInfoTotalDeApostas.innerText;
			ValorDoHistoricoBottomInfoTotalDeApostas = ValorDoHistoricoBottomInfoTotalDeApostas.replace("R$","");
			ValorDoHistoricoBottomInfoTotalDeApostas = ValorDoHistoricoBottomInfoTotalDeApostas.replace(" ","");
			ValorDoHistoricoBottomInfoTotalDeApostas = ValorDoHistoricoBottomInfoTotalDeApostas.replace(".","");
					
			let Reais3 = ValorDoHistoricoBottomInfoTotalDeApostas.substring(0,ValorDoHistoricoBottomInfoTotalDeApostas.indexOf(","));
					  
			let Centavos3 = ValorDoHistoricoBottomInfoTotalDeApostas.substring(ValorDoHistoricoBottomInfoTotalDeApostas.indexOf(",")+1,ValorDoHistoricoBottomInfoTotalDeApostas.length);
					
			let NovoReal = parseInt(Reais3 + Centavos3)+parseInt(ReaisDaAposta + CentavosDaAposta);
					
			if(String(NovoReal).length==7){
					
			NovoReal = String(NovoReal).substring(0,2)+"."+String(NovoReal).substring(2,5)+","+String(NovoReal).substring(5,7);
					
			}else{
					
			if(String(NovoReal).length==6){
					
			NovoReal = String(NovoReal).substring(0,1)+"."+String(NovoReal).substring(1,4)+","+String(NovoReal).substring(4,6);
					
			}else{
					
			if(String(NovoReal).length==5){
					
			NovoReal = String(NovoReal).substring(0,3)+","+String(NovoReal).substring(3,5);
					
			}
					
			}
					
			}
					
			ViewHistoricoBottomInfoTotalDeApostas.innerHTML = "R$ "+NovoReal;
					
			let Aposta2 = document.getElementsByClassName("CardInfoValor")[1];
			
			let ValorDaAposta4 = Aposta2.innerText;
			ValorDaAposta4 = ValorDaAposta4.replace("R$","");
			ValorDaAposta4 = ValorDaAposta4.replace(" ","");
			ValorDaAposta4 = ValorDaAposta4.replace(".","");
					
			let ReaisDaAposta2 = ValorDaAposta4.substring(0,ValorDaAposta4.indexOf(","));
					  
			let CentavosDaAposta2 = ValorDaAposta4.substring(ValorDaAposta4.indexOf(",")+1,ValorDaAposta4.length);
					
			let Ganho = document.getElementsByClassName("CardInfoValor")[2];
			
			let ValorDoGanho2 = Ganho.innerText;
			ValorDoGanho2 = ValorDoGanho2.replace("R$","");
			ValorDoGanho2 = ValorDoGanho2.replace(" ","");
			ValorDoGanho2 = ValorDoGanho2.replace(".","");
					
			let ReaisDoGanho = ValorDoGanho2.substring(0,ValorDoGanho2.indexOf(","));
					  
			let CentavosDoGanho = ValorDoGanho2.substring(ValorDoGanho2.indexOf(",")+1,ValorDoGanho2.length);
					  
			let ViewHistoricoBottomInfoPerdas = document.getElementsByClassName("ViewHistoricoBottomInfoPerdas")[0];
			let ValorDoHistoricoBottomInfoPerdas = ViewHistoricoBottomInfoPerdas.innerText;
			ValorDoHistoricoBottomInfoPerdas = ValorDoHistoricoBottomInfoPerdas.replace("R$","");
			ValorDoHistoricoBottomInfoPerdas = ValorDoHistoricoBottomInfoPerdas.replace(" ","");
			ValorDoHistoricoBottomInfoPerdas = ValorDoHistoricoBottomInfoPerdas.replace(".","");
					
			let Reais4 = ValorDoHistoricoBottomInfoPerdas.substring(0,ValorDoHistoricoBottomInfoPerdas.indexOf(","));
					  
			let Centavos4 = ValorDoHistoricoBottomInfoPerdas.substring(ValorDoHistoricoBottomInfoPerdas.indexOf(",")+1,ValorDoHistoricoBottomInfoPerdas.length);
					  
			let NovoReal4 = parseInt( Reais4+Centavos4 ) - parseInt(ReaisDaAposta2+CentavosDaAposta2) + parseInt(ReaisDoGanho+CentavosDoGanho);
					
			if(String(NovoReal4).length==8&&String(NovoReal4).substring(0,1)=="-"){
					
			NovoReal4 = String(NovoReal4).substring(0,3)+"."+String(NovoReal4).substring(3,6)+","+String(NovoReal4).substring(6,8);
					
			}else{
					
			if(String(NovoReal4).length==7&&String(NovoReal4).substring(0,1)=="-"){
					
			NovoReal4 = String(NovoReal4).substring(0,2)+"."+String(NovoReal4).substring(2,5)+","+String(NovoReal4).substring(5,7);
					
			}else{
					
			if(String(NovoReal4).length==6&&String(NovoReal4).substring(0,1)=="-"){
					
			NovoReal4 = String(NovoReal4).substring(0,4)+","+String(NovoReal4).substring(4,6);
					
			}else{
					
			if(String(NovoReal4).length==7){
					
			NovoReal4 = String(NovoReal4).substring(0,2)+"."+String(NovoReal4).substring(2,5)+","+String(NovoReal4).substring(5,7);
					
			}else{
					
			if(String(NovoReal4).length==6){
					
			NovoReal4 = String(NovoReal4).substring(0,1)+"."+String(NovoReal4).substring(1,4)+","+String(NovoReal4).substring(4,6);
					
			}else{
					
			if(String(NovoReal4).length==5){
					
			NovoReal4 = String(NovoReal4).substring(0,3)+","+String(NovoReal4).substring(3,5);
					
			}
					
			}
					
			}
					
			}
					
			}
					
			}
					
			ViewHistoricoBottomInfoPerdas.innerHTML = "R$ "+NovoReal4;
			
			}
