import { shallow } from 'enzyme';

import { DailyCards } from '.';

describe('DailyCards' , () => {
  const daily = [
    {
      dt: 1631782800,
      weather: [{
        main: 'Clouds',
        icon: '02d',
      }],
      temp: {
        day: 10,
      },
    },
    {
      dt: 1631782800,
      weather: [{
        main: 'Clouds',
        icon: '02d',
      }],
      temp: {
        day: 15,
      },
    },
    {
      dt: 1631783800,
      weather: [{
        main: 'Clouds',
        icon: '02d',
      }],
      temp: {
        day: 18,
      },
    },
    {
      dt: 1631784800,
      weather: [{
        main: 'Clouds',
        icon: '02d',
      }],
      temp: {
        day: 20,
      },
    }
  ]
  const dailyCards = shallow(
    <DailyCards {...{ daily } } />
  );
  test('renders DailyCards', () => {
    expect(dailyCards.find('.DailyCards').length).toEqual(1);
  });
  test('renders Select', () => {
    expect(dailyCards.find('.Select').length).toEqual(1);
  });
  test('check Select initial state', () => {
    expect(dailyCards.find('.Select').props().value).toEqual('by_date_asc');
  });
  test('check Select state change', () => {
    expect(dailyCards.find('.Select').props().value).toEqual('by_date_asc');
    dailyCards.find('.Select').at(0).simulate('change', {
      target: {
        value: 'by_date_desc',
        name: 'by_date_desc',
      }
    })
    expect(dailyCards.find('.Select').props().value).toEqual('by_date_desc');
  });
});
