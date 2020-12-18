import {StatusCodes} from 'http-status-codes';

export interface HttpResponseBody {
    timestamp: string;
    status: StatusCodes;
    message?: string;
    path?: string;
}
