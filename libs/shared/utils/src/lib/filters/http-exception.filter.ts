// https://progressivecoder.com/how-to-use-nestjs-exception-filters/
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Response } from 'express';

// @Catch(HttpException)
// export class HttpExceptionFilter implements ExceptionFilter {
//   private readonly logger = new Logger(HttpExceptionFilter.name);

//   catch(exception: HttpException, host: ArgumentsHost) {
//     this.logger.error(JSON.stringify(exception));
//     this.logger.error(exception);

//     const context = host.switchToHttp();
//     const response = context.getResponse<Response>();
//     const request = context.getRequest<Request>();
//     const statusCode = exception.getStatus();
//     const errorMessage = exception.message;

//     const customError = {
//       statusCode,
//       errorMessage,
//       timestamp: new Date().toISOString(),
//       createdBy: 'HttpExceptionFilter',
//       path: request.url,
//     };

//     this.logger.error(JSON.stringify(customError));

//     response.status(statusCode).json(customError);
//   }
// }

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    // this.logger.error(JSON.stringify(exception));

    // TODO: FIX how to log customize error message - responseBody??
    // TODO: move it in independent lib

    const customError = {
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
    };

    // console.log(customError);

    response.status(status).json(customError);
  }
}

export class ForbiddenException extends HttpException {
  constructor() {
    super('Forbidden', HttpStatus.FORBIDDEN);
  }
}
