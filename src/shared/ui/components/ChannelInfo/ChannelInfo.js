import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

import useYoutubeChannels from '@/shared/hooks/useYoutubeChannels';

import { abbreviatedThousands } from '@/shared/utils/filters';

import Avatar from '../Avatar';
import Button from '../Button';

import { Wrapper, Info, Title, Subscribers } from './ChannelInfo.styled';

const ChannelInfo = ({ channelId }) => {
    const history = useHistory();
    const { loading, data } = useYoutubeChannels({
        id: channelId,
    });
    const [canRender, setCanRender] = useState(false);
    const [channel, setChannel] = useState(data);

    useEffect(() => {
        if (!loading && !!data && !data.error) {
            setCanRender(true);
            setChannel(data.items[0]);
        }
    }, [data, loading]);

    const handleClick = (e) => {
        e.preventDefault();
        history.push(`https://www.youtube.com/channel/${channelId}`);
    };

    return (
        <Wrapper>
            {canRender && (
                <>
                    <Avatar
                        size={2.3}
                        src={channel.snippet.thumbnails.medium.url}
                    />
                    <Info>
                        <Title>{channel.snippet.title}</Title>
                        <Subscribers>
                            {abbreviatedThousands(
                                channel.statistics.subscriberCount
                            )}{' '}
                            subscribers
                        </Subscribers>
                    </Info>
                    <Button color='error' onClick={handleClick}>
                        Subscribe
                    </Button>
                </>
            )}
        </Wrapper>
    );
};

ChannelInfo.propTypes = {
    channelId: PropTypes.string.isRequired,
};

export default ChannelInfo;
