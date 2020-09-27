import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import Navbar from './Navbar';

describe('Navbar', () => {
    it('should render correctly', () => {
        const wrapper = shallow(<Navbar />);
        expect(wrapper).toMatchSnapshot();
    });
});
