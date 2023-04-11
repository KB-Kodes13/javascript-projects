class Job {
    constructor(name, industry, requiresDegree, field, location, salary) {
        this.name = name;
        this.industry = industry;
        this.requiresDegree = requiresDegree;
        this.field = field;
        this.location = location;
        this.salary = salary;
    }
    getName () {
        return this.name;
    }
    getFieldAndIndustry () {
        return `This job is in the ${this.field} within the ${this.industry} industry.`;
    }
    getSalary () {
        return this.salary;
    }
    
}

class Balance extends Job {
    constructor(name, industry, requiresDegree, field, location, salary, healthy, hours) {
        super(name, industry, requiresDegree, field, location, salary);
        this.healthy = healthy;
        this.hours = hours;

    }
    getHealthy () {
        return `${this.healthy} that it does have a healthy balance.`;
    }
    getHours () {
        return this.hours;
    }
}

let job1 = new Job('Lawyer', 'Customer Service', true, 'Law', 'Atlanta', 150000);
let job2 = new Job('Physician', 'Medical', true, 'Medicine', 'Charlotte', 200000);
let job3 = new Job('Blockchain Engineer', 'Technology', false, 'Blockchain', 'New York', 300000); 

console.log(job1.getFieldAndIndustry());
console.log(job1.getSalary());
console.log(job2.getName());
console.log(job2.getFieldAndIndustry());
console.log(job3.getSalary());
console.log(job3.getName());

let balance1 = new Balance('Blockchain Engineer', 'Technology', false, 'Blockchain', 'New York', 300000, true, 10);

console.log(balance1.healthy);

console.log(balance1.hours);

