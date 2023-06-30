import {FarmingMarket, FarmingPosition} from "../farming/farming.model";
import {LendingMarket, LendingPosition} from "../lending/lending.model";
import {PoolingMarket, PoolingPosition} from "../pooling/pooling.model";
import axios from "axios";
import {DefiHubConfig} from "../defihub.config";
import {TransactionPreparation} from "./invest.model";
import {ErrorResponse} from "../error.model";

export class InvestService {
    private readonly config: DefiHubConfig;

    constructor(config: DefiHubConfig) {
        this.config = config;
    }

    public investFunction(market: (LendingMarket | FarmingMarket | PoolingMarket | PoolingPosition | LendingPosition | FarmingPosition)): ((user: string, amount: (BigInteger | null)) => Promise<TransactionPreparation | ErrorResponse>) | null {
        if (market.prepareInvestmentSupported) {
            return async (user: string, amount: (BigInteger | null) = null) => {
                const response = await axios.post(`https://api.decentri.fi/${market.protocol.slug}/${market.marketType}/markets/${market.id}/enter`, {
                    user: user,
                    amount: amount
                })
                return response.data
            };
        } else {
            return null
        }
    }
}