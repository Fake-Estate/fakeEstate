import React from 'react';
import { shallow } from 'enzyme';
import Pin from './Pin';
describe('Pin', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Pin debug />);
  
    expect(component).toMatchSnapshot();
  });
});