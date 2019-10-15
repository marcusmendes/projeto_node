import { Router } from 'express';

import DefaultController from './controllers/DefaultController';
import OfferController from './controllers/OfferController';
import CategoryController from './controllers/CategoryController';

/* Middlewares */
import offerSearchValidaton from './validations/Offer/searchValidation';
import categorySearchValidation from './validations/Category/searchValidation';

const routes = new Router();

/* Default */
routes.get('/', DefaultController.index);

/* Offers */
routes.get('/offers', OfferController.index);
routes.get('/offers/search', offerSearchValidaton, OfferController.search);
routes.get('/offers/:offerId', OfferController.offer);
routes.get('/offers/category/:categoryId', OfferController.offersOfCategory);
routes.get('/offers/store/:storeId', OfferController.offersOfStore);

/* Category */
routes.get('/categories', CategoryController.all);
routes.get('/categories/search', categorySearchValidation, CategoryController.search);
routes.get('/categories/:categoryId', CategoryController.category);

export default routes;
