export function createEmployeeBlock(employee) {
  const employeeBlock = document.createElement("div");
  employeeBlock.className = "userBlock";

  const img = document.createElement("img");
  img.src = `/assets/images/employees/${employee.image}`;
  img.alt = `Image of LUXE employee ${employee.name} ${employee.surname}`;
  img.className = "userImage";
  employeeBlock.appendChild(img);

  const name = document.createElement("h3");
  name.textContent = `${employee.name} ${employee.surname}`;
  employeeBlock.appendChild(name);

  const role = document.createElement("p");
  role.textContent = employee.role;
  employeeBlock.appendChild(role);

  return employeeBlock;
}
