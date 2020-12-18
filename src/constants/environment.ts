import ConfigProvider from '../utilties/configReader';
import {isBool, isString} from '../utilties/typeGuard';

interface EnvConstant {
    logConfig: string;
    allowDebuggingInfo: boolean;
}

class EnvironmentConfig {
    private static _instance: EnvironmentConfig;

    private readonly _envConstant: EnvConstant;
    private readonly error: Error = new Error('Unable To Validate Profile');

    constructor() {
        this._envConstant = this.initEnvConfig();
    }

    private initEnvConfig(): EnvConstant {
        const parts = {
            logConfig: ConfigProvider.get('logConfig'),
            allowDebuggingInfo: ConfigProvider.get('allowDebuggingInfo')
        };

        if (!isString(parts.logConfig) || !isBool(parts.allowDebuggingInfo)) {
            throw this.error;
        }

        return {
            logConfig: parts.logConfig,
            allowDebuggingInfo: parts.allowDebuggingInfo
        };
    }

    get envConstant(): EnvConstant {
        return this._envConstant;
    }

    static get instance(): EnvironmentConfig {
        return this._instance || new this();
    }
}

export default EnvironmentConfig.instance;
