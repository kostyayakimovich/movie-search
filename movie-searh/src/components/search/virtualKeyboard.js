/* eslint-disable max-len */
export default () => {
  const valuesFistRow = [
    {
      symbol: "ё", symbolEn: "`", extaSymbolEn: "~", keycode: "Backquote"
    },
    {
      symbol: "1", extaSymbol: "!", extaSymbolEn: "!", keycode: "Digit1"
    },
    {
      symbol: "2",

      extaSymbol: "@",
      extaSymbolEn: "@",
      keycode: "Digit2"
    },
    {
      symbol: "3", extaSymbol: "№", extaSymbolEn: "#", keycode: "Digit3"
    },
    {
      symbol: "4", extaSymbol: ";", extaSymbolEn: "$", keycode: "Digit4"
    },
    {
      symbol: "5", extaSymbol: "%", extaSymbolEn: "%", keycode: "Digit5"
    },
    {
      symbol: "6", extaSymbol: ":", extaSymbolEn: "^", keycode: "Digit6"
    },
    {
      symbol: "7", extaSymbol: "?", extaSymbolEn: "&", keycode: "Digit7"
    },
    {
      symbol: "8", extaSymbol: "*", extaSymbolEn: "*", keycode: "Digit8"
    },
    {
      symbol: "9", extaSymbol: "(", extaSymbolEn: "(", keycode: "Digit9"
    },
    {
      symbol: "0", extaSymbol: ")", extaSymbolEn: ")", keycode: "Digit0"
    },
    {
      symbol: "-", extaSymbol: "_", extaSymbolEn: "_", keycode: "Minus"
    },
    {
      symbol: "=", extaSymbol: "+", extaSymbolEn: "+", keycode: "Equal"
    },
    { symbol: "Backspace", btnSize: 100, keycode: "Backspace" }
  ];
  const valuesSecondRow = [
    { symbol: "Tab", btnSize: 110, keycode: "Tab" },
    { symbol: "й", symbolEn: "q", keycode: "KeyQ" },
    { symbol: "ц", symbolEn: "w", keycode: "KeyW" },
    { symbol: "у", symbolEn: "e", keycode: "KeyE" },
    { symbol: "к", symbolEn: "r", keycode: "KeyR" },
    { symbol: "е", symbolEn: "t", keycode: "KeyT" },
    { symbol: "н", symbolEn: "y", keycode: "KeyY" },
    { symbol: "г", symbolEn: "u", keycode: "KeyU" },
    { symbol: "ш", symbolEn: "i", keycode: "KeyI" },
    { symbol: "щ", symbolEn: "o", keycode: "KeyO" },
    { symbol: "з", symbolEn: "p", keycode: "KeyP" },
    {
      symbol: "х", symbolEn: "[", extaSymbolEn: "{", keycode: "BracketLeft"
    },
    {
      symbol: "ъ", symbolEn: "]", extaSymbolEn: "}", keycode: "BracketRight"
    },
    {
      symbol: "\\",
      extaSymbol: "/",
      extaSymbolEn: "|",
      btnSize: 70,
      keycode: "Backslash"
    }
  ];
  const valuesThirdRow = [
    { symbol: "Capslock", btnSize: 110, keycode: "CapsLock" },
    { symbol: "ф", symbolEn: "a", keycode: "KeyA" },
    { symbol: "ы", symbolEn: "s", keycode: "KeyS" },
    { symbol: "в", symbolEn: "d", keycode: "KeyD" },
    { symbol: "а", symbolEn: "f", keycode: "KeyF" },
    { symbol: "п", symbolEn: "g", keycode: "KeyG" },
    { symbol: "р", symbolEn: "h", keycode: "KeyH" },
    { symbol: "о", symbolEn: "j", keycode: "KeyJ" },
    { symbol: "л", symbolEn: "k", keycode: "KeyK" },
    { symbol: "д", symbolEn: "l", keycode: "KeyL" },
    {
      symbol: "ж", symbolEn: ";", extaSymbolEn: ":", keycode: "Semicolon"
    },
    {
      symbol: "э", symbolEn: "'", extaSymbolEn: "\"", keycode: "Quote"
    },
    { symbol: "Enter", btnSize: 113, keycode: "Enter" }
  ];
  const valuesFourthRow = [
    { symbol: "Shift", btnSize: 140, keycode: "ShiftLeft" },
    { symbol: "я", symbolEn: "z", keycode: "KeyZ" },
    { symbol: "ч", symbolEn: "x", keycode: "KeyX" },
    { symbol: "с", symbolEn: "c", keycode: "KeyC" },
    { symbol: "м", symbolEn: "v", keycode: "KeyV" },
    { symbol: "и", symbolEn: "b", keycode: "KeyB" },
    { symbol: "т", symbolEn: "n", keycode: "KeyN" },
    { symbol: "ь", symbolEn: "m", keycode: "KeyM" },
    {
      symbol: "б", symbolEn: ",", extaSymbolEn: "<", keycode: "Comma"
    },
    {
      symbol: "ю", symbolEn: ".", extaSymbolEn: ">", keycode: "Period"
    },
    {
      symbol: ".",
      extaSymbol: ",",
      symbolEn: "/",
      extaSymbolEn: "?",
      keycode: "Slash"
    },
    { symbol: "▲", keycode: "ArrowUp" },
    { symbol: "Shift", btnSize: 100, keycode: "ShiftRight" }
  ];
  const valuesFifthRow = [
    { symbol: "Ctrl", btnSize: 60, keycode: "ControlLeft" },

    { symbol: "Lang Change", btnSize: 70, keycode: "Lang Change" },
    { symbol: "Alt", keycode: "AltLeft" },
    { symbol: " ", btnSize: 250, keycode: "Space" },
    { symbol: "Alt", keycode: "AltRight" },
    { symbol: "Ctrl", keycode: "ControlRight" },
    { symbol: "◄", keycode: "ArrowLeft" },
    { symbol: "▼", keycode: "ArrowDown" },
    { symbol: "►", keycode: "ArrowRight" },
    { symbol: "menu", btnSize: 60, keycode: "ContextMenu" }
  ];
  // init mains tags
  const virtualKeyboard = document.createElement("div");
  virtualKeyboard.setAttribute("id", "vk");
  virtualKeyboard.className = "vk";
  virtualKeyboard.style.display = "none";
  const info = document.createElement("div");
  info.className = "infoChangeLang";
  const textInfo = document.createElement("p");
  textInfo.className = "textInfoChangeLang";
  textInfo.textContent = "you can switch the language click mause on button Lang Change";
  const textOS = document.createElement("p");
  textOS.className = "textOS";
  textOS.textContent = "made in windows os";
  const body = document.getElementsByTagName("body");
  const wrapKeyboard = document.createElement("div");
  wrapKeyboard.className = "wrap";
  wrapKeyboard.append(virtualKeyboard);
  body[0].append(wrapKeyboard);
  info.append(textInfo);
  info.append(textOS);

  const textarea = document.getElementById("inputSearch");
  const inputWrapper = document.getElementById("inputWrapper");
  const sectionKeyboard = document.createElement("section");
  sectionKeyboard.className = "keyboard_area";
  sectionKeyboard.setAttribute("id", "keyboardArea");
  virtualKeyboard.append(sectionKeyboard);
  virtualKeyboard.append(info);
  const spanExtraBackquote = document.createElement("span");
  spanExtraBackquote.className = "extra_symbol";
  const spanExtraBracketLeft = document.createElement("span");
  spanExtraBracketLeft.className = "extra_symbol";
  const spanExtraBracketRight = document.createElement("span");
  spanExtraBracketRight.className = "extra_symbol";
  const semicolon = document.createElement("span");
  semicolon.className = "extra_symbol";
  const quote = document.createElement("span");
  quote.className = "extra_symbol";
  const comma = document.createElement("span");
  comma.className = "extra_symbol";
  const period = document.createElement("span");
  period.className = "extra_symbol";


  const iconX = document.getElementById("iconX");
  iconX.addEventListener("click", () => {
    textarea.value = "";
  });
  const iconKeyboard = document.getElementById("iconKeyboard");
  let swichKeyboardForApp = false;
  iconKeyboard.addEventListener("click", () => {

    if (virtualKeyboard.style.display === "none") {
      virtualKeyboard.style.display = "";
      swichKeyboardForApp = true;
    }
    else {
      virtualKeyboard.style.display = "none";
      swichKeyboardForApp = false;
    }
  });

  // paint keyboard
  const paintKeyboardArea = (arrayForPaint, classRow, switchLang) => {
    const row = document.createElement("div");
    row.className = `${classRow}`;
    sectionKeyboard.append(row);
    arrayForPaint.forEach((item) => {
      const {
        keycode, btnSize, symbol, extaSymbol, symbolEn, extaSymbolEn
      } = item;
      const button = document.createElement("button");
      button.className = "btn";
      if (keycode === "Backquote") button.setAttribute("id", "btnBackquote");
      if (keycode === "BracketLeft") button.setAttribute("id", "btnBracketLeft");
      if (keycode === "BracketRight") button.setAttribute("id", "btnBracketRight");
      if (keycode === "Semicolon") button.setAttribute("id", "btnSemicolon");
      if (keycode === "Quote") button.setAttribute("id", "btnQuote");
      if (keycode === "Comma") button.setAttribute("id", "btnComma");
      if (keycode === "Period") button.setAttribute("id", "btnPeriod");
      button.setAttribute("value", `${keycode}`);
      if (btnSize) button.style.width = `${btnSize}px`;

      const spanLetter = document.createElement("span");
      const spanExtraSymbol = document.createElement("span");

      if (switchLang) {
        spanLetter.className = "letter";
        spanLetter.innerHTML = symbol;
        button.append(spanLetter);
        if (extaSymbol && symbol) {
          spanExtraSymbol.className = "extra_symbol";
          spanExtraSymbol.innerHTML = extaSymbol;
          button.append(spanExtraSymbol);
        }
      } else {
        spanLetter.className = "letter";
        if (symbolEn) {
          spanLetter.innerHTML = symbolEn;
        } else {
          spanLetter.innerHTML = symbol;
        }

        button.append(spanLetter);
        if (extaSymbolEn) {
          spanExtraSymbol.className = "extra_symbol";
          spanExtraSymbol.innerHTML = extaSymbolEn;
          button.append(spanExtraSymbol);
        }
      }
      row.append(button);
    });
  };
  // check session
  const langFind = sessionStorage.getItem("russian");
  let switchSession = true;
  if (langFind === null || langFind === "russian") {
    switchSession = true;
  } else {
    switchSession = false;
  }
  // paint rows
  paintKeyboardArea(valuesFistRow, "first_row", switchSession);
  paintKeyboardArea(valuesSecondRow, "second_row", switchSession);
  paintKeyboardArea(valuesThirdRow, "third_row", switchSession);
  paintKeyboardArea(valuesFourthRow, "fourth_row", switchSession);
  paintKeyboardArea(valuesFifthRow, "fifth_row", switchSession);

  let shiftOn = false;
  let altOn = false;
  let collectionExtraSymbols;
  let collectionSymbols;
  let capsLockOn = false;

  // get collections letters and extra symbols
  window.addEventListener("load", () => {
    const items = document.getElementsByClassName("letter");
    collectionSymbols = items;
  });

  window.addEventListener("load", () => {
    const items = document.getElementsByClassName("extra_symbol");
    collectionExtraSymbols = items;
  });
  if (swichKeyboardForApp) {
    document.addEventListener("keydown", ({ code }) => {
      const lang = sessionStorage.getItem("language");
      const language = lang === null ? "russian" : lang;
      if (code === "ShiftLeft" || code === "ShiftRight") {
        shiftOn = true;
      }
      if (code === "AltLeft" || code === "AltRight") {
        altOn = true;
      }
      sectionKeyboard.querySelectorAll(".btn").forEach((item) => {
        const {
          value, textContent
        } = item;

        if (value === code) {
          item.classList.add("active");
          if (code === "Backspace" || code === "Enter" || code === "Del") {
            textarea.focus();
          } else if (code === "ControlLeft" || code === "ControlRight"
            || code === "MetaLeft" || code === "AltLeft" || code === "AltRight"
            || code === "ContextMenu"
            || code === "ShiftLeft" || code === "ShiftRight") {
            textarea.blur();
            textarea.value += "";
          } else if (code === "Tab") {
            textarea.blur();
            textarea.value += "     ";
          }
          else if (code === "ArrowLeft" || code === "ArrowRight" || code === "ArrowDown" || code === "ArrowUp") {
            textarea.focus();
            textarea.value += "";
            console.log(textarea.value);
          }
          else if (code === "Space") {
            textarea.blur();
            textarea.value += " ";
          } else if (code === "CapsLock") {
            if (capsLockOn) capsLockOn = false;
            else capsLockOn = true;
          } else if (capsLockOn || shiftOn) {
            textarea.blur();
            if (textContent[1] === undefined) {
              textarea.value += textContent[0].toUpperCase();
            } else { textarea.value += textContent[1]; }
          } else {
            textarea.blur();
            textarea.value += textContent[0];
          }
        }
      });
      if (shiftOn && altOn) {
        if (language === "russian") {
          sessionStorage.setItem("language", "english");

          const btnBackquote = document.getElementById("btnBackquote");
          spanExtraBackquote.innerHTML = valuesFistRow[0].extaSymbolEn;
          btnBackquote.append(spanExtraBackquote);
          const btnBracketLeft = document.getElementById("btnBracketLeft");
          spanExtraBracketLeft.innerHTML = valuesSecondRow[11].extaSymbolEn;
          btnBracketLeft.append(spanExtraBracketLeft);
          const btnBracketRight = document.getElementById("btnBracketRight");
          spanExtraBracketRight.innerHTML = valuesSecondRow[12].extaSymbolEn;
          btnBracketRight.append(spanExtraBracketRight);
          const btnSemicolon = document.getElementById("btnSemicolon");
          semicolon.innerHTML = valuesThirdRow[10].extaSymbolEn;
          btnSemicolon.append(semicolon);
          const btnQuote = document.getElementById("btnQuote");
          quote.innerHTML = valuesThirdRow[11].extaSymbolEn;
          btnQuote.append(quote);
          const btnComma = document.getElementById("btnComma");
          comma.innerHTML = valuesFourthRow[8].extaSymbolEn;
          btnComma.append(comma);
          const btnPeriod = document.getElementById("btnPeriod");
          period.innerHTML = valuesFourthRow[9].extaSymbolEn;
          btnPeriod.append(period);
          const arrExstraSymbols = [...collectionExtraSymbols];
          const arrSymbols = [...collectionSymbols];
          for (let i = 0; i < arrExstraSymbols.length; i += 1) {
            const callbackEtraSymbol = ({ extaSymbol }) => extaSymbol === arrExstraSymbols[i].textContent;
            const firstRow = valuesFistRow.find(callbackEtraSymbol);
            const secondRow = valuesSecondRow.find(callbackEtraSymbol);
            const thirdRow = valuesThirdRow.find(callbackEtraSymbol);
            const fourthRow = valuesFourthRow.find(callbackEtraSymbol);
            if (firstRow && firstRow.extaSymbolEn) {
              collectionExtraSymbols[i].innerHTML = firstRow.extaSymbolEn;
            }
            if (secondRow && secondRow.extaSymbolEn) {
              collectionExtraSymbols[i].innerHTML = secondRow.extaSymbolEn;
            }
            if (thirdRow && thirdRow.extaSymbolEn) {
              collectionExtraSymbols[i].innerHTML = thirdRow.extaSymbolEn;
            }
            if (fourthRow && fourthRow.extaSymbolEn) {
              collectionExtraSymbols[i].innerHTML = fourthRow.extaSymbolEn;
            }
            collectionExtraSymbols[0].innerHTML = valuesFistRow[0].extaSymbolEn;
          }
          for (let i = 0; i < arrSymbols.length; i += 1) {
            const callbackSymbol = ({ symbol }) => symbol === arrSymbols[i].textContent;
            const firstRow = valuesFistRow.find(callbackSymbol);
            const secondRow = valuesSecondRow.find(callbackSymbol);
            const thirdRow = valuesThirdRow.find(callbackSymbol);
            const fourthRow = valuesFourthRow.find(callbackSymbol);
            if (firstRow && firstRow.symbolEn) {
              collectionSymbols[i].innerHTML = firstRow.symbolEn;
            }
            if (secondRow && secondRow.symbolEn) {
              collectionSymbols[i].innerHTML = secondRow.symbolEn;
            }
            if (thirdRow && thirdRow.symbolEn) {
              collectionSymbols[i].innerHTML = thirdRow.symbolEn;
            }
            if (fourthRow && fourthRow.symbolEn) {
              collectionSymbols[i].innerHTML = fourthRow.symbolEn;
            }
          }
        } else {
          sessionStorage.setItem("language", "russian");
          spanExtraBackquote.innerHTML = "";
          spanExtraBracketLeft.innerHTML = "";
          spanExtraBracketRight.innerHTML = "";
          semicolon.innerHTML = "";
          quote.innerHTML = "";
          comma.innerHTML = "";
          period.innerHTML = "";
          const arrExtraSymbolsChange = [...collectionExtraSymbols];
          const arrSymbolsChange = [...collectionSymbols];
          for (let i = 0; i < arrExtraSymbolsChange.length; i += 1) {
            const callbackEtraSymbolEn = ({ extaSymbolEn }) => extaSymbolEn === arrExtraSymbolsChange[i].textContent;
            const firstRow = valuesFistRow.find(callbackEtraSymbolEn);
            const secondRow = valuesSecondRow.find(callbackEtraSymbolEn);
            const thirdRow = valuesThirdRow.find(callbackEtraSymbolEn);
            const fourthRow = valuesFourthRow.find(callbackEtraSymbolEn);
            if (firstRow && firstRow.extaSymbol) {
              collectionExtraSymbols[i].innerHTML = firstRow.extaSymbol;
            }
            if (secondRow && secondRow.extaSymbol) {
              collectionExtraSymbols[i].innerHTML = secondRow.extaSymbol;
            }
            if (thirdRow && thirdRow.extaSymbol) {
              collectionExtraSymbols[i].innerHTML = thirdRow.extaSymbol;
            }
            if (fourthRow && fourthRow.extaSymbol) {
              collectionExtraSymbols[i].innerHTML = fourthRow.extaSymbol;
            }
          }

          for (let i = 0; i < arrSymbolsChange.length; i += 1) {
            const callbackSymbolEn = ({ symbolEn }) => symbolEn === arrSymbolsChange[i].textContent;
            const firstRow = valuesFistRow.find(callbackSymbolEn);
            const secondRow = valuesSecondRow.find(callbackSymbolEn);
            const thirdRow = valuesThirdRow.find(callbackSymbolEn);
            const fourthRow = valuesFourthRow.find(callbackSymbolEn);
            if (firstRow && firstRow.symbol) {
              collectionSymbols[i].innerHTML = firstRow.symbol;
            }
            if (secondRow && secondRow.symbol) {
              collectionSymbols[i].innerHTML = secondRow.symbol;
            }
            if (thirdRow && thirdRow.symbol) {
              collectionSymbols[i].innerHTML = thirdRow.symbol;
            }
            if (fourthRow && fourthRow.symbol) {
              collectionSymbols[i].innerHTML = fourthRow.symbol;
            }
          }
        }
        shiftOn = false;
        altOn = false;
      }
    });

    document.addEventListener("keyup", ({ code }) => {
      textarea.focus();
      sectionKeyboard.querySelectorAll(".btn").forEach((item) => {
        if (item.value === code) {
          item.classList.remove("active");
        }
      });
      if (code === "ShiftLeft" || code === "ShiftRight") {
        shiftOn = false;
      }
      if (code === "AltLeft" || code === "AltRight") {
        altOn = false;
      }
    });

  }

  let codeMouse;

  document.addEventListener("mousedown", (event) => {
    if (event.target.value === undefined) {
      codeMouse = event.target.parentNode.value;
    } else {
      codeMouse = event.target.value;
    }
    const lang = sessionStorage.getItem("language");
    const language = lang === null ? "russian" : lang;
    if (codeMouse === "ShiftLeft" || codeMouse === "ShiftRight" || codeMouse === "Lang Change") {
      shiftOn = true;
    }
    if (codeMouse === "AltLeft" || codeMouse === "AltRight" || codeMouse === "Lang Change") {
      altOn = true;
    }
    sectionKeyboard.querySelectorAll(".btn").forEach((item) => {

      const {
        value, textContent
      } = item;

      if (value === codeMouse) {
        if (codeMouse === "Backspace") {
          textarea.setRangeText("", textarea.selectionStart - 1, textarea.selectionEnd, "end");
        }
        else if (codeMouse === "ArrowLeft") {
          textarea.setRangeText("", textarea.selectionStart - 1, textarea.selectionEnd - 1, "end");
        }
        else if (codeMouse === "ArrowRight") {
          textarea.setRangeText("", textarea.selectionStart + 1, textarea.selectionEnd + 1, "end");
        }
        else if (codeMouse === "ArrowDown" || codeMouse === "ArrowUp") {
          textarea.setRangeText("", textarea.selectionStart, textarea.selectionEnd, "end");
        }
        else if (codeMouse === "Enter") {

          if (textarea.value === "") {
            const loadWrap = document.getElementById("loadWrap");
            loadWrap.style.display = "none";
            const buttonSearch = document.getElementById("buttonSearch");
            buttonSearch.style.display = "block";

          }
          if (virtualKeyboard.style.display === "none") {
            virtualKeyboard.style.display = "";
            swichKeyboardForApp = true;
          }
          else {
            virtualKeyboard.style.display = "none";
            swichKeyboardForApp = false;
          }
          inputWrapper.setAttribute("data-text", textarea.value);
          const buttonSearch = document.getElementById("buttonSearch");
          buttonSearch.click();
          textarea.value += ("\n");

        }
        else if (codeMouse === "ControlLeft" || codeMouse === "ControlRight"
          || codeMouse === "Lang Change" || codeMouse === "AltLeft" || codeMouse === "AltRight"
          || codeMouse === "ContextMenu"
          || codeMouse === "ShiftLeft" || codeMouse === "ShiftRight") {
          textarea.blur();
          textarea.value += "";
        } else if (codeMouse === "Tab") {
          textarea.blur();
          textarea.setRangeText("     ", textarea.selectionStart, textarea.selectionEnd, "end");
        } else if (codeMouse === "Space") {
          textarea.blur();
          textarea.setRangeText(" ", textarea.selectionStart, textarea.selectionEnd, "end");
        } else if (codeMouse === "CapsLock") {
          if (capsLockOn) capsLockOn = false;
          else capsLockOn = true;
        } else if (capsLockOn || shiftOn) {
          textarea.blur();
          if (textContent[1] === undefined) {
            textarea.setRangeText(textContent[0].toUpperCase(), textarea.selectionStart, textarea.selectionEnd, "end");

          } else {
            textarea.setRangeText(textContent[1], textarea.selectionStart, textarea.selectionEnd, "end");

          }
        } else {
          textarea.blur();
          textarea.setRangeText(textContent[0], textarea.selectionStart, textarea.selectionEnd, "end");
        }
      }
    });
    if (shiftOn && altOn) {
      if (language === "russian") {
        sessionStorage.setItem("language", "english");

        const btnBackquote = document.getElementById("btnBackquote");
        spanExtraBackquote.innerHTML = valuesFistRow[0].extaSymbolEn;
        btnBackquote.append(spanExtraBackquote);
        const btnBracketLeft = document.getElementById("btnBracketLeft");
        spanExtraBracketLeft.innerHTML = valuesSecondRow[11].extaSymbolEn;
        btnBracketLeft.append(spanExtraBracketLeft);
        const btnBracketRight = document.getElementById("btnBracketRight");
        spanExtraBracketRight.innerHTML = valuesSecondRow[12].extaSymbolEn;
        btnBracketRight.append(spanExtraBracketRight);
        const btnSemicolon = document.getElementById("btnSemicolon");
        semicolon.innerHTML = valuesThirdRow[10].extaSymbolEn;
        btnSemicolon.append(semicolon);
        const btnQuote = document.getElementById("btnQuote");
        quote.innerHTML = valuesThirdRow[11].extaSymbolEn;
        btnQuote.append(quote);
        const btnComma = document.getElementById("btnComma");
        comma.innerHTML = valuesFourthRow[8].extaSymbolEn;
        btnComma.append(comma);
        const btnPeriod = document.getElementById("btnPeriod");
        period.innerHTML = valuesFourthRow[9].extaSymbolEn;
        btnPeriod.append(period);
        const arrExstraSymbols = [...collectionExtraSymbols];
        const arrSymbols = [...collectionSymbols];
        for (let i = 0; i < arrExstraSymbols.length; i += 1) {
          const callbackEtraSymbol = ({ extaSymbol }) => extaSymbol === arrExstraSymbols[i].textContent;
          const firstRow = valuesFistRow.find(callbackEtraSymbol);
          const secondRow = valuesSecondRow.find(callbackEtraSymbol);
          const thirdRow = valuesThirdRow.find(callbackEtraSymbol);
          const fourthRow = valuesFourthRow.find(callbackEtraSymbol);
          if (firstRow && firstRow.extaSymbolEn) {
            collectionExtraSymbols[i].innerHTML = firstRow.extaSymbolEn;
          }
          if (secondRow && secondRow.extaSymbolEn) {
            collectionExtraSymbols[i].innerHTML = secondRow.extaSymbolEn;
          }
          if (thirdRow && thirdRow.extaSymbolEn) {
            collectionExtraSymbols[i].innerHTML = thirdRow.extaSymbolEn;
          }
          if (fourthRow && fourthRow.extaSymbolEn) {
            collectionExtraSymbols[i].innerHTML = fourthRow.extaSymbolEn;
          }
          collectionExtraSymbols[0].innerHTML = valuesFistRow[0].extaSymbolEn;
        }
        for (let i = 0; i < arrSymbols.length; i += 1) {
          const callbackSymbol = ({ symbol }) => symbol === arrSymbols[i].textContent;
          const firstRow = valuesFistRow.find(callbackSymbol);
          const secondRow = valuesSecondRow.find(callbackSymbol);
          const thirdRow = valuesThirdRow.find(callbackSymbol);
          const fourthRow = valuesFourthRow.find(callbackSymbol);
          if (firstRow && firstRow.symbolEn) {
            collectionSymbols[i].innerHTML = firstRow.symbolEn;
          }
          if (secondRow && secondRow.symbolEn) {
            collectionSymbols[i].innerHTML = secondRow.symbolEn;
          }
          if (thirdRow && thirdRow.symbolEn) {
            collectionSymbols[i].innerHTML = thirdRow.symbolEn;
          }
          if (fourthRow && fourthRow.symbolEn) {
            collectionSymbols[i].innerHTML = fourthRow.symbolEn;
          }
        }
      } else {
        sessionStorage.setItem("language", "russian");
        spanExtraBackquote.innerHTML = "";
        spanExtraBracketLeft.innerHTML = "";
        spanExtraBracketRight.innerHTML = "";
        semicolon.innerHTML = "";
        quote.innerHTML = "";
        comma.innerHTML = "";
        period.innerHTML = "";
        const arrExtraSymbolsChange = [...collectionExtraSymbols];
        const arrSymbolsChange = [...collectionSymbols];
        for (let i = 0; i < arrExtraSymbolsChange.length; i += 1) {
          const callbackEtraSymbolEn = ({ extaSymbolEn }) => extaSymbolEn === arrExtraSymbolsChange[i].textContent;
          const firstRow = valuesFistRow.find(callbackEtraSymbolEn);
          const secondRow = valuesSecondRow.find(callbackEtraSymbolEn);
          const thirdRow = valuesThirdRow.find(callbackEtraSymbolEn);
          const fourthRow = valuesFourthRow.find(callbackEtraSymbolEn);
          if (firstRow && firstRow.extaSymbol) {
            collectionExtraSymbols[i].innerHTML = firstRow.extaSymbol;
          }
          if (secondRow && secondRow.extaSymbol) {
            collectionExtraSymbols[i].innerHTML = secondRow.extaSymbol;
          }
          if (thirdRow && thirdRow.extaSymbol) {
            collectionExtraSymbols[i].innerHTML = thirdRow.extaSymbol;
          }
          if (fourthRow && fourthRow.extaSymbol) {
            collectionExtraSymbols[i].innerHTML = fourthRow.extaSymbol;
          }
        }

        for (let i = 0; i < arrSymbolsChange.length; i += 1) {
          const callbackSymbolEn = ({ symbolEn }) => symbolEn === arrSymbolsChange[i].textContent;
          const firstRow = valuesFistRow.find(callbackSymbolEn);
          const secondRow = valuesSecondRow.find(callbackSymbolEn);
          const thirdRow = valuesThirdRow.find(callbackSymbolEn);
          const fourthRow = valuesFourthRow.find(callbackSymbolEn);
          if (firstRow && firstRow.symbol) {
            collectionSymbols[i].innerHTML = firstRow.symbol;
          }
          if (secondRow && secondRow.symbol) {
            collectionSymbols[i].innerHTML = secondRow.symbol;
          }
          if (thirdRow && thirdRow.symbol) {
            collectionSymbols[i].innerHTML = thirdRow.symbol;
          }
          if (fourthRow && fourthRow.symbol) {
            collectionSymbols[i].innerHTML = fourthRow.symbol;
          }
        }
      }
      shiftOn = false;
      altOn = false;
    }
  });
  document.addEventListener("mouseup", (event) => {
    let codeMouse;
    if (event.target.value === undefined) {
      codeMouse = event.target.parentNode.value;
    } else {
      codeMouse = event.target.value;
    }

    textarea.focus();

    if (codeMouse === "ShiftLeft" || codeMouse === "ShiftRight" || codeMouse === "Lang Change") {
      shiftOn = false;
    }
    if (codeMouse === "AltLeft" || codeMouse === "AltRight" || codeMouse === "Lang Change") {
      altOn = false;
    }
  });
};