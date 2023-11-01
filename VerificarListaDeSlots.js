let isSlot = false;
let SlotTime = 100;
function VerificarListaDeSlots(){
	  
	  
	  
	  
	  
	  let LISTA_DE_SLOTS_IGUAIS = 0;
	 
	  let IMAGEM_DO_PERSONAGEM_DOS_SLOTS_IGUAIS = "po.png";
	 
	  let LISTA_1_FUNDO = document.getElementsByClassName("LISTA_1")[0];
	  
	  let LISTA_2_FUNDO = document.getElementsByClassName("LISTA_2")[0];
	  
	  let LISTA_3_FUNDO = document.getElementsByClassName("LISTA_3")[0];
	  
		
	  let LISTA_1_BRILHO = LISTA_1_FUNDO.children[0];
	  let LISTA_2_BRILHO = LISTA_2_FUNDO.children[0];
	  let LISTA_3_BRILHO = LISTA_3_FUNDO.children[0];
	  let LISTA_4_BRILHO = LISTA_1_FUNDO.children[1];
	  let LISTA_5_BRILHO = LISTA_2_FUNDO.children[1];
	  let LISTA_6_BRILHO = LISTA_3_FUNDO.children[1];
	  let LISTA_7_BRILHO = LISTA_1_FUNDO.children[2];
	  let LISTA_8_BRILHO = LISTA_2_FUNDO.children[2];
	  let LISTA_9_BRILHO = LISTA_3_FUNDO.children[2];
		
	  
	  let LISTA_1 = LISTA_1_BRILHO.children[0];
	  
	  let LISTA_2 = LISTA_2_BRILHO.children[0];
	  
	  let LISTA_3 = LISTA_3_BRILHO.children[0];
	  
	  let LISTA_4 = LISTA_4_BRILHO.children[0];
	  
	  let LISTA_5 = LISTA_5_BRILHO.children[0];
		
	  let LISTA_6 = LISTA_6_BRILHO.children[0];
		
	  let LISTA_7 = LISTA_7_BRILHO.children[0];
	  
	  let LISTA_8 = LISTA_8_BRILHO.children[0];
		
	  let LISTA_9 = LISTA_9_BRILHO.children[0];
		
	  
	  let ITEM_1_LIST_1 = LISTA_1.children[0].style.backgroundImage;
		
	  let ITEM_1_LIST_2 = LISTA_2.children[0].style.backgroundImage;
		
	  let ITEM_1_LIST_3 = LISTA_3.children[0].style.backgroundImage;
		
		
	  let ITEM_2_LIST_1 = LISTA_4.children[0].style.backgroundImage;
		
	  let ITEM_2_LIST_2 = LISTA_5.children[0].style.backgroundImage;
		
	  let ITEM_2_LIST_3 = LISTA_6.children[0].style.backgroundImage;
		
		
	  let ITEM_3_LIST_1 = LISTA_7.children[0].style.backgroundImage;
		
	  let ITEM_3_LIST_2 = LISTA_8.children[0].style.backgroundImage;
		
	  let ITEM_3_LIST_3 = LISTA_9.children[0].style.backgroundImage;
		
	  
	  if(ITEM_1_LIST_1==ITEM_2_LIST_2&&ITEM_2_LIST_2==ITEM_3_LIST_3){
		
	  LISTA_1.style.backgroundImage="url(image/luz.png)";
		
	  LISTA_5.style.backgroundImage="url(image/luz.png)";
		
	  LISTA_9.style.backgroundImage="url(image/luz.png)";
		
	  LISTA_DE_SLOTS_IGUAIS=LISTA_DE_SLOTS_IGUAIS+1;
		
	  IMAGEM_DO_PERSONAGEM_DOS_SLOTS_IGUAIS = ITEM_1_LIST_1;
		
		
	  let offsets1 = LISTA_1.children[0].getBoundingClientRect();
		
	  let Y1 = parseInt(offsets1.bottom);
		
	  let X1 = parseInt(offsets1.left+BLOCO_HEIGHT/2);
		
	  AddElement("1",Y1,X1);
		
	  let offsets2 = LISTA_5.children[0].getBoundingClientRect();
		
	  let Y2 = parseInt(offsets2.bottom);
		
	  let X2 = parseInt(offsets2.left+BLOCO_HEIGHT/2);
		
	  AddElement("5",Y2,X2);
		
	  let offsets3 = LISTA_9.children[0].getBoundingClientRect();
		
	  let Y3 = parseInt(offsets3.bottom);
		
	  let X3 = parseInt(offsets3.left+BLOCO_HEIGHT/2);
		
	  AddElement("9",Y3,X3);
		
	  }
	
	
	  //BOTTOM RIGHT TO TOP LEFT
	  if(ITEM_3_LIST_1==ITEM_2_LIST_2&&ITEM_2_LIST_2==ITEM_1_LIST_3){
		
	  LISTA_7.style.backgroundImage="url(image/luz.png)";
		
	  LISTA_5.style.backgroundImage="url(image/luz.png)";
		
	  LISTA_3.style.backgroundImage="url(image/luz.png)";
		
	  LISTA_DE_SLOTS_IGUAIS=LISTA_DE_SLOTS_IGUAIS+1;
		
	  IMAGEM_DO_PERSONAGEM_DOS_SLOTS_IGUAIS = ITEM_3_LIST_1;
		
		
	  let offsets1 = LISTA_7.children[0].getBoundingClientRect();
		
	  let Y1 = parseInt(offsets1.bottom);
		
	  let X1 = parseInt(offsets1.left+BLOCO_HEIGHT/2);
		
	  AddElement("7",Y1,X1);
		
	  let offsets2 = LISTA_5.children[0].getBoundingClientRect();
		
	  let Y2 = parseInt(offsets2.bottom);
		
	  let X2 = parseInt(offsets2.left+BLOCO_HEIGHT/2);
		
	  AddElement("5",Y2,X2);
		
	  let offsets3 = LISTA_3.children[0].getBoundingClientRect();
		
	  let Y3 = parseInt(offsets3.bottom);
		
	  let X3 = parseInt(offsets3.left+BLOCO_HEIGHT/2);
		
	  AddElement("3",Y3,X3);
		
	  }
		
		
	  if(
		
	  ITEM_1_LIST_1==ITEM_1_LIST_2&&ITEM_1_LIST_2==ITEM_1_LIST_3){
		
	  LISTA_1.style.backgroundImage="url(image/luz.png)";
		
	  LISTA_2.style.backgroundImage="url(image/luz.png)";
		
	  LISTA_3.style.backgroundImage="url(image/luz.png)";
		
	  LISTA_DE_SLOTS_IGUAIS=LISTA_DE_SLOTS_IGUAIS+1;
		
	  IMAGEM_DO_PERSONAGEM_DOS_SLOTS_IGUAIS = ITEM_1_LIST_1;
		
		
	  let offsets1 = LISTA_1.children[0].getBoundingClientRect();
		
	  let Y1 = parseInt(offsets1.bottom);
		
	  let X1 = parseInt(offsets1.left+BLOCO_HEIGHT/2);
		
	  AddElement("1",Y1,X1);
		
	  let offsets2 = LISTA_2.children[0].getBoundingClientRect();
		
	  let Y2 = parseInt(offsets2.bottom);
		
	  let X2 = parseInt(offsets2.left+BLOCO_HEIGHT/2);
		
	  AddElement("2",Y2,X2);
		
	  let offsets3 = LISTA_3.children[0].getBoundingClientRect();
		
	  let Y3 = parseInt(offsets3.bottom);
		
	  let X3 = parseInt(offsets3.left+BLOCO_HEIGHT/2);
		
	  AddElement("3",Y3,X3);
	  }
		
		
	  if(ITEM_2_LIST_1==ITEM_2_LIST_2&&ITEM_2_LIST_2==ITEM_2_LIST_3){
		
	  LISTA_4.style.backgroundImage="url(image/luz.png)";
		
	  LISTA_5.style.backgroundImage="url(image/luz.png)";
		
	  LISTA_6.style.backgroundImage="url(image/luz.png)";
		
	  LISTA_DE_SLOTS_IGUAIS=LISTA_DE_SLOTS_IGUAIS+1;
		
	  IMAGEM_DO_PERSONAGEM_DOS_SLOTS_IGUAIS = ITEM_2_LIST_1;
		
		
	  let offsets1 = LISTA_4.children[0].getBoundingClientRect();
		
	  let Y1 = parseInt(offsets1.bottom);
		
	  let X1 = parseInt(offsets1.left+BLOCO_HEIGHT/2);
		
	  AddElement("4",Y1,X1);
		
	  let offsets2 = LISTA_5.children[0].getBoundingClientRect();
		
	  let Y2 = parseInt(offsets2.bottom);
		
	  let X2 = parseInt(offsets2.left+BLOCO_HEIGHT/2);
		
	  AddElement("5",Y2,X2);
		
	  let offsets3 = LISTA_6.children[0].getBoundingClientRect();
		
	  let Y3 = parseInt(offsets3.bottom);
		
	  let X3 = parseInt(offsets3.left+BLOCO_HEIGHT/2);
		
	  AddElement("6",Y3,X3);
	  }
		
	
	  if(ITEM_3_LIST_1==ITEM_3_LIST_2&&ITEM_3_LIST_2==ITEM_3_LIST_3){
		
	  LISTA_7.style.backgroundImage="url(image/luz.png)";
		
	  LISTA_8.style.backgroundImage="url(image/luz.png)";
		
	  LISTA_9.style.backgroundImage="url(image/luz.png)";
		
	  LISTA_DE_SLOTS_IGUAIS=LISTA_DE_SLOTS_IGUAIS+1;
		
	  IMAGEM_DO_PERSONAGEM_DOS_SLOTS_IGUAIS = ITEM_3_LIST_1;
		
		
	  let offsets1 = LISTA_7.children[0].getBoundingClientRect();
		
	  let Y1 = parseInt(offsets1.bottom);
		
	  let X1 = parseInt(offsets1.left+BLOCO_HEIGHT/2);
		
	  AddElement("7",Y1,X1);
		
	  let offsets2 = LISTA_8.children[0].getBoundingClientRect();
		
	  let Y2 = parseInt(offsets2.bottom);
		
	  let X2 = parseInt(offsets2.left+BLOCO_HEIGHT/2);
		
	  AddElement("8",Y2,X2);
		
	  let offsets3 = LISTA_9.children[0].getBoundingClientRect();
		
	  let Y3 = parseInt(offsets3.bottom);
		
	  let X3 = parseInt(offsets3.left+BLOCO_HEIGHT/2);
		
	  AddElement("9",Y3,X3);
	  }
		
		
	  if(LISTA_DE_SLOTS_IGUAIS==0){
		
	  setTimeout(function(){
		
	  LISTA_7.style.backgroundImage="url(image/blue-futuristic-hologram-teleport-glowing-neon-rings-1.png)";
		
	  clearTimeout();
		
	  },25);
		
	  setTimeout(function(){
		
	  LISTA_7.style.backgroundImage="none";
		
	  clearTimeout();
		
	  },50);
		
		
		
	  setTimeout(function(){
		
	  LISTA_8.style.backgroundImage="url(image/blue-futuristic-hologram-teleport-glowing-neon-rings-1.png)";
		
	  clearTimeout();
		
	  },75);
		
	  setTimeout(function(){
		
	  LISTA_8.style.backgroundImage="none";
		
	  clearTimeout();
		
	  },100);
		
		
		
	  setTimeout(function(){
		
	  LISTA_9.style.backgroundImage="url(image/blue-futuristic-hologram-teleport-glowing-neon-rings-1.png)";
		
	  clearTimeout();
		
	  },125);
		
	  setTimeout(function(){
		
	  LISTA_9.style.backgroundImage="none";
		
	  clearTimeout();
		
	  },150);
		
	  }
		
		
	  if(LISTA_DE_SLOTS_IGUAIS>0){
		
	  AtualizarSaldoDosGanhos(LISTA_DE_SLOTS_IGUAIS,IMAGEM_DO_PERSONAGEM_DOS_SLOTS_IGUAIS);
		
	  HabilitarButtonPlay(true);
		
	  FUNC(
	  LISTA_1_FUNDO.children[0],LISTA_1_FUNDO.children[1],LISTA_1_FUNDO.children[2],
	  LISTA_2_FUNDO.children[0],LISTA_2_FUNDO.children[1],LISTA_2_FUNDO.children[2],
	  LISTA_3_FUNDO.children[0],LISTA_3_FUNDO.children[1],LISTA_3_FUNDO.children[2]
	  );
	  
	  }else{
		
	  if(NoModoAutomatico&&VerificarSePossuiSaldoSuficiente){
	  
	  if(NoModoTurbo==true){
		
	  setTimeout(function(){
		
	  HabilitarButtonPlay(false);
		
	  playAudio("mixkit-arcade-slot-machine-wheel-1933_2.wav");
	  isSlot = true;
	  SlotTime = 180;
	
	  C2();
	  
	  AtualizarSaldoDaCarteira();
	  
	  FUNC(
	  LISTA_1_FUNDO.children[0],LISTA_1_FUNDO.children[1],LISTA_1_FUNDO.children[2],
	  LISTA_2_FUNDO.children[0],LISTA_2_FUNDO.children[1],LISTA_2_FUNDO.children[2],
	  LISTA_3_FUNDO.children[0],LISTA_3_FUNDO.children[1],LISTA_3_FUNDO.children[2]
	  );
		
	  },250);
		
	  }else{
		
	  HabilitarButtonPlay(false);
		
	  playAudio("mixkit-arcade-slot-machine-wheel-1933_2.wav");
	  isSlot = true;
	  SlotTime = 60;
	
	  C2();
		
	  AtualizarSaldoDaCarteira();
	  FUNC(
	  LISTA_1_FUNDO.children[0],LISTA_1_FUNDO.children[1],LISTA_1_FUNDO.children[2],
	  LISTA_2_FUNDO.children[0],LISTA_2_FUNDO.children[1],LISTA_2_FUNDO.children[2],
	  LISTA_3_FUNDO.children[0],LISTA_3_FUNDO.children[1],LISTA_3_FUNDO.children[2]
	  );
		
	  }
		
	  }else{
		
	  HabilitarButtonPlay(true);
	  FUNC(
	  LISTA_1_FUNDO.children[0],LISTA_1_FUNDO.children[1],LISTA_1_FUNDO.children[2],
	  LISTA_2_FUNDO.children[0],LISTA_2_FUNDO.children[1],LISTA_2_FUNDO.children[2],
	  LISTA_3_FUNDO.children[0],LISTA_3_FUNDO.children[1],LISTA_3_FUNDO.children[2]
	  );
		
	  }
		
	
	  let LISTA1 = document.getElementsByClassName("LISTA_1")[0];
	  let a1 = LISTA1.children.length-1;
		
	  while(a1>2){
	  LISTA1.removeChild(LISTA1.children[a1]);
	  a1--;
	  }
		
	  let LISTA2 = document.getElementsByClassName("LISTA_2")[0];
	  let a2 = LISTA2.children.length-1;
		
	  while(a2>2){
	  LISTA2.removeChild(LISTA2.children[a2]);
	  a2--;
	  }
		
	  let LISTA3 = document.getElementsByClassName("LISTA_3")[0];
	  let a3 = LISTA3.children.length-1;
		
	  while(a3>2){
	  LISTA3.removeChild(LISTA3.children[a3]);
	  a3--;
	  }
		
	}
		
}
