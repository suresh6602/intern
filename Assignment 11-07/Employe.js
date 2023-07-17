// Write a program by creating an 'Employee' class having the following methods and
// print the final salary.
// 1 - 'getInfo()' which takes the salary, number of hours of work per day of the employee
// as a parameter
// 2 - 'AddSal()' which adds $10 to the salary of the employee if it is less than $500.
// 3 - 'AddWork()' which adds $5 to the salary of an employee if the number of hours of
// work per day is more than 6 hours.



class Employee {
    constructor(name, salary, hoursWorked) {
      this.name = name;
      this.salary = salary;
      this.hoursWorked = hoursWorked;
    }
  
    getInfo() {
      console.log("Employee Name: " + this.name);
      console.log("Salary: $" + this.salary);
      console.log("Hours Worked: " + this.hoursWorked);
    }
  
    addSal() {
      if (this.salary < 500) {
        this.salary += 10;
        console.log("Salary increased by $10");
      } else {
        console.log("Salary is not eligible for an increase");
      }
    }
  
    addWork() {
      if (this.hoursWorked > 6) {
        this.salary += 5;
        console.log("Salary increased by $5 for working more than 6 hours");
      } else {
        console.log("Hours worked are not eligible for a salary increase");
      }
    }
  }
  
  // Example usage:
  var employee = new Employee("John Doe", 450, 8);
  
  employee.getInfo(); // Display initial employee information
  
  employee.addSal(); // Increase salary based on condition
  employee.addWork(); // Increase salary based on condition
  
  employee.getInfo(); // Display updated employee information
  