#!/usr/bin/env node
const { writeFileSync } = require('fs');
const path = require('path');
const SVGO = require('svgo');
const svgtojsx = require('svg-to-jsx');
const evaIcons = require('eva-icons/eva-icons.json');

const ICONS_OUTPUT_FOLDER = path.join(__dirname, '../src/shared/ui/icons');

const svgo = new SVGO({
    plugins: [
        { cleanupAttrs: true },
        { removeDoctype: true },
        { removeXMLProcInst: true },
        { removeComments: true },
        { removeMetadata: true },
        { removeTitle: true },
        { removeDesc: true },
        { removeUselessDefs: true },
        { removeXMLNS: true },
        { removeEditorsNSData: true },
        { removeEmptyAttrs: true },
        { removeHiddenElems: true },
        { removeEmptyText: true },
        { removeEmptyContainers: true },
        { removeViewBox: true },
        { cleanupEnableBackground: true },
        { minifyStyles: true },
        { convertStyleToAttrs: true },
        { convertColors: true },
        { convertPathData: true },
        { convertTransform: true },
        { removeUnknownsAndDefaults: { keepDataAttrs: false } },
        { removeNonInheritableGroupAttrs: true },
        { removeUselessStrokeAndFill: { removeNone: true } },
        { removeUnusedNS: true },
        { cleanupIDs: true },
        { cleanupNumericValues: true },
        { cleanupListOfValues: true },
        { moveElemsAttrsToGroup: true },
        { moveGroupAttrsToElems: true },
        { collapseGroups: true },
        { removeRasterImages: true },
        { mergePaths: true },
        { convertShapeToPath: true },
        { sortAttrs: true },
        { removeDimensions: true },
        { removeAttrs: true },
        { removeElementsByAttr: true },
        { removeStyleElement: true },
        { removeScriptElement: true },
    ],
});

const getComponentName = (string) =>
    string
        .match(/[a-z0-9]+/gi)
        .map(
            (word) =>
                word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
        )
        .join('');

const generateIconContent = async (icons, iconName) => {
    try {
        const input = icons[iconName]
            .replace(/<g id="Layer_2"[^>]*>(.*?)<\/g>/g, '$1')
            .replace(/<g id="[^>"]+">(.*?)<\/g>/g, '$1')
            .replace(/<g id="smiling-face"([^>]*)>/g, '<g $1>')
            .replace(/<path (.*?) id="[^>"]+"([^>]*)>/, '<path $1 $2>')
            .replace(/<defs[^>]*>(.*?)<\/defs>/g, '$1');

        const optimizedSVGContent = await svgo.optimize(input);
        const JSXContent = await svgtojsx(optimizedSVGContent.data);

        const name = getComponentName(iconName);

        const content = `
            import React from 'react';
            import SvgIcon from '@/shared/ui/components/SvgIcon';

            const ${name}Icon = (props) => (
                <SvgIcon {...props}>
                    ${JSXContent}
                </SvgIcon>
            );

            export default ${name}Icon;
        `;

        return {
            name,
            content,
        };
    } catch (error) {
        console.error(error);
    }
};

const generateIconFile = async ({ dir, name, content }) => {
    try {
        const componentPath = `${dir}/${name}Icon.js`;
        writeFileSync(componentPath, content);
        console.log(`Icon [${name}] created`);
    } catch (error) {
        console.error(error);
    }
};

const generateIconComponents = async (icons, dir) => {
    const iconSet = await Promise.all(
        Object.keys(icons).map(
            async (iconName) => await generateIconContent(icons, iconName)
        )
    );
    iconSet.forEach(async (icon) => await generateIconFile({ dir, ...icon }));
};

const generateIconsIndex = (icons, dir) => {
    const IconLineTemplate = ({ componentName, iconPath }) =>
        `export { default as ${componentName}Icon } from '${iconPath}Icon';`;

    const generateIconLine = (icon) => {
        const componentName = getComponentName(icon);
        const iconPath = `./${componentName}`;
        return IconLineTemplate({ iconPath, componentName });
    };

    const indexContent = Object.keys(icons).map(generateIconLine).join('\n');
    writeFileSync(`${dir}/index.js`, indexContent);
    console.log('Icons index file created');
};

try {
    generateIconComponents(evaIcons, ICONS_OUTPUT_FOLDER);
    generateIconsIndex(evaIcons, ICONS_OUTPUT_FOLDER);
} catch (error) {
    console.log(error);
}
