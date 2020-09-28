import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import {
    Wrapper,
    Info,
    Thumbnail,
    Title,
    ChannelTitle,
    ExtraInfo,
} from './VideoThumbnail.styled';

const VideoThumbnail = ({
    videoId,
    title,
    thumbnail,
    channelTitle,
    publishedAt,
}) => {
    const timeAgo = moment(publishedAt).fromNow();
    return (
        <Wrapper data-id={videoId}>
            <Thumbnail src={thumbnail} loading='lazy' />
            <Info>
                <Title>{title}</Title>
                <ChannelTitle>{channelTitle}</ChannelTitle>
                <ExtraInfo>{timeAgo}</ExtraInfo>
            </Info>
        </Wrapper>
    );
};

VideoThumbnail.propTypes = {
    videoId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    channelTitle: PropTypes.string.isRequired,
    publishedAt: PropTypes.string.isRequired,
};

VideoThumbnail.defaultProps = {
    // TODO: defaultProps
};

export default VideoThumbnail;
