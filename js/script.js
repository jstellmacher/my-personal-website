//const h2 = document.createElement("h2");
//h2.textContent = "This content added by JavaScript";

//document.querySelector("body").appendChild(h2);

//<button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>
document.getElementById("tldr").addEventListener("click", tldrButton);
function tldrButton() {
    document.getElementById("tldr").innerHTML = "Yay it Worked!";
}