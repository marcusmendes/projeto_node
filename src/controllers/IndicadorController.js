import Indicador from '../models/Indicador';
import Estratificacao from '../models/Estratificacao';
import GrupamentoIndicador from '../models/GrupamentoIndicador';

import Pagination from '../util/Pagination';

class IndicadorController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const indicadores = await Pagination.paginate(page, Indicador, {
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
      order: [['codigo', 'ASC']],
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
