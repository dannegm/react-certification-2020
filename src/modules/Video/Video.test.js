import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import Video from './Video';

describe('Video', () => {
    it('should render correctly', () => {
        const wrapper = shallow(<Video />);
        expect(wrapper).toMatchSnapshot();
    });
});
