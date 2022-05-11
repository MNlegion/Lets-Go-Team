const Engineer = require("../lib/Engineer");

test("GitHub Account constructor", () => {
    const testValue = "GitHubUser";
    const emp = new Engineer("Goofy", 1, "test@valormm.com", testValue);
    expect(emp.github).toBe(testValue);
});

test("getRole() ran successfully", () => {
    const testValue = "Engineer";
    const emp = new Engineer("Goofy", 1, "test@gmail.com", "GitHubUser");
    expect(emp.getRole()).toBe(testValue);
});

test("Get GitHub user name via getGitHub()", () => {
    const testValue = "GitHubUser";
    const emp = new Engineer("Goofy", 1, "test@gmail.com", testValue);
    expect(emp.getGitHub()).toBe(testValue);
});