import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Results from './Results';
describe('AgentAuth', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Results debug />);
  
    expect(component).toMatchSnapshot();
  });
});