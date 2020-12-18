import {Server} from 'http';
import express, {Response, Request, NextFunction, Express} from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import logger from '../utilties/logger';
import ConfigProvider from '../utilties/configReader';
import {Controller} from '../type/controller';
import {HealthController} from '../controller/healthController';
import {HelloController} from '../controller/helloController';

const controllers = [HealthController, HelloController];

class AppServer {
    private static _instance: AppServer;

    private readonly port: number;
    private readonly _express: Express;
    private readonly _server: Server;

    private constructor() {
        this.port = ConfigProvider.get('port');

        this._express = express();
        this._express.disable('x-powered-by');
        this._express.use(cookieParser());
        this._express.use(bodyParser.json());
        this._express.use(bodyParser.urlencoded({extended: true}));

        this._express.use(function (req: Request, res: Response, next: NextFunction) {
            res.header('Content-Type', 'application/json');
            next();
        });

        this._server = new Server(this._express);

        controllers.forEach((controller: Controller) => {
            this._express.use(controller.path, controller.router);
        });
    }

    public startServer(): void {
        try {
            this._server.listen(this.port, () => {
                logger.info(`Server running on http://localhost:${this.port}`);
            });
        } catch (error) {
            logger.fatal(error);
        }
    }

    get server(): Server {
        return this._server;
    }

    get express(): Express {
        return this._express;
    }

    static get instance(): AppServer {
        return this._instance || new this();
    }
}

export default AppServer.instance;
