import React from 'react';
// import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

//react-test-renderer
//There is full dom renderering or the component
//For presentational components shallow is what we want
//When there is user interaction we may need the full DOM



//Snapshot
test('should render Header correctly', () => {
    const wrapper = shallow(<Header/>);
    
    expect(toJSON(wrapper)).toMatchSnapshot();

});