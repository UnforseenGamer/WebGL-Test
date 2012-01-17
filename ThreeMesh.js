/***********
Drawing Library by Justin Marple

addCube(scene, x, y, z, scale) -> Draw a cube with Lambert Lighting with default material #CCC
addMatCube(scene, x, y, z, scale, material) -> Same as addCube, only you can draw your own material to the cube
addCustomCube(scene, x, y, z, scalex, scaley, scalez, material) -> Same as addMatCube, adding on scale values
************/


/*Add default cube to scene*/
function addCube(x, y, z, scale)
{
	return(addCustomCube(x, y, z, scale, scale, scale, new THREE.MeshLambertMaterial({color: 0xCCCCCC}) ))
}
/*Add default cube with control over */
function addMatCube(x, y, z, scale, material)
{
	return(addCustomCube(x, y, z, scale, scale, scale, material ))
}

/*Add fully customizable cube to scene*/
function addCustomCube(x, y, z, scalex, scaley, scalez, material)
{
	var cube1 = new THREE.Mesh(
	  new THREE.CubeGeometry(scalex,scaley,scalez),
	  material	  
	);

	cube1.position.x = x;
	cube1.position.y = y;
	cube1.position.z = z;

	return(cube1);
}




/************************************/
function addPlane(x, y, z)
{
	var plane = new THREE.Mesh(
	   new THREE.PlaneGeometry(1, 1, 1, 1), 
	   new THREE.MeshLambertMaterial({color: 0xFFFFFF})
	   );
	   
	plane.position.y = y;
	plane.position.x = x;
	plane.position.z = z;
	
	return(plane);
}

function addMatPlane(x,y,z,material)
{
	var plane = new THREE.Mesh(
	   new THREE.PlaneGeometry(1, 1, 1, 1), 
	   material
	   );
	   
	plane.position.y = y;
	plane.position.x = x;
	plane.position.z = z;
	
	return(plane);

}

/************************************/
function addSphere(x, y, z, radius)
{
	var sphere = new THREE.Mesh(
	   new THREE.SphereGeometry(radius, 6, 6),
	   new THREE.MeshLambertMaterial({color: 0xCC0000}));

	sphere.position.x = x;
	sphere.position.y = y;
	sphere.position.z = z;

	return(sphere);

}


/************************************/
function addMesh(mesh, x, y, z)
{
	var mesh = new THREE.Mesh(
		mesh, new THREE.MeshLambertMaterial({color: 0xCC0000}));
	
	return(mesh);


}