var lights = ["light1","light2","light3","light4","light5"];
var buttons=["button1","button2","button3","button4","button5"];
var round =1;

function toggleButton(buttonNum){
  currentButton = document.getElementById(buttons[buttonNum]);
  if (currentButton.className == "switch off"){
    currentButton.classList.remove("off");
    currentButton.classList.add("on");
  }else{
    currentButton.classList.remove("on");
    currentButton.classList.add("off");
  }
}

function toggleLights(light,isOff){
  if (isOff){
    light.src = "lightOn.png";
    light.classList.add("on");
    light.classList.remove("off");
  }else{
    light.src="lightOff.png";
    light.classList.remove("on");
    light.classList.add("off");
  }
}

function reset(){
  for (var i = 0;i<lights.length;i++){
    light = document.getElementById(lights[i]);
    light.src="lightOff.png";
    light.classList.remove("on");
    light.classList.add("off");
  }
  for (var i = 0;i<buttons.length;i++){
    tempButton = document.getElementById(buttons[i]);
    tempButton.classList.remove("on");
    tempButton.classList.add("off");
  }
  document.getElementById("numOn").innerHTML = 0;
  document.getElementById("winner").innerHTML = "";
}

function howManyOn(){
  var counter = 0;
  for (var i = 0;i<lights.length;i++){
    if (document.getElementById(lights[i]).className == "on"){
      counter++}
  }
  document.getElementById("numOn").innerHTML = counter;
  if(counter ==1){
    document.getElementById("singular").innerHTML = "light";
  }else{
    document.getElementById("singular").innerHTML = "lights";
  }
  return counter;
}
function youWin(){
  document.getElementById("winner").innerHTML = "You win!!!";
  if (round == 1){
    setTimeout(function(){var yOrN = prompt("play again ('type y or n')"); 
    if (yOrN.toLowerCase() == "y"){
      reset();
      round++}}, 500);
    }else{
      document.getElementById("winner").innerHTML = "You win!!! Game Over";
    }
}

function buttonClicked(clickedButton){
  var numOn = 0;
  var buttonNum = buttons.indexOf(clickedButton);
  var lightName = document.getElementById(lights[buttonNum]);
  var randomLight = document.getElementById(lights[(Math.floor(Math.random()*5))]);
  toggleButton(buttonNum);
  if (lightName.className == "off"){ //if light is off toggle it on
    toggleLights(lightName,true);
  }else{
    toggleLights(lightName,false);
  }
  if (randomLight.className=="off" && Math.random()*2>1){ 
    toggleLights(randomLight,true);
  }else if (Math.random()*2>1) {toggleLights(randomLight,false); //turn on a random light 50% of the time
  }
  numOn = howManyOn();
  if (numOn == 5){
    youWin();
  }
}
window.onload=function(){
  document.getElementById("reset").addEventListener("click", reset,false)
}
