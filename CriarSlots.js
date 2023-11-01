function BLOCOS_DA_LISTA(){
	  
	  let bloco_fundo = document.createElement("div");
	  bloco_fundo.setAttribute("class","Bloco_fundo");
	  bloco_fundo.style.height = BLOCO_HEIGHT+"px";
	  
	  
	  let bloco_brilho = document.createElement("div");
	  bloco_brilho.setAttribute("class","Bloco_brilho");
	  bloco_brilho.style.height = 1*BLOCO_HEIGHT+"px";
	  bloco_brilho.style.width = 1*BLOCO_HEIGHT+"px";
	  
	  
	  let bloco = document.createElement("div");
	  bloco.setAttribute("class","Bloco");
	  bloco.style.height = BLOCO_HEIGHT+"px";
	  
	  if(window.screen.width>window.screen.height){
	  //PC
	  let PersonagemHeight = BLOCO_HEIGHT/1;
	  bloco.style.backgroundSize = PersonagemHeight+"px"+" "+PersonagemHeight+"px";
	  }else{
	  //Mobile
	  let PersonagemHeight = BLOCO_HEIGHT/1-BLOCO_HEIGHT/6;
	  bloco.style.backgroundSize = PersonagemHeight+"px"+" "+PersonagemHeight+"px";
	  }
	 
	  bloco.style.backgroundImage="url("+randomEmojis()+")";
	  bloco_brilho.appendChild(bloco);
	  bloco_fundo.appendChild(bloco_brilho);
	  return bloco_fundo;
	 
	  }
	  
	  
	  function randomEmojis(){

	  var s = "";
	  var maximum = 19;
	  var minimum = 1;
		
	  var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

	  if(randomnumber==1){
	  return s+"image/po.png";
	  }
	  if(randomnumber==2){
	  return s+"image/tai_lung.png";
	  }
	  if(randomnumber==3){
	  return s+"image/mestre_shifu.png";
	  }
	  if(randomnumber==4){
	  return s+"image/tigressa.png";
	  }
	  if(randomnumber==5){
	  return s+"image/louva_deus.png";
	  }
	  if(randomnumber==6){
	  return s+"image/oogway.png";
	  }
	  if(randomnumber==7){
	  return s+"image/mestre_macaco.png";
	  }
	  if(randomnumber==8){
	  return s+"image/garca.png";
	  }
	  if(randomnumber==9){
	  return s+"image/mestre_vibora.png";
	  }
	  
	  if(randomnumber==10){
	  return s+"image/po.png";
	  }
	  if(randomnumber==11){
	  return s+"image/tai_lung.png";
	  }
	  if(randomnumber==12){
	  return s+"image/mestre_shifu.png";
	  }
	  if(randomnumber==13){
	  return s+"image/tigressa.png";
	  }
	  if(randomnumber==14){
	  return s+"image/louva_deus.png";
	  }
	  if(randomnumber==15){
	  return s+"image/oogway.png";
	  }
	  if(randomnumber==16){
	  return s+"image/mestre_macaco.png";
	  }
	  if(randomnumber==17){
	  return s+"image/garca.png";
	  }
	  if(randomnumber==18){
	  return s+"image/mestre_vibora.png";
	  }
	  
	  if(randomnumber==19){
	  return s+"image/manopla.png";
	  }
	  
		  }
