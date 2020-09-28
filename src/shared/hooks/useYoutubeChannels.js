import { objectToUriParams } from '@/shared/utils/helpers';

import useFacade from './useFacade';

const getApiUrl = (options = {}) => {
    return (
        'https://www.googleapis.com/' +
        'youtube/v3/channels' +
        '?part=id,snippet,statistics' +
        '&regionCode=MX' +
        `&key=${config.YOUTUBE_API_KEY}` +
        `&${objectToUriParams(options)}`
    );
};

const useYoutubeChannels = (options = {}) => {
    const API_URL = getApiUrl(options);
    return useFacade(API_URL);
};

export default useYoutubeChannels;
