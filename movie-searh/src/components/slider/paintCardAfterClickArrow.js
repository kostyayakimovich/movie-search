import getMovieNextTitle from "../getData/getMovieNextTitle";
import translateSearchWord from "./translateSearchWord";
import paintCardContent from "./paintCardContent";
import hideMessage from "./hideMessage";
import getMovieTitle from "../getData/getMovieTitle";

export default async (page) => {
  let inputWrapper = document.getElementById("inputWrapper");
  let engWord;
  let containerCards = document.getElementById("containerCards");
  let resultSearch;
  let valueSearch = inputWrapper.getAttribute("data-text");
  valueSearch = inputWrapper.getAttribute("data-text");
  if (valueSearch === "") engWord = "lion";
  else {
    engWord = await translateSearchWord(valueSearch);
  }
  resultSearch = await getMovieNextTitle(engWord, page);
  if (resultSearch === "no result") {
    let messageBlock = document.getElementById("messageBlock");
    messageBlock.style.display = "flex";
    messageBlock.firstChild.textContent = "No results for \"Something went wrong\"";
    resultSearch = await getMovieTitle(engWord);
    containerCards.textContent = "";
    paintCardContent(resultSearch);
  } else {
    containerCards.textContent = "";
    paintCardContent(resultSearch);
    hideMessage();
  }
};
