let int = 0;
					  
			let NotificationMessage = document.getElementsByClassName("NotificationMessage")[0];
					  
			TranslateNotificationMessage();
					  
			function TranslateNotificationMessage(){
					  
			let NotificationMessageInterval = setInterval(function(){
					  
			if(int!=-NotificationMessage.clientWidth){
					  
			NotificationMessage.style.transform = "translate("+int--+"px,0px";
					  
			}else{
					  
			clearInterval(NotificationMessageInterval);
					  
			NotificationMessage.style.transform = "translate(0px,0px)";
					  
			int = 0;
					  
			TranslateNotificationMessage();
					  
			}
					  
			},10);
					  
			}
