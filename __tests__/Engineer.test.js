const Engineer = require('../lib/Engineer');

//creates Engineer obj
test('creates Engineer object', () => {
    const engineer = new Engineer ('Navani', 'nkholin@uruthiru.com', 'NavaniKholin');

    expect(engineer.name).toBe('Navani');
    expect(engineer.email).toBe('nkholin@uruthiru.com');
    expect(engineer.gitHub).toBe('NavaniKholin');
});

//test for github username
test('returns github username', () => {
    const engineer = new Engineer ('Navani', 'nkholin@uruthiru.com', 'NavaniKholin');

    expect(engineer.getGithub()).toBe('NavaniKholin');
});

//test override role
test('overrides employee role', () => {
    const engineer = new Engineer ('Navani', 'nkholin@uruthiru.com', 'NavaniKholin');

    // expect(engineer.role).toBe('Intern');
    expect(engineer.getRole()).toBe('Engineer');
});