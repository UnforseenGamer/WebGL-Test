// Keystrokes

var keyA = 0;
var keyS = 0;
var keyD = 0;
var keyW = 0;
var keyUp = 0;
var keyDown = 0;
var keyLeft = 0;
var keyRight = 0;

function turnKeyOn(Event)
{
	document.getElementById("test").innerHTML = Event.which;
	if(Event.which==65)//a key			
		keyA=1;	
	if(Event.which==83)	
		keyS=1;
	if(Event.which==68)//d key	
		keyD=1;	
	if(Event.which==87)	
		keyW=1;		
	if(Event.which==38)
		keyUp = 1;
	if(Event.which==40)
		keyDown = 1;
	if(Event.which==37)
		keyLeft = 1;
	if(Event.which==39)
		keyRight = 1;
}

function turnKeyOff(Event)
{
	if(Event.which==65)//a key				
		keyA=0;
	if(Event.which==83)	
		keyS=0;	
	if(Event.which==68)//d key	
		keyD=0;	
	if(Event.which==87)	
		keyW=0;	
	if(Event.which==38)
		keyUp = 0;
	if(Event.which==40)
		keyDown = 0;
	if(Event.which==37)
		keyLeft = 0;
	if(Event.which==39)
		keyRight = 0;
}
function turnKeyOffAll()
{				
	keyA=0;	
	keyS=0;	
	keyD=0;
	keyW=0;	
	keyUp=0;
	keyDown=0;
	keyLeft=0;
	keyRight=0;	
}