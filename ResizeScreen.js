function ResizeScreen(){
  
  setTimeout(function(){
		
	if(window.innerHeight > window.innerWidth){
	
	let ScreenWidth = window.screen.width;
	
	let ViewMenu = document.getElementsByClassName("ViewMenu")[0];
	
	let Menu = document.getElementsByClassName("Menu")[0];
	Menu.style.height = Menu.clientHeight/2+Menu.clientHeight/3+"px";
	Menu.style.width = Menu.clientWidth/2+Menu.clientWidth/3+"px";
	
	
	
	
	
	let ViewPanelMenuButtonFunction = document.getElementsByClassName("ViewPanelMenuButtonFunction")[0];
	ViewPanelMenuButtonFunction.style.width = ScreenWidth/5;
	
	
	
	let ViewPanelMenuButtonFunction = document.getElementsByClassName("ViewPanelMenuButtonFunction")[1];
	ViewPanelMenuButtonFunction.style.width = ScreenWidth/5;
	
	
	
	let ViewPanelMenuButtonFunction = document.getElementsByClassName("ViewPanelMenuButtonFunction")[2];
	ViewPanelMenuButtonFunction.style.width = ScreenWidth/5;
	
	
	
	let ViewPanelMenuButtonFunction = document.getElementsByClassName("ViewPanelMenuButtonFunction")[3];
	ViewPanelMenuButtonFunction.style.width = ScreenWidth/5;
	
	
	
	let ViewPanelMenuButtonFunction = document.getElementsByClassName("ViewPanelMenuButtonFunction")[4];
	ViewPanelMenuButtonFunction.style.width = ScreenWidth/5;
	
	
	
	
	let PanelMenuButtonFunction = document.getElementsByClassName("PanelMenuButtonFunction")[0];
	PanelMenuButtonFunction.style.width = ViewPanelMenuButtonFunction.clientWidth/2+"px";
	
	
	let PanelMenuButtonFunction = document.getElementsByClassName("PanelMenuButtonFunction")[1];
	PanelMenuButtonFunction.style.width = ViewPanelMenuButtonFunction.clientWidth/2+"px";
	
	
	let PanelMenuButtonFunction = document.getElementsByClassName("PanelMenuButtonFunction")[2];
	PanelMenuButtonFunction.style.width = ViewPanelMenuButtonFunction.clientWidth/2+"px";
	
	
	let PanelMenuButtonFunction = document.getElementsByClassName("PanelMenuButtonFunction")[3];
	PanelMenuButtonFunction.style.width = ViewPanelMenuButtonFunction.clientWidth/2+"px";
	
	
	let PanelMenuButtonFunction = document.getElementsByClassName("PanelMenuButtonFunction")[4];
	PanelMenuButtonFunction.style.width = ViewPanelMenuButtonFunction.clientWidth/2+"px";
	
	let AbaDePagamentos = document.getElementsByClassName("AbaDePagamentos")[0];
	if(Opned3==false){
	AbaDePagamentos.style.transform = "translate("+AbaDePagamentos.clientWidth+"px"+","+"0"+"px)";
	}
	
	let ViewAbaDeHistorico_ = document.getElementsByClassName("AbaDeHistorico_")[0];
	if(Opned2==false){
	ViewAbaDeHistorico_.style.transform = "translate("+ViewAbaDeHistorico_.clientWidth+"px"+","+"0"+"px)";
	}
	
	let ViewAbaDeHistorico = document.getElementsByClassName("AbaDeHistorico")[0];
	if(Opned==false){
	ViewAbaDeHistorico.style.transform = "translate("+ViewAbaDeHistorico.clientWidth+"px"+","+"0"+"px)";
	}
	
	setTimeout(function(){
	
	CreateSlots();
	
	if(SlotsDaPreviewCriado==false){
	SlotsDaPreviewCriado=true;
	}
	
	clearTimeout();
	
	},200/8);
	
	}else{
	
	let FUNDO = document.getElementsByClassName("Fundo")[0];
	FUNDO.style.height=window.innerHeight;
	
	let SPLASH = document.getElementsByClassName("Splash")[0];
	SPLASH.style.width=window.innerWidth/2+"px";
	SPLASH.style.marginLeft=window.innerWidth/4+"px";
	
	
	let SPLASH_ENTER = document.getElementsByClassName("SplashEnter")[0];
	SPLASH_ENTER.style.width=window.innerWidth/2+"px";
	SPLASH_ENTER.style.marginLeft=window.innerWidth/4+"px";
	
	
	let ViewDesigner = document.getElementsByClassName("ViewDesigner")[0];
	ViewDesigner.style.width=window.innerWidth/2+"px";
	ViewDesigner.style.marginLeft=window.innerWidth/4+"px";
	
	
	let DesignTop = document.getElementsByClassName("DesignTop")[0];
	DesignTop.style.width=window.innerWidth/2+"px";
	
	
	let TopImage = document.getElementsByClassName("TopImage")[0];
	TopImage.style.width=window.innerWidth/2+"px";
	TopImage.style.backgroundSize = "30% 60%";
	
	
	let ScreenHeight = window.screen.height;
	
	let ScreenWidth = document.getElementsByTagName("Body")[0].clientWidth; //window.screen.width;
	
	let ScreenHeight_2 = document.getElementsByTagName("Body")[0].clientHeight; //window.screen.width;
	
	let ScreenWidth_2 = document.getElementsByTagName("Body")[0].clientHeight; //window.screen.width;
	
	
	let Telhado = document.getElementsByClassName("Telhado_1")[0];
	Telhado.style.display="block";
	Telhado.style.height=ScreenHeight_2/4+"px";
	DesignTop.style.height=ScreenHeight_2/4+"px";
	
	
	let VIEW_LISTAS = document.getElementsByClassName("VIEW_LISTAS")[0];
	VIEW_LISTAS.style.height=ScreenHeight_2/2+"px";
	
	
	let DesignCenter = document.getElementsByClassName("DesignCenter")[0];
	DesignCenter.style.height=ScreenHeight_2/2+"px";

	
	let LISTA_1 = document.getElementsByClassName("LISTA_1")[0];
	LISTA_1.style.height=ScreenHeight_2/2+"px";
	LISTA_1.style.width = LISTA_1.clientWidth/2+"px";
	
	
	let LIST_SPACE = document.getElementsByClassName("LIST_SPACE")[0];
	LIST_SPACE.style.width = LIST_SPACE.clientWidth/2+"px";
	
	
	let LISTA_1 = document.getElementsByClassName("LISTA_2")[0];
	LISTA_1.style.height=ScreenHeight_2/2+"px";
	LISTA_1.style.width = LISTA_1.clientWidth/2+"px";
	
	
	let LIST_SPACE = document.getElementsByClassName("LIST_SPACE")[1];
	LIST_SPACE.style.width = LIST_SPACE.clientWidth/2+"px";
	
	
	let LISTA_1 = document.getElementsByClassName("LISTA_3")[0];
	LISTA_1.style.height=ScreenHeight_2/2+"px";
	LISTA_1.style.width = LISTA_1.clientWidth/2+"px";
	
	
	
	BLOCO_HEIGHT = parseInt(VIEW_LISTAS.clientHeight/3);
	
	
	
	
	TEMPLE_HEIGHT = 4*Telhado.clientHeight; //4*va.clientHeight;//+4*BLOCO_HEIGHT;
		


 
	let DesignBottom = document.getElementsByClassName("DesignBottom")[0];
	DesignBottom.style.width=window.innerWidth/2+"px";
	DesignBottom.style.height=ScreenHeight_2/4/*+ScreenHeight_2/50*/+"px";

	
	
	let ViewNotification = document.getElementsByClassName("ViewNotification")[0];
	ViewNotification.style.width = DesignBottom.clientWidth+"px";
	ViewNotification.style.height = DesignBottom.clientHeight/4+"px";
	
	let NotificationBackground = document.getElementsByClassName("NotificationBackground")[0];
	NotificationBackground.style.width = ViewNotification.clientWidth+"px";
	NotificationBackground.style.height = ViewNotification.clientHeight+"px";
	
	
	let NotificationMessage = document.getElementsByClassName("NotificationMessage")[0];
	NotificationMessage.style.width = window.screen.width+"px";
	NotificationMessage.style.height = ViewNotification.clientHeight+"px";
	
	
	let FontSize = ViewNotification.clientHeight/2;
	NotificationMessage.style.fontSize = FontSize+"px";
	
 
	let ViewInformation = document.getElementsByClassName("ViewInformation")[0];
	ViewInformation.style.width=DesignBottom.clientWidth+"px";
	ViewInformation.style.height=DesignBottom.clientHeight/4+"px";
	
	
	let CardInfo = document.getElementsByClassName("CardInfo")[0];
	CardInfo.style.width=ViewInformation.clientWidth/4+"px";
	CardInfo.style.height=ViewInformation.clientHeight/2+"px";
	
	
	let CardInfo = document.getElementsByClassName("CardInfo")[1];
	CardInfo.style.width=ViewInformation.clientWidth/4+"px";
	CardInfo.style.height=ViewInformation.clientHeight/2+"px";
	
	
	let CardInfo = document.getElementsByClassName("CardInfo")[2];
	CardInfo.style.width=ViewInformation.clientWidth/4+"px";
	CardInfo.style.height=ViewInformation.clientHeight/2+"px";
	
	
	let CardInfoIcon = document.getElementsByClassName("CardInfoIcon")[0];
	CardInfoIcon.style.width = CardInfo.clientWidth/10+"px";
	CardInfoIcon.style.height = CardInfo.clientHeight/2+"px";
	CardInfoIcon.style.backgroundSize = CardInfo.clientWidth/10+"px";
	
	
	let CardInfoIcon = document.getElementsByClassName("CardInfoIcon")[1];
	CardInfoIcon.style.width = CardInfo.clientWidth/10+"px";
	CardInfoIcon.style.height = CardInfo.clientHeight/2+"px";
	CardInfoIcon.style.backgroundSize = CardInfo.clientWidth/10+"px";
	
	
	let CardInfoIcon = document.getElementsByClassName("CardInfoIcon")[2];
	CardInfoIcon.style.width = CardInfo.clientWidth/10+"px";
	CardInfoIcon.style.height = CardInfo.clientHeight/2+"px";
	CardInfoIcon.style.backgroundSize = CardInfo.clientWidth/10+"px";
	
	
	let CardInfoValor = document.getElementsByClassName("CardInfoValor")[0];
	CardInfoValor.style.width = CardInfo.clientWidth/1+"px";
	CardInfoValor.style.height = CardInfo.clientHeight/1+"px";
	CardInfoValor.style.fontSize = CardInfo.clientHeight/2+"px";
	
	
	let CardInfoValor = document.getElementsByClassName("CardInfoValor")[1];
	CardInfoValor.style.width = CardInfo.clientWidth/1+"px";
	CardInfoValor.style.height = CardInfo.clientHeight/1+"px";
	CardInfoValor.style.fontSize = CardInfo.clientHeight/2+"px";
	
	
	let CardInfoValor = document.getElementsByClassName("CardInfoValor")[2];
	CardInfoValor.style.width = CardInfo.clientWidth/1+"px";
	CardInfoValor.style.height = CardInfo.clientHeight/1+"px";
	CardInfoValor.style.fontSize = CardInfo.clientHeight/2+"px";
	
	
	let ViewViewButtonFunction = document.getElementsByClassName("ViewViewButtonFunction")[0];
	ViewViewButtonFunction.style.width = DesignBottom.clientWidth+"px";
	ViewViewButtonFunction.style.height = DesignBottom.clientHeight/2+"px";
	
	
	let ViewButtonFunction = document.getElementsByClassName("ViewButtonFunction")[0];
	ViewButtonFunction.style.width = DesignBottom.clientWidth+"px";
	ViewButtonFunction.style.height = DesignBottom.clientHeight/4+"px";
	
	
	let ButtonFunction = document.getElementsByClassName("ButtonFunction")[0];
	ButtonFunction.style.width = ViewButtonFunction.clientWidth/5+"px";
	ButtonFunction.style.height = ViewButtonFunction.clientHeight/1+"px";
	ButtonFunction.style.backgroundSize = ViewButtonFunction.clientHeight/1+"px";
	
	
	let ButtonFunction = document.getElementsByClassName("ButtonFunction")[1];
	ButtonFunction.style.width = ViewButtonFunction.clientWidth/5+"px";
	ButtonFunction.style.height = ViewButtonFunction.clientHeight/1+"px";
	ButtonFunction.style.backgroundSize = ViewButtonFunction.clientHeight/1+"px";
	
	
	let Play = document.getElementsByClassName("PLAY")[0];
	Play.style.width = ViewButtonFunction.clientWidth/5+"px";
	Play.style.height = ViewButtonFunction.clientHeight+"px";
	Play.style.backgroundSize = ViewButtonFunction.clientHeight/1+ViewButtonFunction.clientHeight/5+"px";
	
	
	let ButtonFunction = document.getElementsByClassName("ButtonFunction")[2];
	ButtonFunction.style.width = ViewButtonFunction.clientWidth/5+"px";
	ButtonFunction.style.height = ViewButtonFunction.clientHeight/1+"px";
	ButtonFunction.style.backgroundSize = ViewButtonFunction.clientHeight/1+"px";
	
	
	let ButtonFunction = document.getElementsByClassName("ButtonFunction")[3];
	ButtonFunction.style.width = ViewButtonFunction.clientWidth/5+"px";
	ButtonFunction.style.height = ViewButtonFunction.clientHeight/1+"px";
	ButtonFunction.style.backgroundSize = ViewButtonFunction.clientHeight/1+"px";
	
	
	let ViewMenu = document.getElementsByClassName("ViewMenu")[0];
	ViewMenu.style.height = DesignBottom.clientHeight/4+"px"; //ViewInformation.clientHeight-ViewInformation.clientHeight/8+"px"; //ViewMenu.clientHeight/2+"px";
	
	
	let Menu = document.getElementsByClassName("Menu")[0];
	Menu.style.height = ButtonFunction.clientHeight/2;
	Menu.style.width = ButtonFunction.clientWidth/2;
	Menu.style.backgroundSize = ButtonFunction.clientWidth/4+"px";
	
	
	let VIEW_LISTAS = document.getElementsByClassName("VIEW_LISTAS")[0];
	
	let DESIGN_CENTER = document.getElementsByClassName("DesignCenter")[0];
	
	let WIDTH = document.getElementsByClassName("VIEW_LISTAS")[0].clientWidth;
	
	
	let LISTA_1 = document.getElementsByClassName("LISTA_1")[0];
	LISTA_1.style.left = 0+"px";
	LISTA_1.style.width = WIDTH/5+WIDTH/40+"px";
	
	
	let LISTA_2 = document.getElementsByClassName("LISTA_2")[0];
	LISTA_2.style.left = 0+"px";
	LISTA_2.style.width = WIDTH/5+WIDTH/40+"px";
	
	
	let LISTA_3 = document.getElementsByClassName("LISTA_3")[0];
	LISTA_3.style.left = 0+"px";
	LISTA_3.style.width = WIDTH/5+WIDTH/40+"px";
	
	
	let LIST_SPACE = document.getElementsByClassName("LIST_SPACE")[0];
	LIST_SPACE.style.width=WIDTH/12+"px";
	
	
	let LIST_SPACE = document.getElementsByClassName("LIST_SPACE")[1];
	LIST_SPACE.style.width=WIDTH/12+"px";
	
	
	let VIEW_LISTAS_POSITION = 1*VIEW_LISTAS.clientHeight+/*-VIEW_LISTAS.clientHeight/7+*/"px";
	
	
	document.getElementsByClassName("LISTA_1")[0].style.marginTop=VIEW_LISTAS_POSITION;
	document.getElementsByClassName("LISTA_2")[0].style.marginTop=VIEW_LISTAS_POSITION;
	document.getElementsByClassName("LISTA_3")[0].style.marginTop=VIEW_LISTAS_POSITION;
	
	
	if(LISTA_1.children.length>0){
	
	for(var i = 0; i < LISTA_1.children.length; i++){
	
	let SLOT = LISTA_1.children[i];
	
	SLOT.style.height = VIEW_LISTAS.clientHeight/3+"px";
	
	let v1 = SLOT.innerHTML.indexOf("background-size");
	let v2 = SLOT.innerHTML.indexOf("background-image");
	
	SLOT.innerHTML = SLOT.innerHTML.replace(SLOT.innerHTML.substring(v1,v2),"background-size:"+VIEW_LISTAS.clientHeight/3+"px"+" "+VIEW_LISTAS.clientHeight/3+"px"+";"+" ");

	}
	
	}
	
	
	
	if(LISTA_2.children.length>0){
	
	for(var i = 0; i < LISTA_2.children.length; i++){
	
	let SLOT = LISTA_2.children[i];
	
	SLOT.style.height = VIEW_LISTAS.clientHeight/3+"px";
	
	let v1 = SLOT.innerHTML.indexOf("background-size");
	let v2 = SLOT.innerHTML.indexOf("background-image");
	
	SLOT.innerHTML = SLOT.innerHTML.replace(SLOT.innerHTML.substring(v1,v2),"background-size:"+VIEW_LISTAS.clientHeight/3+"px"+" "+VIEW_LISTAS.clientHeight/3+"px"+";"+" ");

	}
	
	}
	
	
	
	if(LISTA_3.children.length>0){
	
	for(var i = 0; i < LISTA_3.children.length; i++){
	
	let SLOT = LISTA_3.children[i];
	
	SLOT.style.height = VIEW_LISTAS.clientHeight/3+"px";
	
	let v1 = SLOT.innerHTML.indexOf("background-size");
	let v2 = SLOT.innerHTML.indexOf("background-image");
	
	SLOT.innerHTML = SLOT.innerHTML.replace(SLOT.innerHTML.substring(v1,v2),"background-size:"+VIEW_LISTAS.clientHeight/3+"px"+" "+VIEW_LISTAS.clientHeight/3+"px"+";"+" ");

	}
	
	}
	
	
	
	
	
	let WIDTH = document.getElementsByTagName("body")[0].clientWidth;
	
	let VIEW_DIV_FOR_PC_WIDTH = WIDTH/4;
	
	let VIEW_DIV_FOR_PC_WIDTH_INCREMENT = VIEW_DIV_FOR_PC_WIDTH/40;
	
	let VIEW_DIV_FOR_PC_WIDTH_INCREMENT_IN_INVALID_SPACE = VIEW_DIV_FOR_PC_WIDTH/40;
	
	
	let ViewDivForPc = document.getElementsByClassName("ViewDivForPc")[0];
	ViewDivForPc.style.display="block";
	ViewDivForPc.style.width = VIEW_DIV_FOR_PC_WIDTH+VIEW_DIV_FOR_PC_WIDTH_INCREMENT+"px";
	ViewDivForPc.style.backgroundImage = "url(image/right_bg.png)";
	ViewDivForPc.style.marginLeft = 0+"px";
	

	let ViewDivForPc = document.getElementsByClassName("ViewDivForPc")[1];
	ViewDivForPc.style.display="block";
	ViewDivForPc.style.width = VIEW_DIV_FOR_PC_WIDTH+VIEW_DIV_FOR_PC_WIDTH_INCREMENT+"px";
	ViewDivForPc.style.backgroundImage = "url(image/left_bg.png)";
	ViewDivForPc.style.marginLeft = WIDTH+VIEW_DIV_FOR_PC_WIDTH_INCREMENT_IN_INVALID_SPACE-VIEW_DIV_FOR_PC_WIDTH+"px";
	
	
	
	
	let ViewAbaDeHistorico = document.getElementsByClassName("AbaDeHistorico")[0];
	ViewAbaDeHistorico.style.display="block";
	ViewAbaDeHistorico.style.width = VIEW_DIV_FOR_PC_WIDTH+VIEW_DIV_FOR_PC_WIDTH_INCREMENT+"px";
	
	if(Opned==false){
	ViewAbaDeHistorico.style.transform = "translate("+ViewAbaDeHistorico.clientWidth+"px"+","+"0"+"px)";
	}
	
	let NoHistory = document.getElementsByClassName("NoHistory")[0];
	NoHistory.style.fontSize = ViewAbaDeHistorico.clientHeight/40+"px";
	
	
	let ViewHistoricoTop = document.getElementsByClassName("ViewHistoricoTop")[0];
	ViewHistoricoTop.style.height = ViewAbaDeHistorico.clientHeight/8+"px";
	
	
	let HistoricoTopAgendaIcon = document.getElementsByClassName("HistoricoTopAgendaIcon")[0];
	HistoricoTopAgendaIcon.style.width = ViewHistoricoTop.clientWidth/4+"px";
	HistoricoTopAgendaIcon.style.height = ViewHistoricoTop.clientHeight/1+"px";
	
	
	let ViewHistoricoTopTitleAndSubtitle = document.getElementsByClassName("ViewHistoricoTopTitleAndSubtitle")[0];
	ViewHistoricoTopTitleAndSubtitle.style.width = ViewHistoricoTop.clientWidth/2+"px";
	ViewHistoricoTopTitleAndSubtitle.style.height = ViewHistoricoTop.clientHeight/1+"px";
	
	
	let HistoricoTopFecharIcon = document.getElementsByClassName("HistoricoTopFecharIcon")[0];
	HistoricoTopFecharIcon.style.width = ViewHistoricoTop.clientWidth/4+"px";
	HistoricoTopFecharIcon.style.height = ViewHistoricoTop.clientHeight/1+"px";
	
	
	let HistoricoTopTitle = document.getElementsByClassName("HistoricoTopTitle")[0];
	HistoricoTopTitle.style.fontSize = ViewHistoricoTopTitleAndSubtitle.clientHeight/5+"px";
	HistoricoTopTitle.style.paddingTop = "0px";
	HistoricoTopTitle.style.paddingBottom = "0px";
	HistoricoTopTitle.style.width = ViewHistoricoTopTitleAndSubtitle.clientWidth/1+"px";
	HistoricoTopTitle.style.height = ViewHistoricoTopTitleAndSubtitle.clientHeight/2+"px";
	
	
	let HistoricoTopSubtitle = document.getElementsByClassName("HistoricoTopSubtitle")[0];
	HistoricoTopSubtitle.style.fontSize = ViewHistoricoTopTitleAndSubtitle.clientHeight/8+"px";
	HistoricoTopSubtitle.style.paddingTop = "0px";
	HistoricoTopSubtitle.style.paddingBottom = "0px";
	HistoricoTopSubtitle.style.width = ViewHistoricoTopTitleAndSubtitle.clientWidth/1+"px";
	HistoricoTopSubtitle.style.height = ViewHistoricoTopTitleAndSubtitle.clientHeight/2+"px";
	
	
	let ViewHistoricoTop2 = document.getElementsByClassName("ViewHistoricoTop2")[0];
	ViewHistoricoTop2.style.height = ViewAbaDeHistorico.clientHeight/16+"px";
	
	
	let ViewHistoricoTop2ListName = document.getElementsByClassName("ViewHistoricoTop2ListName")[0];
	ViewHistoricoTop2ListName.style.fontSize = ViewHistoricoTop2.clientHeight/3+"px";
	
	
	let ViewHistoricoTop2ListName = document.getElementsByClassName("ViewHistoricoTop2ListName")[1];
	ViewHistoricoTop2ListName.style.fontSize = ViewHistoricoTop2.clientHeight/3+"px";
	
	
	let ViewHistoricoTop2ListName = document.getElementsByClassName("ViewHistoricoTop2ListName")[2];
	ViewHistoricoTop2ListName.style.fontSize = ViewHistoricoTop2.clientHeight/3+"px";
	
	
	let ViewHistoricoCenter = document.getElementsByClassName("ViewHistoricoCenter")[0];
	ViewHistoricoCenter.style.height = ViewAbaDeHistorico.clientHeight/2+ViewAbaDeHistorico.clientHeight/6+"px";
	
	
	let ViewHistoricoCenterHorario = document.getElementsByClassName("ViewHistoricoCenterHorario")[0];
	
	let ViewHistoricoCenterAposta = document.getElementsByClassName("ViewHistoricoCenterAposta")[0];
	
	let ViewHistoricoCenterLucro = document.getElementsByClassName("ViewHistoricoCenterLucro")[0];
	
	
	if(ViewHistoricoCenterLucro.children.length>0){
	
	for(var i = 0; i < ViewHistoricoCenterLucro.children.length; i++){
	
	let HorarioItem = ViewHistoricoCenterHorario.children[i];
	HorarioItem.style.height = ViewHistoricoTop2.clientHeight/1+"px";
	HorarioItem.style.width = ViewHistoricoTop2.clientWidth/3+"px";
	HorarioItem.style.fontSize = ViewHistoricoTop2.clientHeight/3+"px";
	
	
	let ApostaItem = ViewHistoricoCenterAposta.children[i];
	ApostaItem.style.height = ViewHistoricoTop2.clientHeight/1+"px";
	ApostaItem.style.width = ViewHistoricoTop2.clientWidth/3+"px";
	ApostaItem.style.fontSize = ViewHistoricoTop2.clientHeight/3+"px";
	
	
	let ViewLucroItem = ViewHistoricoCenterLucro.children[i];
	ViewLucroItem.style.height = ViewHistoricoTop2.clientHeight/1+"px";
	ViewLucroItem.style.width = ViewHistoricoTop2.clientWidth/3+"px";
	
	
	let LucroItem = ViewLucroItem.children[0];
	LucroItem.style.height = ViewHistoricoTop2.clientHeight/2+"px";
	LucroItem.style.width = ViewHistoricoTop2.clientWidth/3-ViewHistoricoTop2.clientWidth/18+"px";
	LucroItem.style.fontSize = ViewHistoricoTop2.clientHeight/3+"px";
	
	
	let SetaItem = ViewLucroItem.children[1];
	SetaItem.style.height = ViewHistoricoTop2.clientHeight/2+"px";
	
	
	}
	
	}
	
	let ViewHistoricoBottom = document.getElementsByClassName("ViewHistoricoBottom")[0];
	ViewHistoricoBottom.style.height = ViewAbaDeHistorico.clientHeight/7+"px";
	
	
	let ViewHistoricoBottomInfo = document.getElementsByClassName("ViewHistoricoBottomInfo")[0];
	ViewHistoricoBottomInfo.style.height = ViewHistoricoBottom.clientHeight/1+"px";
	ViewHistoricoBottomInfo.style.width = ViewHistoricoBottom.clientWidth/3+"px";
	
	
	let ViewHistoricoBottomInfoTitle = document.getElementsByClassName("ViewHistoricoBottomInfoTitle")[0];
	ViewHistoricoBottomInfoTitle.style.fontSize = ViewHistoricoBottomInfo.clientHeight/5+"px";
	ViewHistoricoBottomInfoTitle.style.marginTop="0px";
	ViewHistoricoBottomInfoTitle.style.marginBottom="0px";
	ViewHistoricoBottomInfoTitle.style.paddingTop = ViewHistoricoBottomInfo.clientHeight/15+"px";
	ViewHistoricoBottomInfoTitle.style.paddingBottom = ViewHistoricoBottomInfo.clientHeight/15+"px";
	
	
	ViewHistoricoBottomInfoTitle.style.height = ViewHistoricoBottomInfo.clientHeight/2+"px";
	
	
	let ViewHistoricoBottomInfoSubtitle = document.getElementsByClassName("ViewHistoricoBottomInfoSubtitle")[0];
	ViewHistoricoBottomInfoSubtitle.style.fontSize = ViewHistoricoBottomInfo.clientHeight/8+"px";
	ViewHistoricoBottomInfoSubtitle.style.marginTop="0px";
	ViewHistoricoBottomInfoSubtitle.style.marginBottom="0px";
	ViewHistoricoBottomInfoSubtitle.style.paddingTop = ViewHistoricoBottomInfo.clientHeight/15+"px";
	ViewHistoricoBottomInfoSubtitle.style.paddingBottom = ViewHistoricoBottomInfo.clientHeight/15+"px";
	ViewHistoricoBottomInfoSubtitle.style.height = ViewHistoricoBottomInfo.clientHeight/2+"px";
	
	
	let ViewHistoricoBottomInfoGanhos = document.getElementsByClassName("ViewHistoricoBottomInfoGanhos")[0];
	ViewHistoricoBottomInfoGanhos.style.fontSize = ViewHistoricoBottomInfo.clientHeight/8+"px";
	ViewHistoricoBottomInfoGanhos.style.marginTop="0px";
	ViewHistoricoBottomInfoGanhos.style.marginBottom="0px";
	ViewHistoricoBottomInfoGanhos.style.paddingTop = ViewHistoricoBottomInfo.clientHeight/15+"px";
	ViewHistoricoBottomInfoGanhos.style.paddingBottom = ViewHistoricoBottomInfo.clientHeight/15+"px";
	

	ViewHistoricoBottomInfoGanhos.style.height = ViewHistoricoBottomInfo.clientHeight/2+"px";
	ViewHistoricoBottomInfoGanhos.style.width = ViewHistoricoBottom.clientWidth/3+"px";
	
	
	let ViewHistoricoBottomInfoPerdas = document.getElementsByClassName("ViewHistoricoBottomInfoPerdas")[0];
	ViewHistoricoBottomInfoPerdas.style.fontSize = ViewHistoricoBottomInfo.clientHeight/8+"px";
	ViewHistoricoBottomInfoPerdas.style.marginTop="0px";
	ViewHistoricoBottomInfoPerdas.style.marginBottom="0px";
	ViewHistoricoBottomInfoPerdas.style.paddingTop = ViewHistoricoBottomInfo.clientHeight/15+"px";
	ViewHistoricoBottomInfoPerdas.style.paddingBottom = ViewHistoricoBottomInfo.clientHeight/15+"px";
	ViewHistoricoBottomInfoPerdas.style.height = ViewHistoricoBottomInfo.clientHeight/2+"px";
	ViewHistoricoBottomInfoPerdas.style.width = ViewHistoricoBottom.clientWidth/3+"px";
	
	
	let ViewAbaDeHistorico_ = document.getElementsByClassName("AbaDeHistorico_")[0];
	ViewAbaDeHistorico_.style.display="block";
	ViewAbaDeHistorico_.style.width = VIEW_DIV_FOR_PC_WIDTH+VIEW_DIV_FOR_PC_WIDTH_INCREMENT+"px";
	
	ViewAbaDeHistorico_.style.height = ScreenHeight_2+"px";
	if(Opned2==false){
	ViewAbaDeHistorico_.style.transform = "translate("+ViewAbaDeHistorico_.clientWidth+"px"+","+"0"+"px)";
	}
	
	let ViewHistoricoTop_ = document.getElementsByClassName("ViewHistoricoTop_")[0];
	ViewHistoricoTop_.style.height = ViewAbaDeHistorico_.clientHeight/8+"px";
	
	
	let HistoricoTopBackIcon_ = document.getElementsByClassName("HistoricoTopBackIcon_")[0];
	HistoricoTopBackIcon_.style.width = ViewHistoricoTop_.clientWidth/4+"px";
	HistoricoTopBackIcon_.style.height = ViewHistoricoTop_.clientHeight/1+"px";
	
	
	let ViewHistoricoTopTitleAndSubtitle_ = document.getElementsByClassName("ViewHistoricoTopTitleAndSubtitle_")[0];
	ViewHistoricoTopTitleAndSubtitle_.style.width = ViewHistoricoTop_.clientWidth/2+"px";
	ViewHistoricoTopTitleAndSubtitle_.style.height = ViewHistoricoTop_.clientHeight/1+"px";
	
	
	let HistoricoTopTitle_ = document.getElementsByClassName("HistoricoTopTitle_")[0];
	HistoricoTopTitle_.style.fontSize = ViewHistoricoTopTitleAndSubtitle_.clientHeight/5+"px";
	HistoricoTopTitle_.style.paddingTop = "0px";
	HistoricoTopTitle_.style.paddingBottom = "0px";
	HistoricoTopTitle_.style.width = ViewHistoricoTopTitleAndSubtitle_.clientWidth/1+"px";
	HistoricoTopTitle_.style.height = ViewHistoricoTopTitleAndSubtitle_.clientHeight/2+"px";
	
	
	let HistoricoTopSubtitle_ = document.getElementsByClassName("HistoricoTopSubtitle_")[0];
	HistoricoTopSubtitle_.style.fontSize = ViewHistoricoTopTitleAndSubtitle_.clientHeight/8+"px";
	HistoricoTopSubtitle_.style.paddingTop = "0px";
	HistoricoTopSubtitle_.style.paddingBottom = "0px";
	HistoricoTopSubtitle_.style.width = ViewHistoricoTopTitleAndSubtitle_.clientWidth/1+"px";
	HistoricoTopSubtitle_.style.height = ViewHistoricoTopTitleAndSubtitle_.clientHeight/2+"px";
	
	
	let ViewHistoricoTop2_ = document.getElementsByClassName("ViewHistoricoTop2_")[0];
	ViewHistoricoTop2_.style.height = ViewAbaDeHistorico_.clientHeight/16+"px";
	
	
	let ViewHistoricoTop_ListName_ = document.getElementsByClassName("ViewHistoricoTop_ListName_")[0];
	ViewHistoricoTop_ListName_.style.fontSize = ViewHistoricoTop2_.clientHeight/3+"px";
	
	
	let ViewHistoricoTop_ListName_ = document.getElementsByClassName("ViewHistoricoTop_ListName_")[1];
	ViewHistoricoTop_ListName_.style.fontSize = ViewHistoricoTop2_.clientHeight/3+"px";
	
	
	let ViewHistoricoTop_ListName_ = document.getElementsByClassName("ViewHistoricoTop_ListName_")[2];
	ViewHistoricoTop_ListName_.style.fontSize = ViewHistoricoTop2_.clientHeight/3+"px";
	
	
	let ViewHistoricoCenter_ = document.getElementsByClassName("ViewHistoricoCenter_")[0];
	ViewHistoricoCenter_.style.width = ViewAbaDeHistorico_.clientWidth/1+"px";
	ViewHistoricoCenter_.style.height = ViewAbaDeHistorico_.clientHeight/18+"px";
	
	
	let ViewHistoricoCenterAposta_ = document.getElementsByClassName("ViewHistoricoCenterAposta_")[0];
	ViewHistoricoCenterAposta_.style.height = ViewHistoricoCenter_.clientHeight/1+"px";
	ViewHistoricoCenterAposta_.style.width = ViewHistoricoCenter_.clientWidth/3+"px";
	
	
	let ViewHistoricoCenterApostaText = document.getElementsByClassName("ViewHistoricoCenterApostaText_")[0];
	ViewHistoricoCenterApostaText.style.paddingTop = ViewAbaDeHistorico_.clientHeight/60+"px";
	ViewHistoricoCenterApostaText.style.fontSize = ViewHistoricoCenterAposta_.clientHeight/3+"px";
	ViewHistoricoCenterApostaText.style.width = ViewHistoricoCenterAposta_.clientWidth/1+"px";
	ViewHistoricoCenterApostaText.style.height = ViewHistoricoCenterAposta_.clientHeight/2+"px";
	
	
	let ViewHistoricoCenterLucro_ = document.getElementsByClassName("ViewHistoricoCenterLucro_")[0];
	ViewHistoricoCenterLucro_.style.height = ViewHistoricoCenter_.clientHeight/1+"px";
	ViewHistoricoCenterLucro_.style.width = ViewHistoricoCenter_.clientWidth/3+"px";
	
	
	let ViewHistoricoCenterLucroText = document.getElementsByClassName("ViewHistoricoCenterLucroText_")[0];
	ViewHistoricoCenterLucroText.style.paddingTop = ViewAbaDeHistorico_.clientHeight/60+"px";
	ViewHistoricoCenterLucroText.style.fontSize = ViewHistoricoCenterLucro_.clientHeight/3+"px";
	ViewHistoricoCenterApostaText.style.width = ViewHistoricoCenterLucro_.clientWidth/1+"px";
	ViewHistoricoCenterLucroText.style.height = ViewHistoricoCenterLucro_.clientHeight/2+"px";
	
	
	let ViewHistoricoCenterSaldo_ = document.getElementsByClassName("ViewHistoricoCenterSaldo_")[0];
	ViewHistoricoCenterSaldo_.style.height = ViewHistoricoCenter_.clientHeight/1+"px";
	ViewHistoricoCenterSaldo_.style.width = ViewHistoricoCenter_.clientWidth/3+"px";
	
	
	let ViewHistoricoCenterSaldoText = document.getElementsByClassName("ViewHistoricoCenterSaldoText_")[0];
	ViewHistoricoCenterSaldoText.style.paddingTop = ViewAbaDeHistorico_.clientHeight/60+"px";
	ViewHistoricoCenterSaldoText.style.fontSize = ViewHistoricoCenterSaldo_.clientHeight/3+"px";
	ViewHistoricoCenterSaldoText.style.width = ViewHistoricoCenterSaldo_.clientWidth/1+"px";
	ViewHistoricoCenterSaldoText.style.height = ViewHistoricoCenterSaldo_.clientHeight/2+"px";
	
	
	let SlotsDoGanho = document.getElementsByClassName("SlotsDoGanho")[0];
	SlotsDoGanho.style.height = ViewAbaDeHistorico_.clientHeight/3+"px";
	
	if(SlotsDoGanho.children.length>0){
	
	let TemplePreview = document.getElementById("TemplePreview");
	TemplePreview.style.width = SlotsDoGanho.clientWidth-SlotsDoGanho.clientWidth/10+"px";
	TemplePreview.style.height = SlotsDoGanho.clientHeight+"px";
	
	if(document.getElementById("SLOT_1").children.length>0){
	
	let S_1 = document.getElementById("SLOT_1").children[0];
	
	let S_2 = document.getElementById("SLOT_2").children[0];
	
	let S_3 = document.getElementById("SLOT_3").children[0];
	
	let S_4 = document.getElementById("SLOT_4").children[0];
	
	let S_5 = document.getElementById("SLOT_5").children[0];
	
	let S_6 = document.getElementById("SLOT_6").children[0];
	
	let S_7 = document.getElementById("SLOT_7").children[0];
	
	let S_8 = document.getElementById("SLOT_8").children[0];
	
	let S_9 = document.getElementById("SLOT_9").children[0];
	
	
	S_1.style.height=TemplePreview.clientHeight/3+"px";
	
	S_2.style.height=TemplePreview.clientHeight/3+"px";
	
	S_3.style.height=TemplePreview.clientHeight/3+"px";
	
	S_4.style.height=TemplePreview.clientHeight/3+"px";
	
	S_5.style.height=TemplePreview.clientHeight/3+"px";
	
	S_6.style.height=TemplePreview.clientHeight/3+"px";
	
	S_7.style.height=TemplePreview.clientHeight/3+"px";
	
	S_8.style.height=TemplePreview.clientHeight/3+"px";
	
	S_9.style.height=TemplePreview.clientHeight/3+"px";
	
	
	let SS_1 = S_1.children[0];
	let v1 = SS_1.innerHTML.indexOf("background-size");
	let v2 = SS_1.innerHTML.indexOf("background-image");
	
	SS_1.innerHTML = SS_1.innerHTML.replace(SS_1.innerHTML.substring(v1,v2),"background-size:"+TemplePreview.clientHeight/6+"px"+" "+TemplePreview.clientHeight/6+"px"+";"+" ");

	
	let SS_2 = S_2.children[0];
	let v1 = SS_2.innerHTML.indexOf("background-size");
	let v2 = SS_2.innerHTML.indexOf("background-image");
	
	SS_2.innerHTML = SS_2.innerHTML.replace(SS_2.innerHTML.substring(v1,v2),"background-size:"+TemplePreview.clientHeight/6+"px"+" "+TemplePreview.clientHeight/6+"px"+";"+" ");

	
	let SS_3 = S_3.children[0];
	let v1 = SS_3.innerHTML.indexOf("background-size");
	let v2 = SS_3.innerHTML.indexOf("background-image");
	
	SS_3.innerHTML = SS_3.innerHTML.replace(SS_3.innerHTML.substring(v1,v2),"background-size:"+TemplePreview.clientHeight/6+"px"+" "+TemplePreview.clientHeight/6+"px"+";"+" ");

	
	let SS_4 = S_4.children[0];
	let v1 = SS_4.innerHTML.indexOf("background-size");
	let v2 = SS_4.innerHTML.indexOf("background-image");
	
	SS_4.innerHTML = SS_4.innerHTML.replace(SS_4.innerHTML.substring(v1,v2),"background-size:"+TemplePreview.clientHeight/6+"px"+" "+TemplePreview.clientHeight/6+"px"+";"+" ");

	
	let SS_5 = S_5.children[0];
	let v1 = SS_5.innerHTML.indexOf("background-size");
	let v2 = SS_5.innerHTML.indexOf("background-image");
	
	SS_5.innerHTML = SS_5.innerHTML.replace(SS_5.innerHTML.substring(v1,v2),"background-size:"+TemplePreview.clientHeight/6+"px"+" "+TemplePreview.clientHeight/6+"px"+";"+" ");

	
	let SS_6 = S_6.children[0];
	let v1 = SS_6.innerHTML.indexOf("background-size");
	let v2 = SS_6.innerHTML.indexOf("background-image");
	
	SS_6.innerHTML = SS_6.innerHTML.replace(SS_6.innerHTML.substring(v1,v2),"background-size:"+TemplePreview.clientHeight/6+"px"+" "+TemplePreview.clientHeight/6+"px"+";"+" ");

	
	let SS_7 = S_7.children[0];
	let v1 = SS_7.innerHTML.indexOf("background-size");
	let v2 = SS_7.innerHTML.indexOf("background-image");
	
	SS_7.innerHTML = SS_7.innerHTML.replace(SS_7.innerHTML.substring(v1,v2),"background-size:"+TemplePreview.clientHeight/6+"px"+" "+TemplePreview.clientHeight/6+"px"+";"+" ");


	let SS_8 = S_8.children[0];
	let v1 = SS_8.innerHTML.indexOf("background-size");
	let v2 = SS_8.innerHTML.indexOf("background-image");
	
	SS_8.innerHTML = SS_8.innerHTML.replace(SS_8.innerHTML.substring(v1,v2),"background-size:"+TemplePreview.clientHeight/6+"px"+" "+TemplePreview.clientHeight/6+"px"+";"+" ");


	let SS_9 = S_9.children[0];
	let v1 = SS_9.innerHTML.indexOf("background-size");
	let v2 = SS_9.innerHTML.indexOf("background-image");
	
	SS_9.innerHTML = SS_9.innerHTML.replace(SS_9.innerHTML.substring(v1,v2),"background-size:"+TemplePreview.clientHeight/6+"px"+" "+TemplePreview.clientHeight/6+"px"+";"+" ");
	
	}
	
	}
	
	
	let AbaDePagamentos = document.getElementsByClassName("AbaDePagamentos")[0];
	AbaDePagamentos.style.width = VIEW_DIV_FOR_PC_WIDTH+VIEW_DIV_FOR_PC_WIDTH_INCREMENT+"px";
	AbaDePagamentos.style.height = ScreenHeight_2+"px";
	if(Opned3==false){
	AbaDePagamentos.style.transform = "translate("+AbaDePagamentos.clientWidth+"px"+","+"0"+"px)";
	}
	
	let AbaDePagamentosActionBar = document.getElementsByClassName("AbaDePagamentosActionBar")[0];
	AbaDePagamentosActionBar.style.height = AbaDePagamentos.clientHeight/10+"px";
	
	let AbaDePagamentosActionBarTitle = document.getElementsByClassName("AbaDePagamentosActionBarTitle")[0];
	AbaDePagamentosActionBarTitle.style.height = AbaDePagamentos.clientHeight/10+"px";
	AbaDePagamentosActionBarTitle.style.fontSize = AbaDePagamentos.clientHeight/40+"px";
	
	let AbaDePagamentosCenter = document.getElementsByClassName("AbaDePagamentosCenter")[0];
	AbaDePagamentosCenter.style.height = 9*AbaDePagamentos.clientHeight/10+"px";
	
	let AbaDePagamentosCenterTitle = document.getElementsByClassName("AbaDePagamentosCenterTitle")[0];
	AbaDePagamentosCenterTitle.style.fontSize = AbaDePagamentos.clientHeight/50+"px";
	
	let AbaDePagamentosCenterExplication = document.getElementsByClassName("AbaDePagamentosCenterExplication")[0];
	AbaDePagamentosCenterExplication.style.fontSize = AbaDePagamentos.clientHeight/70+"px";
	
	let AbaDePagamentosCenterTitle = document.getElementsByClassName("AbaDePagamentosCenterTitle")[1];
	AbaDePagamentosCenterTitle.style.fontSize = AbaDePagamentos.clientHeight/50+"px";
	
	let AbaDePagamentosCenterExplication = document.getElementsByClassName("AbaDePagamentosCenterExplication")[1];
	AbaDePagamentosCenterExplication.style.fontSize = AbaDePagamentos.clientHeight/70+"px";
	
	let AbaDePagamentosCenterExplication = document.getElementsByClassName("AbaDePagamentosCenterExplication")[2];
	AbaDePagamentosCenterExplication.style.fontSize = AbaDePagamentos.clientHeight/70+"px";
	
	let AbaDePagamentosCenterTitle = document.getElementsByClassName("AbaDePagamentosCenterTitle")[2];
	AbaDePagamentosCenterTitle.style.fontSize = AbaDePagamentos.clientHeight/50+"px";
	
	let AbaDePagamentosCenterExplication = document.getElementsByClassName("AbaDePagamentosCenterExplication")[3];
	AbaDePagamentosCenterExplication.style.fontSize = AbaDePagamentos.clientHeight/70+"px";
	
	let AbaDePagamentosCenterTitle = document.getElementsByClassName("AbaDePagamentosCenterTitle")[3];
	AbaDePagamentosCenterTitle.style.fontSize = AbaDePagamentos.clientHeight/50+"px";
	
	let AbaDePagamentosCenterExplication = document.getElementsByClassName("AbaDePagamentosCenterExplication")[4];
	AbaDePagamentosCenterExplication.style.fontSize = AbaDePagamentos.clientHeight/70+"px";
	
	let AbaDePagamentosCenterExplication = document.getElementsByClassName("AbaDePagamentosCenterExplication")[5];
	AbaDePagamentosCenterExplication.style.fontSize = AbaDePagamentos.clientHeight/70+"px";
	
	
	let ViewPanelMenu = document.getElementsByClassName("ViewPanelMenu")[0];
	ViewPanelMenu.style.width = DesignBottom.clientWidth+"px"; //ViewButtonFunction.clientHeight+ViewMenu.clientHeight+"px";
	ViewPanelMenu.style.height = DesignBottom.clientHeight/2+"px"; //ViewButtonFunction.clientHeight+ViewMenu.clientHeight+"px";
	ViewPanelMenu.style.top = DesignBottom.clientHeight/2+"px";
	
	
	let ViewPanelMenuIcon = document.getElementsByClassName("ViewPanelMenuIcon")[0];
	ViewPanelMenuIcon.style.height = ViewPanelMenu.clientHeight/2+"px";
	ViewPanelMenuIcon.style.paddingTop=10+"px";
	
	
	let PanelMenuButtonFunction = document.getElementsByClassName("PanelMenuButtonFunction")[0];
	PanelMenuButtonFunction.style.width = ViewPanelMenuIcon.clientHeight/1-ViewPanelMenuIcon.clientHeight/3+"px";
	PanelMenuButtonFunction.style.height = ViewPanelMenuIcon.clientHeight/1-ViewPanelMenuIcon.clientHeight/3+"px";
	
	
	let PanelMenuButtonFunction = document.getElementsByClassName("PanelMenuButtonFunction")[1];
	PanelMenuButtonFunction.style.width = ViewPanelMenuIcon.clientHeight/1-ViewPanelMenuIcon.clientHeight/3+"px";
	PanelMenuButtonFunction.style.height = ViewPanelMenuIcon.clientHeight/1-ViewPanelMenuIcon.clientHeight/3+"px";
	
	
	let PanelMenuButtonFunction = document.getElementsByClassName("PanelMenuButtonFunction")[2];
	PanelMenuButtonFunction.style.width = ViewPanelMenuIcon.clientHeight/1-ViewPanelMenuIcon.clientHeight/3+"px";
	PanelMenuButtonFunction.style.height = ViewPanelMenuIcon.clientHeight/1-ViewPanelMenuIcon.clientHeight/3+"px";
	
	
	let PanelMenuButtonFunction = document.getElementsByClassName("PanelMenuButtonFunction")[3];
	PanelMenuButtonFunction.style.width = ViewPanelMenuIcon.clientHeight/1-ViewPanelMenuIcon.clientHeight/3+"px";
	PanelMenuButtonFunction.style.height = ViewPanelMenuIcon.clientHeight/1-ViewPanelMenuIcon.clientHeight/3+"px";
	
	
	let PanelMenuButtonFunction = document.getElementsByClassName("PanelMenuButtonFunction")[4];
	PanelMenuButtonFunction.style.width = ViewPanelMenuIcon.clientHeight/1-ViewPanelMenuIcon.clientHeight/3+"px";
	PanelMenuButtonFunction.style.height = ViewPanelMenuIcon.clientHeight/1-ViewPanelMenuIcon.clientHeight/3+"px";
	
	
	let K = ViewPanelMenu.clientWidth;
	
	
	let PanelMenuButtonText = document.getElementsByClassName("PanelMenuButtonText")[0];
	PanelMenuButtonText.style.width = K/5+"px";
	PanelMenuButtonText.style.fontSize = K/40+"px";
	
	
	let PanelMenuButtonText = document.getElementsByClassName("PanelMenuButtonText")[1];
	PanelMenuButtonText.style.width = K/5+"px";
	PanelMenuButtonText.style.fontSize = K/40+"px";
	
	
	let PanelMenuButtonText = document.getElementsByClassName("PanelMenuButtonText")[2];
	PanelMenuButtonText.style.width = K/5+"px";
	PanelMenuButtonText.style.fontSize = K/40+"px";
	
	
	let PanelMenuButtonText = document.getElementsByClassName("PanelMenuButtonText")[3];
	PanelMenuButtonText.style.width = K/5+"px";
	PanelMenuButtonText.style.fontSize = K/40+"px";
	
	
	let PanelMenuButtonText = document.getElementsByClassName("PanelMenuButtonText")[4];
	PanelMenuButtonText.style.width = K/5+"px";
	PanelMenuButtonText.style.fontSize = K/40+"px";
	
	
	let ViewAnimatedFragment = document.getElementsByClassName("ViewAnimatedFragment")[0];
	ViewAnimatedFragment.style.backgroundSize="40% 80%";
	
	
	let AnimatedFragment = document.getElementsByClassName("AnimatedFragment")[0];
	AnimatedFragment.style.height=ScreenHeight_2/2+"px";
	AnimatedFragment.style.backgroundSize = "40% 80%";
	
	
	let Restart = document.getElementsByClassName("Restart")[0];
	Restart.style.height = ScreenHeight/9+"px";
	Restart.style.width = ScreenWidth/4+"px";
	Restart.style.top = ScreenHeight/2+ScreenHeight/4+"px";
	
	
	let ViewPontos = document.getElementsByClassName("ViewPontos")[0];
	ViewPontos.style.height=ScreenHeight_2/6+"px";
	ViewPontos.style.top=ScreenHeight_2/2+ScreenHeight/9+"px";
	
	
	let PONTO = document.getElementById("Ponto_1");
	PONTO.style.backgroundRepeat = "no-repeat";
	PONTO.style.backgroundPosition = "center";
	PONTO.style.width = ScreenWidth_2/20+"px";
	PONTO.style.backgroundSize = "100% 100%";
	
	
	let PONTO = document.getElementById("Ponto_2");
	PONTO.style.backgroundRepeat = "no-repeat";
	PONTO.style.backgroundPosition = "center";
	PONTO.style.width = ScreenWidth_2/20+"px";
	PONTO.style.backgroundSize = "100% 100%";
	
	
	let PONTO = document.getElementById("Ponto_3");
	PONTO.style.backgroundRepeat = "no-repeat";
	PONTO.style.backgroundPosition = "center";
	PONTO.style.width = ScreenWidth_2/20+"px";
	PONTO.style.backgroundSize = "100% 100%";
	
	
	let PONTO = document.getElementById("Ponto_4");
	PONTO.style.backgroundRepeat = "no-repeat";
	PONTO.style.backgroundPosition = "center";
	PONTO.style.width = ScreenWidth_2/20+"px";
	PONTO.style.backgroundSize = "100% 100%";
	
	
	let PONTO = document.getElementById("Ponto_5");
	PONTO.style.backgroundRepeat = "no-repeat";
	PONTO.style.backgroundPosition = "center";
	PONTO.style.width = ScreenWidth_2/20+"px";
	PONTO.style.backgroundSize = "100% 100%";
	
	
	let PONTO = document.getElementById("Ponto_6");
	PONTO.style.backgroundRepeat = "no-repeat";
	PONTO.style.backgroundPosition = "center";
	PONTO.style.width = ScreenWidth_2/20+"px";
	PONTO.style.backgroundSize = "100% 100%";
	
	
	
	let PONTO = document.getElementById("Ponto_7");
	PONTO.style.backgroundRepeat = "no-repeat";
	PONTO.style.backgroundPosition = "center";
	PONTO.style.width = ScreenWidth_2/20+"px";
	PONTO.style.backgroundSize = "100% 100%";
	
	
	let PONTO = document.getElementById("Ponto_8");
	PONTO.style.backgroundRepeat = "no-repeat";
	PONTO.style.backgroundPosition = "center";
	PONTO.style.width = ScreenWidth_2/20+"px";
	PONTO.style.backgroundSize = "100% 100%";
	
	
	let ViewErrorDialog = document.getElementsByClassName("ViewErrorDialog")[0];
	ViewErrorDialog.style.width = VIEW_DIV_FOR_PC_WIDTH+VIEW_DIV_FOR_PC_WIDTH_INCREMENT+"px";
	ViewErrorDialog.style.backgroundColor = "#FF3635AA";
	ViewErrorDialog.style.display="block";
	ViewErrorDialog.style.left = "-"+ViewErrorDialog.clientWidth+"px";
	ViewErrorDialog.style.opacity="100%";
	
	
	CreateSlots();
	
	if(SlotsDaPreviewCriado==false){
	SlotsDaPreviewCriado=true;
	}
	
	
	}
	
	},200/20);
	
	}
