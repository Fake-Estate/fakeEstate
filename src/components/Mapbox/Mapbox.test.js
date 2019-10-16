import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Mapbox from './Mapbox';
describe('Mapbox', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Mapbox debug />);
  
    expect(component).toMatchSnapshot();
  });
});