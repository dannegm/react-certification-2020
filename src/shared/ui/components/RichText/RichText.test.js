import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import RichText from './RichText';

describe('RichText', () => {
    it('should render correctly', () => {
        const wrapper = shallow(<RichText />);
        expect(wrapper).toMatchSnapshot();
    });
});
