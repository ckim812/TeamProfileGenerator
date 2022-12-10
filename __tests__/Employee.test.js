const { Employee } = require('../lib');
const name="John", id=525, email="j@test.com";

const e = new Employee(name,id,email);

test('Creating object...', () => expect(typeof(e)).toBe('object'));