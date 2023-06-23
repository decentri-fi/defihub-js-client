import { DefiHubConfig } from "../defihub.config";
export declare class PriceService {
    private readonly config;
    constructor(config: DefiHubConfig);
    calculate(address: string, network: string, amount: number): Promise<any>;
}
