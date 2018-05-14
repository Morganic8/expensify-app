import React from 'react';
import { shallow } from 'enzyme';
import NotFoundExpense from '../../components/NotFoundExpense';


test('Should render Not found expense page', () => {
    const wrapper = shallow(<NotFoundExpense />);
    expect(wrapper).toMatchSnapshot();
});