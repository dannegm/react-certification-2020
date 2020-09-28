import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import Page from './Page';

describe('Page', () => {
    it('should render correctly', () => {
        const wrapper = shallow(<Page />);
        expect(wrapper).toMatchSnapshot();
    });
});
