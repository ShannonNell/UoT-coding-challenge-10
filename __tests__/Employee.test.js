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