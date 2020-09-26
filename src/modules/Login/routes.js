import { lazy } from 'react';

const Login = lazy(() => import(/* webpackChunkName: "Login" */ './Login'));
const Logout = lazy(() => import(/* webpackChunkName: "Logout" */ './Logout'));

const exact = true;

const routes = [
    {
        name: 'login',
        path: '/login',
        component: Login,
        exact,
    },
    {
        name: 'logout',
        path: '/logout',
        component: Logout,
        exact,
    },
];

export default routes;
