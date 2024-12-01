let projectData = {};
let gitData = {};
let allData = [];

const res = await fetch("data/experienceData.json");
projectData = await res.json();
console.log(projectData);

const response = await fetch("https://api.github.com/users/CreateWebGit/repos");
gitData = await response.json();
console.log(gitData);

//Projects
projectData.projects.map((projectItem) => {
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

console.log("hej");
const cardContainer = document.getElementById("cardContainer");

console.log(projectData.workexperience);

/*
projectData.workexperience.map((projectItem) => {
  gitData.map((gitItem) => {
    const card = document.createElement("div");
    cardContainer.appendChild(card);

    const experienceItemHeader = document.createElement("div");
    experienceItemHeader.classList.add("experienceItemHeader");
    experienceItem.appendChild(experienceItemHeader);

    const experienceTitle = document.createElement("p");
    const titleNode = document.createTextNode(gitItem.name);
    experienceTitle.appendChild(titleNode);
    experienceItemHeader.appendChild(experienceTitle);

    const experienceSchema = document.createElement("span");
    const schemaNode = document.createTextNode(item.schema);
    experienceSchema.appendChild(item.schemaNode);
    experienceItemHeader.appendChild(experienceSchema);

    const experienceItemBody = document.createElement("div");
    experienceItemBody.classList.add("experienceItemBody");
    experienceItem.appendChild(experienceItemBody);

    const companyLocationContainer = document.createElement("div");
    companyLocationContainer.classList.add("companyLocationContainer");
    experienceItemBody.appendChild(companyLocationContainer);

    const itemGroupFirst = document.createElement("div");
    itemGroupFirst.classList.add("itemGroupFirst");
    companyLocationContainer.appendChild(itemGroupFirst);

    const iconFirst = document.createElement("img");
    itemGroupFirst.appendChild(iconFirst);
    iconFirst.src = "/images/icons/mdi_office-building.svg";

    const company = document.createElement("p");
    const companyNode = document.createTextNode(item.company);
    company.appendChild(companyNode);
    itemGroupFirst.appendChild(company);

    const itemGroupSecound = document.createElement("div");
    itemGroupSecound.classList.add("itemGroupFirst");
    companyLocationContainer.appendChild(itemGroupSecound);

    const iconSecound = document.createElement("img");
    itemGroupSecound.appendChild(iconSecound);
    iconSecound.src = "/images/icons/carbon_location.svg";

    const location = document.createElement("p");
    const locationNode = document.createTextNode(item.location);
    location.appendChild(locationNode);
    itemGroupSecound.appendChild(location);

    const itemGroupThird = document.createElement("div");
    itemGroupThird.classList.add("itemGroupFirst");
    companyLocationContainer.appendChild(itemGroupThird);

    const iconThird = document.createElement("img");
    itemGroupThird.appendChild(iconThird);
    iconThird.src = "/images/icons/carbon_location.png";

    const dates = document.createElement("p");
    const datesNode = document.createTextNode(
      `${item.startDate} - ${item.endDate}`
    );
    dates.appendChild(datesNode);
    itemGroupThird.appendChild(dates);
  });
});

*/
