import "./components/Boomword.js";
import "./components/BoomwordKeyboard.js";

if (window.localStorage.getItem("firstTime") == null) {
  window.localStorage.setItem("score", 0);
  window.localStorage.setItem("nextDay", getTodayTimestamp());
  window.localStorage.setItem("firstTime", "YES");
  window.localStorage.setItem("lives", 3);
  window.localStorage.setItem("win", "NO");

  window.localStorage.setItem("statsPlayed", 0);
  window.localStorage.setItem("statsWinned", "0%");
  window.localStorage.setItem("statsBestCombo", 0);
  window.localStorage.setItem("statsTotalWords", 0);
  window.localStorage.setItem("statsLastTry", 0)
  window.localStorage.setItem("statsKeyboard", "-");
}

if (window.localStorage.getItem("firstTime") == "YES") {
  openInstructions();
} else {
  closeInstructions();
}

document.getElementById("buttonInstructions").addEventListener("click", openInstructions);
document.getElementById("buttonCloseInstructions").addEventListener("click", closeInstructions);
document.getElementById("buttonCloseInstructions2").addEventListener("click", closeInstructions);

document.getElementById("buttonStats").addEventListener("click", openStats);
document.getElementById("buttonCloseStats").addEventListener("click", closeStats);

document.getElementById("buttonOptions").addEventListener("click", openOptions);
document.getElementById("buttonCloseOptions").addEventListener("click", closeOptions);

document.getElementById("buttonShareWhatsapp").addEventListener("click", openWhatsapp);
document.getElementById("buttonShareTwitter").addEventListener("click", openTwitter);
document.getElementById("buttonShareTelegram").addEventListener("click", openTelegram);
document.getElementById("buttonCopy").addEventListener("click", openCopy);



function getTodayTimestamp() {
  const today = new Date();
  today.setDate(today.getDate());
  today.setHours(0, 0, 0, 0);
  return today.getTime();
}


function closeInstructions() {
  document.getElementById("help").style.display = "none";
  document.getElementById("header").style.display = "flex";
  document.getElementById("container").style.display = "flex";
}

function openInstructions() {
  document.getElementById("header").style.display = "none";
  document.getElementById("container").style.display = "none";
  document.getElementById("help").style.display = "block";
}

function closeStats() {
  document.getElementById("stats").style.display = "none";
  document.getElementById("header").style.display = "flex";
  document.getElementById("container").style.display = "flex";
}

function openStats() {
  document.getElementById("statsPlayed").textContent = window.localStorage.getItem("statsPlayed");
  document.getElementById("statsWinned").textContent = window.localStorage.getItem("statsWinned");
  document.getElementById("statsBestCombo").textContent = window.localStorage.getItem("statsBestCombo");
  document.getElementById("statsTotalWords").textContent = window.localStorage.getItem("statsTotalWords");
  document.getElementById("statsTextKeyboard").innerHTML = "Último intento: " + window.localStorage.getItem("statsLastTry") + "/23";
  document.getElementById("statsKeyboard").innerHTML = window.localStorage.getItem("statsKeyboard");
  document.getElementById("header").style.display = "none";
  document.getElementById("container").style.display = "none";
  document.getElementById("stats").style.display = "block";
}

function closeOptions() {
  document.getElementById("options").style.display = "none";
  document.getElementById("header").style.display = "flex";
  document.getElementById("container").style.display = "flex";
}

function openOptions() {
  document.getElementById("header").style.display = "none";
  document.getElementById("container").style.display = "none";
  document.getElementById("options").style.display = "block";
}

function openWhatsapp() {
  var msg = "💣Boomword 💣 (ES) " + window.localStorage.getItem("statsLastTry") + "/23%0A%0A" + window.localStorage.getItem("statsKeyboard") + "%0A%0A💣 https://boomword.es/ 💣";
  msg = msg.replace(/<br\s*[\/]?>/gi, "%0A");
  var url = "";

  var strWindowFeatures = "location=yes,height=900,width=920,scrollbars=yes,status=yes";

  if (window.matchMedia("(min-width: 700px)").matches) {
    url = "https://web.whatsapp.com/send?text=" + msg;
    console.log("se envia por web");
  } else {
    url = "whatsapp://send?text=" + msg;
    console.log("se envia por movil");
  }

  window.open(url, "_blank", strWindowFeatures);
}

function openTwitter() {
  var msg = "💣Boomword 💣 (ES) " + window.localStorage.getItem("statsLastTry") + "/23%0A%0A" + window.localStorage.getItem("statsKeyboard") + "%0A%0A💣 https://boomword.es/ 💣";
  msg = msg.replace(/<br\s*[\/]?>/gi, "%0A");
  var url = "https://twitter.com/intent/tweet?text=" + msg;

  var strWindowFeatures = "location=yes,height=900,width=920,scrollbars=yes,status=yes";

  window.open(url, "_blank", strWindowFeatures);
}

function openTelegram() {
  var msg = "💣Boomword 💣 (ES) " + window.localStorage.getItem("statsLastTry") + "/23%0A%0A" + window.localStorage.getItem("statsKeyboard") + "%0A%0A💣 https://boomword.es/ 💣";
  msg = msg.replace(/<br\s*[\/]?>/gi, "%0A");
  var url = "https://telegram.me/share/url?url=" + msg;

  var strWindowFeatures = "location=yes,height=900,width=920,scrollbars=yes,status=yes";

  window.open(url, "_blank", strWindowFeatures);
}

function openCopy() {
  var msg = "💣Boomword 💣 (ES) " + window.localStorage.getItem("statsLastTry") + "/23\n\n" + window.localStorage.getItem("statsKeyboard") + "\n\n💣 https://boomword.es/ 💣";
  msg = msg.replace(/<br\s*[\/]?>/gi, "\n");

  navigator.clipboard.writeText(msg);

}

