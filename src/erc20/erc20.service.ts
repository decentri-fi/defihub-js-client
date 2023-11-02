import {Balance, TokenInformation} from "./erc20.model";
import axios from "axios";
import Big from "big.js";
import {DefiHubConfig} from "../defihub.config";
import {BigNumber} from "@ethersproject/bignumber";

export class ERC20Service {

    private readonly config: DefiHubConfig;

    constructor(config: DefiHubConfig) {
        this.config = config;
    }

    public async wrapped(network: string): Promise<TokenInformation> {
        const response = await axios.get(`${this.config.baseUrl}/erc20/${network}/wrapped`);
        return this.enrich(response.data);
    }

    public async info(network: string, address: string): Promise<TokenInformation> {
        const response = await axios.get(`${this.config.baseUrl}/erc20/${network}/${address}/token`);
        return this.enrich(response.data);
    }

    public async getTokenBalance(network: string, token: string, user: string): Promise<string> {
        const response = await axios.get(`${this.config.baseUrl}/erc20/${network}/${token}/${user}`);
        return response.data;
    }

    public async getTokenBalanceV2(network: string, token: string, user: string): Promise<Balance> {
        const response = await axios.get(`${this.config.baseUrl}/erc20/${network}/${token}/${user}?v2`);
        return response.data;
    }


    public async getTokenAllowance(network: string, token: string, user: string, spender: string): Promise<BigNumber> {
        const response = await axios.get(`${this.config.baseUrl}/erc20/${network}/allowance/${token}/${user}/${spender}`);
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