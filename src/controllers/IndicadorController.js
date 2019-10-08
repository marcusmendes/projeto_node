import Indicador from '../models/Indicador';
import Estratificacao from '../models/Estratificacao';
import GrupamentoIndicador from '../models/GrupamentoIndicador';

class IndicadorController {
  async index(req, res) {
    const indicadores = await Indicador.findAll({
      attributes: [
        'id',
        'codigo',
        'nome',
        'mascara',
        'formula',
        'interpretacao',
        'possui_ranking',
        'status',
      ],
      include: [
        {
          model: Estratificacao,
          as: 'estratificacao',
          attributes: ['id', 'nome'],
        },
        {
          model: GrupamentoIndicador,
          as: 'grupamento',
          attributes: ['id', 'nome'],
          include: [
            {
              model: GrupamentoIndicador,
              as: 'parent',
              attributes: ['id', 'nome'],
              include: [
                {
                  model: GrupamentoIndicador,
                  as: 'parent',
                  attributes: ['id', 'nome'],
                },
              ],
            },
          ],
        },
      ],
    });
    return res.json(indicadores);
  }
}

export default new IndicadorController();
