import {TokenInformation} from "./erc20.model";
import axios from "axios";
import {DefitrackError} from "../error";

export class ERC20Service {
    public async info(network: string, address: string): Promise<DefitrackError | TokenInformation> {
        try {
            const response = await axios.get(`https://api.defitrack.io/erc20/${network}/${address}/token`);
            return response.data;
        } catch (ex) {
            return new DefitrackError("Unable to fetch token information")
        }
    }
}