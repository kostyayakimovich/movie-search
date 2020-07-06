const apikey = 'fc64a93b';
const baseUrl = `https://www.omdbapi.com/?apikey=${apikey}`;
const fetchDetails = async (imdbID) => {
  const response = await fetch(`${baseUrl}&i=${imdbID}`);
  const details = await response.json();
  return details;
}

export default async (name) => {
  const url = `${baseUrl}&s=${name}`;
  try {
    const response = await fetch(url);
    const { Search } = await response.json();
    const data = [];

    for (let i = 0; i < Search.length; i++) {
      const details = await fetchDetails(Search[i].imdbID);
      data.push(details);
    }
    return data;
  } catch (err) {

    const messageBlock = document.getElementById("messageBlock");
    messageBlock.style.display = "flex";
    const loadWrap = document.getElementById("loadWrap");
    loadWrap.style.display = "none";
    const buttonSearch = document.getElementById("buttonSearch");
    buttonSearch.style.display = "block";
  }
};

