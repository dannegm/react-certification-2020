import React from 'react';

import { useFavs } from '@/shared/providers/FavsProvider';

import useDocumentTitle from '@/shared/hooks/useDocumentTitle';

import { Shell } from '@ui/layout';

import { List, VideoThumbnail } from '@ui/components';
import { Title } from './Favs.styled';

const VideoMapper = ({ video }) => (
    <VideoThumbnail
        videoId={video.id}
        title={video.snippet.title}
        thumbnail={video.snippet.thumbnails.high.url}
        channelTitle={video.snippet.channelTitle}
        publishedAt={video.snippet.publishedAt}
    />
);

const Favs = () => {
    useDocumentTitle('Favs');
    const { list } = useFavs();

    return (
        <Shell>
            <Title>Your favorite videos</Title>
            <List items={list} component={VideoMapper} />
        </Shell>
    );
};

export default Favs;
