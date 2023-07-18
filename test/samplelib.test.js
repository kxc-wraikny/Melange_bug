const samplelib_test = require('../_output/samplelib_test');

test('it loads', () => {
  expect(samplelib_test).toBeDefined();
  expect(samplelib_test.Test).toBeDefined();
});

test('test1', async () => {
  await samplelib_test.Test.test1();
});

test('test2', async () => {
  await samplelib_test.Test.test2();
});

test('test3', async () => {
  await samplelib_test.Test.test3();
});