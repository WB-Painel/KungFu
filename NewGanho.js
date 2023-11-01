let Valor_1 = 0;
let Valor_2 = 0;
let Valor_3 = 0;
let Valor_4 = 0;
let Valor_5 = 0;
let Valor_6 = 0;
let Velocity;
let quantia_de_reais_a_duplicar_part_1;
let quantia_maxima_de_reais_a_chegar_part_1;
let quantia_de_reais_a_duplicar_part_2;
let quantia_maxima_de_reais_a_chegar_part_2;
let quantia_de_reais_a_duplicar_part_3;
let quantia_maxima_de_reais_a_chegar_part_3;
let quantia_de_centavos_a_duplicar_part_1;
let quantia_maxima_de_centavos_a_chegar_part_1;
let quantia_de_centavos_a_duplicar_part_2;
let quantia_maxima_de_centavos_a_chegar_part_2;
let Ponto_1;
let Ponto_2;
let Ponto_3;
let Ponto_4;
let Ponto_5;
let Ponto_6;
let Ponto_7;
let Ponto_8;

let Count_1 = 0;
let Count_3 = 0;
let Count_4 = 0;
let Count_5 = 0;
let Count_7 = 0;
let Count_8 = 0;

function NewGanho(
			  GanhoLength
			  ,VALORES_ARRAY
			  ,IMAGEM_DO_PERSONAGEM_DOS_SLOTS_IGUAIS){
			  
				  
			  Valor_1 = VALORES_ARRAY[0];
			  Valor_2 = VALORES_ARRAY[1];
			  Valor_3 = VALORES_ARRAY[2];
			  Valor_4 = VALORES_ARRAY[3];
			  Valor_5 = VALORES_ARRAY[4];
			  Valor_6 = VALORES_ARRAY[5];
			  
			  
			  document.getElementsByClassName("ViewAnimatedFragment")[0].style.display="block";
			  document.getElementsByClassName("AnimatedFragment")[0].style.backgroundImage='url('+"image/dancando.gif"+')'/*IMAGEM_DO_PERSONAGEM_DOS_SLOTS_IGUAIS*/;
			
			  Velocity = 0;
			  
			  quantia_de_reais_a_duplicar_part_1 = 1;
			  
			  quantia_maxima_de_reais_a_chegar_part_1 = 9;
			  
			  quantia_de_reais_a_duplicar_part_2 = 1;
			  
			  quantia_maxima_de_reais_a_chegar_part_2 = 9;
			  
			  quantia_de_reais_a_duplicar_part_3 = 1;
			  
			  quantia_maxima_de_reais_a_chegar_part_3 = 9;
			  
			  quantia_de_centavos_a_duplicar_part_1 = 1;
			  
			  quantia_maxima_de_centavos_a_chegar_part_1 = 9;
			  
			  quantia_de_centavos_a_duplicar_part_2 = 1;
			  
			  quantia_maxima_de_centavos_a_chegar_part_2 = 9;
			
			  Ponto_1 = document.getElementById("Ponto_1");
			  Ponto_1.style.display="none";
			  
			  Count_1 = 0;
			 
			  
			  Ponto_2 = document.getElementById("Ponto_2");
			  Ponto_2.style.display="none";
			  
			  
			  Ponto_3 = document.getElementById("Ponto_3");
			  Ponto_3.style.display="none";
			  
			  Count_3 = 0;
			  
			  
			  Ponto_4 = document.getElementById("Ponto_4");
			  Ponto_4.style.display="none";
			  
			  Count_4 = 0;
			  
			  
			  Ponto_5 = document.getElementById("Ponto_5");
			  Ponto_5.style.display="none";
			  
			  Count_5 = 0;
			 
			  
			 
			  Ponto_6 = document.getElementById("Ponto_6");
			  Ponto_6.style.display="none";
			 
			  
			  
			  Ponto_7 = document.getElementById("Ponto_7");
			  Ponto_7.style.display="none";
			 
			  Count_7 = 0;
			  
			 
			  Ponto_8 = document.getElementById("Ponto_8");
			  
			  Count_8 = 0;
			  
			  //CENTAVOS
			  if(GanhoLength==3){
			  Ponto_1.style.display="none";
			  Ponto_2.style.display="none";
			  Ponto_3.style.display="none";
			  Ponto_4.style.display="none";
			  Velocity=150;
			  quantia_de_centavos_a_duplicar_part_1=1;
			  quantia_de_centavos_a_duplicar_part_2=1;
			  }
			  
			  //REAIS 1
			  if(GanhoLength==4){
			  Ponto_1.style.display="none";
			  Ponto_2.style.display="none";
			  Ponto_3.style.display="none";
			  Velocity=200;
			  quantia_de_centavos_a_duplicar_part_1=3;
			  quantia_de_centavos_a_duplicar_part_2=3;
			  }
			  
			  //REAIS 2
			  if(GanhoLength==5){
			  Ponto_1.style.display="none";
			  Ponto_2.style.display="none";
			  Velocity=250;
			  quantia_de_centavos_a_duplicar_part_1=3;
			  quantia_de_centavos_a_duplicar_part_2=3;
			  
			  if(Valor_2>1){
			  quantia_de_centavos_a_duplicar_part_2=9;
			  }
			  
			  if(Valor_2>3){
			  quantia_de_centavos_a_duplicar_part_1=9;
			  }
			  
			  }
			  
			  if(GanhoLength==6){
			  Velocity=300;
			  quantia_de_centavos_a_duplicar_part_1=9;
			  quantia_de_centavos_a_duplicar_part_2=9;
			  
			  if(Valor_1>0){
			  quantia_de_reais_a_duplicar_part_3=3;
			  }
			  
			  if(Valor_1>2){
			  quantia_de_reais_a_duplicar_part_3=9;
			  }
			  
			  }
			  
			  START_ANIMATION_GANHO(GanhoLength);
			
			  }
			  
			  function START_ANIMATION_GANHO(GanhoLength){
				  
			 
				  
			  let inter = setInterval(function(){
			  
			  if(document.getElementsByClassName("ViewAnimatedFragment")[0].style.display=="none"){
			  clearInterval(inter);
			  }
			  
			  let A1 = ""+Count_1+Count_3+Count_4+Count_5+Count_7+Count_8;
			 
			  let A2 = ""+Valor_1+Valor_2+Valor_3+Valor_4+Valor_5+Valor_6;
			  
			  if(A1>A2){
			
			  clearInterval(inter);
			  
			
			  
			  Ponto_1.style.backgroundImage="url("+"image/"+Valor_1+"-Number-PNG.png)";
			  Ponto_3.style.backgroundImage="url("+"image/"+Valor_2+"-Number-PNG.png)";
			  Ponto_4.style.backgroundImage="url("+"image/"+Valor_3+"-Number-PNG.png)";
			  Ponto_5.style.backgroundImage="url("+"image/"+Valor_4+"-Number-PNG.png)";
			  Ponto_7.style.backgroundImage="url("+"image/"+Valor_5+"-Number-PNG.png)";
			  Ponto_8.style.backgroundImage="url("+"image/"+Valor_6+"-Number-PNG.png)";
			 
			  return;
			  }
			  
			  
			  ATUALIZAR_ANIMATION_GANHO(GanhoLength);
			  
			  },1000/Velocity);
			  
			  }
			  
			  function ATUALIZAR_ANIMATION_GANHO(GanhoLength){
				  
				  if(
			  Count_3==quantia_maxima_de_reais_a_chegar_part_1&&
			  Count_4==quantia_maxima_de_reais_a_chegar_part_2&&
			  Count_5==quantia_maxima_de_reais_a_chegar_part_3&&
			  Count_7==quantia_maxima_de_centavos_a_chegar_part_2&&
			  Count_8==quantia_maxima_de_centavos_a_chegar_part_2){
			  
			  Count_1= Count_1+1;
			  
			  Ponto_2.style.display="block";
			  
			  Ponto_1.style.display="block";
			  
			  Ponto_1.style.backgroundImage="url("+"image/"+Count_1+"-Number-PNG.png)";
			  
			  Count_3=-quantia_de_reais_a_duplicar_part_1;
			  }
			  
			  
			  if(
			  Count_4==quantia_maxima_de_reais_a_chegar_part_2&&
			  Count_5==quantia_maxima_de_reais_a_chegar_part_3&&
			  Count_7==quantia_maxima_de_centavos_a_chegar_part_1&&
			  Count_8==quantia_maxima_de_centavos_a_chegar_part_2){
			  
			  Count_3= Count_3+quantia_de_reais_a_duplicar_part_1;
			  Ponto_3.style.display="block";
			  
			  
			  Ponto_3.style.backgroundImage="url("+"image/"+Count_3+"-Number-PNG.png)";
			  
			  Count_4=-quantia_de_reais_a_duplicar_part_2;
			  
			  }
			  
			  
			  if(
			  Count_5==quantia_maxima_de_reais_a_chegar_part_3&&
			  Count_7==quantia_maxima_de_centavos_a_chegar_part_1&&
			  Count_8==quantia_maxima_de_centavos_a_chegar_part_2){
			  
			  Count_4= Count_4+quantia_de_reais_a_duplicar_part_2;
			  
			  Ponto_4.style.display="block";
			  
			  Ponto_4.style.backgroundImage="url("+"image/"+Count_4+"-Number-PNG.png)";
			  
			  Count_5=-quantia_de_reais_a_duplicar_part_3;
			  
			  if(GanhoLength==7){
			  playSound("coin_c_02-102844.mp3");
			  }
	  
			  }
			  
			  
			  if(
			  Count_7==quantia_maxima_de_centavos_a_chegar_part_1&&
			  Count_8==quantia_maxima_de_centavos_a_chegar_part_2){
			  
			  Count_5= Count_5+quantia_de_reais_a_duplicar_part_3;
			  
			  Ponto_6.style.display="block";
			  
			  Ponto_5.style.display="block";
			  
			  Ponto_5.style.backgroundImage="url("+"image/"+Count_5+"-Number-PNG.png)";
			  
			  Count_7=-quantia_de_centavos_a_duplicar_part_1;
			  
			  if(GanhoLength==5){
			  playSound("coin_c_02-102844.mp3");
			  }
			  }
			  
			  
			  if(Count_8==quantia_maxima_de_centavos_a_chegar_part_2){
			
			  Count_7=Count_7+quantia_de_centavos_a_duplicar_part_1;
			 
			  Ponto_7.style.display="block";
			  
			  Ponto_7.style.backgroundImage="url("+"image/"+Count_7+"-Number-PNG.png)";
			  
			  Count_8=-quantia_de_centavos_a_duplicar_part_2;
			  
			  }
			  
			  Count_8 = Count_8+quantia_de_centavos_a_duplicar_part_2;
			  
			  Ponto_8.style.backgroundImage="url("+"image/"+Count_8+"-Number-PNG.png)";
			  
			  
			  }
