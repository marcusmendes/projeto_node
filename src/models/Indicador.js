import { Model, Sequelize } from 'sequelize';

class Indicador extends Model {
  static init(sequelize) {
    super.init({
      codigo: Sequelize.STRING,
      nome: Sequelize.STRING,
      mascara: Sequelize.STRING,
      formula: Sequelize.STRING,
      id_estratificacao: Sequelize.INTEGER,
      status: Sequelize.BOOLEAN,
      id_grupamento_indicador: Sequelize.INTEGER,
      interpretacao: Sequelize.BOOLEAN,
      possui_ranking: Sequelize.BOOLEAN,
      metodo_calculo: Sequelize.INTEGER,
      nao_gerar_pendencias: Sequelize.BOOLEAN,
      criado_em: Sequelize.DATE,
      modificado_em: Sequelize.DATE,
    }, {
      sequelize,
      tableName: 'indicador',
      schema: 'indicadores',
      timestamps: false,
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Estratificacao, { foreignKey: 'id_estratificacao', as: 'estratificacao' });
    this.belongsTo(models.GrupamentoIndicador, { foreignKey: 'id_grupamento_indicador', as: 'grupamento' });
  }
}

export default Indicador;
