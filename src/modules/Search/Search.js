import React from 'react';
import queryString from 'query-string';

import useDocumentTitle from '@/shared/hooks/useDocumentTitle';
import useYoutubeSearch from '@/shared/hooks/useYoutubeSearch';

import { Shell } from '@ui/layout';

import { Alert, List, UnsafeHtml, VideoThumbnail } from '@ui/components';

import { separatedThousands } from '@/shared/utils/filters';

import { ResultsLabel } from './Search.styled';

const VideoMapper = (props) => (
    <VideoThumbnail
        videoId={props.id.videoId}
        title={props.snippet.title}
        thumbnail={props.snippet.thumbnails.high.url}
        channelTitle={props.snippet.channelTitle}
        publishedAt={props.snippet.publishedAt}
    />
);

const Search = () => {
    useDocumentTitle('Search Results');
    const { q: query } = queryString.parse(
        decodeURI(window.location.href.split('search?')[1])
    );

    const { loading, data } = useYoutubeSearch({ q: query, maxResults: 25 });

    return (
        <Shell>
            {!loading &&
                !!data &&
                (data.error ? (
                    <Alert title='Something went wrong'>
                        <UnsafeHtml>{data.error.message}</UnsafeHtml>
                    </Alert>
                ) : (
                    <>
                        <ResultsLabel>
                            Searches related to <b>{query}</b>
                            <br />
                            <small>
                                Showing <b>{data.pageInfo.resultsPerPage}</b> of
                                <b>
                                    &nbsp;
                                    {separatedThousands(
                                        data.pageInfo.totalResults,
                                        0
                                    )}
                                    &nbsp;
                                </b>
                                results
                            </small>
                        </ResultsLabel>

                        <List items={data.items} component={VideoMapper} />
                    </>
                ))}
        </Shell>
    );
};

export default Search;
