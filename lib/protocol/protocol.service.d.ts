import { Protocol } from "./protocol.model";
import { DefiHubConfig } from "../defihub.config";
export declare class ProtocolService {
    private readonly config;
    constructor(config: DefiHubConfig);
    list(): Promise<Array<Protocol>>;
}
