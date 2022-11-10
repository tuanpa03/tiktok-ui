import routesConfig from '~/config/routes';

//Layouts
import { HeaderOnly } from '~/conponent/Layout';

//Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// Những file ko cần login có thể xem đc
const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.Following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, component: Search, layout: null },
];

// Những file phải login thì mới có thể vào xem đc
const privateRoutes = [];

export { publicRoutes, privateRoutes };
