let Opned = false;
function CloseDrawer(DrawerName, DrawerOpned){
	DrawerOpned=false;
	let DrawerWidth = DrawerName.clientWidth/12;
	let count1 = 0;
	let count2 = 0;
	
	var int = setInterval(function(){
	
	DrawerWidth = DrawerWidth + count1;
	
	DrawerName.style.transform = "translate("+DrawerWidth+"px"+","+"0px)";
	
	if(count1==0){
	count1=DrawerWidth;
	}
	
	count2++;
	
	if(count2>11){
	clearInterval(int);
	}
	},20);
	
}

function OpenDrawer(DrawerName,DrawerOpned){
	DrawerOpned=true;
	let ScreenWidth = document.getElementsByTagName("body")[0].clientWidth;
	let DrawerWidth = DrawerName.clientWidth;
	let count1 = 12;
	let count2 = 0;
	let Multiply = 1;
	if(screen.width>screen.height){
		Multiply = 4;
	}
	
	var int = setInterval(function(){
	ScreenWidth = ScreenWidth - Multiply*DrawerWidth/count1+1.3;
	DrawerName.style.transform = "translate("+ScreenWidth+"px"+","+"0px)";
	count2++;
	if(count2>11){
		clearInterval(int);
		DrawerName.style.transform = "translate("+0+"px"+","+"0px)";
	}
	},20);
  
  }
