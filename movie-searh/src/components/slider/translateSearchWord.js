export default async (name) => {

  const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=
trnsl.1.1.20200506T125103Z.32345ea450e0122e.3df4ee4ef4b7a06dd5ffa36a2db98bf482b1e54e&text=
${name}&lang=ru-en`;
  try {
    const response = await fetch(url);
    const word = await response.json();
    const wordTranslate = word.text[0];
    return wordTranslate;
  } catch (err) {
    const messageBlock = document.getElementById("messageBlock");
    messageBlock.style.display = "flex";
    messageBlock.firstChild.textContent = "no any result";
    const loadWrap = document.getElementById("loadWrap");
    loadWrap.style.display = "none";
    const buttonSearch = document.getElementById("buttonSearch");
    buttonSearch.style.display = "block";
  }
};