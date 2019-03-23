// Created by DIVAKAR

/* Made By DIVAKAR */

function move() {
  var elem = document.getElementById("Bar");
  var width = 1;
  var id = setInterval(frame, 48);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
document.getElementById("label").innerHTML = width * 1 + '%';
    }
  }
}
function submit(){
  var x = document.getElementById("1").value.trim();
  var y = document.getElementById("2").value.trim();
  if (x=== ""|| y===""){
  alert('Invalid Input.');
  }
  else if(/[<>]/g.test(x)||/[<>]/g.test(y)){
      alert('Name cannot cointain < or >.');
  }
  else if(/[0-9]/g.test(x)||/[0-9]/g.test(y)){
alert('Name cannot cointain number.');
  }
  else if(x.toLowerCase()===y.toLowerCase()){
alert("Both player names cannot be same.");
  }
   else{
document.getElementById("demo").innerHTML = '<div style="color:#c9c9c9;font-size:15px">Player 1 = ' + x + '</div><br><div style="color:#555;font-size:15px"> and </div><br><div style="color:#c9c9c9;font-size:15px">Player 2= '+ y + '</font><br>';
document.getElementById("ad").disabled=true;
document.getElementById("2").disabled=true;
document.getElementById("1").disabled=true;
document.getElementById("b").disabled=false;
document.getElementById("9").disabled=false;
  }
 }
 function $check_status(){
     var x = document.getElementById("1").value.trim();
  var y = document.getElementById("2").value.trim();
  var z;
  if(score>sco){
  z=x+" Leads!";
  document.getElementById("rst").innerHTML=z;
  }
  else if(sco>score){
  z=y+" Leads!";
  document.getElementById("rst").innerHTML=z;
  }
  else if(sco==score){
  z="Draw";
  document.getElementById("rst").innerHTML=z;
  }
  
 }
 
 //scrore for player1
  var score = 1;

function player1(){

  var x = document.getElementById("1").value.trim();
  var y = document.getElementById("2").value.trim();
  var str = '<span style= "color:#28841b;font-size: 15px;">Score ' + score +"!\n </span>";
  document.getElementById("p").innerHTML= '<span style= "color:#8d8bed;font-size: 15px">' 
  + x + 
  "'s </span>"+ str ;
  score++;
  $check_status();
}
//score for player2
  var sco = 1;
  
function player2(){

  var x = document.getElementById("1").value.trim();
  var y = document.getElementById("2").value.trim();
  var str = '<span style= "color:#28841b;font-size: 15px">Score ' + sco +"!\n </span>";
document.getElementById("p2").innerHTML= '<span style= "color:#8d8bed;font-size: 15px">' + y+ "'s </span>" + str ;
sco++;
$check_status();
}

var myVar;
function myFunction() {
myVar = setTimeout(showPage, 6000);
}

function showPage() {
document.getElementById("loader").style.display = "none";
document.getElementById("myDiv").style.display = "block";
}

function reset(){ 
document.getElementById("rst").innerHTML="";
document.getElementById("ad").disabled=false;
document.getElementById("2").disabled=false;
document.getElementById("1").disabled=false;
document.getElementById("b").disabled=true;
document.getElementById("9").disabled=true;
document.getElementById("demo").innerHTML = ""; document.getElementById("p2").innerHTML= ""; document.getElementById("p").innerHTML= "";
sco=1;score=1;}