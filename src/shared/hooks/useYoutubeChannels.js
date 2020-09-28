import useFacade from './useFacade';

import { objectToUriParams } from '@/shared/utils/helpers';

const getApiUrl = (query = '', options = {}) => {
    return (
        'https://www.googleapis.com/' +
        'youtube/v3/channels' +
        '?part=id,snippet,statistics' +
        '&regionCode=MX' +
        `&key=${config.YOUTUBE_API_KEY}` +
        `&${objectToUriParams(options)}`
    );
};

const useYoutubeChannels = (options = {}, query = '') => {
    const API_URL = getApiUrl(query, options);
    return useFacade(API_URL);
};

export default useYoutubeChannels;
