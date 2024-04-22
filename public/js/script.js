// Fetch mission briefings
let missionBriefings = [];
fetch("/missions-data")
  .then((response) => response.json())
  .then((data) => {
    missionBriefings = data;
  })
  .catch((error) => {
    console.error("Error fetching mission briefings:", error);
  });

function loadMissionDetails(linkElement) {
  const index = linkElement.getAttribute("data-index");
  const mission = missionBriefings[index];
  if (mission) {
    const teamMembers = mission.teamMembersPresent
      .split(",")
      .map((member) => member.trim());
    const detailsHtml = `
      <h2>${mission.date}</h2>
      <h3>Client: ${mission.client}</h3>
      <p><strong>Response Level:</strong> ${mission.responseLevel}</p>
      <p><strong>Incident Overview:</strong> ${mission.incidentOverview}</p>
      <p><strong>Treatment Provided:</strong> ${mission.treatmentProvided}</p>
      <p><strong>Team Members Present:</strong> ${teamMembers.join(", ")}</p>
      <img src="${mission.image}" alt="Mission Image">
    `;
    document.getElementById("missionDetails").innerHTML = detailsHtml;
  } else {
    console.log("Mission briefings not loaded yet.");
  }
}

// Fetch employee data
let employees = [];
fetch("/employees-data")
  .then((response) => response.json())
  .then((data) => {
    employees = data;
  })
  .catch((error) => {
    console.error("Error fetching employees:", error);
  });

function loadEmployeeDetails(linkElement) {
  const index = linkElement.getAttribute("data-index");
  const employee = employees[index];
  if (employee) {
    const detailsHtml = `
      <h2>${employee.name}</h2>
      <div class="employee-info">
        <img src="${employee.image}" alt="${employee.name}" width="200">
        <ul>
          <li><strong>Employee ID#</strong> ${employee.employeeID}</li>
          <li><strong>Position:</strong> ${employee.position}</li>
          <li><strong>Email:</strong> ${employee.email}</li>
          <li><strong>Specialty:</strong> ${employee.specialty}</li>
        </ul>
      </div>
    `;
    document.getElementById("employeeDetails").innerHTML = detailsHtml;
  } else {
    console.log("Employees not loaded yet.");
  }
}

// Slideshow functionality
window.onload = function () {
  let slideIndex = 0;
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  function showSlide(n) {
    slides.forEach((slide, index) => {
      if (index === n) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  showSlide(currentSlide);
  setInterval(nextSlide, 5000);
};