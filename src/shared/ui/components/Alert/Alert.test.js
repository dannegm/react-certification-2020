import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import Alert from './Alert';

describe('Alert', () => {
    it('should render correctly', () => {
        const wrapper = shallow(<Alert />);
        expect(wrapper).toMatchSnapshot();
    });
});
