import { shallow } from 'enzyme';

import { InputTag } from './InputTag';

test('renders input', () => {
  const input = shallow(
    <InputTag {...{ handleOnChange: () => {}, inputRef:  null, inputValue: '' }} />
  );
  expect(input.props().value).toEqual('');
  input.setProps({ inputValue: 'London' });
  expect(input.props().value).toEqual('London');
  input.setProps({ inputValue: 'Kyiv' });
  expect(input.props().value).toEqual('Kyiv');
  input.setProps({ inputValue: 'Minsk' });
  expect(input.props().value).toEqual('Minsk');
});
