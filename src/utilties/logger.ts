import log4js, {Logger} from 'log4js';
import ConfigProvider from './configReader';

class AppLogger {
    private static _instance: AppLogger;
    private readonly _logger: Logger;

    constructor() {
        log4js.configure(`./config/log-${ConfigProvider.get('logConfig')}.json`);
        this._logger = log4js.getLogger('Server');
    }

    get logger(): Logger {
        return this._logger;
    }

    static get instance(): AppLogger {
        return this._instance || new this();
    }
}

export default AppLogger.instance.logger;
