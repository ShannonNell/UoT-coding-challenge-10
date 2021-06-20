const Engineer = require('../lib/Engineer');

//creates Engineer obj
test('creates Engineer object', () => {
    const engineer = new Engineer ('Navani', 'nkholin@uruthiru.com', 'NavaniKholin');

    expect(engineer.name).toBe('Navani');
    expect(engineer.email).toBe('nkholin@uruthiru.com');
    expect(engineer.gitHub).toBe('NavaniKholin');
});