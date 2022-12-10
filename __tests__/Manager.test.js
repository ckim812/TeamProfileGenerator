const { Manager } = require('../lib');
const name="John", id=525, email="j@test.com", officeNumber=1234;

const e = new Manager(name,id,email,officeNumber);

test('Testing getRole method', () => expect(e.getRole()).toBe('Manager'));
test('Testing getOfficeNumber method', () => expect(e.getOfficeNumber()).toBe(officeNumber));