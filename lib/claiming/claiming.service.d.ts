import { Claimable, ClaimableConfig } from "./claiming.model";
import { DefiHubConfig } from "../defihub.config";
export declare class ClaimService {
    private readonly config;
    constructor(config: DefiHubConfig);
    getClaimables(user: string, _config?: (ClaimableConfig | null)): Promise<Array<Claimable>>;
}
