import { NotifierService } from './../../services/notifier/notifier.service';
import { LoggerService } from './../../services/logger/logger.service';
import { ErrorService } from './../../services/error/error.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, Injector } from '@angular/core';

/**
 * Um interceptador de Erros globais para tratar todas as exceções da aplicação.
 * @export
 * @class GlobalErrorHandler
 * @implements {ErrorHandler}
 */
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private injector: Injector) {}

  handleError(error: Error | HttpErrorResponse): void {
    const errorService = this.injector.get(ErrorService);
    const logger = this.injector.get(LoggerService);
    const notifier = this.injector.get(NotifierService);
    let message;
    let stackTrace;

    if (error instanceof HttpErrorResponse) {
      // Server Error
      message = errorService.getServerMessage(error);
      stackTrace = errorService.getServerStack(error);
      notifier.showError(message);
    } else {
      // Client Error
      message = errorService.getClientMessage(error);
      stackTrace = errorService.getClientStack(error);
      notifier.showError(message);
    }

    // Always log errors
    logger.logError(message, stackTrace);

    console?.error(error);
  }
}
