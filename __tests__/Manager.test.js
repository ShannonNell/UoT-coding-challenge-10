const Manager = require('../lib/Manager');

//creates Manager
test('creates manager object', () => {
    const manager = new Manager ('Dalinar', 'dkholin@uruthiru.com', '111-111-1111');

    expect(manager.name).toBe('Dalinar');
    expect(manager.email).toBe('dkholin@uruthiru.com');
    expect(manager.officeNumber).toBe('111-111-1111');
});

//test for office number
test('returns office number', () => {
    const manager = new Manager ('Dalinar', 'dkholin@uruthiru.com', '111-111-1111');
    
    expect(manager.getOfficeNumber()).toBe('111-111-1111');
});

//test override role
test('overrides employee role', () => {
    const manager = new Manager ('Dalinar', 'dkholin@uruthiru.com', '111-111-1111');

    // expect(manager.role).toBe('Manager');
    expect(manager.getRole()).toBe('Manager');
});