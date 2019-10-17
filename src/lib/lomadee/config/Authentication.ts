import '../../../bootstrap';

/**
 * Interface que padroniza os dados do ambiente da aplicação
 *
 * @interface
 */
interface EnvironmentData {
  url?: string;
  appToken?: string,
  sourceId?: string
}

/**
 * Classe que cria os ambientes da aplicação
 *
 * @class Authentication
 */
class Authentication {
  private development: EnvironmentData;

  private production: EnvironmentData;

  private test: EnvironmentData;

  /**
   * Construtor da classe
   *
   * @constructor
   */
  constructor() {
    this.development = {
      url: `http://sandbox-api.lomadee.com/v3/${process.env.APP_TOKEN}`,
      appToken: process.env.APP_TOKEN,
      sourceId: process.env.SOURCE_ID,
    };

    this.production = {
      url: `https://api.lomadee.com/v3/${process.env.APP_TOKEN}`,
      appToken: process.env.APP_TOKEN,
      sourceId: process.env.SOURCE_ID,
    };

    this.test = {
      url: `http://sandbox-api.lomadee.com/v3/${process.env.APP_TOKEN}`,
      appToken: process.env.APP_TOKEN,
      sourceId: process.env.SOURCE_ID,
    };
  }

  /**
   * Retorna o ambiente setado no projeto
   */
  public config(): EnvironmentData {
    switch (process.env.NODE_ENV) {
      case 'development':
        return this.development;
      case 'production':
        return this.production;
      case 'test':
        return this.test;
      default:
        return this.development;
    }
  }
}

export default new Authentication();
