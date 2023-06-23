import { TokenInformation } from "./erc20.model";
import Big from "big.js";
import { DefiHubConfig } from "../defihub.config";
export declare class ERC20Service {
    private readonly config;
    constructor(config: DefiHubConfig);
    wrapped(network: string): Promise<TokenInformation>;
    info(network: string, address: string): Promise<TokenInformation>;
    getTokenBalance(network: string, token: string, user: string): Promise<Big>;
    getTokenAllowance(network: string, token: string, user: string, spender: string): Promise<Big>;
    private enrich;
}
