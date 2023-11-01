function start2(){
		
		let COUNT_1 = -LIST_1_BLOCOS_HEIGHT;
		
		let COUNT_2 = -LIST_2_BLOCOS_HEIGHT;
		
		let COUNT_3 = -LIST_3_BLOCOS_HEIGHT;
		
		
		let LISTA_1 = document.getElementsByClassName("LISTA_1")[0];
	  
		let LISTA_2 = document.getElementsByClassName("LISTA_2")[0];
	  
		let LISTA_3 = document.getElementsByClassName("LISTA_3")[0];
	  
		
		
		
		setTimeout(function(){
		
		translateBlock_1();
		
		clearTimeout();
		
		},1000/10);
		
		setTimeout(function(){
		
		translateBlock_2();
		
		clearTimeout();
		
		},2000/10);
		
		setTimeout(function(){
		
		translateBlock_3();
		
		clearTimeout();
		
		},3000/10);
		
		
		
		
		function translateBlock_1(){
		
		let Interval_1 = setInterval(function(){
		
		if(COUNT_1 != 0){
		
		COUNT_1 = COUNT_1 +BLOCO_HEIGHT/4;
		
		LISTA_1.style.transform = "translate(0px,"+COUNT_1+"px";
		
		}else{
		
		clearInterval(Interval_1);
		
		}
		
		},1000/TEMPO_DO_ALINHAMENTO_DOS_SLOTS);
		
		}
		
		function translateBlock_2(){
		
		let Interval_2 = setInterval(function(){
		
		if(COUNT_2 != 0){
		
		COUNT_2 = COUNT_2 +BLOCO_HEIGHT/4;
		
		LISTA_2.style.transform = "translate(0px,"+COUNT_2+"px";
		
		}else{
		
		clearInterval(Interval_2);
		
		}
		
		},1000/TEMPO_DO_ALINHAMENTO_DOS_SLOTS);
		
		}
		
		function translateBlock_3(){
		
		let Interval_3 = setInterval(function(){
		
		if(COUNT_3 != 0){
		
		COUNT_3 = COUNT_3 +BLOCO_HEIGHT/4;
		
		LISTA_3.style.transform = "translate(0px,"+COUNT_3+"px";
		
		RotatePlayButton();
		
		}else{
		
		clearInterval(Interval_3);
		
		LIST_1_BLOCOS_HEIGHT = 0;
		
		LIST_2_BLOCOS_HEIGHT = 0;
		
		LIST_3_BLOCOS_HEIGHT = 0;
		
		verificar();
		
		}
		
		},1000/TEMPO_DO_ALINHAMENTO_DOS_SLOTS);
		
		}
		
		}
