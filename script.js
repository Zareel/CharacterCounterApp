let textarea = document.querySelector("#textarea");
let result = document.querySelector(".result span");
let btn = document.querySelector("#btn");

let wordCount = () => {
  let characters = textarea.value;
  let charactersTrimmed = characters.replace(/\s+/g, "").trim();

  let numberOfWords = charactersTrimmed.length;
  result.innerText = numberOfWords;
};
textarea.addEventListener("input", wordCount);

btn.addEventListener("click", () => {
  textarea.value = "";
  result.innerText = "0";
});
