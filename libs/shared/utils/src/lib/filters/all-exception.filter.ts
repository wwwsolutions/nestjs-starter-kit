import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name);

  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: unknown, host: ArgumentsHost): void {
    // In certain situations `httpAdapter` might not be available in the
    // constructor method, thus we should resolve it here.
    const { httpAdapter } = this.httpAdapterHost;

    const ctx = host.switchToHttp();

    const httpStatus =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    // let xxxx;
    // console.log(
    //   '>>>>>>>=>',
    //   (xxxx =
    //     exception instanceof HttpException
    //       ? exception.getStatus()
    //       : HttpStatus.INTERNAL_SERVER_ERROR)
    // );

    const timestamp = new Date().toISOString();

    // console.log(timestamp, typeof timestamp);

    // TODO: FIX how to log customize error message - responseBody??
    // TODO: move it in independent lib

    // this.logger.error({
    //   httpStatus,
    //   test: 'fuckyou',
    //   timestamp: `${timestamp}`,
    // });

    const responseBody = {
      statusCode: httpStatus,
      timestamp: new Date().toISOString(),
      // path: httpAdapter.getRequestUrl(ctx.getRequest()),
    };

    httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
  }
}
