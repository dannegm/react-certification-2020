import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import Searchbar from './Searchbar';

describe('Searchbar', () => {
    it('should render correctly', () => {
        const wrapper = shallow(<Searchbar />);
        expect(wrapper).toMatchSnapshot();
    });
});
