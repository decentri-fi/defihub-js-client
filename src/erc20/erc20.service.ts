import {TokenInformation} from "./erc20.model";
import axios from "axios";
import Big from "big.js";

export class ERC20Service {

    public async wrapped(network: string): Promise<TokenInformation> {
        const response = await axios.get(`https://api.decentri.fi/erc20/${network}/wrapped`);
        return this.enrich(response.data);
    }

    public async info(network: string, address: string): Promise<TokenInformation> {
        const response = await axios.get(`https://api.decentri.fi/erc20/${network}/${address}/token`);
        return this.enrich(response.data);
    }

    public async getTokenBalance(network: string, token: string, user: string): Promise<Big> {
        const response = await axios.get(`https://api.decentri.fi/erc20/${network}/${token}/${user}`);
        return response.data;
    }

    private enrich(data: TokenInformation): TokenInformation & { balanceOf: Function } {
        return {
            ...data,
            balanceOf: (user: string) => {
                return this.getTokenBalance(data.network.name, data.address, user);
            }
        }
    }
}