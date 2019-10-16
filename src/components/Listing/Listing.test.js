import React from 'react';
import { shallow } from 'enzyme';
import Listing from './Listing';
describe('Listing', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Listing debug />);
  
    expect(component).toMatchSnapshot();
  });
});