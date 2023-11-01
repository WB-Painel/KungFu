function ShowErrorDialog(ImageName){
				
				let ViewErrorDialog = document.getElementsByClassName("ViewErrorDialog")[0];
				
				let i = -ViewErrorDialog.clientWidth;
				
				ViewErrorDialog.style.display="block";
				
				//PC
				if(window.screen.width>window.screen.height){
				
				let Interval = setInterval(function(){
				
				if(!0>i){
				
				i=i+10;
				
				ViewErrorDialog.style.left=i+"px";
				
				}else{
				
				ViewErrorDialog.style.left=0+"px";
				
				clearInterval(Interval);
				
				}
				
				},10);
				
				}
				
				ViewErrorDialog.style.display="block";
				
				ViewErrorDialog.onclick = function(){
				
				};
				
				let ErrorDialogMessage = document.getElementsByClassName("ErrorDialogMessage")[0];
				ErrorDialogMessage.style.backgroundImage="url(image/"+ImageName+".png)";
				
				let ErrorDialogButtonRecarregar = document.getElementsByClassName("ErrorDialogButtonRecarregar")[0];
				//ErrorDialogButtonRecarregar.style.backgroundColor="red";
				ErrorDialogButtonRecarregar.onclick = function(){
				
				if(window.screen.width>window.screen.height){
				
				let Interval = setInterval(function(){
				
				if(i>-ViewErrorDialog.clientWidth){
				
				i=i-10;
				
				ViewErrorDialog.style.left=i+"px";
				
				}else{
				
				
				ViewErrorDialog.style.left=-ViewErrorDialog.clientWidth+"px";
				
				clearInterval(Interval);
				
				}
				
				},10);
				
				}else{
				
				ViewErrorDialog.style.display="none";
				//ViewErrorDialog.style.left=-ViewErrorDialog.clientWidth+"px";
				
				}
				
				};
				
				}
