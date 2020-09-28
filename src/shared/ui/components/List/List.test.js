import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import List from './List';

describe('List', () => {
    it('should render correctly', () => {
        const wrapper = shallow(<List />);
        expect(wrapper).toMatchSnapshot();
    });
});
