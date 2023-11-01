function AtualizarSaldoDosGanhos(LISTA_DE_SLOTS_IGUAIS,IMAGEM_DO_PERSONAGEM_DOS_SLOTS_IGUAIS){
	
				let Multiplicar = 0;
				
				if(IMAGEM_DO_PERSONAGEM_DOS_SLOTS_IGUAIS.includes("image/oogway.png")){
				Multiplicar = 9;
				}
				if(IMAGEM_DO_PERSONAGEM_DOS_SLOTS_IGUAIS.includes("image/po.png")){
				Multiplicar = 8;
				}
				if(IMAGEM_DO_PERSONAGEM_DOS_SLOTS_IGUAIS.includes("image/mestre_shifu.png")){
				Multiplicar = 7;
				}
				if(IMAGEM_DO_PERSONAGEM_DOS_SLOTS_IGUAIS.includes("image/tigressa.png")){
				Multiplicar = 6;
				}
				if(IMAGEM_DO_PERSONAGEM_DOS_SLOTS_IGUAIS.includes("image/tai_lung.png")){
				Multiplicar = 5;
				}
				if(IMAGEM_DO_PERSONAGEM_DOS_SLOTS_IGUAIS.includes("image/mestre_macaco")){
				Multiplicar = 4;
				}
				if(IMAGEM_DO_PERSONAGEM_DOS_SLOTS_IGUAIS.includes("image/garca")){
				Multiplicar = 3;
				}
				if(IMAGEM_DO_PERSONAGEM_DOS_SLOTS_IGUAIS.includes("image/louva_deus")){
				Multiplicar = 2;
				}
				if(IMAGEM_DO_PERSONAGEM_DOS_SLOTS_IGUAIS.includes("image/mestre_vibora")){
				Multiplicar = 1;
				}
				if(IMAGEM_DO_PERSONAGEM_DOS_SLOTS_IGUAIS.includes("image/manopla")){
				Multiplicar = 27;
				}
				
				
				Multiplicar = LISTA_DE_SLOTS_IGUAIS * Multiplicar;
				
				//Carteira//
				let ValorDaCarteira = document.getElementsByClassName("CardInfoValor")[0].innerText;
				ValorDaCarteira = ValorDaCarteira.replace("R$","");
				ValorDaCarteira = ValorDaCarteira.replace(" ","");
				ValorDaCarteira = ValorDaCarteira.replace(".","");
				
				//Reais da Carteira
				let ValorDosReais0 = ValorDaCarteira.substring(0,ValorDaCarteira.indexOf(","));
				
				//Centavos Da Carteira
				let ValorDosCentavos0 = ValorDaCarteira.substring(ValorDaCarteira.indexOf(",")+1,ValorDaCarteira.length);
				//alert(ValorDosCentavos0);
				let ValorDoSaldoDaCarteira = ValorDaCarteira;
				
				
				
				//Aposta
				let ValorDaAposta = document.getElementsByClassName("CardInfoValor")[1].innerText;
				ValorDaAposta = ValorDaAposta.replace("R$","");
				ValorDaAposta = ValorDaAposta.replace(" ","");
				ValorDaAposta = ValorDaAposta.replace(".","");
				
				//Reais da Aposta
				let ValorDosReais1 = ValorDaAposta.substring(0,ValorDaAposta.indexOf(","));
				
				//Centavos da Aposta
				let ValorDosCentavos1 = ValorDaAposta.substring(ValorDaAposta.indexOf(",")+1,ValorDaAposta.length);
				
				let ValorDoSaldoDaAposta = ValorDaAposta;
				
				
				
				let ValorDosGanhosDaAposta = document.getElementsByClassName("CardInfoValor")[2].innerText;
				ValorDosGanhosDaAposta = ValorDosGanhosDaAposta.replace("R$","");
				ValorDosGanhosDaAposta = ValorDosGanhosDaAposta.replace(" ","");
				ValorDosGanhosDaAposta = ValorDosGanhosDaAposta.replace(".","");
				
				//Reais
				ValorDosGanhosDaAposta = ValorDosGanhosDaAposta.substring(0,ValorDosGanhosDaAposta.indexOf(","));
				
				//Centavos
				let ValorDosCentavos2 = ValorDosGanhosDaAposta.substring(ValorDosGanhosDaAposta.indexOf(",")+1,ValorDosGanhosDaAposta.length);
				
				let ValorDoSaldoDosGanhosDaAposta = ValorDosGanhosDaAposta;
				
				
				
				
				
				let SomaDosCentavos0 = parseInt(Multiplicar*ValorDosCentavos1)+parseInt(ValorDosCentavos0);
				
				let NovoReal0 = 0;
				
				let NovoCentavo0 = 0;
				
				if(String(SomaDosCentavos0).length==2){
				
				NovoCentavo0 = String(SomaDosCentavos0).substring(0,2);
				
				}
				
				if(String(SomaDosCentavos0).length==3){
				
				NovoReal0 = String(SomaDosCentavos0).substring(0,1);
				
				NovoCentavo0 = String(SomaDosCentavos0).substring(1,3);
				
				}
				
				if(String(SomaDosCentavos0).length==4){
				
				NovoReal0 = String(SomaDosCentavos0).substring(0,2);
				
				NovoCentavo0 = String(SomaDosCentavos0).substring(2,4);
				
				}
				
				
				let Valor = parseInt(Multiplicar*ValorDosReais1)+parseInt(ValorDoSaldoDaCarteira)+parseInt(NovoReal0);
				
				let ValorDosGanhosDaCarteira = document.getElementsByClassName("CardInfoValor")[0];
				
				ValorDosGanhosDaCarteira.innerText = obterValorEmFormatoDeDinheiro(Valor+"."+NovoCentavo0);
				
				
				
				let SomaDosCentavos = parseInt(Multiplicar*ValorDosCentavos1)+parseInt(ValorDosCentavos2);
				
				let NovoReal = 0;
				
				let NovoCentavo = 0;
				
				if(String(SomaDosCentavos).length==2){
				
				NovoCentavo = String(SomaDosCentavos).substring(0,2);
				
				}
				
				if(String(SomaDosCentavos).length==3){
				
				NovoReal = String(SomaDosCentavos).substring(0,1);
				
				NovoCentavo = String(SomaDosCentavos).substring(1,3);
				
				}
				
				if(String(SomaDosCentavos).length==4){
				
				NovoReal = String(SomaDosCentavos).substring(0,2);
				
				NovoCentavo = String(SomaDosCentavos).substring(2,4);
				
				}
				
				
				let Valor2 = parseInt(Multiplicar*ValorDosReais1)+parseInt(ValorDoSaldoDosGanhosDaAposta)+parseInt(NovoReal);
				
				let ValorDosGanhosDaAposta2 = document.getElementsByClassName("CardInfoValor")[2];
				
				ValorDosGanhosDaAposta2.innerText = obterValorEmFormatoDeDinheiro(Valor2+"."+NovoCentavo);
				
				
				let ValorCount = ValorDosGanhosDaAposta2.innerText;
				ValorCount=ValorCount.replace("R$","");
				ValorCount=ValorCount.replace(" ","");
				ValorCount=ValorCount.replace(",","");
				
				
				let Valor_Parte_1 = 0;
				let Valor_Parte_2 = 0;
				let Valor_Parte_3 = 0;
				let Valor_Parte_4 = 0;
				let Valor_Parte_5 = 0;
				let Valor_Parte_6 = 0;
				
				
				let ValorCountLength = 0;
				
				if(ValorCount.length-1==7){
				Valor_Parte_1=ValorCount.substring(1,2);
				Valor_Parte_2=ValorCount.substring(3,4);
				Valor_Parte_3=ValorCount.substring(4,5);
				Valor_Parte_4=ValorCount.substring(5,6);
				Valor_Parte_5=ValorCount.substring(6,7);
				Valor_Parte_6=ValorCount.substring(7,8);
				
				ValorCountLength=2;
				}
				
				if(ValorCount.length-1==5){
				Valor_Parte_2=ValorCount.substring(1,2);
				Valor_Parte_3=ValorCount.substring(2,3);
				Valor_Parte_4=ValorCount.substring(3,4);
				Valor_Parte_5=ValorCount.substring(4,5);
				Valor_Parte_6=ValorCount.substring(5,6);
				
				ValorCountLength=1;
				}
				
				let VALORES_ARRAY = [Valor_Parte_1,Valor_Parte_2,Valor_Parte_3,Valor_Parte_4,Valor_Parte_5,Valor_Parte_6];
				
				NewGanho(ValorCount.length-ValorCountLength,VALORES_ARRAY,IMAGEM_DO_PERSONAGEM_DOS_SLOTS_IGUAIS);
				
				}
