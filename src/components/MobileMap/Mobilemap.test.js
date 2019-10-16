import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import MobileMap from './MobileMap';
describe('MobileMap', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<MobileMap debug />);
  
    expect(component).toMatchSnapshot();
  });
});