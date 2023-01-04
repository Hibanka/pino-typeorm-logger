import { Logger as PinoLogger } from 'pino';
import { Logger as TypeORMLogger } from 'typeorm';

export class PinoTypeORMLogger implements TypeORMLogger {
  constructor(private readonly logger: PinoLogger) {}

  public logQuery(query: string, parameters?: any[]): void {
    this.logger.debug({ query: this.normalizeQuery(query), parameters }, 'sql query');
  }

  public logQueryError(error: string, query: string, parameters?: any[]): void {
    this.logger.error({ query: this.normalizeQuery(query), parameters, error }, 'failed sql query');
  }

  public logQuerySlow(time: number, query: string, parameters?: any[]): void {
    this.logger.warn({ query: this.normalizeQuery(query), parameters, time }, 'slow sql query');
  }

  public logSchemaBuild(message: string): void {
    this.logger.debug(message);
  }

  public logMigration(message: string): void {
    this.logger.debug(message);
  }

  public log(level: 'log' | 'info' | 'warn', message: any): void {
    switch (level) {
      case 'log':
      case 'info': {
        this.logger.info(message);
        break;
      }
      case 'warn': {
        this.logger.warn(message);
        break;
      }
    }
  }

  private normalizeQuery(query: string): string {
    return query.replace(/\s\s+/g, ' ').trim();
  }
}
