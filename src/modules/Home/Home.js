import React from 'react';

import useDocumentTitle from '@/shared/hooks/useDocumentTitle';
import useYoutubeSearch from '@/shared/hooks/useYoutubeSearch';

import { Shell } from '@ui/layout';

import { Alert, List, UnsafeHtml, VideoCard } from '@ui/components';

const VideoMapper = (props) => (
    <VideoCard
        videoId={props.id.videoId}
        title={props.snippet.title}
        thumbnail={props.snippet.thumbnails.high.url}
        channelTitle={props.snippet.channelTitle}
        publishedAt={props.snippet.publishedAt}
    />
);

const Home = () => {
    useDocumentTitle('Home');

    const { loading, data } = useYoutubeSearch({
        maxResults: 10,
        order: 'rating',
    });

    console.log(data);

    return (
        <Shell>
            {!loading &&
                !!data &&
                (data.error ? (
                    <Alert title='Something went wrong'>
                        <UnsafeHtml>{data.error.message}</UnsafeHtml>
                    </Alert>
                ) : (
                    <List items={data.items} component={VideoMapper} />
                ))}
        </Shell>
    );
};

export default Home;
