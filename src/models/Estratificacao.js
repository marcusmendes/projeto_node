import { Model, Sequelize } from 'sequelize';

class Estratificacao extends Model {
  static init(sequelize) {
    super.init({
      nome: Sequelize.STRING,
      prefixo: Sequelize.STRING,
    }, {
      sequelize,
      tableName: 'estratificacao',
      schema: 'indicadores',
      timestamps: false,
    });

    return this;
  }
}

export default Estratificacao;
