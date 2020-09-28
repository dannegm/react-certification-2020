export const objectToUriParams = (obj) =>
    Object.entries(obj)
        .map((i) => i.join('='))
        .join('&');
