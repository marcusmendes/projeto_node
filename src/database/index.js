import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import Indicador from '../models/Indicador';
import Estratificacao from '../models/Estratificacao';
import GrupamentoIndicador from '../models/GrupamentoIndicador';

const models = [Indicador, Estratificacao, GrupamentoIndicador];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig[process.env.NODE_ENV]);

    models
      .map((model) => model.init(this.connection))
      .map((model) => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
