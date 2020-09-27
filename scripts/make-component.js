#!/usr/bin/env node
const { writeFileSync, mkdirSync, rmdirSync } = require('fs');
const path = require('path');
const yargs = require('yargs');
const rimraf = require('rimraf');

const $path = (relativePath) =>
    path.join(__dirname, '../', relativePath.replace('@', './src'));

const tplIndex = (componentName) => `
    import ${componentName} from './${componentName}';

    export default ${componentName};
`;

const tplComponent = (componentName) => `
import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './${componentName}.styled';

const ${componentName} = ({ ...props }) => {
    return (
        <Wrapper>
            {/* TODO: Content Here */}
        </Wrapper>
    );
};

${componentName}.propTypes = {
    // TODO: propTypes
}

${componentName}.defaultProps = {
    // TODO: defaultProps
}
`;

const tplStyles = (componentName) => `
import styled from 'styled-components';

export const Wrapper = styled.div\`
    /* TODO: Styles for ${componentName} */
\`;
`;

const tplTests = (componentName) => `
import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import ${componentName} from './${componentName}';

describe('${componentName}', () => {
    it('should render correctly', () => {
        const wrapper = shallow(<${componentName} />);
        expect(wrapper).toMatchSnapshot();
    });
});
`;

const makeComponent = ({ dest, override, componentName }) => {
    const $base = $path(`${dest}/${componentName}`);

    if (override) {
        console.warn('Overriding component');
        rimraf.sync($base);
    }

    mkdirSync($base);
    writeFileSync(`${$base}/index.js`, tplIndex(componentName));
    writeFileSync(`${$base}/${componentName}.js`, tplComponent(componentName));
    writeFileSync(
        `${$base}/${componentName}.styled.js`,
        tplStyles(componentName)
    );
    writeFileSync(`${$base}/${componentName}.test.js`, tplTests(componentName));
};

yargs
    .command({
        command: 'make <name>',
        desc: 'Count the lines in a file',
        usage: 'Usage: $0 <name> --dest [dest]',
        builder: (yargs) =>
            yargs
                .option('dest', {
                    alias: 'd',
                    describe: 'provide a path to file',
                    default: './src',
                    demandOption: true,
                })
                .option('override', {
                    alias: 'o',
                    describe: "force to override the component's files",
                    default: false,
                    type: 'boolean',
                }),
        handler: ({ name, dest, override }) => {
            makeComponent({ dest, override, componentName: name });
        },
    })
    .demandCommand(2).argv;
