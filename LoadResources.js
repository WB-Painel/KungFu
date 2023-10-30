let ResourceCount = -1;
       
let ResourcesLoaded = 0;

function LoadResources(ImagePreview, ArrayListImageName, ArrayListObjectName){

       setTimeout(function(){
              
       
       
ResourceCount=ResourceCount+1;

let ImageName = ArrayListImageName[ResourceCount];

let ObjectName = ArrayListObjectName[ResourceCount];

ImagePreview.src = ImageName;

ImagePreview.onload = function(){

ObjectName.style.backgroundImage = "url("+ImageName+")";

if(ResourceCount!=ArrayListImageName.length-1){
LoadResources(ImagePreview, ArrayListImageName, ArrayListObjectName);
ResourcesLoaded = ResourcesLoaded+1;
}else{
ResourcesLoaded = 45;
       
}

};

       },0);

}
