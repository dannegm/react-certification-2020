import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import SvgIcon from './SvgIcon';
import { SvgWrapper } from './SvgIcon.styled';

describe('SvgIcon', () => {
    it('should render correctly', () => {
        const wrapper = shallow(
            <SvgIcon>
                <path d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' />
            </SvgIcon>
        );

        expect(wrapper).toMatchSnapshot();
    });

    it('should render children', () => {
        const children = 'children';
        const wrapper = shallow(
            <SvgIcon>
                <p>{children}</p>
            </SvgIcon>
        );

        expect(wrapper.find('p').text()).toEqual(children);
    });

    it('should set the right props to SvgWrapper', () => {
        const size = '2rem';
        const color = '#ff0000';
        const wrapper = shallow(
            <SvgIcon fill={color} size={size}>
                <path d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' />
            </SvgIcon>
        );

        expect(wrapper.find(SvgWrapper)).toHaveStyleRule('width', size);
        expect(wrapper.find(SvgWrapper)).toHaveStyleRule('height', size);
        expect(wrapper.find(SvgWrapper)).toHaveStyleRule('fill', color);
    });
});
