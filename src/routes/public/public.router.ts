import * as express from 'express';
import multer from 'multer';
import { GetStorage } from '../../utility/uploader';
import { GetAbout } from '../controller/about.controller';
import { GetAllBanners, GetBannerById } from '../controller/banner.controller';
import { GetOrganisationInfo } from '../controller/organisation.controller';

class PublicRouting {
    public router: express.Router;
    public upload = multer({storage: GetStorage()});
    constructor(){
        this.router = express.Router();
        this.configRoutes();
    }

    private configRoutes(){

        // Organisation Details Routes
        this.router.get('/org-info', GetOrganisationInfo);

        // About Routes
        this.router.get('/about', GetAbout);

        // Banner Routes
        this.router.get('/banners', GetAllBanners);
        this.router.get('/banner/:id', GetBannerById);
    }
}

const PublicRouter = new PublicRouting().router;
export { PublicRouter }