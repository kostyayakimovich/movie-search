export default () => {
  const header = document.createElement("header");
  header.className = "header";
  const textHeader = document.createElement("h1");
  textHeader.textContent = "movie search";
  textHeader.className = "textHeader";
  header.append(textHeader);
  const theme = document.createElement("a");
  theme.className = "theme";
  theme.setAttribute("id", "theme");
  theme.textContent = "white theme";
  header.append(theme);
  const wrapHeader = document.createElement("div");
  wrapHeader.className = "wrap"
  wrapHeader.append(header);
  const body = document.getElementsByTagName("body");
  body[0].append(wrapHeader);

  theme.addEventListener("click", () => {
    if (theme.textContent === "white theme") {
      body[0].style.backgroundColor = "#ffffff";
      body[0].style.color = "rgb(105, 96, 80)";
      theme.textContent = "dark theme";

    } else {
      body[0].style.backgroundColor = "rgb(105, 96, 80)";
      body[0].style.color = "#ffffff";
      theme.textContent = "white theme";

    }
  });
};