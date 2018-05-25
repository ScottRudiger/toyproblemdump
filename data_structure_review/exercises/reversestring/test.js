const reverse = require('./index');

test('Reverse function exists', () => {
  expect(reverse).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(reverse('abcd')).toEqual('dcba');
});

test('Reverse reverses a string', () => {
  expect(reverse('  abcd')).toEqual('dcba  ');
});

test('Reverse reverses an odd length string', () => {
  expect(reverse('  abcd ')).toEqual(' dcba  ');
});

test('Reverse does not fail on an empty string', () => {
  expect(reverse('')).toEqual('');
});
