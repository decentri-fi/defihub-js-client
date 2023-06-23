import { Claimable } from "./claiming.model";
import { DefiHubConfig } from "../defihub.config";
export declare class ClaimService {
    private readonly config;
    constructor(config: DefiHubConfig);
    getClaimables(protocol: string, user: string): Promise<Array<Claimable>>;
}
