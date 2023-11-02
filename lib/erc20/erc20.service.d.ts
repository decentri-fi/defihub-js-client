import { Balance, TokenInformation } from "./erc20.model";
import { DefiHubConfig } from "../defihub.config";
import { BigNumber } from "@ethersproject/bignumber";
export declare class ERC20Service {
    private readonly config;
    constructor(config: DefiHubConfig);
    wrapped(network: string): Promise<TokenInformation>;
    info(network: string, address: string): Promise<TokenInformation>;
    getTokenBalance(network: string, token: string, user: string): Promise<string>;
    getTokenBalanceV2(network: string, token: string, user: string): Promise<Balance>;
    getTokenAllowance(network: string, token: string, user: string, spender: string): Promise<BigNumber>;
    private enrich;
}
