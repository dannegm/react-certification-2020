import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import VideoInfo from './VideoInfo';

describe('VideoInfo', () => {
    it('should render correctly', () => {
        const wrapper = shallow(<VideoInfo />);
        expect(wrapper).toMatchSnapshot();
    });
});
