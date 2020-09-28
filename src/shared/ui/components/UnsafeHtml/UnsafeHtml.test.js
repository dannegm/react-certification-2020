import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import UnsafeHtml from './UnsafeHtml';

describe('UnsafeHtml', () => {
    it('should render correctly', () => {
        const wrapper = shallow(<UnsafeHtml />);
        expect(wrapper).toMatchSnapshot();
    });
});
