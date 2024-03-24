 var userclickedpattern=[];
 var gamepattern=[];
 var buttoncolor=["red","blue","green", "yellow"];


 function startover(){
  level=0;
  gamepattern=[];
  started=false;

 }
 
 
 function checkanswer(currentlevel){
  if(userclickedpattern[currentlevel]===gamepattern[currentlevel]){
    console.log("correct");
    if(userclickedpattern.length===gamepattern.length){
      setTimeout(function(){
        nextsequence();
      },1000);
    }
  }else{
    console.log("wrong");
    var audio1=new Audio("./sounds/wrong.mp3");
    audio1.play();
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },300);
    startover();


  }

 }




 function nextsequence(){
  userclickedpattern=[];
  level++;
  $("#level-title").text("Level "+level);
  var randomNUM=Math.floor((4*Math.random()));
   
  var randomchosencolor=buttoncolor[randomNUM];
   
  gamepattern.push(randomchosencolor);

  $("#"+randomchosencolor).fadeIn(100).fadeOut(100).fadeIn(100);
  //  var audio =new Audio("./sounds/"+randomchosencolor+".mp3");
  //  audio.play();
  playsound(randomchosencolor);
 }




 var started=false;
 var level=0;
 $(document).keypress(function(){
  if(!started){
    $("#level-title").text("Level "+level);
    nextsequence();
    started=true;
  }
 })
 
 
 
 $(".btn").click(function(){
  var userchosencolor= this.id;
  userclickedpattern.push(userchosencolor);
  // alert(userclickedpattern);
  playsound(userchosencolor);
  // $("#"+userchosencolor).addClass("pressed");
  animatpress(userchosencolor);
  var lastindex=(userclickedpattern.length)-1;
  checkanswer(lastindex);

 });

function playsound(name){
  var audio =new Audio("./sounds/"+name+".mp3");
  audio.play();

}




function animatpress(currentcolor){
  $("#" + currentcolor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentcolor).removeClass("pressed");
  }, 100);



}






