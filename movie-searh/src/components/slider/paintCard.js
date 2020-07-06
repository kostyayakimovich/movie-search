
import getMovieTitle from "../getData/getMovieTitle";
import paintCardContent from "./paintCardContent";
import hideMessage from "./hideMessage";
export default async () => {
  const messageBlock = document.getElementById("messageBlock");
  messageBlock.style.display = "none";
  let resultSearch = await getMovieTitle("lion");
  paintCardContent(resultSearch);
  hideMessage();

};