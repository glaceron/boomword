import "./components/Boomword.js";
import "./components/BoomwordKeyboard.js";

if (window.localStorage.getItem("firstTime") == null) {
  window.localStorage.setItem("score", 0);
  window.localStorage.setItem("nextDay", getTodayTimestamp());
  window.localStorage.setItem("firstTime", "YES");
  window.localStorage.setItem("lives", 3);
  window.localStorage.setItem("win", "NO");
  window.localStorage.setItem("daltonismMode", "NO");
  window.localStorage.setItem("language", "SPANISH");

  window.localStorage.setItem("statsPlayed", 0);
  window.localStorage.setItem("statsWinned", 0);
  window.localStorage.setItem("statsBestCombo", 0);
  window.localStorage.setItem("statsTotalWords", 0);
  window.localStorage.setItem("statsLastTry", 0)
  window.localStorage.setItem("statsKeyboard", "-");



}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.classList.add("dark");
  document.getElementById("nightModeCheckBox").checked = true;
} else {
  document.documentElement.classList.add("light")
}

if (window.localStorage.getItem("daltonismMode") == "YES") {
  document.getElementById("buttonCloseInstructions2").style.backgroundImage = "linear-gradient(92.88deg, #da8f33 9.16%, #f5ae1f 43.89%, #f6c12d 64.72%)";
  document.getElementById("daltonismModeCheckBox").checked = true;
}

if (window.localStorage.getItem("language") == "ENGLISH") {
  document.getElementById("languageModeCheckBox").checked = true;
} else {
  document.getElementById("languageModeCheckBox").checked = false;
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
document.getElementById("nightModeButton").addEventListener("click", toggleDarkMode);
document.getElementById("daltonismModeButton").addEventListener("click", toggleDaltonismMode);
document.getElementById("languageModeButton").addEventListener("click", toggleLanguage);


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
  document.getElementById("options").style.display = "none";
  document.getElementById("stats").style.display = "none";
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
  document.getElementById("options").style.display = "none";
  document.getElementById("help").style.display = "none";
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
  document.getElementById("stats").style.display = "none";
  document.getElementById("help").style.display = "none";
}

function openWhatsapp() {
  var msg = "💣Boomword 💣 (ES) " + window.localStorage.getItem("statsLastTry") + "/23%0A%0A" + window.localStorage.getItem("statsKeyboard") + "%0A%0A💣 https://boomword.es/ 💣";
  msg = msg.replace(/<br\s*[\/]?>/gi, "%0A");
  var url = "";

  var strWindowFeatures = "location=yes,height=900,width=920,scrollbars=yes,status=yes";

  if (window.matchMedia("(min-width: 700px)").matches) {
    url = "https://web.whatsapp.com/send?text=" + msg;
  } else {
    url = "whatsapp://send?text=" + msg;
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

function toggleDarkMode() {
  if (document.documentElement.classList.contains("light")) {
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
  } else if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
  }
}

function toggleDaltonismMode() {
  var r = document.querySelector(':root');
  var rs = getComputedStyle(r);
  var str = window.localStorage.getItem("statsKeyboard");

  if (window.localStorage.getItem("daltonismMode") == "YES") {
    r.style.setProperty('--exact-color', 'green');
    str = str.replace(/🟧/g, "🟩");
    window.localStorage.setItem("daltonismMode", "NO");
    document.getElementById("buttonCloseInstructions2").style.backgroundImage = "linear-gradient(92.88deg, #3c9857 9.16%, #379735 43.89%, #5ba339 64.72%)";

  } else {

    r.style.setProperty('--exact-color', 'orange');
    str = str.replace(/🟩/g, "🟧");
    window.localStorage.setItem("daltonismMode", "YES");
    document.getElementById("buttonCloseInstructions2").style.backgroundImage = "linear-gradient(92.88deg, #da8f33 9.16%, #f5ae1f 43.89%, #f6c12d 64.72%)";
  }
  window.localStorage.setItem("statsKeyboard", str);
}

function toggleLanguage() {
  if (window.localStorage.getItem("language") == "SPANISH") {
    window.localStorage.setItem("language", "ENGLISH");
  } else {
    window.localStorage.setItem("language", "SPANISH");
  }
}

