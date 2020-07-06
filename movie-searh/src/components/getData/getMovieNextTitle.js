const apikey = 'fc64a93b';
const baseUrl = `https://www.omdbapi.com/?apikey=${apikey}`;

const fetchDetails = async (imdbID) => {
  const response = await fetch(`${baseUrl}&i=${imdbID}`);
  const details = await response.json();
  return details;
}

export default async (name, numberPage) => {
  const url = `https://www.omdbapi.com/?s=${name}&page=${numberPage}&apikey=${apikey}`;

  try {
    const response = await fetch(url);
    const { Search } = await response.json();
    const data = [];

    for (let i = 0; i < Search.length; i++) {
      const details = await fetchDetails(Search[i].imdbID);
      data.push(details);
    }
    return data;
  }
  catch{
    let noResult = "no result";
    return noResult;
  }

};

