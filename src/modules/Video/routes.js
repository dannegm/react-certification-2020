import { lazy } from 'react';

const Video = lazy(() => import(/* webpackChunkName: "Video" */ './Video'));

const exact = true;
const auth = true;

const routes = [
    {
        name: 'video',
        path: '/video/:videoId',
        component: Video,
        exact,
        auth,
    },
];

export default routes;
