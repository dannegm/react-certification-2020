import useFacade from './useFacade';

import { objectToUriParams } from '@/shared/utils/helpers';

const getApiUrl = (query = '', options = {}) => {
    return (
        'https://www.googleapis.com/' +
        'youtube/v3/videos' +
        '?part=id,snippet,statistics' +
        '&regionCode=MX' +
        `&key=${config.YOUTUBE_API_KEY}` +
        `&${objectToUriParams(options)}`
    );
};

const useYoutubeVideos = (options = {}, query = '') => {
    const API_URL = getApiUrl(query, options);
    return useFacade(API_URL);
};

export default useYoutubeVideos;
