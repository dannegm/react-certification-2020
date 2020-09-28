import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import VideoCard from './VideoCard';

describe('VideoCard', () => {
    it('should render correctly', () => {
        const wrapper = shallow(<VideoCard />);
        expect(wrapper).toMatchSnapshot();
    });
});
