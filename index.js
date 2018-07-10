function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(shout(string));
}

function logWhisper(string) {
  console.log(whisper(string));
}

function sayHiToGrandma(string) {
  var lowercase = string.lowercase;
  var uppercase = string.uppercase;
  
  if (string === uppercase) {
    return "YES INDEED!"
  }
  if (string === "I love you, Grandma.") {
    return "I love you, too.";
  }
}
