import { lazy } from 'react';

const Search = lazy(() => import(/* webpackChunkName: "Search" */ './Search'));

const exact = true;
const auth = true;

const routes = [
    {
        name: 'search',
        path: '/search',
        component: Search,
        exact,
        auth,
    },
];

export default routes;
