import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import {
    Wrapper,
    ThumbnailWrapper,
    Thumbnail,
    Title,
    Info,
    ChannelTitle,
    TimeAgo,
} from './VideoCard.styled';

const VideoCard = ({
    videoId,
    title,
    thumbnail,
    channelTitle,
    publishedAt,
}) => {
    const timeAgo = moment(publishedAt).fromNow();
    return (
        <Wrapper data-id={videoId}>
            <ThumbnailWrapper>
                <Thumbnail src={thumbnail} loading='lazy' />
            </ThumbnailWrapper>
            <Title>{title}</Title>
            <Info>
                <ChannelTitle>{channelTitle}</ChannelTitle>
                <TimeAgo>{timeAgo}</TimeAgo>
            </Info>
        </Wrapper>
    );
};

VideoCard.propTypes = {
    videoId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    channelTitle: PropTypes.string.isRequired,
    publishedAt: PropTypes.string.isRequired,
};

VideoCard.defaultProps = {
    // TODO: defaultProps
};

export default VideoCard;
