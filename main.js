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

let makeText = (elementType, innerText, className) => {
  let element = document.createElement(elementType);
  let text = document.createTextNode(innerText);
  element.appendChild(text);
  if (className !== undefined) {
    element.className = className;
  }
  return element;
};

let makeAnchor = (innerText, href, className, setTarget) => {
  let aTag = document.createElement("a");
  aTag.href = href;
  if (className !== undefined) {
    aTag.className = className;
  }
  if (setTarget !== undefined) {
    aTag.target = setTarget;
  }
  let text = document.createTextNode(innerText);
  loadElement(text, aTag);
  return aTag;
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

let getRandomItem = (arr) => {
  // Ensure the array is not empty
  if (arr.length === 0) return undefined;

  // Generate a random index based on the array length
  const randomIndex = Math.floor(Math.random() * arr.length);

  // Return the item at the random index
  return arr[randomIndex];
};

let makeAudioPlayer = (musicArray) => {
  let randomSong = getRandomItem(musicArray);
  let audioContainer = makeContainerClass("audio-player");
  let audio = document.createElement("audio");
  audio.id = "audio";
  audio.controls = true;
  audio.autoplay = true;
  let source = document.createElement("source");
  source.src = randomSong.directory;
  source.type = "audio/mp3";
  loadElement(source, audio);
  let textNode = document.createTextNode(
    "Your browser does not support this audio."
  );
  loadElement(textNode, audio);
  loadElement(audio, audioContainer);
  loadElement(
    makeAnchor(`${randomSong.song}🔗`, randomSong.href, "song-title", "_blank"),
    audioContainer
  );
  return audioContainer;
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

let music = [
  {
    directory: "assets/music/sleepwalker.mp3",
    song: "ILLENIUM - Sleepwalker ft. Joni Fatora",
    href: "https://www.youtube.com/watch?v=lhVykHuCpyo",
  },
  {
    directory: "assets/music/getjinxed.mp3",
    song: "Get Jinxed (ft. Djerv) | Official Music Video - League of Legends",
    href: "https://www.youtube.com/watch?v=0nlJuwO0GDs",
  },
  {
    directory: "assets/music/gwimbly.mp3",
    song: "Space Wizard - Gwimbly's Revenge",
    href: "https://www.youtube.com/watch?v=vIZb7u_9WgE",
  },
  {
    directory: "assets/music/2hands.mp3",
    song: "Tate McRae - 2 hands (Official Video)",
    href: "https://www.youtube.com/watch?v=cr4wnsLI_Xw",
  },
  {
    directory: "assets/music/shakin.mp3",
    song: "Eddie Money - Shakin'",
    href: "https://www.youtube.com/watch?v=2tcD_dVcXE4",
  },
];

loadBody(makeNavBar("JP Trainer", navLinks));
loadBody(makeContainerID("main"));
loadElementID(makeAudioPlayer(music), "main");
loadElementID(makeText("h1", "jp trainer", "title"), "main");
