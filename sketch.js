var Splashscreen;
var gameState = "wait"
   function preload(){
    Splashscreen=loadImage("Untitled design.gif")
    bg_play=loadImage("background1.jpeg")
   }
   function setup(){
    createCanvas(windowWidth,windowHeight);
playbutton=createImg("new play button for shooter game.png")
playbutton.size(100,100)
playbutton.position(700,900)
aboutbutton=createImg("about button.png")
aboutbutton.size(40,40)
aboutbutton.position(400,500)
playbutton.hide();
aboutbutton.hide(); 
wall1=createSprite(670,857,120,56);
wall2=createSprite(800,560);
wall3=createSprite();
wall4=createSprite(670,857,120,56);
wall5=createSprite(670,857,120,56);
wall6=createSprite(670,857,120,56);
wall7=createSprite(670,857,120,56);
wall8=createSprite(670,857,120,56);
wall9=createSprite(670,857,120,56);
wall10=createSprite(670,857,120,56);
wall11=createSprite(670,857,120,56);
wall12=createSprite(670,857,120,56);
wall13=createSprite(670,857,120,56);
wall14=createSprite(670,857,120,56);
wall15=createSprite(670,857,120,56);
wall16=createSprite(670,857,120,56);
wall17=createSprite(670,857,120,56);
wall18=createSprite(670,857,120,56);
wall19=createSprite(670,857,120,56);
wall20=createSprite();

   }
   function draw(){
    if (gameState == "wait"){
    background (Splashscreen);
    playbutton.show();
    aboutbutton.show(); 
    playbutton.mousePressed(()=>{

        playbutton.show();
        aboutbutton.show();
        Gamestate="play";
        
        })
        
        aboutbutton.mousePressed(()=>{
        
            playbutton.hide();
            aboutbutton.hide();
            gameState="about";
            
            })
        }
        if (gameState == "play"){
            background ("white"); 
        }
        if (gameState==="about"){
        aboutgame();
   }
}
   function aboutgame(){

    swal({
    title:"How To Play",
    text:"move around using arrow keys ,and use the space button to shoot the oppponent players,Win the game! .",
    textAllign:"center",
    confirmButtonText:"Let's Play ",
    confirmButtonColor:"red",
    
    },
       function ()  {
            gameState = "wait"
        }
    )
   }