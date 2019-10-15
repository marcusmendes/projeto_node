import { Router } from 'express';

import DefaultController from './controllers/DefaultController';
import OfferController from './controllers/OfferController';

const routes = new Router();

routes.get('/', DefaultController.index);
routes.get('/offers', OfferController.index);
routes.get('/offers/search', OfferController.search);

export default routes;
