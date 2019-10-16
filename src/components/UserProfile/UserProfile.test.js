import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import UserProfile from './UserProfile';
describe('AgentAuth', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<UserProfile debug />);
  
    expect(component).toMatchSnapshot();
  });
});