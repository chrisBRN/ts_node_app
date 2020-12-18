import Express, {Response, Request} from 'express';
import {Router} from 'express-ws';
import {StatusCodes} from 'http-status-codes';
import {Controller} from '../type/controller';
import {httpResponse} from '../utilties/HttpUtil';

export const HealthController: Controller = {
    path: '/health',
    router: router()
};

function router(): Router {
    const router = Express.Router();

    router.get('/live', (req: Request, res: Response) => {
        httpResponse(StatusCodes.OK, 'Service is Live', req, res);
    });

    router.get('/ready', (req: Request, res: Response) => {
        httpResponse(StatusCodes.OK, 'Service is Ready', req, res);
    });

    // TODO /Git

    return router;
}
