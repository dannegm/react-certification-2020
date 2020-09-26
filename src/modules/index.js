import homeRoutes from './Home/routes';
import loginRoutes from './Login/routes';
import errorsRoutes from './Errors/routes';

export const Routes = [
    // breakline
    ...homeRoutes,
    ...loginRoutes,
    ...errorsRoutes,
];
