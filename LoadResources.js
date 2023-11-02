var ResourceCount = -1;
       
var ResourcesLoaded = 0;

function LoadResources(ImagePreview, ArrayListImageName, ArrayListObjectName){

setTimeout(function(){
		
ResourceCount=ResourceCount+1;

var ImageName = ArrayListImageName[ResourceCount];

var ObjectName = ArrayListObjectName[ResourceCount];

ImagePreview.src = ImageName;

ImagePreview.onload = function(){

ObjectName.style.backgroundImage = "url("+ImageName+")";

if(ResourceCount!=ArrayListImageName.length-1){
LoadResources(ImagePreview, ArrayListImageName, ArrayListObjectName);
ResourcesLoaded = ResourcesLoaded+1;
Progress();
}else{
ResourcesLoaded = 45;
Progress();
Carregar();
}

};

},10);

}

/*
var promise = new Promise((resolve, reject)=>{
	
if(ResourceCount==45){
    resolve("resolved");
  }else{
    //reject("rejected");
  }

});*/
