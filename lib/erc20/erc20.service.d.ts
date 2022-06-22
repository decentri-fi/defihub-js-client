import { TokenInformation } from "./erc20.model";
import { DefitrackError } from "../error";
export declare class ERC20Service {
    info(network: string, address: string): Promise<DefitrackError | TokenInformation>;
}
