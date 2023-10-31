  let TEMPLE_HEIGHT = 0;
  let BLOCO_HEIGHT = 0;
  let SlotsDaPreviewCriado = false;
  
      function ResizeScreen(){
	
	  setTimeout(function(){
	  UpdateScreen();
	  },200/20);
	  
	  }
	  
	function UpdateScreen(){
		
	if(window.innerHeight > window.innerWidth){
	
	let ScreenWidth = window.screen.width;
	
	
	let Menu = document.getElementsByClassName("Menu")[0];
	Menu.style.height = Menu.clientHeight/2+Menu.clientHeight/3+"px";
	Menu.style.width = Menu.clientWidth/2+Menu.clientWidth/3+"px";
	
	
	
	
	
	let ViewPanelMenuButtonFunction1 = document.getElementsByClassName("ViewPanelMenuButtonFunction")[0];
	ViewPanelMenuButtonFunction1.style.width = ScreenWidth/5;
	
	
	
	let ViewPanelMenuButtonFunction2 = document.getElementsByClassName("ViewPanelMenuButtonFunction")[1];
	ViewPanelMenuButtonFunction2.style.width = ScreenWidth/5;
	
	
	
	let ViewPanelMenuButtonFunction3 = document.getElementsByClassName("ViewPanelMenuButtonFunction")[2];
	ViewPanelMenuButtonFunction3.style.width = ScreenWidth/5;
	
	
	
	let ViewPanelMenuButtonFunction4 = document.getElementsByClassName("ViewPanelMenuButtonFunction")[3];
	ViewPanelMenuButtonFunction4.style.width = ScreenWidth/5;
	
	
	
	let ViewPanelMenuButtonFunction5 = document.getElementsByClassName("ViewPanelMenuButtonFunction")[4];
	ViewPanelMenuButtonFunction5.style.width = ScreenWidth/5;
	
	
	
	
	let PanelMenuButtonFunction1 = document.getElementsByClassName("PanelMenuButtonFunction")[0];
	PanelMenuButtonFunction1.style.width = ViewPanelMenuButtonFunction1.clientWidth/2+"px";
	
	
	let PanelMenuButtonFunction2 = document.getElementsByClassName("PanelMenuButtonFunction")[1];
	PanelMenuButtonFunction2.style.width = ViewPanelMenuButtonFunction1.clientWidth/2+"px";
	
	
	let PanelMenuButtonFunction3 = document.getElementsByClassName("PanelMenuButtonFunction")[2];
	PanelMenuButtonFunction3.style.width = ViewPanelMenuButtonFunction1.clientWidth/2+"px";
	
	
	let PanelMenuButtonFunction4 = document.getElementsByClassName("PanelMenuButtonFunction")[3];
	PanelMenuButtonFunction4.style.width = ViewPanelMenuButtonFunction1.clientWidth/2+"px";
	
	
	let PanelMenuButtonFunction5 = document.getElementsByClassName("PanelMenuButtonFunction")[4];
	PanelMenuButtonFunction5.style.width = ViewPanelMenuButtonFunction1.clientWidth/2+"px";
	
	FECHAR_ABA_DE_PAGAMENTOS();
	FECHAR_ABA_DE_HISTORICO_1();
	FECHAR_ABA_DE_HISTORICO_2();
	
	setTimeout(function(){
	
	CreateSlots();
	
	//if(!SlotsDaPreviewCriado){
	SlotsDaPreviewCriado=true;
	//}
	
	clearTimeout();
	
	},200/8);
	
	return;
	}
	
	
	function FECHAR_ABA_DE_PAGAMENTOS(){
	let AbaDePagamentos = document.getElementsByClassName("AbaDePagamentos")[0];
	if(!Opned3){
	AbaDePagamentos.style.transform = "translate("+AbaDePagamentos.clientWidth+"px"+","+"0"+"px)";
	}
	}
	
	function FECHAR_ABA_DE_HISTORICO_2(){
	let ViewAbaDeHistorico_ = document.getElementsByClassName("AbaDeHistorico_")[0];
	if(!Opned2){
	ViewAbaDeHistorico_.style.transform = "translate("+ViewAbaDeHistorico_.clientWidth+"px"+","+"0"+"px)";
	}
	}
	
	function FECHAR_ABA_DE_HISTORICO_1(){
	let ViewAbaDeHistorico = document.getElementsByClassName("AbaDeHistorico")[0];
	if(!Opned){
	ViewAbaDeHistorico.style.transform = "translate("+ViewAbaDeHistorico.clientWidth+"px"+","+"0"+"px)";
	}
	}
		
	
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
	
	let ScreenWidth = document.getElementsByTagName("Body")[0].clientWidth;
	
	let ScreenHeight_2 = document.getElementsByTagName("Body")[0].clientHeight;
	
	let ScreenWidth_2 = document.getElementsByTagName("Body")[0].clientHeight;
	
	
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
	
	
	let LIST_SPACE1 = document.getElementsByClassName("LIST_SPACE")[0];
	LIST_SPACE1.style.width = LIST_SPACE1.clientWidth/2+"px";
	
	
	let LISTA_2 = document.getElementsByClassName("LISTA_2")[0];
	LISTA_2.style.height=ScreenHeight_2/2+"px";
	LISTA_2.style.width = LISTA_1.clientWidth/2+"px";
	
	
	let LIST_SPACE2 = document.getElementsByClassName("LIST_SPACE")[1];
	LIST_SPACE2.style.width = LIST_SPACE1.clientWidth/2+"px";
	
	
	let LISTA_3 = document.getElementsByClassName("LISTA_3")[0];
	LISTA_3.style.height=ScreenHeight_2/2+"px";
	LISTA_3.style.width = LISTA_1.clientWidth/2+"px";
	
	
	BLOCO_HEIGHT = parseInt(VIEW_LISTAS.clientHeight/3);
	
	
	
	
	TEMPLE_HEIGHT = 4*Telhado.clientHeight;


 
	let DesignBottom = document.getElementsByClassName("DesignBottom")[0];
	DesignBottom.style.width=window.innerWidth/2+"px";
	DesignBottom.style.height=ScreenHeight_2/4+"px";

	
	
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
	
	
	let CardInfo1 = document.getElementsByClassName("CardInfo")[0];
	CardInfo1.style.width=ViewInformation.clientWidth/4+"px";
	CardInfo1.style.height=ViewInformation.clientHeight/2+"px";
	
	
	let CardInfo2 = document.getElementsByClassName("CardInfo")[1];
	CardInfo2.style.width=ViewInformation.clientWidth/4+"px";
	CardInfo2.style.height=ViewInformation.clientHeight/2+"px";
	
	
	let CardInfo3 = document.getElementsByClassName("CardInfo")[2];
	CardInfo3.style.width=ViewInformation.clientWidth/4+"px";
	CardInfo3.style.height=ViewInformation.clientHeight/2+"px";
	
	
	let CardInfoIcon1 = document.getElementsByClassName("CardInfoIcon")[0];
	CardInfoIcon1.style.width = CardInfo1.clientWidth/10+"px";
	CardInfoIcon1.style.height = CardInfo1.clientHeight/2+"px";
	CardInfoIcon1.style.backgroundSize = CardInfo1.clientWidth/10+"px";
	
	
	let CardInfoIcon2 = document.getElementsByClassName("CardInfoIcon")[1];
	CardInfoIcon2.style.width = CardInfo2.clientWidth/10+"px";
	CardInfoIcon2.style.height = CardInfo2.clientHeight/2+"px";
	CardInfoIcon2.style.backgroundSize = CardInfo2.clientWidth/10+"px";
	
	
	let CardInfoIcon3 = document.getElementsByClassName("CardInfoIcon")[2];
	CardInfoIcon3.style.width = CardInfo3.clientWidth/10+"px";
	CardInfoIcon3.style.height = CardInfo3.clientHeight/2+"px";
	CardInfoIcon3.style.backgroundSize = CardInfo3.clientWidth/10+"px";
	
	
	let CardInfoValor1 = document.getElementsByClassName("CardInfoValor")[0];
	CardInfoValor1.style.width = CardInfo1.clientWidth/1+"px";
	CardInfoValor1.style.height = CardInfo1.clientHeight/1+"px";
	CardInfoValor1.style.fontSize = CardInfo1.clientHeight/2+"px";
	
	
	let CardInfoValor2 = document.getElementsByClassName("CardInfoValor")[1];
	CardInfoValor2.style.width = CardInfo2.clientWidth/1+"px";
	CardInfoValor2.style.height = CardInfo2.clientHeight/1+"px";
	CardInfoValor2.style.fontSize = CardInfo2.clientHeight/2+"px";
	
	
	let CardInfoValor3 = document.getElementsByClassName("CardInfoValor")[2];
	CardInfoValor3.style.width = CardInfo3.clientWidth/1+"px";
	CardInfoValor3.style.height = CardInfo3.clientHeight/1+"px";
	CardInfoValor3.style.fontSize = CardInfo3.clientHeight/2+"px";
	
	
	let ViewViewButtonFunction = document.getElementsByClassName("ViewViewButtonFunction")[0];
	ViewViewButtonFunction.style.width = DesignBottom.clientWidth+"px";
	ViewViewButtonFunction.style.height = DesignBottom.clientHeight/2+"px";
	
	
	let ViewButtonFunction = document.getElementsByClassName("ViewButtonFunction")[0];
	ViewButtonFunction.style.width = DesignBottom.clientWidth+"px";
	ViewButtonFunction.style.height = DesignBottom.clientHeight/4+"px";
	
	
	let ButtonFunction1 = document.getElementsByClassName("ButtonFunction")[0];
	ButtonFunction1.style.width = ViewButtonFunction.clientWidth/5+"px";
	ButtonFunction1.style.height = ViewButtonFunction.clientHeight/1+"px";
	ButtonFunction1.style.backgroundSize = ViewButtonFunction.clientHeight/1+"px";
	
	
	let ButtonFunction2 = document.getElementsByClassName("ButtonFunction")[1];
	ButtonFunction2.style.width = ViewButtonFunction.clientWidth/5+"px";
	ButtonFunction2.style.height = ViewButtonFunction.clientHeight/1+"px";
	ButtonFunction2.style.backgroundSize = ViewButtonFunction.clientHeight/1+"px";
	
	
	let Play = document.getElementsByClassName("PLAY")[0];
	Play.style.width = ViewButtonFunction.clientWidth/5+"px";
	Play.style.height = ViewButtonFunction.clientHeight+"px";
	Play.style.backgroundSize = ViewButtonFunction.clientHeight/1+ViewButtonFunction.clientHeight/5+"px";
	
	
	let ButtonFunction3 = document.getElementsByClassName("ButtonFunction")[2];
	ButtonFunction3.style.width = ViewButtonFunction.clientWidth/5+"px";
	ButtonFunction3.style.height = ViewButtonFunction.clientHeight/1+"px";
	ButtonFunction3.style.backgroundSize = ViewButtonFunction.clientHeight/1+"px";
	
	
	let ButtonFunction4 = document.getElementsByClassName("ButtonFunction")[3];
	ButtonFunction4.style.width = ViewButtonFunction.clientWidth/5+"px";
	ButtonFunction4.style.height = ViewButtonFunction.clientHeight/1+"px";
	ButtonFunction4.style.backgroundSize = ViewButtonFunction.clientHeight/1+"px";
	
	
	let ViewMenu = document.getElementsByClassName("ViewMenu")[0];
	ViewMenu.style.height = DesignBottom.clientHeight/4+"px";
	
	
	let Menu = document.getElementsByClassName("Menu")[0];
	Menu.style.height = ButtonFunction1.clientHeight/2;
	Menu.style.width = ButtonFunction1.clientWidth/2;
	Menu.style.backgroundSize = ButtonFunction1.clientWidth/4+"px";
	
	
	
	
	let WIDTH = document.getElementsByClassName("VIEW_LISTAS")[0].clientWidth;
	
	
	LISTA_1.style.left = 0+"px";
	LISTA_1.style.width = WIDTH/5+WIDTH/40+"px";
	
	
	LISTA_2.style.left = 0+"px";
	LISTA_2.style.width = WIDTH/5+WIDTH/40+"px";
	
	
	LISTA_3.style.left = 0+"px";
	LISTA_3.style.width = WIDTH/5+WIDTH/40+"px";
	
	
	LIST_SPACE1.style.width=WIDTH/12+"px";
	
	
	LIST_SPACE2.style.width=WIDTH/12+"px";
	
	
	let VIEW_LISTAS_POSITION = 1*VIEW_LISTAS.clientHeight+"px";
	
	
	document.getElementsByClassName("LISTA_1")[0].style.marginTop=VIEW_LISTAS_POSITION;
	document.getElementsByClassName("LISTA_2")[0].style.marginTop=VIEW_LISTAS_POSITION;
	document.getElementsByClassName("LISTA_3")[0].style.marginTop=VIEW_LISTAS_POSITION;
	
	
	
	
	let i1 = 0;
	let b1 = LISTA_1.children.length;
	while(i1<b1){
		
	let SLOT = LISTA_1.children[i1];
	
	SLOT.style.height = VIEW_LISTAS.clientHeight/3+"px";
	
	let v1 = SLOT.innerHTML.indexOf("background-size");
	let v2 = SLOT.innerHTML.indexOf("background-image");
	
	SLOT.innerHTML = SLOT.innerHTML.replace(SLOT.innerHTML.substring(v1,v2),"background-size:"+VIEW_LISTAS.clientHeight/3+"px"+" "+VIEW_LISTAS.clientHeight/3+"px"+";"+" ");

	i1++;
	}
	
	
	
	
	
	
	
	let i2 = 0;
	let b2 = LISTA_2.children.length;
	while(i2<b2){
		
	let SLOT = LISTA_2.children[i2];
	
	SLOT.style.height = VIEW_LISTAS.clientHeight/3+"px";
	
	let v1 = SLOT.innerHTML.indexOf("background-size");
	let v2 = SLOT.innerHTML.indexOf("background-image");
	
	SLOT.innerHTML = SLOT.innerHTML.replace(SLOT.innerHTML.substring(v1,v2),"background-size:"+VIEW_LISTAS.clientHeight/3+"px"+" "+VIEW_LISTAS.clientHeight/3+"px"+";"+" ");

	i2++;
	}
	
	
	
	
	
	
	
	let i3 = 0;
	let b3 = LISTA_3.children.length;
	while(i3<b3){
	let SLOT = LISTA_3.children[i3];
	
	SLOT.style.height = VIEW_LISTAS.clientHeight/3+"px";
	
	let v1 = SLOT.innerHTML.indexOf("background-size");
	let v2 = SLOT.innerHTML.indexOf("background-image");
	
	SLOT.innerHTML = SLOT.innerHTML.replace(SLOT.innerHTML.substring(v1,v2),"background-size:"+VIEW_LISTAS.clientHeight/3+"px"+" "+VIEW_LISTAS.clientHeight/3+"px"+";"+" ");

	i3++;
	}
	
	
	
	
	
	
	
	let BODY_WIDTH = document.getElementsByTagName("body")[0].clientWidth;
	
	let VIEW_DIV_FOR_PC_WIDTH = BODY_WIDTH/4;

	let VIEW_DIV_FOR_PC_WIDTH_INCREMENT = VIEW_DIV_FOR_PC_WIDTH/40;
	
	let VIEW_DIV_FOR_PC_WIDTH_INCREMENT_IN_INVALID_SPACE = VIEW_DIV_FOR_PC_WIDTH/40;
	
	
	let ViewDivForPc1 = document.getElementsByClassName("ViewDivForPc")[0];
	ViewDivForPc1.style.display="block";
	ViewDivForPc1.style.width = VIEW_DIV_FOR_PC_WIDTH+VIEW_DIV_FOR_PC_WIDTH_INCREMENT+"px";
	ViewDivForPc1.style.backgroundImage = "url(image/right_bg.png)";
	ViewDivForPc1.style.marginLeft = 0+"px";
	

	let ViewDivForPc2 = document.getElementsByClassName("ViewDivForPc")[1];
	ViewDivForPc2.style.display="block";
	ViewDivForPc2.style.width = VIEW_DIV_FOR_PC_WIDTH+VIEW_DIV_FOR_PC_WIDTH_INCREMENT+"px";
	ViewDivForPc2.style.backgroundImage = "url(image/left_bg.png)";
	ViewDivForPc2.style.marginLeft = BODY_WIDTH+VIEW_DIV_FOR_PC_WIDTH_INCREMENT_IN_INVALID_SPACE-VIEW_DIV_FOR_PC_WIDTH+"px";
	
	
	
	
	let ViewAbaDeHistorico = document.getElementsByClassName("AbaDeHistorico")[0];
	ViewAbaDeHistorico.style.display="block";
	ViewAbaDeHistorico.style.width = VIEW_DIV_FOR_PC_WIDTH+VIEW_DIV_FOR_PC_WIDTH_INCREMENT+"px";
	
	
	FECHAR_ABA_DE_HISTORICO_1();
	
	
	
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
	
	
	let ViewHistoricoTop2ListName1 = document.getElementsByClassName("ViewHistoricoTop2ListName")[0];
	ViewHistoricoTop2ListName1.style.fontSize = ViewHistoricoTop2.clientHeight/3+"px";
	
	
	let ViewHistoricoTop2ListName2 = document.getElementsByClassName("ViewHistoricoTop2ListName")[1];
	ViewHistoricoTop2ListName2.style.fontSize = ViewHistoricoTop2.clientHeight/3+"px";
	
	
	let ViewHistoricoTop2ListName3 = document.getElementsByClassName("ViewHistoricoTop2ListName")[2];
	ViewHistoricoTop2ListName3.style.fontSize = ViewHistoricoTop2.clientHeight/3+"px";
	
	
	let ViewHistoricoCenter = document.getElementsByClassName("ViewHistoricoCenter")[0];
	ViewHistoricoCenter.style.height = ViewAbaDeHistorico.clientHeight/2+ViewAbaDeHistorico.clientHeight/6+"px";
	
	
	let ViewHistoricoCenterHorario = document.getElementsByClassName("ViewHistoricoCenterHorario")[0];
	
	let ViewHistoricoCenterAposta = document.getElementsByClassName("ViewHistoricoCenterAposta")[0];
	
	let ViewHistoricoCenterLucro = document.getElementsByClassName("ViewHistoricoCenterLucro")[0];
	
	
	
	let i = 0;
	let b = ViewHistoricoCenterLucro.children.length;
	while(i<b){
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
	
	i++;
	
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
	
	//alert("C");
	FECHAR_ABA_DE_HISTORICO_2();
	//alert("D");
	
	
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
	
	
	let ViewHistoricoTop_ListName_1 = document.getElementsByClassName("ViewHistoricoTop_ListName_")[0];
	ViewHistoricoTop_ListName_1.style.fontSize = ViewHistoricoTop2_.clientHeight/3+"px";
	
	
	let ViewHistoricoTop_ListName_2 = document.getElementsByClassName("ViewHistoricoTop_ListName_")[1];
	ViewHistoricoTop_ListName_2.style.fontSize = ViewHistoricoTop2_.clientHeight/3+"px";
	
	
	let ViewHistoricoTop_ListName_3 = document.getElementsByClassName("ViewHistoricoTop_ListName_")[2];
	ViewHistoricoTop_ListName_3.style.fontSize = ViewHistoricoTop2_.clientHeight/3+"px";
	
	
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
	
	
	if(SlotsDoGanho.children.length>0&&document.getElementById("SLOT_1").children.length>0){
	
	let TemplePreview = document.getElementById("TemplePreview");
	TemplePreview.style.width = SlotsDoGanho.clientWidth-SlotsDoGanho.clientWidth/10+"px";
	TemplePreview.style.height = SlotsDoGanho.clientHeight+"px";
	
	
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
	
	
	SS_2.innerHTML = SS_2.innerHTML.replace(SS_2.innerHTML.substring(v1,v2),"background-size:"+TemplePreview.clientHeight/6+"px"+" "+TemplePreview.clientHeight/6+"px"+";"+" ");

	
	let SS_3 = S_3.children[0];
	
	
	SS_3.innerHTML = SS_3.innerHTML.replace(SS_3.innerHTML.substring(v1,v2),"background-size:"+TemplePreview.clientHeight/6+"px"+" "+TemplePreview.clientHeight/6+"px"+";"+" ");

	
	let SS_4 = S_4.children[0];
	
	
	SS_4.innerHTML = SS_4.innerHTML.replace(SS_4.innerHTML.substring(v1,v2),"background-size:"+TemplePreview.clientHeight/6+"px"+" "+TemplePreview.clientHeight/6+"px"+";"+" ");

	
	let SS_5 = S_5.children[0];
	
	
	SS_5.innerHTML = SS_5.innerHTML.replace(SS_5.innerHTML.substring(v1,v2),"background-size:"+TemplePreview.clientHeight/6+"px"+" "+TemplePreview.clientHeight/6+"px"+";"+" ");

	
	let SS_6 = S_6.children[0];
	
	
	SS_6.innerHTML = SS_6.innerHTML.replace(SS_6.innerHTML.substring(v1,v2),"background-size:"+TemplePreview.clientHeight/6+"px"+" "+TemplePreview.clientHeight/6+"px"+";"+" ");

	
	let SS_7 = S_7.children[0];
	
	
	SS_7.innerHTML = SS_7.innerHTML.replace(SS_7.innerHTML.substring(v1,v2),"background-size:"+TemplePreview.clientHeight/6+"px"+" "+TemplePreview.clientHeight/6+"px"+";"+" ");


	let SS_8 = S_8.children[0];
	
	
	SS_8.innerHTML = SS_8.innerHTML.replace(SS_8.innerHTML.substring(v1,v2),"background-size:"+TemplePreview.clientHeight/6+"px"+" "+TemplePreview.clientHeight/6+"px"+";"+" ");


	let SS_9 = S_9.children[0];
	
	
	SS_9.innerHTML = SS_9.innerHTML.replace(SS_9.innerHTML.substring(v1,v2),"background-size:"+TemplePreview.clientHeight/6+"px"+" "+TemplePreview.clientHeight/6+"px"+";"+" ");
	
	
	
	}
	
	
	let AbaDePagamentos = document.getElementsByClassName("AbaDePagamentos")[0];
	AbaDePagamentos.style.width = VIEW_DIV_FOR_PC_WIDTH+VIEW_DIV_FOR_PC_WIDTH_INCREMENT+"px";
	AbaDePagamentos.style.height = ScreenHeight_2+"px";
	
	FECHAR_ABA_DE_PAGAMENTOS();
	
	
	let AbaDePagamentosActionBar = document.getElementsByClassName("AbaDePagamentosActionBar")[0];
	AbaDePagamentosActionBar.style.height = AbaDePagamentos.clientHeight/10+"px";
	
	let AbaDePagamentosActionBarTitle = document.getElementsByClassName("AbaDePagamentosActionBarTitle")[0];
	AbaDePagamentosActionBarTitle.style.height = AbaDePagamentos.clientHeight/10+"px";
	AbaDePagamentosActionBarTitle.style.fontSize = AbaDePagamentos.clientHeight/40+"px";
	
	let AbaDePagamentosCenter = document.getElementsByClassName("AbaDePagamentosCenter")[0];
	AbaDePagamentosCenter.style.height = 9*AbaDePagamentos.clientHeight/10+"px";
	
	let AbaDePagamentosCenterTitle1 = document.getElementsByClassName("AbaDePagamentosCenterTitle")[0];
	AbaDePagamentosCenterTitle1.style.fontSize = AbaDePagamentos.clientHeight/50+"px";
	
	let AbaDePagamentosCenterExplication1 = document.getElementsByClassName("AbaDePagamentosCenterExplication")[0];
	AbaDePagamentosCenterExplication1.style.fontSize = AbaDePagamentos.clientHeight/70+"px";
	
	let AbaDePagamentosCenterTitle2 = document.getElementsByClassName("AbaDePagamentosCenterTitle")[1];
	AbaDePagamentosCenterTitle2.style.fontSize = AbaDePagamentos.clientHeight/50+"px";
	
	let AbaDePagamentosCenterExplication2 = document.getElementsByClassName("AbaDePagamentosCenterExplication")[1];
	AbaDePagamentosCenterExplication2.style.fontSize = AbaDePagamentos.clientHeight/70+"px";
	
	let AbaDePagamentosCenterExplication3 = document.getElementsByClassName("AbaDePagamentosCenterExplication")[2];
	AbaDePagamentosCenterExplication3.style.fontSize = AbaDePagamentos.clientHeight/70+"px";
	
	let AbaDePagamentosCenterTitle3 = document.getElementsByClassName("AbaDePagamentosCenterTitle")[2];
	AbaDePagamentosCenterTitle3.style.fontSize = AbaDePagamentos.clientHeight/50+"px";
	
	let AbaDePagamentosCenterExplication4 = document.getElementsByClassName("AbaDePagamentosCenterExplication")[3];
	AbaDePagamentosCenterExplication4.style.fontSize = AbaDePagamentos.clientHeight/70+"px";
	
	let AbaDePagamentosCenterTitle4 = document.getElementsByClassName("AbaDePagamentosCenterTitle")[3];
	AbaDePagamentosCenterTitle4.style.fontSize = AbaDePagamentos.clientHeight/50+"px";
	
	let AbaDePagamentosCenterExplication5 = document.getElementsByClassName("AbaDePagamentosCenterExplication")[4];
	AbaDePagamentosCenterExplication5.style.fontSize = AbaDePagamentos.clientHeight/70+"px";
	
	let AbaDePagamentosCenterExplication6 = document.getElementsByClassName("AbaDePagamentosCenterExplication")[5];
	AbaDePagamentosCenterExplication6.style.fontSize = AbaDePagamentos.clientHeight/70+"px";
	
	
	let ViewPanelMenu = document.getElementsByClassName("ViewPanelMenu")[0];
	ViewPanelMenu.style.width = DesignBottom.clientWidth+"px";
	ViewPanelMenu.style.height = DesignBottom.clientHeight/2+"px";
	ViewPanelMenu.style.top = DesignBottom.clientHeight/2+"px";
	
	
	let ViewPanelMenuIcon = document.getElementsByClassName("ViewPanelMenuIcon")[0];
	ViewPanelMenuIcon.style.height = ViewPanelMenu.clientHeight/2+"px";
	ViewPanelMenuIcon.style.paddingTop=10+"px";
	
	
	let PanelMenuButtonFunction1 = document.getElementsByClassName("PanelMenuButtonFunction")[0];
	PanelMenuButtonFunction1.style.width = ViewPanelMenuIcon.clientHeight/1-ViewPanelMenuIcon.clientHeight/3+"px";
	PanelMenuButtonFunction1.style.height = ViewPanelMenuIcon.clientHeight/1-ViewPanelMenuIcon.clientHeight/3+"px";
	
	
	let PanelMenuButtonFunction2 = document.getElementsByClassName("PanelMenuButtonFunction")[1];
	PanelMenuButtonFunction2.style.width = ViewPanelMenuIcon.clientHeight/1-ViewPanelMenuIcon.clientHeight/3+"px";
	PanelMenuButtonFunction2.style.height = ViewPanelMenuIcon.clientHeight/1-ViewPanelMenuIcon.clientHeight/3+"px";
	
	
	let PanelMenuButtonFunction3 = document.getElementsByClassName("PanelMenuButtonFunction")[2];
	PanelMenuButtonFunction3.style.width = ViewPanelMenuIcon.clientHeight/1-ViewPanelMenuIcon.clientHeight/3+"px";
	PanelMenuButtonFunction3.style.height = ViewPanelMenuIcon.clientHeight/1-ViewPanelMenuIcon.clientHeight/3+"px";
	
	
	let PanelMenuButtonFunction4 = document.getElementsByClassName("PanelMenuButtonFunction")[3];
	PanelMenuButtonFunction4.style.width = ViewPanelMenuIcon.clientHeight/1-ViewPanelMenuIcon.clientHeight/3+"px";
	PanelMenuButtonFunction4.style.height = ViewPanelMenuIcon.clientHeight/1-ViewPanelMenuIcon.clientHeight/3+"px";
	
	
	let PanelMenuButtonFunction5 = document.getElementsByClassName("PanelMenuButtonFunction")[4];
	PanelMenuButtonFunction5.style.width = ViewPanelMenuIcon.clientHeight/1-ViewPanelMenuIcon.clientHeight/3+"px";
	PanelMenuButtonFunction5.style.height = ViewPanelMenuIcon.clientHeight/1-ViewPanelMenuIcon.clientHeight/3+"px";
	
	
	let K = ViewPanelMenu.clientWidth;
	
	
	let PanelMenuButtonText1 = document.getElementsByClassName("PanelMenuButtonText")[0];
	PanelMenuButtonText1.style.width = K/5+"px";
	PanelMenuButtonText1.style.fontSize = K/40+"px";
	
	
	let PanelMenuButtonText2 = document.getElementsByClassName("PanelMenuButtonText")[1];
	PanelMenuButtonText2.style.width = K/5+"px";
	PanelMenuButtonText2.style.fontSize = K/40+"px";
	
	
	let PanelMenuButtonText3 = document.getElementsByClassName("PanelMenuButtonText")[2];
	PanelMenuButtonText3.style.width = K/5+"px";
	PanelMenuButtonText3.style.fontSize = K/40+"px";
	
	
	let PanelMenuButtonText4 = document.getElementsByClassName("PanelMenuButtonText")[3];
	PanelMenuButtonText4.style.width = K/5+"px";
	PanelMenuButtonText4.style.fontSize = K/40+"px";
	
	
	let PanelMenuButtonText5 = document.getElementsByClassName("PanelMenuButtonText")[4];
	PanelMenuButtonText5.style.width = K/5+"px";
	PanelMenuButtonText5.style.fontSize = K/40+"px";
	
	
	let ViewAnimatedFragment1 = document.getElementsByClassName("ViewAnimatedFragment")[0];
	ViewAnimatedFragment1.style.backgroundSize="40% 80%";
	
	
	let AnimatedFragment2 = document.getElementsByClassName("AnimatedFragment")[0];
	AnimatedFragment2.style.height=ScreenHeight_2/2+"px";
	AnimatedFragment2.style.backgroundSize = "40% 80%";
	
	
	let Restart = document.getElementsByClassName("Restart")[0];
	Restart.style.height = ScreenHeight/9+"px";
	Restart.style.width = ScreenWidth/4+"px";
	Restart.style.top = ScreenHeight/2+ScreenHeight/4+"px";
	
	
	let ViewPontos = document.getElementsByClassName("ViewPontos")[0];
	ViewPontos.style.height=ScreenHeight_2/6+"px";
	ViewPontos.style.top=ScreenHeight_2/2+ScreenHeight/9+"px";
	
	
	let PONTO1 = document.getElementById("Ponto_1");
	PONTO1.style.backgroundRepeat = "no-repeat";
	PONTO1.style.backgroundPosition = "center";
	PONTO1.style.width = ScreenWidth_2/20+"px";
	PONTO1.style.backgroundSize = "100% 100%";
	
	
	let PONTO2 = document.getElementById("Ponto_2");
	PONTO2.style.backgroundRepeat = "no-repeat";
	PONTO2.style.backgroundPosition = "center";
	PONTO2.style.width = ScreenWidth_2/20+"px";
	PONTO2.style.backgroundSize = "100% 100%";
	
	
	let PONTO3 = document.getElementById("Ponto_3");
	PONTO3.style.backgroundRepeat = "no-repeat";
	PONTO3.style.backgroundPosition = "center";
	PONTO3.style.width = ScreenWidth_2/20+"px";
	PONTO3.style.backgroundSize = "100% 100%";
	
	
	let PONTO4 = document.getElementById("Ponto_4");
	PONTO4.style.backgroundRepeat = "no-repeat";
	PONTO4.style.backgroundPosition = "center";
	PONTO4.style.width = ScreenWidth_2/20+"px";
	PONTO4.style.backgroundSize = "100% 100%";
	
	
	let PONTO5 = document.getElementById("Ponto_5");
	PONTO5.style.backgroundRepeat = "no-repeat";
	PONTO5.style.backgroundPosition = "center";
	PONTO5.style.width = ScreenWidth_2/20+"px";
	PONTO5.style.backgroundSize = "100% 100%";
	
	
	let PONTO6 = document.getElementById("Ponto_6");
	PONTO6.style.backgroundRepeat = "no-repeat";
	PONTO6.style.backgroundPosition = "center";
	PONTO6.style.width = ScreenWidth_2/20+"px";
	PONTO6.style.backgroundSize = "100% 100%";
	
	
	
	let PONTO7 = document.getElementById("Ponto_7");
	PONTO7.style.backgroundRepeat = "no-repeat";
	PONTO7.style.backgroundPosition = "center";
	PONTO7.style.width = ScreenWidth_2/20+"px";
	PONTO7.style.backgroundSize = "100% 100%";
	
	
	let PONTO8 = document.getElementById("Ponto_8");
	PONTO8.style.backgroundRepeat = "no-repeat";
	PONTO8.style.backgroundPosition = "center";
	PONTO8.style.width = ScreenWidth_2/20+"px";
	PONTO8.style.backgroundSize = "100% 100%";
	
	
	let ViewErrorDialog = document.getElementsByClassName("ViewErrorDialog")[0];
	ViewErrorDialog.style.width = VIEW_DIV_FOR_PC_WIDTH+VIEW_DIV_FOR_PC_WIDTH_INCREMENT+"px";
	ViewErrorDialog.style.backgroundColor = "#FF3635AA";
	ViewErrorDialog.style.display="block";
	ViewErrorDialog.style.left = "-"+ViewErrorDialog.clientWidth+"px";
	ViewErrorDialog.style.opacity="100%";
	
	
	CreateSlots();
	
	if(!SlotsDaPreviewCriado){
	SlotsDaPreviewCriado=true;
	}
	
	
	
	
	
	
	}
