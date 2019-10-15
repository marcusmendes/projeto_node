import { Router } from 'express';

import DefaultController from './controllers/DefaultController';
import OfferController from './controllers/OfferController';

const routes = new Router();

/* Default */
routes.get('/', DefaultController.index);

/* Offers */
routes.get('/offers', OfferController.index);
routes.get('/offers/:offerId', OfferController.offer);
routes.get('/offers/search', OfferController.search);
routes.get('/offers/category/:categoryId', OfferController.offersOfCategory);
routes.get('/offers/store/:storeId', OfferController.offersOfStore);

export default routes;
