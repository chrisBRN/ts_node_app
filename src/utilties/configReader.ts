import nConf, {Provider} from 'nconf';
import fs from 'fs';

class ConfigReader {
    private static _instance: ConfigReader;
    private readonly _provider: Provider;

    private constructor() {
        const provider = nConf.argv().env();
        const profile = process.env.NODE_ENV;

        const filePath = `./config/profile-${profile}.json`;

        if (profile && fs.existsSync(filePath)) {
            provider.file('profile', filePath);
        }

        provider.file('defaultProfile', './config/profile-production.json').required(['logConfig', 'protocol']);

        this._provider = provider;
    }

    get provider(): Provider {
        return this._provider;
    }

    static get instance(): ConfigReader {
        return this._instance || new this();
    }
}

export default ConfigReader.instance.provider;
