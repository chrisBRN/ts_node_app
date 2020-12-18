import {Request, Response} from 'express';
import {StatusCodes} from 'http-status-codes';
import {HttpResponseBody} from '../type/httpTypes';

function buildResponseBody(status: StatusCodes, message: string, request: Request): HttpResponseBody {
    return {
        timestamp: new Date(Date.now()).toUTCString(),
        status: status,
        message: message,
        path: request.originalUrl
    };
}

export function httpResponse(status: StatusCodes, message: string, req: Request, res: Response): void {
    res.status(status);
    res.json(buildResponseBody(status, message, req));
    res.send();
}
