function AtualizarSaldoDaCarteira(){
				
				let ValorDaCarteira = document.getElementsByClassName("CardInfoValor")[0];
				
				let ValorDoSaldoDaCarteira = ValorDaCarteira.innerText;
				ValorDoSaldoDaCarteira = ValorDoSaldoDaCarteira.replace("R$","");
				ValorDoSaldoDaCarteira = ValorDoSaldoDaCarteira.replace(" ","");
				ValorDoSaldoDaCarteira = ValorDoSaldoDaCarteira.replaceAll(".","");
				
				
				let ValorEmReais1 = parseInt( ValorDoSaldoDaCarteira.substring(0,ValorDoSaldoDaCarteira.indexOf(",")) );
				let ValorEmCentavos1 = parseInt( ValorDoSaldoDaCarteira.substring(ValorDoSaldoDaCarteira.indexOf(",")+1, ValorDoSaldoDaCarteira.length) );
				
				
				let ValorDaAposta = document.getElementsByClassName("CardInfoValor")[1];
			
				
				let ValorDoSaldoDaAposta = ValorDaAposta.innerText;
				ValorDoSaldoDaAposta = ValorDoSaldoDaAposta.replace("R$","");
				ValorDoSaldoDaAposta = ValorDoSaldoDaAposta.replace(" ","");
				ValorDoSaldoDaAposta = ValorDoSaldoDaAposta.replaceAll(".","");
				
				
				let ValorEmReais2 = parseInt( ValorDoSaldoDaAposta.substring(0,ValorDoSaldoDaAposta.indexOf(",")) );
				
				let ValorEmCentavos2 = parseInt( ValorDoSaldoDaAposta.substring(ValorDoSaldoDaAposta.indexOf(",")+1, ValorDoSaldoDaAposta.length) );
				
				let New1 = ValorEmReais1 - ValorEmReais2;
				
				let New2 = ValorEmCentavos1 - ValorEmCentavos2;
				
				
				let New = New1+New2/99;
				
				
				let New3 = String(New2);
				
				if(!New3.includes("-")){
				New = New1+"."+New3;
				}
				
				ValorDaCarteira.innerText = obterValorEmFormatoDeDinheiro(New);
				
				}
