import React from 'react';
import { shallow } from 'enzyme';
import Info from './Info';
describe('Info', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Info debug />);
  
    expect(component).toMatchSnapshot();
  });
});