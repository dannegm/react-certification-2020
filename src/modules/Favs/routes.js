import { lazy } from 'react';

const Favs = lazy(() => import(/* webpackChunkName: "Favs" */ './Favs'));

const exact = true;
const auth = true;

const routes = [
    {
        name: 'favs',
        path: '/favs',
        component: Favs,
        exact,
        auth,
    },
];

export default routes;
