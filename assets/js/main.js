const text = "Hello I'm Sudheer Vyas!";
const typingSpeed = 200; // Speed in milliseconds
const container = document.getElementById("sudhir");

let index = 0;

function typeText() {
  if (index < text.length) {
    container.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, typingSpeed);
  }
  else if(index >=text.length) {
    index = 0;
    container.innerHTML  = ''
    setTimeout(typeText, typingSpeed);
  }
}

// Start the typing effect
typeText();