import {Claimable} from "./claiming.model";
import axios from "axios";


export class ClaimService {
    public async getClaimables(protocol: string, user: string): Promise<Array<Claimable>> {
        const response = await axios.get(`https://api.decentri.fi/${protocol}/${user}/claimables`)
        return response.data
    }
}