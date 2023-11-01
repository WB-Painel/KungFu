let LIST_1_BLOCOS_HEIGHT = 0;
	  
	  let LIST_2_BLOCOS_HEIGHT = 0;
	  
	  let LIST_3_BLOCOS_HEIGHT = 0;

export { LIST_1_BLOCOS_HEIGHT };

function C2(){
	  
	 let LISTA_1 = document.getElementsByClassName("LISTA_1")[0];
	 LISTA_1.style.marginTop=TEMPLE_HEIGHT/2+"px";
	  
	 let LISTA_2 = document.getElementsByClassName("LISTA_2")[0];
	 LISTA_2.style.marginTop=TEMPLE_HEIGHT/2+"px";
	  
	 let LISTA_3 = document.getElementsByClassName("LISTA_3")[0];
	 LISTA_3.style.marginTop=TEMPLE_HEIGHT/2+"px";
	  
	 let a1 = 0;
	 let b1 = BlocosCount;
	 
	 while(a1<b1){
	 LIST_1_BLOCOS_HEIGHT = LIST_1_BLOCOS_HEIGHT+BLOCO_HEIGHT;
	 LISTA_1.prepend(BLOCOS_DA_LISTA());
	 a1++;
	 }

	 let a2 = 0;
	 let b2 = BlocosCount;
	 
	 while(a2<b2){
	 LIST_2_BLOCOS_HEIGHT = LIST_2_BLOCOS_HEIGHT+BLOCO_HEIGHT;
	 LISTA_2.prepend(BLOCOS_DA_LISTA());
	 a2++;
	 }

	 let a3 = 0;
	 let b3 = BlocosCount;
	 
	 while(a3<b3){
	 LIST_3_BLOCOS_HEIGHT = LIST_3_BLOCOS_HEIGHT+BLOCO_HEIGHT;
	 LISTA_3.prepend(BLOCOS_DA_LISTA());
	 a3++;
	 }
	  
	 LISTA_1.style.transform = "translate(0px,-"+LIST_1_BLOCOS_HEIGHT+"px)";
	 LISTA_2.style.transform = "translate(0px,-"+LIST_2_BLOCOS_HEIGHT+"px)";
	 LISTA_3.style.transform = "translate(0px,-"+LIST_3_BLOCOS_HEIGHT+"px)";
	  
	 start2();
	 
	 }
