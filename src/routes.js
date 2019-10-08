import { Router } from 'express';

import DefaultController from './controllers/DefaultController';
import IndicadorController from './controllers/IndicadorController';

const routes = new Router();

routes.get('/', DefaultController.index);
routes.get('/indicadores', IndicadorController.index);

export default routes;
