//JS for making action only occur IF another script is present. OpenAI'd, so not under license at code.mi.omg.lol/more
//More bluuntly, vague attempt to make two <p> elements not appear IF a <script> is removed. TBC if works.

const head = document.head;
const snowstormScript = document.createElement("script");
snowstormScript.src = "https://js.cache.lol/snowstorm.js";

if (head.contains(snowstormScript)) {
  const soz = document.getElementById("soz");
  const snowsoz = document.getElementById("snowsoz");

  if (window.innerWidth >= 600) {
    soz.style.display = "block";
    snowsoz.style.display = "none";
  } else {
    soz.style.display = "none";
    snowsoz.style.display = "block";
  }
}
