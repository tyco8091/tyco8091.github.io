// Problem 1
const employees = [
  { firstName: "Sam", department: "Tech", designation: "Manager", salary: 40000, raiseEligible: true },
  { firstName: "Mary", department: "Finance", designation: "Trainee", salary: 18500, raiseEligible: true },
  { firstName: "Bill", department: "HR", designation: "Executive", salary: 21200, raiseEligible: false }
];

console.log("Problem 1 - Employees JSON:", [...employees]);

// Problem 2
const company = {
  companyName: "Tech Stars",
  website: "www.techstars.site",
  employees: employees
};

console.log("Problem 2 - Company JSON:", company);

// Add a new employee
const newEmployee = { firstName: "Anna", department: "Tech", designation: "Executive", salary: 25600, raiseEligible: false };
company.employees.push(newEmployee);

// Problem 3
let totalSalary = 0;
company.employees.forEach(employee => {
  totalSalary += employee.salary;
});
console.log("Problem 3 - Total salary for all employees:", totalSalary);

// Problem 4
company.employees.forEach(employee => {
  if (employee.raiseEligible) {
    employee.salary *= 1.1;
    employee.raiseEligible = false;
  }
});

console.log("Problem 4 - Company JSON after raising salaries:", company);


// Problem 5
const employeesWorkingFromHome = ['Anna', 'Sam'];
company.employees.forEach(employee => {
  employee.wfh = employeesWorkingFromHome.includes(employee.firstName);
});
console.log("Problem 5 - Company JSON after updating 'wfh' property:", company);

// Problem 6
console.log("Problem 6 - Employees working from home:", company.employees.filter(employee => employee.wfh).map(employee => employee.firstName));
