
export default () => {

  const body = document.getElementsByTagName("body");
  const wrapFooter = document.createElement("div")
  wrapFooter.className = "wrap";
  const footer = document.createElement("footer");
  footer.className = "footer";
  wrapFooter.append(footer);
  const rsContent = document.createElement("div");
  rsContent.className = "rs-content";
  const rsContentText = document.createElement("p");
  rsContentText.textContent = "RS Scool 2020q1";
  rsContent.append(rsContentText);
  footer.append(rsContent);
  const gitContent = document.createElement("div");
  gitContent.className = "git-content";
  const gitIcon = document.createElement("img");
  gitIcon.className = "git-icon";
  gitIcon.setAttribute("src", "../../src/assets/img/github.png");
  gitContent.append(gitIcon);
  const gitContentLink = document.createElement("a");
  gitContentLink.setAttribute("href", "https://github.com/kostyayakimovich");
  gitContentLink.className = "git-content-link";
  gitContentLink.textContent = "Kostya Yakimovich github"
  footer.append(gitContent);
  gitContent.append(gitContentLink);
  body[0].append(wrapFooter);

};