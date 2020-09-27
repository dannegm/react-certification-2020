
import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import Search from './Search';

describe('Search', () => {
    it('should render correctly', () => {
        const wrapper = shallow(<Search />);
        expect(wrapper).toMatchSnapshot();
    });
});
