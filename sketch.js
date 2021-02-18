var greeting;
var pai;
  var user;
  function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
colour();
  var time = new Date().getHours();

  if (time < 12) {

    greeting = "Good morning";

  } else if (time < 16) {

    greeting = "Good afternoon";

  } else if (time < 19)  {

    greeting = "Good evening";

  } else {

  greeting = "good night"

  }
  user=getCookie("username");
  if (user != "") {
    alert( greeting+" "+ user);
    document.getElementById('1user').innerHTML = greeting+" "+user;
  } else {
     user = prompt("Please enter your name:","");
      var password= prompt("Please enter password:", "");
     if (user != "" && user != null) {
     if(password=="AsSmDd,2017"){
       setCookie("username", user, 30);
     } else if (user==null){
       location.reload();
     }else{
     alert("wrong password "+user);
       location.reload();
    }
     }
  }
  var notification = new Notification(title, options);
  //document.getElementById("name123").innerHTML = user;
}
  function colour(){
 document.getElementsByTagName("META")[1].content = "#ff0000";
document.getElementById("border").style.borderColor = "#ff0000";
document.getElementById("nav").style.backgroundColor='#ff0000';
document.getElementById("border1").style.borderColor = "#ff0000";
document.getElementById("border2").style.borderColor = "#ff0000";
document.getElementById("border3").style.borderColor = "#ff0000";
document.getElementById("border4").style.borderColor = "#ff0000";
document.getElementById("border5").style.borderColor = "#ff0000";
document.getElementById("border7").style.borderColor = "#ff0000";
document.getElementById("border6").style.borderColor = "#ff0000";
  setTimeout(function(){ 
    colour1();
  }, 2000);
}
function colour1() {
document.getElementById("border1").style.borderColor = "#ffff00";
document.getElementsByTagName("META")[1].content = "#ffff00";
  document.getElementById("border").style.borderColor = "#ffff00";
document.getElementById("nav").style.backgroundColor='#ffff00';
document.getElementById("border2").style.borderColor = "#ffff00";
document.getElementById("border3").style.borderColor = "#ffff00";
document.getElementById("border4").style.borderColor = "#ffff00";
document.getElementById("border5").style.borderColor = "#ffff00";
document.getElementById("border6").style.borderColor = "#ffff00";
document.getElementById("border7").style.borderColor = "#ffff00";
  setTimeout(function(){ 
    colour2();
  }, 2000);
}
function colour2() {
document.getElementById("border1").style.borderColor = "#00ff00";
document.getElementById("border2").style.borderColor = "#00ff00";
document.getElementById("border3").style.borderColor = "#00ff00";
  document.getElementsByTagName("META")[1].content = "#00ff00";
  document.getElementById("border").style.borderColor = "#00ff00";
document.getElementById("nav").style.backgroundColor='#00ff00';
document.getElementById("border5").style.borderColor = "#00ff00";
document.getElementById("border4").style.borderColor = "#00ff00";
document.getElementById("border6").style.borderColor = "#00ff00";
document.getElementById("border7").style.borderColor = "#00ff00";
  setTimeout(function(){ 
    colour3();
  }, 2000);
}
function colour3() {
document.getElementById("border1").style.borderColor = "#00ffff";
document.getElementById("border2").style.borderColor = "#00ffff";
document.getElementById("border3").style.borderColor = "#00ffff";
document.getElementsByTagName("META")[1].content = "#00ffff";
  document.getElementById("border").style.borderColor = "#00ffff";
document.getElementById("nav").style.backgroundColor='#00ffff';
document.getElementById("border4").style.borderColor = "#00ffff";
document.getElementById("border5").style.borderColor = "#00ffff";
document.getElementById("border6").style.borderColor = "#00ffff";
document.getElementById("border7").style.borderColor = "#00ffff";
  setTimeout(function(){ 
    colour4();
  }, 2000);
}
function colour4() {
document.getElementById("border1").style.borderColor = "#0000ff";
document.getElementById("border2").style.borderColor = "#0000ff";
document.getElementById("border3").style.borderColor = "#0000ff";
document.getElementById("border4").style.borderColor = "#0000ff";
document.getElementById("border5").style.borderColor = "#0000ff";
document.getElementById("border6").style.borderColor = "#0000ff";
document.getElementById("border7").style.borderColor = "#0000ff";
  document.getElementsByTagName("META")[1].content = "#0000ff";
  document.getElementById("border").style.borderColor = "#0000ff";
document.getElementById("nav").style.backgroundColor='#0000ff';
  setTimeout(function(){ 
    colour5();
  }, 2000);
}
function colour5() {
document.getElementById("border1").style.borderColor = "#ff00ff";
document.getElementById("border2").style.borderColor = "#ff00ff";
document.getElementById("border3").style.borderColor = "#ff00ff";
document.getElementById("border4").style.borderColor = "#ff00ff";
document.getElementById("border5").style.borderColor = "#ff00ff";
document.getElementById("border6").style.borderColor = "#ff00ff";
document.getElementById("border7").style.borderColor = "#ff00ff";
document.getElementsByTagName("META")[1].content = "#ff00ff";
  document.getElementById("border").style.borderColor = "#ff00ff";
document.getElementById("nav").style.backgroundColor='#ff00ff';
  setTimeout(function(){
    colour();
  }, 2000);
}
function openPaint(){
  pai = document.getElementById("paintFrame");
  pai.style.display = "block";
  document.getElementById("nav").style.display="none";
   //if (pai.requestFullscreen) {

   // pai.requestFullscreen();

 // } else if (pai.webkitRequestFullscreen) { /* Safari */

   // pai.webkitRequestFullscreen();

 // } else if (pai.msRequestFullscreen) { /* IE11 */

  //  pai.msRequestFullscreen();

 // }

}
function hidePaint(){
  pai = document.getElementById("paintFrame");
  pai.style.display ="none";
  document.getElementById("nav").style.display="block";
  }
