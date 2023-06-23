import { Network } from "./network.model";
import { DefiHubConfig } from "../defihub.config";
export declare class NetworkService {
    private readonly config;
    constructor(config: DefiHubConfig);
    list(): Promise<Array<Network>>;
}
