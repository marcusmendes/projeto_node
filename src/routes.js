import { Router } from 'express';

import DefaultController from './app/controllers/DefaultController';
import OfferController from './app/controllers/OfferController';
import CategoryController from './app/controllers/CategoryController';
import StoreController from './app/controllers/StoreController';
import UserController from './app/controllers/UserController';
import AuthController from './app/controllers/AuthController';

/* Middlewares */
import authValidation from './app/validations/Auth/authValidation';
import UserStoreValidation from './app/validations/User/storeValidation';
import offerSearchValidaton from './app/validations/Offer/searchValidation';
import categorySearchValidation from './app/validations/Category/searchValidation';

const routes = new Router();

/* Default */
routes.get('/', DefaultController.index);

/* User */
routes.post('/user', UserStoreValidation, UserController.store);

/* Auth */
routes.post('/auth', authValidation, AuthController.authenticate);

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

/* Store */
routes.get('/stores', StoreController.all);

export default routes;
