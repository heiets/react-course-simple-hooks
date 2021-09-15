import { shallow } from 'enzyme';

import { CardListNoState } from '.';

test('renders CardList', () => {
  const cardList = shallow(
    <CardListNoState {...{ state: { citiesList: ['Kyiv', 'Atlanta'] } }} />
  );
  expect(cardList.find('.Select').props().value).toEqual('asc');
  expect(cardList.find('option').at(0).props().value).toEqual('asc');
  expect(cardList.find('option').at(1).props().value).toEqual('desc');
  expect(cardList.find('option').at(0).props().children).toEqual('By name asc');
  expect(cardList.find('option').at(1).props().children).toEqual('By name desc');
  expect(cardList.find('.CardList').props().children[0].props.city).toEqual('Atlanta');
  expect(cardList.find('.CardList').props().children[1].props.city).toEqual('Kyiv');
  cardList.setState({ orderBy: 'desc' });
  expect(cardList.find('.Select').props().value).toEqual('desc');
  expect(cardList.find('.CardList').props().children[0].props.city).toEqual('Kyiv');
  expect(cardList.find('.CardList').props().children[1].props.city).toEqual('Atlanta');
});
