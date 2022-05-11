const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Office Number constructor", () => {
    const testValue = 61;
    const emp = new Manager("Goofy", 1, "test@gmail.com", testValue);
    expect(emp.officeNumber).toBe(testValue);
});

test("getRole() functions correctly", () => {
    const testValue = "Manager";
    const emp = new Manager("Goofy", 1, "test@gmail.com");
    expect(emp.getRole()).toBe(testValue);
});

test("Get Office Number via getOffice()", () => {
    const testValue = 61;
    const emp = new Manager("Goofy", 1, "test@gmail.com", testValue);
    expect(emp.getOfficeNumber()).toBe(testValue);
});