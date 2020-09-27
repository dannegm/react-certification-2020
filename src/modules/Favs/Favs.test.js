
import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import Favs from './Favs';

describe('Favs', () => {
    it('should render correctly', () => {
        const wrapper = shallow(<Favs />);
        expect(wrapper).toMatchSnapshot();
    });
});
