import initSwiper from "../initSwiper/initSwiper";
export default (result) => {
  const containerCards = document.getElementById("containerCards");
  result.forEach(({ Title, Poster, Year, imdbRating, imdbID }) => {
    const card = document.createElement("div");
    card.className = "swiper-slide";
    const linkCard = document.createElement("div");
    linkCard.className = "link-card";
    const textLinkCard = document.createElement("a");
    textLinkCard.className = "text-link-card";
    textLinkCard.textContent = Title;
    textLinkCard.setAttribute("href", `https://www.imdb.com/title/${imdbID}/?ref_=nv_sr_srsg_0`);
    linkCard.append(textLinkCard);
    card.append(linkCard);
    const imgCard = document.createElement("img");
    imgCard.className = "img-card";
    if (Poster === "N/A") {
      imgCard.setAttribute("src", "../../src/assets/img/noPoster.jpg");
    } else {
      imgCard.setAttribute("src", Poster);
    }
    card.append(imgCard);
    const yearMovie = document.createElement("div");
    yearMovie.className = "year-movie";
    const yearMovieText = document.createElement("p");
    yearMovieText.className = "year-movie-text";
    yearMovieText.textContent = Year;
    yearMovie.append(yearMovieText);
    card.append(yearMovie);
    const ratingBlock = document.createElement("div");
    ratingBlock.className = "rating-block";
    const starImg = document.createElement("img");
    starImg.className = "star-img";
    starImg.setAttribute("src", "../../src/assets/img/star.png");
    ratingBlock.append(starImg);
    const ratingValue = document.createElement("div");
    ratingValue.className = "rating-value";
    const ratingValueText = document.createElement("p");
    ratingValueText.className = "rating-value-text";
    ratingValueText.textContent = imdbRating;
    ratingValue.append(ratingValueText);
    ratingBlock.append(ratingValue);
    card.append(ratingBlock);
    containerCards.append(card);
  });
  initSwiper();
};