import useFacade from './useFacade';

const objectToUriParams = (obj) =>
    Object.entries(obj)
        .map((i) => i.join('='))
        .join('&');

const getApiUrl = (query = '', options = {}) => {
    return (
        'https://www.googleapis.com/' +
        'youtube/v3/search' +
        '?part=id,snippet' +
        '&videoEmbeddable=true' +
        '&type=video' +
        '&regionCode=MX' +
        `&q=${encodeURI(query)}` +
        `&key=${config.YOUTUBE_API_KEY}` +
        `&${objectToUriParams(options)}`
    );
};

const useYoutubeSearch = (options = {}, query = '') => {
    const API_URL = getApiUrl(query, options);
    return useFacade(API_URL);
};

export default useYoutubeSearch;
