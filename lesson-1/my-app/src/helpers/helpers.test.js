import { removeElementFromArray } from '.';

test('checks logic of removeElementFromArray', () => {
  const oldArray = ['Atlanta', 'Kyiv', 'London', 'Minsk'];
  expect(oldArray).toHaveLength(4);
  expect(oldArray[0]).toEqual('Atlanta');
  expect(oldArray[1]).toEqual('Kyiv');
  expect(oldArray[2]).toEqual('London');
  expect(oldArray[3]).toEqual('Minsk');
  const newArray = removeElementFromArray('Kyiv', oldArray);
  expect(newArray).toHaveLength(3);
  expect(newArray[0]).toEqual('Atlanta');
  expect(newArray[1]).toEqual('London');
  expect(newArray[2]).toEqual('Minsk');
});
