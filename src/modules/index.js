import homeRoutes from './Home/routes';
import searchRoutes from './Search/routes';
import favsRoutes from './Favs/routes';
import videoRoutes from './Video/routes';
import loginRoutes from './Login/routes';
import errorsRoutes from './Errors/routes';

export const Routes = [
    // breakline
    ...homeRoutes,
    ...searchRoutes,
    ...favsRoutes,
    ...videoRoutes,
    ...loginRoutes,
    ...errorsRoutes,
];
