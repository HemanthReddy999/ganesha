const peopleByYear = {
  "2014": ["Person Name 1", "Person Name 2", "Person Name 3"],
  "2015": ["Person Name 1", "Person Name 2", "Person Name 3"],
  "2016": ["Person Name 1", "Person Name 2", "Person Name 3"],
  "2017": ["Person Name 1", "Person Name 2", "Person Name 3"],
  "2018": ["Person Name 1", "Person Name 2", "Person Name 3"],
  "2019": ["Person Name 1", "Person Name 2", "Person Name 3"],
  "2020": ["Person Name 1", "Person Name 2", "Person Name 3"],
  "2021": ["Person Name 1", "Person Name 2", "Person Name 3"],
  "2022": ["Person Name 1", "Person Name 2", "Person Name 3"],
  "2023": ["Person Name 1", "Person Name 2", "Person Name 3"],
  "2024": ["Person Name 1", "Person Name 2", "Person Name 3"],
  "2025": ["Person Name 1", "Person Name 2", "Person Name 3"],
  "2026": ["కర్రి అప్పారెడ్డి గారి కుమారుడు సత్య సూర్యనారాయణ రెడ్డి", "Person Name 2", "Person Name 3"]
};

const yearsContainer = document.getElementById("years");
const peopleSection = document.getElementById("peopleSection");
const selectedYear = document.getElementById("selectedYear");
const peopleList = document.getElementById("peopleList");
const backButton = document.getElementById("backButton");

Object.keys(peopleByYear).forEach(year => {
  const button = document.createElement("button");
  button.className = "year-button";
  button.textContent = year;
  button.addEventListener("click", () => showYear(year));
  yearsContainer.appendChild(button);
});

function showYear(year) {
  selectedYear.textContent = year;
  peopleList.innerHTML = "";

  peopleByYear[year].forEach(person => {
    const li = document.createElement("li");
    li.textContent = person;
    peopleList.appendChild(li);
  });

  yearsContainer.classList.add("hidden");
  peopleSection.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

backButton.addEventListener("click", () => {
  peopleSection.classList.add("hidden");
  yearsContainer.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});
