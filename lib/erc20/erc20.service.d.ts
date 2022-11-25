import { TokenInformation } from "./erc20.model";
import Big from "big.js";
export declare class ERC20Service {
    wrapped(network: string): Promise<TokenInformation>;
    info(network: string, address: string): Promise<TokenInformation>;
    getTokenBalance(network: string, token: string, user: string): Promise<Big>;
    private enrich;
}
