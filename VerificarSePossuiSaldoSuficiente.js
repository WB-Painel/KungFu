	function VerificarSePossuiSaldoSuficiente(){
				
				let ValorDaCarteira = document.getElementsByClassName("CardInfoValor")[0];
				let ValorDoSaldoDaCarteira = ValorDaCarteira.innerText;
				ValorDoSaldoDaCarteira = ValorDoSaldoDaCarteira.replace("R$","");
				ValorDoSaldoDaCarteira = ValorDoSaldoDaCarteira.replace(" ","");
				ValorDoSaldoDaCarteira = ValorDoSaldoDaCarteira.replace(".","");
				ValorDoSaldoDaCarteira = ValorDoSaldoDaCarteira.replace(",","");
				
				
				let ValorDaAposta = document.getElementsByClassName("CardInfoValor")[1];
				let ValorDoSaldoDaAposta = ValorDaAposta.innerText;
				ValorDoSaldoDaAposta = ValorDoSaldoDaAposta.replace("R$","");
				ValorDoSaldoDaAposta = ValorDoSaldoDaAposta.replace(" ","");
				ValorDoSaldoDaAposta = ValorDoSaldoDaAposta.replace(".","");
				ValorDoSaldoDaAposta = ValorDoSaldoDaAposta.replace(",","");
				
				if(parseInt(ValorDoSaldoDaCarteira)==parseInt(ValorDoSaldoDaAposta)||parseInt(ValorDoSaldoDaCarteira)>parseInt(ValorDoSaldoDaAposta)){
				return true;
				}else{
				ShowErrorDialog("saldo_insuficiente");
				return false;
				}
				
				}
