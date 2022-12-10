const { Intern } = require('../lib');
const name="John", id=525, email="j@test.com", school="gitHubTest";

const e = new Intern(name,id,email,school);

test('Testing getRole method', () => expect(e.getRole()).toBe('Intern'));
test('Testing getSchool method', () => expect(e.getSchool()).toBe(school));