let PLAYBUTTON = document.getElementsByClassName("PLAY")[0];
			
			let ROTATE_COUNT = 0;
						
			let INCREMENT_ROTATE_COUNT = 10;
						
			function RotatePlayButton(){
						
			if(NoModoTurbo){
						
			INCREMENT_ROTATE_COUNT=80;
						
			}else{
						
			INCREMENT_ROTATE_COUNT=40;
						
			}
						
			}
						
			function ResetRotatePlayButton(){
			INCREMENT_ROTATE_COUNT = 10;
			}
						
			setInterval(function(){
			ROTATE_COUNT=ROTATE_COUNT+INCREMENT_ROTATE_COUNT;
			PLAYBUTTON.style.transform = "rotate("+ROTATE_COUNT+"deg)";
			},100);
