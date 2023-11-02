function AddElement(LINHA,Y,X){
		let GOLD = document.getElementsByClassName("Gold")[0];
		
		let VIEW = document.getElementsByTagName("body")[0];
		
		let INCREMENT_X = 0;
		let INCREMENT_Y = 10;
		
		if(LINHA=="1"){
		Y=Y+2*BLOCO_HEIGHT;
		INCREMENT_X = 16;
		}
		if(LINHA=="2"){
		Y=Y+2*BLOCO_HEIGHT;
		INCREMENT_X = 8;
		}
		if(LINHA=="3"){
		Y=Y+2*BLOCO_HEIGHT;
		INCREMENT_X = 0;
		}
		
		if(LINHA=="4"){
		INCREMENT_X = 16;
		INCREMENT_Y = 20;
		}
		if(LINHA=="5"){
		INCREMENT_X = 8;
		INCREMENT_Y = 20;
		}
		if(LINHA=="6"){
		INCREMENT_X = 0;
		INCREMENT_Y = 20;
		}
		
		if(LINHA=="7"){
		INCREMENT_X = 16;
		INCREMENT_Y = 30;
		Y=Y-2*BLOCO_HEIGHT;
		}
		if(LINHA=="8"){
		INCREMENT_X = 8;
		INCREMENT_Y = 30;
		Y=Y-2*BLOCO_HEIGHT;
		}
		if(LINHA=="9"){
		INCREMENT_X = 0;
		INCREMENT_Y = 30;
		Y=Y-2*BLOCO_HEIGHT;
		}
		
		
		let Icon = document.createElement("img");
		
		Icon.style.position = "fixed";
		
		Icon.style.zIndex = "0";
		
		Icon.style.height = "100px";
		
		Icon.style.width = "100px";
		
		Icon.src="image/bitcoin.png";
		
		Icon.style.left = X+"px";
		
		Icon.style.bottom = Y+"px";
		
		VIEW.appendChild(Icon);
		
		let Tr = setInterval(function(){
		
		Y=Y+INCREMENT_Y;
		
		X=X+INCREMENT_X;
		
		Icon.style.bottom = Y+"px";
		
		Icon.style.left = X+"px";
		
		if(Y>VIEW.clientHeight-GOLD.clientHeight){
		
		clearInterval(Tr);
		
		}
		
		},200/10);
		
		}
