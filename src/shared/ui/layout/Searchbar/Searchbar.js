import React, { useEffect, useRef, useState } from 'react';

import { Logo } from '@ui/components';
import { SearchOutlineIcon, CloseOutlineIcon } from '@ui/icons';

import {
    Wrapper,
    LogoWrapper,
    IconButton,
    FieldInput,
} from './Searchbar.styled';
import { useHistory } from 'react-router';

const Searchbar = () => {
    const history = useHistory();
    const $timer = useRef(null);

    const [hasFocus, setFocus] = useState(false);
    const [text, setText] = useState('');

    const handleChange = (ev) => {
        clearInterval($timer.current);
        setText(ev.target.value);
    };

    const handleClear = (ev) => {
        ev.preventDefault();
        setText('');
    };

    const handleSearch = (ev) => {
        ev && ev.preventDefault();
        !!text.trim() && history.push(`/search?q=${encodeURI(text)}`);
    };

    useEffect(() => {
        $timer.current = setTimeout(() => {
            handleSearch();
        }, 300);

        return () => {
            clearInterval($timer.current);
        };
    }, [text]);

    return (
        <Wrapper hasFocus={hasFocus} onSubmit={handleSearch}>
            <LogoWrapper>
                <Logo />
            </LogoWrapper>

            <FieldInput
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                placeholder='Search'
                value={text}
                onChange={handleChange}
            />

            {!!text && (
                <IconButton type='button' onClick={handleClear}>
                    <CloseOutlineIcon />
                </IconButton>
            )}

            <IconButton type='submit'>
                <SearchOutlineIcon />
            </IconButton>
        </Wrapper>
    );
};

Searchbar.propTypes = {
    // TODO: propTypes
};

Searchbar.defaultProps = {
    // TODO: defaultProps
};

export default Searchbar;
