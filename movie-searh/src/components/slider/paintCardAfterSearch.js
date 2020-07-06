import getMovieTitle from "../getData/getMovieTitle";
import translateSearchWord from "./translateSearchWord";
import paintCardContent from "./paintCardContent";
import hideMessage from "./hideMessage";

export default async () => {
  let resultSearch;
  let engWord;
  const buttonSearch = document.getElementById("buttonSearch");
  const inputWrapper = document.getElementById("inputWrapper");
  const containerCards = document.getElementById("containerCards");
  const iconKeyboard = document.getElementById("iconKeyboard");
  buttonSearch.addEventListener("click", async () => {
    let messageBlock = document.getElementById("messageBlock");
    messageBlock.style.display = "none";
    const textarea = document.getElementById("inputSearch");
    inputWrapper.setAttribute("data-text", textarea.value);
    const virtualKeyboard = document.getElementById("vk");
    if (virtualKeyboard.style.display === "") {
      iconKeyboard.click();
    }
    let valueSearch = inputWrapper.getAttribute("data-text");
    let regexp = /^[A-Za-zА-Яа-я0-9]+/;
    let validSearch = regexp.test(valueSearch);
    if (!validSearch || valueSearch === "") {
      valueSearch = "lion";
      engWord = valueSearch;
      messageBlock.style.display = "flex";
      messageBlock.firstChild.textContent = "you entered an invalid request";
    } else {
      engWord = await translateSearchWord(valueSearch);
      if (engWord === valueSearch) {
        engWord = valueSearch;
      }
      else {
        messageBlock.style.display = "flex";
        messageBlock.firstChild.textContent = `Showing results for: ${valueSearch}`;
      }
    }
    resultSearch = await getMovieTitle(engWord);
    if (resultSearch !== undefined) {
      containerCards.innerHTML = "";
    }
    paintCardContent(resultSearch);
    hideMessage();
  });
  document.addEventListener("keydown", ({ code }) => {
    if (code === "Enter") buttonSearch.click();
  });
};