/*Textures*/
var groundMat = new THREE.MeshLambertMaterial({
	map: THREE.ImageUtils.loadTexture("groundImage.jpg")
});

var brickMat = new THREE.MeshLambertMaterial({
	map: THREE.ImageUtils.loadTexture("bricks.jpg")
});
/*
groundMat = new THREE.MeshLambertMaterial({
	color: 0xFFFFFF
});

brickMat = new THREE.MeshLambertMaterial({
	color: 0xFF0000
})*/

function drawLand(scene, x,z, info)
{	
	/*Get Info from string*/
	var x = getInfoFromXML(info, "x");
	var y = getInfoFromXML(info, "y");
	
	var wid = getInfoFromXML(info, "wid");
	var len = getInfoFromXML(info, "len");

	var owner = getInfoFromXML(info, "owner");

	var ground = addMatPlane(x,0,z,groundMat);
	ground.rotation.x = -1.5707963;
	ground.scale.x = wid;
	ground.scale.z = len;

	scene.add(ground);

}

function getInfoFromXML(info, tag)
{  	
  	var posx = info.indexOf("<"+tag+">");
  	var endposx = info.indexOf("</"+tag+">");
    var x = info.substr(posx, endposx-posx);    

    return x;
}

/********
STANDARD::

<land> <- Main tag

  <x>0</x> <- X/Y Coordinantes of land
  <y>0</y>
  <wid>10</wid> <- Width/Height of land
  <len>10</len>
  <owner>Justin</owner> <- Owner of the land

  <model> <- Add Model to land 
    
    <id>1</id>  <-- ID for each model, draw gray cube if id can't be found
    <mx>3</mx>  <-- X/y Coordinantes relative to the PARENT
    <my>5</my>    - If for some reason the model is outside it's parents bounds, don't draw
  
  </model> 

</land>
/***/


function drawDefaultLand(scene,x,z)
{	
	/*Shapes*/
	var ground = addMatPlane(0+x,0,0+z,groundMat);
	ground.rotation.x = -1.5707963;
	ground.scale.x = ground.scale.y = ground.scale.z = 20;
	
	scene.add(ground);

	scene.add(addCustomCube(7.5+x,0.75,0+z,0.3,1.5,15,brickMat));
    scene.add(addCustomCube(-7.5+x,0.75,0+z,0.3,1.5,15,brickMat));
    scene.add(addCustomCube(0+x,0.75,-7.5+z,15.3,1.5,0.3,brickMat));
    scene.add(addCustomCube(5.15+x,0.75,7.5+z,5,1.5,0.3,brickMat));
    scene.add(addCustomCube(-5.15+x,0.75,7.5+z,5,1.5,0.3,brickMat));
}

function drawRoad(scene, x, z)
{
	road = addMatPlane(x,0,z, groundMat)

	road.scale.z = 20;
	road.scale.x = 20;
	road.scale.y = 20;
	road.rotation.x = -1.5707963;
	scene.add(road);

}

function drawDefaultLandReversed(scene,x,z)
{

	/*Shapes*/
	var ground = addMatPlane(-(0+x),0,-(0+z),groundMat);
	ground.rotation.x = -1.5707963;
	ground.scale.x = ground.scale.y = ground.scale.z = 20;
	
	scene.add(ground);

	scene.add(addCustomCube(-(7.5+x),0.75,-(0+z),0.3,1.5,15,brickMat));
    scene.add(addCustomCube(-(-7.5+x),0.75,-(0+z),0.3,1.5,15,brickMat));
    scene.add(addCustomCube(-(0+x),0.75,-(-7.5+z),15.3,1.5,0.3,brickMat));
    scene.add(addCustomCube(-(5.15+x),0.75,-(7.5+z),5,1.5,0.3,brickMat));
    scene.add(addCustomCube(-(-5.15+x),0.75,-(7.5+z),5,1.5,0.3,brickMat));


}