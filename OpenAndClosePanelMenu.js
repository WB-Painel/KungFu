let PanelMenuWidth = 0;
						  
			let PanelMenuAberto = false;
						  
			let ViewPanelMenu = document.getElementsByClassName("ViewPanelMenu")[0];
						  
			PanelMenuWidth = ViewPanelMenu.clientWidth;
						  
function OpenAndClosePanelMenu(){
			if(!PanelMenuAberto){
			let OpenPanelMenuInterval = setInterval(function(){
			if(PanelMenuWidth > 0){
			PanelMenuWidth = PanelMenuWidth-10;
			ViewPanelMenu.style.transform = "translate("+PanelMenuWidth+"px,0px)";
			}else{
			PanelMenuAberto=true;
			ViewPanelMenu.style.transform = "translate("+0+"px,0px)";
			clearInterval(OpenPanelMenuInterval);
			}
			},1);
			return;
			}
							
			if(PanelMenuAberto){
			var OpenPanelMenuInterval = setInterval(function(){
			if(PanelMenuWidth < ViewPanelMenu.clientWidth){
			PanelMenuWidth = PanelMenuWidth+10;
			ViewPanelMenu.style.transform = "translate("+PanelMenuWidth+"px,0px)";
			}else{
			PanelMenuAberto=false;
			ViewPanelMenu.style.transform = "translate("+100+"%,0px)";
			clearInterval(OpenPanelMenuInterval);
			}
			},1);
			}
			
			}
