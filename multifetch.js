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
