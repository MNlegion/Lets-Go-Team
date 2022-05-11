const Intern = require("../lib/Intern");

test("School constructor", () => {
    const testValue = "Minnesota";
    const emp = new Intern("Goofy", 1, "test@gmail.com", testValue);
    expect(emp.school).toBe(testValue);
});

test("getRole() ran successfully", () => {
    const testValue = "Intern";
    const emp = new Intern("Donald", 1, "test@gmail.com", "Minnesota");
    expect(emp.getRole()).toBe(testValue);
});

test("Get School via getSchool()", () => {
    const testValue = "Minnesota";
    const emp = new Intern("Goofy", 1, "test@gmail.com", testValue);
    expect(emp.getSchool()).toBe(testValue);
});