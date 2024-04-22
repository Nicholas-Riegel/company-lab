let missionBriefings = [];

fetch('/medic-elite/missions-data')
  .then(response => response.json())
  .then(data => {
    missionBriefings = data;
  })
  .catch(error => {
    console.error('Error fetching mission briefings:', error);
  });

  function loadMissionDetails(linkElement) {
    const index = linkElement.getAttribute('data-index');
    const mission = missionBriefings[index];
  
    if (mission) {
      const teamMembers = mission.teamMembersPresent.split(',').map(member => member.trim());
      const detailsHtml = `
        <h2>${mission.date}</h2>
        <h3>Client: ${mission.client}</h3>
        <p><strong>Response Level:</strong> ${mission.responseLevel}</p>
        <p><strong>Incident Overview:</strong> ${mission.incidentOverview}</p>
        <p><strong>Treatment Provided:</strong> ${mission.treatmentProvided}</p>
        <p><strong>Team Members Present:</strong> ${teamMembers.join(', ')}</p>
        <img src="${mission.image}" alt="Mission Image">
      `;
  
      document.getElementById('missionDetails').innerHTML = detailsHtml;
    } else {
      console.log('Mission briefings not loaded yet.');
    }
  }