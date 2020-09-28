import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import { Wrapper } from './List.styled';

const List = ({ component: Component, items }) => {
    return (
        <Wrapper>
            {items.map((item) => {
                const [id] = useState(nanoid);
                return <Component key={id} {...item} />;
            })}
        </Wrapper>
    );
};

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    component: PropTypes.func.isRequired,
};

List.defaultProps = {
    // TODO: defaultProps
};

export default List;
