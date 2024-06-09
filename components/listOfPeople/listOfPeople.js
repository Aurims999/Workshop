import { createEmployeeBlock } from "./../../utils/dataRendering.js";

/* === Page elements === */
const list_executiveOfficers = document.getElementById("executiveOfficers");
const list_boardMembers = document.getElementById("boardMembers");
const list_managers = document.getElementById("managers");
const list_architects = document.getElementById("architects");

const executiveOfficers = await fetch("./../../data/executive_officers.json")
  .then((response) => response.json())
  .then((executiveOfficers) => {
    var data = [];
    executiveOfficers.officers.forEach((officer) => {
      data.push(officer);
    });
    return data;
  })
  .catch((error) => console.error("Error loading JSON: ", error));

const boardMembers = await fetch("./../../data/board_members.json")
  .then((response) => response.json())
  .then((members) => {
    var data = [];
    members.members.forEach((member) => {
      data.push(member);
    });
    return data;
  })
  .catch((error) => console.error("Error loading JSON: ", error));

const managers = await fetch("./../../data/managers.json")
  .then((response) => response.json())
  .then((managers) => {
    var data = [];
    managers.managers.forEach((manager) => {
      data.push(manager);
    });
    return data;
  })
  .catch((error) => console.error("Error loading JSON: ", error));

const architects = await fetch("./../../data/architects.json")
  .then((response) => response.json())
  .then((architects) => {
    var data = [];
    architects.architects.forEach((architect) => {
      data.push(architect);
    });
    return data;
  })
  .catch((error) => console.error("Error loading JSON: ", error));
/* ===================== */

executiveOfficers.forEach((officer) => {
  const userBlock = createEmployeeBlock(officer);
  list_executiveOfficers.appendChild(userBlock);
});

boardMembers.forEach((member) => {
  const userBlock = createEmployeeBlock(member);
  list_boardMembers.appendChild(userBlock);
});

managers.forEach((manager) => {
  const userBlock = createEmployeeBlock(manager);
  list_managers.appendChild(userBlock);
});

architects.forEach((architect) => {
  const userBlock = createEmployeeBlock(architect);
  list_architects.appendChild(userBlock);
});
