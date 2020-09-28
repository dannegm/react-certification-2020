import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable react/no-danger */
const UnsafeHtml = ({ children }) => (
    <div dangerouslySetInnerHTML={{ __html: children }} />
);

UnsafeHtml.propTypes = {
    children: PropTypes.node.isRequired,
};

export default UnsafeHtml;
