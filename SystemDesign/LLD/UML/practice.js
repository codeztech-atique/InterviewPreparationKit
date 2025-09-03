var Company = /** @class */ (function () {
    function Company(name) {
        this.name = name;
    }
    return Company;
}());
var Emp = /** @class */ (function () {
    function Emp(name, email) {
        this.name = name;
        this.email = email;
    }
    return Emp;
}());
var cmp = new Company("GitLab");
var emps = new Emp("Atique", "atique.ahmed@gitlab.com");
console.log("".concat(emps.name, " is working in ").concat(cmp.name, " & his email is ").concat(emps.email));
