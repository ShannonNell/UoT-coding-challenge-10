const Manager = require('../lib/Manager');

//creates Manager
test('creates manager object', () => {
    const manager = new Manager ('Dalinar', 'dkholin@uruthiru.com', 103);

    expect(manager.name).toBe('Dalinar');
    expect(manager.email).toBe('dkholin@uruthiru.com');
    expect(manager.officeNum).toEqual(expect.any(Number));
});

//test for office number
test('returns office number', () => {
    const manager = new Manager ('Dalinar', 'dkholin@uruthiru.com', 103);
    
    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
});

//test override role
test('overrides employee role', () => {
    const manager = new Manager ('Dalinar', 'dkholin@uruthiru.com', 103);

    // expect(manager.role).toBe('Manager');
    expect(manager.getRole()).toBe('Manager');
});