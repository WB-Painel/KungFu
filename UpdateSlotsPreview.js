function SetSlots(SLOT_1,SLOT_2,SLOT_3,SLOT_4,SLOT_5,SLOT_6,SLOT_7,SLOT_8,SLOT_9){
	
	document.getElementsByClassName("AbaDeHistoricoCarregamento_")[0].style.visibility="visible";
	
	teste2(document.getElementsByClassName("AbaDeHistorico_")[0],true,Opned2);
						
	setTimeout(function(){
	document.getElementsByClassName("AbaDeHistoricoCarregamento_")[0].style.visibility="hidden";
	clearTimeout();
	},1000);
	
	let S_1 = document.getElementById("SLOT_1");
	let S_2 = document.getElementById("SLOT_2");
	let S_3 = document.getElementById("SLOT_3");
	let S_4 = document.getElementById("SLOT_4");
	let S_5 = document.getElementById("SLOT_5");
	let S_6 = document.getElementById("SLOT_6");
	let S_7 = document.getElementById("SLOT_7");
	let S_8 = document.getElementById("SLOT_8");
	let S_9 = document.getElementById("SLOT_9");
	
	
	S_1.innerHTML="";
	S_2.innerHTML="";
	S_3.innerHTML="";
	S_4.innerHTML="";
	S_5.innerHTML="";
	S_6.innerHTML="";
	S_7.innerHTML="";
	S_8.innerHTML="";
	S_9.innerHTML="";
	
	
	let SLOT_CLONE_1 = SLOT_1.cloneNode(true);
	let SLOT_CLONE_2 = SLOT_2.cloneNode(true);
	let SLOT_CLONE_3 = SLOT_3.cloneNode(true);
	let SLOT_CLONE_4 = SLOT_4.cloneNode(true);
	let SLOT_CLONE_5 = SLOT_5.cloneNode(true);
	let SLOT_CLONE_6 = SLOT_6.cloneNode(true);
	let SLOT_CLONE_7 = SLOT_7.cloneNode(true);
	let SLOT_CLONE_8 = SLOT_8.cloneNode(true);
	let SLOT_CLONE_9 = SLOT_9.cloneNode(true);
	
	
	let v1 = SLOT_CLONE_1.children[0].innerHTML.indexOf("background-size");
	let v2 = SLOT_CLONE_1.children[0].innerHTML.indexOf("background-image");
	
	
	SLOT_CLONE_1.children[0].innerHTML = SLOT_CLONE_1.children[0].innerHTML.replace(SLOT_CLONE_1.children[0].innerHTML.substring(v1,v2),"background-size:"+2*S_1.clientHeight/3+"px"+" "+2*S_1.clientHeight/3+"px"+";"+" ");
	SLOT_CLONE_2.children[0].innerHTML = SLOT_CLONE_2.children[0].innerHTML.replace(SLOT_CLONE_2.children[0].innerHTML.substring(v1,v2),"background-size:"+2*S_1.clientHeight/3+"px"+" "+2*S_1.clientHeight/3+"px"+";"+" ");
	SLOT_CLONE_3.children[0].innerHTML = SLOT_CLONE_3.children[0].innerHTML.replace(SLOT_CLONE_3.children[0].innerHTML.substring(v1,v2),"background-size:"+2*S_1.clientHeight/3+"px"+" "+2*S_1.clientHeight/3+"px"+";"+" ");
	SLOT_CLONE_4.children[0].innerHTML = SLOT_CLONE_4.children[0].innerHTML.replace(SLOT_CLONE_4.children[0].innerHTML.substring(v1,v2),"background-size:"+2*S_1.clientHeight/3+"px"+" "+2*S_1.clientHeight/3+"px"+";"+" ");
	SLOT_CLONE_5.children[0].innerHTML = SLOT_CLONE_5.children[0].innerHTML.replace(SLOT_CLONE_5.children[0].innerHTML.substring(v1,v2),"background-size:"+2*S_1.clientHeight/3+"px"+" "+2*S_1.clientHeight/3+"px"+";"+" ");
	SLOT_CLONE_6.children[0].innerHTML = SLOT_CLONE_6.children[0].innerHTML.replace(SLOT_CLONE_6.children[0].innerHTML.substring(v1,v2),"background-size:"+2*S_1.clientHeight/3+"px"+" "+2*S_1.clientHeight/3+"px"+";"+" ");
	SLOT_CLONE_7.children[0].innerHTML = SLOT_CLONE_7.children[0].innerHTML.replace(SLOT_CLONE_7.children[0].innerHTML.substring(v1,v2),"background-size:"+2*S_1.clientHeight/3+"px"+" "+2*S_1.clientHeight/3+"px"+";"+" ");
	SLOT_CLONE_8.children[0].innerHTML = SLOT_CLONE_8.children[0].innerHTML.replace(SLOT_CLONE_8.children[0].innerHTML.substring(v1,v2),"background-size:"+2*S_1.clientHeight/3+"px"+" "+2*S_1.clientHeight/3+"px"+";"+" ");
	SLOT_CLONE_9.children[0].innerHTML = SLOT_CLONE_9.children[0].innerHTML.replace(SLOT_CLONE_9.children[0].innerHTML.substring(v1,v2),"background-size:"+2*S_1.clientHeight/3+"px"+" "+2*S_1.clientHeight/3+"px"+";"+" ");
	
	
	S_1.appendChild(SLOT_CLONE_1);
	S_2.appendChild(SLOT_CLONE_2);
	S_3.appendChild(SLOT_CLONE_3);
	S_4.appendChild(SLOT_CLONE_4);
	S_5.appendChild(SLOT_CLONE_5);
	S_6.appendChild(SLOT_CLONE_6);
	S_7.appendChild(SLOT_CLONE_7);
	S_8.appendChild(SLOT_CLONE_8);
	S_9.appendChild(SLOT_CLONE_9);
	
	
	
	ResizeScreen();
	
	}
