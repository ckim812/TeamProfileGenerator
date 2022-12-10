const { Engineer } = require('../lib');
const name="John", id=525, email="j@test.com", gitHub="gitHubTest";

const e = new Engineer(name,id,email,gitHub);

test('Testing getRole method', () => expect(e.getRole()).toBe('Engineer'));
test('Testing getRoleDetail method', () => expect(e.getRoleDetail()).toBe(gitHub));
test('Testing getRoleDetailLabel method', () => expect(e.getRoleDetailLabel()).toBe('GitHub:'));