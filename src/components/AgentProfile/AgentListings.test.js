import React from 'react';
import { shallow } from 'enzyme';
import AgentListings from './AgentListings';
describe('AgentListings', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<AgentListings debug />);
  
    expect(component).toMatchSnapshot();
  });
});

it('calls componentDidMount', () => {
    jest.spyOn(AgentListings.prototype, 'componentDidMount')
    const wrapper = shallow(<AgentListings />)
    expect(AgentListings.prototype.componentDidMount.mock.calls.length).toBe(1)
  })

it('should populate the state', () => {
    component = shallow(<AgentListings/>)
    expect(compoinent.state().events.lenght).toEqual(0);
  });
