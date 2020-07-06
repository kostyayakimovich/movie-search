import paintCard from "./paintCard";
import paintCardAfterSearch from "./paintCardAfterSearch";
import paintCardAfterClickArrow from "./paintCardAfterClickArrow";

export default () => {
  const body = document.getElementsByTagName("body");
  const sliderWrap = document.createElement("div");
  sliderWrap.className = "wrap";
  body[0].append(sliderWrap);
  const slider = document.createElement("div");
  slider.className = "slider";
  sliderWrap.append(slider);
  slider.setAttribute("id", "slider");
  const sliderContent = document.createElement("div");
  sliderContent.className = "swiper-container";
  sliderContent.setAttribute("id", "sliderContent");
  slider.append(sliderContent);
  const containerCards = document.createElement("div");
  containerCards.className = "swiper-wrapper";
  containerCards.setAttribute("id", "containerCards");
  sliderContent.append(containerCards);
  const swiperPagination = document.createElement("div");
  swiperPagination.className = "swiper-pagination";
  sliderContent.append(swiperPagination);
  const swiperButtonNext = document.createElement("div");
  swiperButtonNext.className = "swiper-button-next";
  sliderContent.append(swiperButtonNext);
  const swiperButtonPrev = document.createElement("div");
  swiperButtonPrev.className = "swiper-button-prev";
  sliderContent.append(swiperButtonPrev);
  paintCard();
  paintCardAfterSearch();

  let countPage = 1;
  const buttonSearch = document.getElementById("buttonSearch");
  buttonSearch.addEventListener("click", () => {
    countPage = 1;
  });
  slider.addEventListener("mouseover", () => {

    let isDisabledButtonNext = swiperButtonNext.getAttribute("aria-disabled");
    let isDisabledButtonPrev = swiperButtonPrev.getAttribute("aria-disabled");


    if (isDisabledButtonNext === "true") {
      countPage += 1;
      containerCards.textContent = "";
      paintCardAfterClickArrow(countPage);

    }
    if (isDisabledButtonPrev === "true") {
      countPage -= 1;
      if (countPage > 0) {
        containerCards.textContent = "";
        paintCardAfterClickArrow(countPage);
      } else {
        countPage = 1;
      }
    }



  });
};