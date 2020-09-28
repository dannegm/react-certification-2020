import React from 'react';
import PropTypes from 'prop-types';

import UnsafeHtml from '../UnsafeHtml';

/* eslint-disable no-useless-escape */
const formatingText = (text) => {
    return text
        .replace(/\n/gi, '<br /><br />')
        .replace(
            /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi,
            `<a href="$1" target="_blank">$1</a>`
        )
        .replace(
            /(#[A-Za-z0-9\-\.\_]+(?:\s|$))/gi,
            `<a href="/search?q=$1">$1</a>`
        );
};

const RichText = ({ children }) => {
    const formattedText = formatingText(children);
    return <UnsafeHtml>{formattedText}</UnsafeHtml>;
};

RichText.propTypes = {
    children: PropTypes.node.isRequired,
};

export default RichText;
