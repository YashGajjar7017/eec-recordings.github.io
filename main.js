// password
let name = prompt("What is the password?");
console.log("Hi " + name)

var passwordText = document.getElementById("id").value;
if (passwordText == "recording") {
    return true;
} else {
    alert("Not correct")
    return false
}
// ------------------------------------------

function vidplay() {
    var video = document.getElementById("Video1");
    var button = document.getElementById("play");
    if (video.paused) {
        video.play();
        button.textContent = "pause";
    } else {
        video.pause();
        button.textContent = "play";
    }
}

function restart() {
    var video = document.getElementById("Video1");
    video.currentTime = 0;
}

function skip(value) {
    var video = document.getElementById("Video1");
    video.currentTime += value;
}