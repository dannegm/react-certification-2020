import { objectToUriParams } from '@/shared/utils/helpers';

import useFacade from './useFacade';

const getApiUrl = (options = {}) => {
    return (
        'https://www.googleapis.com/' +
        'youtube/v3/search' +
        '?part=id,snippet' +
        '&videoEmbeddable=true' +
        '&type=video' +
        '&regionCode=MX' +
        `&key=${config.YOUTUBE_API_KEY}` +
        `&${objectToUriParams(options)}`
    );
};

const useYoutubeSearch = (options = {}) => {
    const API_URL = getApiUrl(options);
    return useFacade(API_URL);
};

export default useYoutubeSearch;
