function speak() {
    var inputText = document.getElementById("input").value;
    var speechBubble = document.getElementById("speech");
    var dogImage = document.getElementById("dog-image");
  
    speechBubble.innerHTML = inputText;
    speechBubble.parentElement.style.visibility = "visible";
  
    
    setTimeout(function() {
      speechBubble.parentElement.style.visibility = "hidden";
    }, 3000);
  
    
  }
function shakeHands() {
    var speechBubble = document.getElementById("speech");
    speechBubble.innerHTML = "🐾 *Dog shakes hands* 🐾";
    speechBubble.parentElement.style.visibility = "visible";
  

    setTimeout(function() {
      speechBubble.parentElement.style.visibility = "hidden";
    }, 3000);
  }
  
  document.getElementById("handshake").addEventListener("click", shakeHands);
  