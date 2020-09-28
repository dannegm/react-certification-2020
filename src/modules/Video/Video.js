import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import YouTubePlayer from 'react-youtube';

import useDocumentTitle from '@/shared/hooks/useDocumentTitle';
import useYoutubeSearch from '@/shared/hooks/useYoutubeSearch';
import useYoutubeVideos from '@/shared/hooks/useYoutubeVideos';

import { Shell } from '@ui/layout';
import {
    Alert,
    ChannelInfo,
    List,
    UnsafeHtml,
    VideoInfo,
    VideoThumbnail,
} from '@ui/components';

import { PlayerWrapper } from './Video.styled';

const VideoMapper = (props) => (
    <VideoThumbnail
        videoId={props.id.videoId}
        title={props.snippet.title}
        thumbnail={props.snippet.thumbnails.high.url}
        channelTitle={props.snippet.channelTitle}
        publishedAt={props.snippet.publishedAt}
    />
);

const RelatedVideos = ({ videoId }) => {
    const { loading, data } = useYoutubeSearch({
        relatedToVideoId: videoId,
        maxResults: 4,
    });

    return (
        <div>
            <h3>Related videos</h3>

            {!loading &&
                !!data &&
                (data.error ? (
                    <Alert title="Can't load related videos">
                        <UnsafeHtml>{data.error.message}</UnsafeHtml>
                    </Alert>
                ) : (
                    <List items={data.items} component={VideoMapper} />
                ))}
        </div>
    );
};

const Video = () => {
    const { videoId } = useParams();
    const { loading, data } = useYoutubeVideos({
        id: videoId,
    });

    const [canRender, setCanRender] = useState(false);
    const [video, setVideo] = useState(data);
    useDocumentTitle(!!video ? video.snippet.title : 'Loading...');

    useEffect(() => {
        if (!loading && !!data && !data.error) {
            setCanRender(true);
            setVideo(data.items[0]);
        }
    }, [data, loading]);

    const playerOptions = {
        playerVars: {
            autoplay: 0,
        },
    };

    return (
        <Shell>
            <PlayerWrapper>
                <YouTubePlayer
                    videoId={videoId}
                    className='youtube-player'
                    containerClassName='youtube-player__container'
                    opts={playerOptions}
                />
            </PlayerWrapper>

            {canRender && (
                <>
                    <VideoInfo
                        title={video.snippet.title}
                        description={video.snippet.description}
                        views={video.statistics.viewCount}
                        likes={video.statistics.likeCount}
                        comments={video.statistics.commentCount}
                    />
                    <ChannelInfo channelId={video.snippet.channelId} />
                </>
            )}

            <RelatedVideos videoId={videoId} />
        </Shell>
    );
};

export default Video;
