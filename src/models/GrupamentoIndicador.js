import { Model, Sequelize } from 'sequelize';

class GrupamentoIndicador extends Model {
  static init(sequelize) {
    super.init({
      nome: Sequelize.STRING,
      id_parent: Sequelize.INTEGER,
    }, {
      sequelize,
      tableName: 'grupamento_indicador',
      schema: 'indicadores',
      timestamps: false,
    });

    return this;
  }

  static associate(models) {
    this.hasMany(models.Indicador, { as: 'indicador' });
    this.belongsTo(models.GrupamentoIndicador, { foreignKey: 'id_parent', as: 'parent' });
  }
}

export default GrupamentoIndicador;
