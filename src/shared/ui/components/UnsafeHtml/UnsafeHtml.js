import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const UnsafeHtml = ({ children }) => (
    <div dangerouslySetInnerHTML={{ __html: children }} />
);

UnsafeHtml.propTypes = {
    children: PropTypes.node.isRequired,
};

export default UnsafeHtml;
