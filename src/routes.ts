import { Router } from 'express';

import DefaultController from './application/controllers/DefaultController';
import OfferController from './application/controllers/OfferController';
import CategoryController from './application/controllers/CategoryController';
import StoreController from './application/controllers/StoreController';
import UserController from './application/controllers/UserController';
import AuthController from './application/controllers/AuthController';

/* Middlewares */
import authValidation from './application/validations/Auth/authValidation';
import UserStoreValidation from './application/validations/User/storeValidation';
import OfferValidation from './application/validations/Offer/OfferValidation';
import categorySearchValidation from './application/validations/Category/searchValidation';

const routes = Router();

/* Default */
routes.get('/', DefaultController.index);

/* User */
routes.post('/user', UserStoreValidation, UserController.store);

/* Auth */
routes.post('/auth', authValidation, AuthController.authenticate);

/* Offers */
routes.get('/offers', OfferController.index);
routes.get('/offers/search', OfferValidation.search, OfferController.search);
routes.get('/offers/:offerId', OfferValidation.offer, OfferController.offer);
routes.get('/offers/category/:categoryId', OfferController.offersOfCategory);
routes.get('/offers/store/:storeId', OfferController.offersOfStore);

/* Category */
routes.get('/categories', CategoryController.all);
routes.get('/categories/search', categorySearchValidation, CategoryController.search);
routes.get('/categories/:categoryId', CategoryController.category);

/* Store */
routes.get('/stores', StoreController.all);

export default routes;
