import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import AgentAuth from './AgentAuth';
describe('AgentAuth', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<AgentAuth debug />);
  
    expect(component).toMatchSnapshot();
  });
});
