import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import ChannelInfo from './ChannelInfo';

describe('ChannelInfo', () => {
    it('should render correctly', () => {
        const wrapper = shallow(<ChannelInfo />);
        expect(wrapper).toMatchSnapshot();
    });
});
