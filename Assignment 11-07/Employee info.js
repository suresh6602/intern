class Employee{
    constructor(name,yearofjoining,salary,address){
        this.name=name;
        this.yearofjoining=yearofjoining;
        this.salary=salary;
        this.address=address;
    
    }
    printInfo() {
        console.log("Name:", this.name);
        console.log("Year of Joining:", this.yearOfJoining);
        console.log("Salary:", this.salary);
        console.log("Address:", this.address);
        console.log("---------------------------------");
      }
    }
    
    // Creating instances of Employee
    const employee1 = new Employee("John Doe", 2018, 50000, "123 Main St");
    const employee2 = new Employee("Jane Smith", 2015, 60000, "456 Elm St");
    const employee3 = new Employee("Bob Johnson", 2020, 45000, "789 Oak St");
    
    // Printing employee information
    employee1.printInfo();
    employee2.printInfo();
    employee3.printInfo();

