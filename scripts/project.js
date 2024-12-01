let gitData = {};

const response = await fetch("https://api.github.com/users/CreateWebGit/repos");
gitData = await response.json();

const loader = document.getElementById("loader");

function showLoader() {
  loader.classList.add("showLoader");
}

function hideLoader() {
  loader.classList.remove("showLoader");
}

function getData() {
  showLoader();
  fetch("data/experienceData.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setTimeout(renderData, 1000);
      function renderData() {
        hideLoader();
        createProjectHTMLdata(data.projects);
      }
    })
    .catch((err) => console.log("fetch() failed"));
}

getData();

//Projects
function createProjectHTMLdata(data) {
  data.map((projectItem) => {
    gitData.map((gitItem) => {
      if (projectItem.name == gitItem.name) {
        const cardContainer = document.getElementById("cardContainer");

        const card = document.createElement("div");
        card.classList.add("card");
        cardContainer.appendChild(card);

        const cardImage = document.createElement("div");
        cardImage.classList.add("cardImage");
        card.appendChild(cardImage);
        cardImage.style.background = `url(${projectItem.image}) top no-repeat`;
        cardImage.style.backgroundSize = "cover";

        const cardMain = document.createElement("div");
        cardMain.classList.add("cardMain");
        card.appendChild(cardMain);

        const cardTitle = document.createElement("H2");
        cardMain.appendChild(cardTitle);
        const titleNode = document.createTextNode(gitItem.name);
        cardTitle.appendChild(titleNode);
        cardMain.appendChild(cardTitle);

        const cardDescription = document.createElement("P");
        cardMain.appendChild(cardDescription);
        const descriptionNode = document.createTextNode(gitItem.description);
        cardDescription.appendChild(descriptionNode);
        cardMain.appendChild(cardDescription);

        const cardFooter = document.createElement("div");
        cardFooter.classList.add("cardFooter");
        card.appendChild(cardFooter);

        const linkPrevContainer = document.createElement("div");
        linkPrevContainer.classList.add("linkItem");
        cardFooter.appendChild(linkPrevContainer);

        const iconPrev = document.createElement("img");
        iconPrev.src = "/images/icons/akar-icons_link-chain.png";
        linkPrevContainer.appendChild(iconPrev);

        const linkPrev = document.createElement("a");
        const linkPrevNode = document.createTextNode("Live Preview");
        linkPrev.appendChild(linkPrevNode);
        linkPrev.href = gitItem.homepage;
        linkPrevContainer.appendChild(linkPrev);

        const linkGitContainer = document.createElement("div");
        linkGitContainer.classList.add("linkItem");
        cardFooter.appendChild(linkGitContainer);

        const iconGit = document.createElement("img");
        iconGit.src = "/images/icons/akar-icons_github-fill.png";
        linkGitContainer.appendChild(iconGit);

        const linkGit = document.createElement("a");
        const linkGitNode = document.createTextNode("View Code");
        linkGit.appendChild(linkGitNode);
        linkGit.href = gitItem.html_url;
        linkGitContainer.appendChild(linkGit);
      }
    });
  });
}

const cardContainer = document.getElementById("cardContainer");
