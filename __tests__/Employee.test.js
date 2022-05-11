const Employee = require("../lib/Employee");

test("New Employee", ()=> {
    const emp = new Employee();
    expect(typeof(emp)).toBe("object");
});

test("Employee Name constructor", () => {
    const name = "Goofy";
    const emp = new Employee(name);
    expect(emp.name).toBe(name);
});

test("ID constructor", () => {
    const testValue = 100;
    const emp = new Employee("Goofy", testValue);
    expect(emp.id).toBe(testValue);
});

test(" Email constructor", () => {
    const testValue = "test@gmail.com";
    const emp = new Employee("Goofy", 1, testValue);
    expect(emp.email).toBe(testValue);
});

test("Get name via getName()", () => {
    const testValue = "Donald";
    const emp = new Employee(testValue);
    expect(emp.getName()).toBe(testValue);
});

test("Get ID via getId()", () => {
    const testValue = 61;
    const emp = new Employee("Goofy", testValue);
    expect(emp.getId()).toBe(testValue);
});

test("Get Email via getEmail()", () => {
    const testValue = "test@gmail.com";
    const emp = new Employee("Goofy", 1, testValue);
    expect(emp.getEmail()).toBe(testValue);
});

test("getRole() ran successfully", () => {
    const testValue = "Employee";
    const emp = new Employee("Donald", 1, "test@gmail.com");
    expect(emp.getRole()).toBe(testValue);
});