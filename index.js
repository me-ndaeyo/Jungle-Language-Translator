'use strict'
let vowels = "aeiouAEIOU",
  vowelArr = vowels.split("");
let consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ",
  consArr = consonants.split("");
let alphabets = vowelArr.concat(consArr);
let numbers = 12345;
let english = document.querySelector("#english");
let jenglish = document.querySelector("#jenglish");
let ejungle = document.querySelector("#ejungle");
let jungle = document.querySelector("#jungle");
let jungle_translate = document.querySelector(".jungle_translate");
let english_translate = document.querySelector(".english_translate");
let to_english = document.querySelector(".to_english");
let to_jungle = document.querySelector(".to_jungle");
let eng = document.querySelector(".eng");
let jun = document.querySelector(".jun");

english_translate.addEventListener("click", () => {
  englishTranslator(ejungle.value);
});

jungle_translate.addEventListener("click", () => {
  jungleLangTranslator(english.value);
});

jun.addEventListener("click", function () {
  to_jungle.classList.remove("toggle");
  to_english.classList.add("toggle");
});
eng.addEventListener("click", function () {
  to_english.classList.remove("toggle");
  to_jungle.classList.add("toggle");
});

const englishTranslator = (function (str) {
  // 1. Accept strings
  let strArr = str.split("");

  // 2. Create an array of jungle consonants
  let jungleConsonants = [];
  for (let c = 0; c < consArr.length; c++) {
    jungleConsonants.push(consArr[c] + "a");
  }

  for (let i = 0; i < strArr.length; i++) {
    for (let d = 0; d < jungleConsonants.length; d++) {
      // 3. Replace consonants(remove 'a' from the string)
      if (strArr[i].includes("a") && strArr[i] !== "1")
        strArr[i] = strArr[i].replace("a", "");
    }
    // 4. Replace jungle vowels with english vowels
    if (strArr[i] === "1") strArr[i] = "a";
    if (strArr[i] === "2") strArr[i] = "e";
    if (strArr[i] === "3") strArr[i] = "i";
    if (strArr[i] === "4") strArr[i] = "o";
    if (strArr[i] === "5") strArr[i] = "u";
  }
  return (jenglish.textContent = strArr.join(""));
})

const jungleLangTranslator = (function (str) {
  // Accept a string of words
  let strArr = str.split("");
  for (let i = 0; i < strArr.length; i++) {
    for (let c = 0; c < alphabets.length; c++) {
      // Replace vowels with their corresponding numbers
      if (
        strArr[i] === vowelArr[c] &&
        (vowelArr[c] === "a" || vowelArr[c] === "A")
      ) {
        strArr[i] = "1";
      }
      if (
        strArr[i] === vowelArr[c] &&
        (vowelArr[c] === "e" || vowelArr[c] === "E")
      ) {
        strArr[i] = "2";
      }
      if (
        strArr[i] === vowelArr[c] &&
        (vowelArr[c] === "i" || vowelArr[c] === "I")
      ) {
        strArr[i] = 3;
      }
      if (
        strArr[i] === vowelArr[c] &&
        (vowelArr[c] === "o" || vowelArr[c] === "O")
      ) {
        strArr[i] = 4;
      }
      if (
        strArr[i] === vowelArr[c] &&
        (vowelArr[c] === "u" || vowelArr[c] === "U")
      ) {
        strArr[i] = 5;
      }
      // Add a to consonants
      if (strArr[i] === consArr[c]) strArr[i] = strArr[i] + "a";
    }
  }

  return (jungle.textContent = strArr.join(""));
})