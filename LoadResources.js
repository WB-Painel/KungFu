var ResourceCount = -1;
       
var ResourcesLoaded = 0;

function LoadResources(ImagePreview, ArrayListImageName, ArrayListObjectName){

       alert("@");
       
ResourceCount=ResourceCount+1;

var ImageName = ArrayListImageName[ResourceCount];

var ObjectName = ArrayListObjectName[ResourceCount];

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

}
