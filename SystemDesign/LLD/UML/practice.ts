class Company {
    constructor(public name: string) {}
}

class Emp {
    constructor(public name: string, public email: string) {
    }
}

const cmp = new Company("GitLab");
const emps = new Emp("Atique", "atique.ahmed@gitlab.com");

console.log(`${emps.name} is working in ${cmp.name} & his email is ${emps.email}`);
