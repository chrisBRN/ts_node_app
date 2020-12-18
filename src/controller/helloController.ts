import Express, {Router, Response, Request} from 'express';
import {StatusCodes} from 'http-status-codes';
import {Controller} from '../type/controller';
import {httpResponse} from '../utilties/HttpUtil';

export const HelloController: Controller = {
    path: '/hello',
    router: router()
};

function router(): Router {
    const router = Express.Router();

    router.get('/', (req: Request, res: Response) => {
        httpResponse(StatusCodes.OK, 'Hello World', req, res);
    });

    return router;
}
