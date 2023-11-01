
            let Menu = document.getElementsByClassName("Menu")[0];
			Menu.onclick = function(){
			playSound("mixkit-game-click-1114.wav");
			OpenAndClosePanelMenu();
			};
						  
			let Sair = document.getElementsByClassName("PanelMenuButtonFunction")[4];
			Sair.onclick = function(){
			playSound("mixkit-game-click-1114.wav");
			OpenAndClosePanelMenu();
			};
						  
			let Historico = document.getElementsByClassName("PanelMenuButtonFunction")[3];
			Historico.onclick = function(){
			playSound("mixkit-game-click-1114.wav");
			teste(document.getElementsByClassName("AbaDeHistorico")[0],true,Opned);
			};
						  
			let Pagamentos = document.getElementsByClassName("PanelMenuButtonFunction")[1];
			Pagamentos.onclick = function(){
			playSound("mixkit-game-click-1114.wav");
			teste3(document.getElementsByClassName("AbaDePagamentos")[0],true,Opned3);
			};
						  
			let Volume = document.getElementsByClassName("PanelMenuButtonFunction")[0];
			Volume.onclick = function(){
			if(PlaySoundEnabled){
			playSound("mixkit-game-click-1114.wav");
			PlaySoundEnabled=false;
			}else{
			PlaySoundEnabled=true;
			}
			};
