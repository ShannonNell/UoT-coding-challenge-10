const Intern = require('../lib/Intern');

//create Intern obj
test('creates Intern object', () => {
    const intern = new Intern ('Shallan', 'sarcasticboots@radiant.com', 'Kholinar');
    
    expect(intern.name).toBe('Shallan');
    expect(intern.email).toBe('sarcasticboots@radiant.com');
    expect(intern.school).toBe('Kholinar');
});

//test for school name
test('returns school name', () => {
    const intern = new Intern ('Shallan', 'sarcasticboots@radiant.com', 'Kholinar')
    
    expect(intern.getSchool()).toBe('Kholinar');
});

//test override role
test('overrides employee role', () => {
    const intern = new Intern ('Navani', 'nkholin@uruthiru.com', 'NavaniKholin');

    // expect(intern.role).toBe('Intern');
    expect(intern.getRole()).toBe('Intern');
});