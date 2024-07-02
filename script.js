const textareaEl = document.querySelector(".textarea");
const charactersNumberEl = document.querySelector(".stat__number--characters");
const twitterNumberEl = document.querySelector(".stat__number--twitter");
const facebookNumberEl = document.querySelector(".stat__number--facebook");
const wordsNumbersEl = document.querySelector(".stat__number--words");

const inputHandler = () => {
  // example of input validation
  if (textareaEl.value.includes("<script>")) {
    alert("You cannot use that!");
    textareaEl.value = textareaEl.value.replace("<script>", "");
  }

  // determine new numbers
  let numOfWords = textareaEl.value.split(" ").length;
  if (textareaEl.value.length === 0) {
    numOfWords = 0;
  }
  const numOfCharacters = textareaEl.value.length;
  const twitterCharactersLeft = 280 - numOfCharacters;
  const facebookCharactersLeft = 2200 - numOfCharacters;

  // add visual indicator if limit is exceeded
  if (twitterCharactersLeft < 0) {
    twitterNumberEl.classList.add("stat__number--limit");
  } else {
    twitterNumberEl.classList.remove("stat__number--limit");
  }

  if (facebookCharactersLeft < 0) {
    facebookNumberEl.classList.add("stat__number--limit");
  } else {
    facebookNumberEl.classList.remove("stat__number--limit");
  }

  // set new numbers
  charactersNumberEl.textContent = numOfCharacters;
  twitterNumberEl.textContent = twitterCharactersLeft;
  facebookNumberEl.textContent = facebookCharactersLeft;
  wordsNumbersEl.textContent = numOfWords;
};

textareaEl.addEventListener("input", inputHandler);
