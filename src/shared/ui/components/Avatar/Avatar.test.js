import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import Avatar from './Avatar';

describe('Avatar', () => {
    it('should render correctly', () => {
        const wrapper = shallow(<Avatar />);
        expect(wrapper).toMatchSnapshot();
    });
});
