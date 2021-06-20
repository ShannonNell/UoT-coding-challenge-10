const Employee = require('../lib/Employee');

//create Employee
test('creates employee object', () => {
    const employee = new Employee ('Kaladin', 'bridgefour@shatteredplains.com');
    console.log(employee);

    expect (employee.name).toBe('Kaladin');
    expect (employee.email).toBe('bridgefour@shatteredplains.com');
    expect (employee.id).toEqual(expect.any(Number));
    expect (employee.role).toBe('Employee');
});

//return name
test('returns employee name', () => {
    const employee = new Employee ('Kaladin', 'bridgefour@shatteredplains.com');
    expect(employee.getName()).toBe('Kaladin');
});

//return employee id
test('returns employee ID number', () => {
    const employee = new Employee ('Kaladin', 'bridgefour@shatteredplains.com');
    expect(employee.getID()).toEqual(expect.any(Number));
});

//return employee email
test('returns employee email', () => {
    const employee = new Employee ('Kaladin', 'bridgefour@shatteredplains.com');
    expect(employee.getEmail()).toBe('bridgefour@shatteredplains.com');
});

//return employee role
test('returns employee role', () => {
    const employee = new Employee ('Kaladin', 'bridgefour@shatteredplains.com');
    expect(employee.getRole()).toBe('Employee');
});