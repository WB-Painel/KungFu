function CreateSlots(){
	
	var R = document.getElementsByClassName("AbaDeHistorico_")[0].clientWidth/10;
	
	var SlotsDoGanho = document.getElementsByClassName("SlotsDoGanho")[0];
	
	if(SlotsDaPreviewCriado==false){
	Temple = document.createElement("div");
	Temple.id="TemplePreview";
	}
	
	Temple.style.width = 9*R+"px";
	Temple.style.height = 8*R+"px";
	Temple.style.marginLeft = R/2+"px";
	Temple.style.backgroundImage = "url(image/temple.png)";
	Temple.style.backgroundSize = 9*R+"px"+" "+8*R+"px";
	Temple.style.backgroundRepeat = "no-repeat";
	Temple.style.backgroundPosition = "center";
	
	if(SlotsDaPreviewCriado==false){
	DesignCenter = document.createElement("div");
	DesignCenter.id="DS";
	}
	
	DesignCenter.style.width = 7*R+"px";
	DesignCenter.style.height = 8*R+"px";
	DesignCenter.style.marginLeft = 1*R+"px";
	DesignCenter.style.display="flex";
	
	if(SlotsDaPreviewCriado==false){
	LISTA_1 = document.createElement("div");
	LISTA_1.id="LISTA_1_PREVIEW";
	}
	
	LISTA_1.style.width = 2*R+R/3+"px";
	LISTA_1.style.height = 8*R+"px";
	
	
	if(SlotsDaPreviewCriado==false){
	DesignCenter.appendChild(LISTA_1);
	}
	
	if(SlotsDaPreviewCriado==false){
	LISTA_2 = document.createElement("div");
	LISTA_2.id="LISTA_2_PREVIEW";
	}
	
	LISTA_2.style.width = 2*R+R/3+"px";
	LISTA_2.style.height = 8*R+"px";
	
	
	if(SlotsDaPreviewCriado==false){
	DesignCenter.appendChild(LISTA_2);
	}
	
	if(SlotsDaPreviewCriado==false){
	LISTA_3 = document.createElement("div");
	LISTA_3.id="LISTA_3_PREVIEW";
	}
	
	LISTA_3.style.width = 2*R+R/3+"px";
	LISTA_3.style.height = 8*R+"px";
	
	if(SlotsDaPreviewCriado==false){
	DesignCenter.appendChild(LISTA_3);
	Temple.appendChild(DesignCenter);
	SlotsDoGanho.appendChild(Temple);
	}
	
	if(SlotsDaPreviewCriado==false){
	BLOCO_1 = document.createElement("div");
	}
	
	BLOCO_1.id="SLOT_1";
	BLOCO_1.style.width = 2*R+R/3+"px";
	BLOCO_1.style.height = DesignCenter.clientHeight/3+"px";
	BLOCO_1.style.backgroundSize = "50% 50%";
	
	if(SlotsDaPreviewCriado==false){
	LISTA_1.appendChild(BLOCO_1);
	}
	
	if(SlotsDaPreviewCriado==false){
	BLOCO_2 = document.createElement("div");
	}
	
	BLOCO_2.id="SLOT_2";
	BLOCO_2.style.width = 2*R+R/3+"px";
	BLOCO_2.style.height = DesignCenter.clientHeight/3+"px";
	BLOCO_2.style.backgroundSize = "50% 50%";
	
	if(SlotsDaPreviewCriado==false){
	LISTA_1.appendChild(BLOCO_2);
	}
	
	if(SlotsDaPreviewCriado==false){
	BLOCO_3 = document.createElement("div");
	}
	
	BLOCO_3.id="SLOT_3";
	BLOCO_3.style.width = 2*R+R/3+"px";
	BLOCO_3.style.height = DesignCenter.clientHeight/3+"px";
	BLOCO_3.style.backgroundSize = "50% 50%";
	
	if(SlotsDaPreviewCriado==false){
	LISTA_1.appendChild(BLOCO_3);
	}
	
	
	
	if(SlotsDaPreviewCriado==false){
	BLOCO_4 = document.createElement("div");
	}
	BLOCO_4.id="SLOT_4";
	BLOCO_4.style.width = 2*R+R/3+"px";
	BLOCO_4.style.height = DesignCenter.clientHeight/3+"px";
	BLOCO_4.style.backgroundSize = "50% 50%";
	
	if(SlotsDaPreviewCriado==false){
	LISTA_2.appendChild(BLOCO_4);
	}
	
	if(SlotsDaPreviewCriado==false){
	BLOCO_5 = document.createElement("div");
	}
	
	BLOCO_5.id="SLOT_5";
	BLOCO_5.style.width = 2*R+R/3+"px";
	BLOCO_5.style.height = DesignCenter.clientHeight/3+"px";
	BLOCO_5.style.backgroundSize = "50% 50%";
	
	if(SlotsDaPreviewCriado==false){
	LISTA_2.appendChild(BLOCO_5);
	}
	
	if(SlotsDaPreviewCriado==false){
	BLOCO_6 = document.createElement("div");
	}
	
	BLOCO_6.id="SLOT_6";
	BLOCO_6.style.width = 2*R+R/3+"px";
	BLOCO_6.style.height = DesignCenter.clientHeight/3+"px";
	BLOCO_6.style.backgroundSize = "50% 50%";
	
	if(SlotsDaPreviewCriado==false){
	LISTA_2.appendChild(BLOCO_6);
	}
	
	if(SlotsDaPreviewCriado==false){
	BLOCO_7 = document.createElement("div");
	}
	
	BLOCO_7.id="SLOT_7";
	BLOCO_7.style.width = 2*R+R/3+"px";
	BLOCO_7.style.height = DesignCenter.clientHeight/3+"px";
	BLOCO_7.style.backgroundSize = "50% 50%";
	
	
	if(SlotsDaPreviewCriado==false){
	LISTA_3.appendChild(BLOCO_7);
	}
	
	if(SlotsDaPreviewCriado==false){
	BLOCO_8 = document.createElement("div");
	}
	
	BLOCO_8.id="SLOT_8";
	BLOCO_8.style.width = 2*R+R/3+"px";
	BLOCO_8.style.height = DesignCenter.clientHeight/3+"px";
	BLOCO_8.style.backgroundSize = "50% 50%";
	
	
	if(SlotsDaPreviewCriado==false){
	LISTA_3.appendChild(BLOCO_8);
	}
	
	if(SlotsDaPreviewCriado==false){
	BLOCO_9 = document.createElement("div");
	}
	
	BLOCO_9.id="SLOT_9";
	BLOCO_9.style.width = 2*R+R/3+"px";
	BLOCO_9.style.height = DesignCenter.clientHeight/3+"px";
	BLOCO_9.style.backgroundSize = "50% 50%";
	
	
	if(SlotsDaPreviewCriado==false){
	LISTA_3.appendChild(BLOCO_9);
	}
	
	return SlotsDoGanho;
	}
