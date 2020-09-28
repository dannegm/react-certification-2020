import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import VideoThumbnail from './VideoThumbnail';

describe('VideoThumbnail', () => {
    it('should render correctly', () => {
        const wrapper = shallow(<VideoThumbnail />);
        expect(wrapper).toMatchSnapshot();
    });
});
