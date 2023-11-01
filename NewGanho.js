function NewGanho(
			  GanhoLength
			  ,Valor_1
			  ,Valor_2
			  ,Valor_3
			  ,Valor_4
			  ,Valor_5
			  ,Valor_6
			  ,IMAGEM_DO_PERSONAGEM_DOS_SLOTS_IGUAIS){
			  
			  document.getElementsByClassName("ViewAnimatedFragment")[0].style.display="block";
			  document.getElementsByClassName("AnimatedFragment")[0].style.backgroundImage='url('+"image/dancando.gif"+')'/*IMAGEM_DO_PERSONAGEM_DOS_SLOTS_IGUAIS*/;
			
			  let Velocity = 0;
			  
			  let quantia_de_reais_a_duplicar_part_1 = 1;
			  
			  let quantia_maxima_de_reais_a_chegar_part_1 = 9;
			  
			  let quantia_de_reais_a_duplicar_part_2 = 1;
			  
			  let quantia_maxima_de_reais_a_chegar_part_2 = 9;
			  
			  let quantia_de_reais_a_duplicar_part_3 = 1;
			  
			  let quantia_maxima_de_reais_a_chegar_part_3 = 9;
			  
			  let quantia_de_centavos_a_duplicar_part_1 = 1;
			  
			  let quantia_maxima_de_centavos_a_chegar_part_1 = 9;
			  
			  let quantia_de_centavos_a_duplicar_part_2 = 1;
			  
			  let quantia_maxima_de_centavos_a_chegar_part_2 = 9;
			
			  let Ponto_1 = document.getElementById("Ponto_1");
			  Ponto_1.style.display="none";
			  
			  let Count_1 = 0;
			 
			  
			  let Ponto_2 = document.getElementById("Ponto_2");
			  Ponto_2.style.display="none";
			  
			  
			  let Ponto_3 = document.getElementById("Ponto_3");
			  Ponto_3.style.display="none";
			  
			  let Count_3 = 0;
			  
			  
			  let Ponto_4 = document.getElementById("Ponto_4");
			  Ponto_4.style.display="none";
			  
			  let Count_4 = 0;
			  
			  
			  let Ponto_5 = document.getElementById("Ponto_5");
			  Ponto_5.style.display="none";
			  
			  let Count_5 = 0;
			 
			  
			 
			  let Ponto_6 = document.getElementById("Ponto_6");
			  Ponto_6.style.display="none";
			 
			  
			  
			  let Ponto_7 = document.getElementById("Ponto_7");
			  Ponto_7.style.display="none";
			 
			  let Count_7 = 0;
			  
			 
			  let Ponto_8 = document.getElementById("Ponto_8");
			  
			  let Count_8 = 0;
			  
			  
			  if(GanhoLength==3){
			  Ponto_1.style.display="none";
			  Ponto_2.style.display="none";
			  Ponto_3.style.display="none";
			  Ponto_4.style.display="none";
			  Velocity=150;
			  quantia_de_centavos_a_duplicar_part_1=1;
			  quantia_de_centavos_a_duplicar_part_2=1;
			  }
			  if(GanhoLength==4){
			  Ponto_1.style.display="none";
			  Ponto_2.style.display="none";
			  Ponto_3.style.display="none";
			  Velocity=200;
			  quantia_de_centavos_a_duplicar_part_1=3;
			  quantia_de_centavos_a_duplicar_part_2=3;
			  }
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
			  
			  var inter = setInterval(function(){
			  
			  if(document.getElementsByClassName("ViewAnimatedFragment")[0].style.display=="none"){
			  clearInterval(inter);
			  }
			  
			  
			  if(
			  Count_1==Valor_1&&
			  Count_3==Valor_2&&
			  Count_4==Valor_3&&
			  Count_5==Valor_4&&
			  Count_7==Valor_5&&
			  Count_8==Valor_6){
			 
			  clearInterval(inter);
			  
			  return;
			  }
			  
			  if(
			  Count_1==Valor_1&&
			  Count_3==Valor_2&&
			  Count_4==Valor_3&&
			  Count_5>Valor_4&&
			  Count_7>Valor_5&&
			  Count_8>Valor_6){
			  
			  Ponto_5.innerText=Valor_4;
			  Ponto_7.innerText=Valor_5;
			  Ponto_8.innerText=Valor_6;

			  Ponto_5.style.backgroundImage="url("+"image/"+Valor_4+"-Number-PNG.png)";
			  Ponto_7.style.backgroundImage="url("+"image/"+Valor_5+"-Number-PNG.png)";
			  Ponto_8.style.backgroundImage="url("+"image/"+Valor_6+"-Number-PNG.png)";
			 
			  clearInterval(inter);
			  return;
			  }
			  
			  if(
			  Count_3==quantia_maxima_de_reais_a_chegar_part_1&&
			  Count_4==quantia_maxima_de_reais_a_chegar_part_2&&
			  Count_5==quantia_maxima_de_reais_a_chegar_part_3&&
			  Count_7==quantia_maxima_de_centavos_a_chegar_part_2&&
			  Count_8==quantia_maxima_de_centavos_a_chegar_part_2){
			  
			  Count_1= Count_1+1;
			  
			  Ponto_2.style.display="block";
			  
			  Ponto_1.style.display="block";
			  Ponto_1.innerText = Count_1;
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
			  
			  Ponto_3.innerText = Count_3;
			  Ponto_3.style.backgroundImage="url("+"image/"+Count_3+"-Number-PNG.png)";
			  
			  Count_4=-quantia_de_reais_a_duplicar_part_2;
			  
			  }
			  
			  
			  if(
			  Count_5==quantia_maxima_de_reais_a_chegar_part_3&&
			  Count_7==quantia_maxima_de_centavos_a_chegar_part_1&&
			  Count_8==quantia_maxima_de_centavos_a_chegar_part_2){
			  
			  Count_4= Count_4+quantia_de_reais_a_duplicar_part_2;
			  
			  Ponto_4.style.display="block";
			  Ponto_4.innerText = Count_4;
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
			  Ponto_5.innerText = Count_5;
			  Ponto_5.style.backgroundImage="url("+"image/"+Count_5+"-Number-PNG.png)";
			  
			  Count_7=-quantia_de_centavos_a_duplicar_part_1;
			  
			  if(GanhoLength==5){
			  playSound("coin_c_02-102844.mp3");
			  }
			  }
			  
			  
			  if(Count_8==quantia_maxima_de_centavos_a_chegar_part_2){
			
			  Count_7=Count_7+quantia_de_centavos_a_duplicar_part_1;
			 
			  Ponto_7.style.display="block";
			  Ponto_7.innerText = Count_7;
			  Ponto_7.style.backgroundImage="url("+"image/"+Count_7+"-Number-PNG.png)";
			  
			  Count_8=-quantia_de_centavos_a_duplicar_part_2;
			  
			  }
			  
			  Count_8 = Count_8+quantia_de_centavos_a_duplicar_part_2;
			  Ponto_8.innerText = Count_8;
			  Ponto_8.style.backgroundImage="url("+"image/"+Count_8+"-Number-PNG.png)";
			  
			  },1000/Velocity);
			
			  }
