let projectData = {};
let gitData = {};

const res = await fetch("data/experienceData.json");
projectData = await res.json();
console.log(projectData);
console.log("haha");

const response = await fetch("https://api.github.com/users/kaj-olason/repos");
gitData = await response.json();
console.log(gitData);
console.log(projectData.workexperience);
console.log("hej");

const experienceContainer = document.getElementById("experienceContainer");

projectData.workexperience.map((item) => {
  const experienceItem = document.createElement("div");
  experienceItem.classList.add("experienceItem");
  experienceContainer.appendChild(experienceItem);

  const experienceItemHeader = document.createElement("div");
  experienceItemHeader.classList.add("experienceItemHeader");
  experienceItem.appendChild(experienceItemHeader);

  const experienceTitle = document.createElement("p");
  const titleNode = document.createTextNode(item.title);
  experienceTitle.appendChild(titleNode);
  experienceItemHeader.appendChild(experienceTitle);

  const experienceSchema = document.createElement("span");
  const schemaNode = document.createTextNode(item.schema);
  experienceSchema.appendChild(schemaNode);
  experienceItemHeader.appendChild(experienceSchema);

  const experienceItemBody = document.createElement("div");
  experienceItemBody.classList.add("experienceItemBody");
  experienceItem.appendChild(experienceItemBody);

  const companyLocationContainer = document.createElement("div");
  companyLocationContainer.classList.add("companyLocationContainer");
  experienceItemBody.appendChild(companyLocationContainer);

  const itemGroupFirst = document.createElement("div");
  itemGroupFirst.classList.add("itemGroup");
  companyLocationContainer.appendChild(itemGroupFirst);

  const iconFirst = document.createElement("img");
  itemGroupFirst.appendChild(iconFirst);
  iconFirst.src = "/images/icons/mdi_office-building.svg";

  const company = document.createElement("p");
  const companyNode = document.createTextNode(item.company);
  company.appendChild(companyNode);
  itemGroupFirst.appendChild(company);

  const itemGroupSecound = document.createElement("div");
  itemGroupSecound.classList.add("itemGroup");
  companyLocationContainer.appendChild(itemGroupSecound);

  const iconSecound = document.createElement("img");
  itemGroupSecound.appendChild(iconSecound);
  iconSecound.src = "/images/icons/carbon_location.svg";

  const location = document.createElement("p");
  const locationNode = document.createTextNode(item.location);
  location.appendChild(locationNode);
  itemGroupSecound.appendChild(location);

  const itemGroupThird = document.createElement("div");
  itemGroupThird.classList.add("itemGroup");
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

const educationContainer = document.getElementById("educationContainer");

projectData.education.map((item) => {
  const experienceItem = document.createElement("div");
  experienceItem.classList.add("experienceItem");
  educationContainer.appendChild(experienceItem);

  const experienceItemHeader = document.createElement("div");
  experienceItemHeader.classList.add("experienceItemHeader");
  experienceItem.appendChild(experienceItemHeader);

  const experienceTitle = document.createElement("p");
  const titleNode = document.createTextNode(item.title);
  experienceTitle.appendChild(titleNode);
  experienceItemHeader.appendChild(experienceTitle);

  const schemaInfoContainer = document.createElement("div");
  schemaInfoContainer.classList.add("schemaInfoContainer");
  experienceItemHeader.appendChild(schemaInfoContainer);

  const experienceSchema = document.createElement("span");
  const schemaNode = document.createTextNode(item.schema);
  experienceSchema.appendChild(schemaNode);
  schemaInfoContainer.appendChild(experienceSchema);

  const infoContainerFilter = document.createElement("div");
  infoContainerFilter.classList.add("infoContainerFilter");
  educationContainer.appendChild(infoContainerFilter);

  const infoContainer = document.createElement("div");
  infoContainer.classList.add("infoContainer");
  infoContainerFilter.appendChild(infoContainer);

  const infoClose = document.createElement("div");
  infoClose.classList.add("infoClose");
  infoContainer.appendChild(infoClose);
  const infoCloseNode = document.createTextNode("X");
  infoClose.appendChild(infoCloseNode);
  infoClose.addEventListener("click", () => {
    infoContainerFilter.classList.remove("showInfo");
  });

  const infoNode = document.createTextNode(item.info);
  infoContainer.appendChild(infoNode);

  const iconInfo = document.createElement("img");
  iconInfo.src = "/images/icons/info.svg";
  iconInfo.classList.add("iconInfo");
  schemaInfoContainer.appendChild(iconInfo);
  iconInfo.addEventListener("click", () => {
    infoContainerFilter.classList.add("showInfo");
  });

  const experienceItemBody = document.createElement("div");
  experienceItemBody.classList.add("experienceItemBody");
  experienceItem.appendChild(experienceItemBody);

  const companyLocationContainer = document.createElement("div");
  companyLocationContainer.classList.add("companyLocationContainer");
  experienceItemBody.appendChild(companyLocationContainer);

  const itemGroupFirst = document.createElement("div");
  itemGroupFirst.classList.add("itemGroup");
  companyLocationContainer.appendChild(itemGroupFirst);

  const iconFirst = document.createElement("img");
  itemGroupFirst.appendChild(iconFirst);
  iconFirst.src = "/images/icons/mdi_office-building.svg";

  const company = document.createElement("p");
  const companyNode = document.createTextNode(item.school);
  company.appendChild(companyNode);
  itemGroupFirst.appendChild(company);

  const itemGroupSecound = document.createElement("div");
  itemGroupSecound.classList.add("itemGroup");
  companyLocationContainer.appendChild(itemGroupSecound);

  const iconSecound = document.createElement("img");
  itemGroupSecound.appendChild(iconSecound);
  iconSecound.src = "/images/icons/carbon_location.svg";

  const location = document.createElement("p");
  const locationNode = document.createTextNode(item.location);
  location.appendChild(locationNode);
  itemGroupSecound.appendChild(location);

  const itemGroupThird = document.createElement("div");
  itemGroupThird.classList.add("itemGroup");
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
