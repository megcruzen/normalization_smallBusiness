/* A small business wants to keep track of its employees and the computers that they use. Each employee is assigned to a department, and they each get assigned a computer when they join the company.

- Build arrays of objects that represent Employees, Departments, and Computers.
- Assign every resource a unique id property.
- Assign each employee to a department using a foreign key.
- Assign each employee a computer using a foreign key.

Once your data is normalized, use your DOM skills to display a card for each employee. It should display the employee name, the name of their department, and which computer they are using. */


let employeeContainer = document.querySelector("#employees");
employeeContainer.innerHTML = "<h1>List of Employees</h1>";

fetch("http://localhost:8088/employees?_expand=department&_expand=computer")
   .then(response => response.json())
   .then(employeeArray => {
    employeeArray.forEach(employee => {
        let employeeCard = `
        <article class="employee">
            <header class="employee_name">
                <h1>${employee.name}</h1>
            </header>
            <section class="employee_department">
                Works in the ${employee.department.name} department
            </section>
            <section class="employee_computer">
                Currently using a ${employee.computer.year} ${employee.computer.name}
            </section>
        </article>`
        employeeContainer.innerHTML += employeeCard;
      })
    });

