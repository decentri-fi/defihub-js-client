import { Claimable } from "./claiming.model";
export declare class ClaimService {
    getClaimables(protocol: string, user: string): Promise<Array<Claimable>>;
}
