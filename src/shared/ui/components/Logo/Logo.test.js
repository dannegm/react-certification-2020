
import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import Logo from './Logo';

describe('Logo', () => {
    it('should render correctly', () => {
        const wrapper = shallow(<Logo />);
        expect(wrapper).toMatchSnapshot();
    });
});
