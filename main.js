let makeContainerClass = (className) => {
  let elem = document.createElement("div");
  elem.className = className;
  return elem;
};

let makeContainerID = (idName) => {
  let elem = document.createElement("div");
  elem.id = idName;
  return elem;
};

let makeNavBar = (logoText, linksArray) => {
  let nav = document.createElement("nav");
  let navContainer = makeContainerClass("navbar-container");
  loadElement(navContainer, nav);
  let logo = document.createElement("a");
  logo.textContent = logoText;
  logo.href = "#";
  logo.className = "logo";
  loadElement(logo, navContainer);
  let ul = document.createElement("ul");
  ul.className = "nav-links";
  linksArray.forEach((element) => {
    let li = document.createElement("li");
    let aTag = document.createElement("a");
    aTag.textContent = element.text;
    aTag.href = element.href;
    loadElement(aTag, li);
    loadElement(li, ul);
  });
  loadElement(ul, navContainer);
  let hamburger = makeContainerClass("hamburger");
  for (i = 0; i < 3; i++) {
    let span = document.createElement("span");
    span.className = "bar";
    loadElement(span, hamburger);
  }
  loadElement(hamburger, navContainer);
  return nav;
};

let makeText = (elementType, innerText, className) => {
  let element = document.createElement(elementType);
  let text = document.createTextNode(innerText);
  element.appendChild(text);
  if (className !== undefined) {
    element.className = className;
  }
  return element;
};

let loadBody = (element) => {
  document.body.appendChild(element);
};

let loadElement = (element, targetElement) => {
  targetElement.appendChild(element);
};

let loadElementID = (element, idString) => {
  document.getElementById(idString).appendChild(element);
};

let navLinks = [
  { text: "Home", href: "#" },
  { text: "About", href: "#" },
  { text: "Services", href: "#" },
  { text: "Contact", href: "#" },
];

loadBody(makeNavBar("JP Trainer", navLinks));
loadBody(makeContainerID("main"));
loadElementID(makeText("h1", "jp trainer", "title"), "main");
