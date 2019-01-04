/* A small business wants to keep track of its employees and the computers that they use. Each employee is assigned to a department, and they each get assigned a computer when they join the company.

- Build arrays of objects that represent Employees, Departments, and Computers.
- Assign every resource a unique id property.
- Assign each employee to a department using a foreign key.
- Assign each employee a computer using a foreign key.

Once your data is normalized, use your DOM skills to display a card for each employee. It should display the employee name, the name of their department, and which computer they are using. */


let employeeContainer = document.querySelector("#employees");
employeeContainer.innerHTML = "<h1>List of Employees</h1>";

fetch("http://localhost:8088/employees")
   .then(response => response.json())
   .then(employeeArray => {
    employeeArray.forEach(employee => {
        let newArticle = document.createElement("article");
        employeeContainer.appendChild(newArticle);
        newArticle.setAttribute("class", "employee");

        let header = document.createElement("header");
        newArticle.appendChild(header);
        header.setAttribute("class", "employee_name");
        header.innerHTML = `<h1>${employee.name}</h1>`;

        let deptSect = document.createElement("section");
        employeeContainer.appendChild(deptSect);
        deptSect.setAttribute("class", "employee_department");
        fetch(`http://localhost:8088/departments/?deptId=${employee.deptId}`)
            .then(response => response.json())
            .then(deptArray => {
            deptArray.forEach(department => {
                deptSect.innerHTML = `Works in the ${department.name} department`;
            });
            })

        let compSect = document.createElement("section");
        employeeContainer.appendChild(compSect);
        compSect.setAttribute("class", "employee_computer");
        fetch(`http://localhost:8088/computers/?compId=${employee.compId}`)
            .then(response => response.json())
            .then(compArray => {
            compArray.forEach(computer => {
                compSect.innerHTML = `Currently using a ${computer.year} ${computer.name}`;
            });
            })
      })
    });



/*
<article class="employee">
    <header class="employee__name">
        <h1>Rainu Ittycheriah</h1>
    </header>
    <section class="employee__department">
        Works in the IT department
    </section>
    <section class="employee__computer">
        Currently using a 2015 MacBook Pro
    </section>
</article>
*/