import {FarmingMarket, FarmingPosition} from "../farming/farming.model";
import {LendingMarket, LendingPosition} from "../lending/lending.model";
import {PoolingMarket, PoolingPosition} from "../pooling/pooling.model";
import axios from "axios";

export class InvestService {
    public investFunction(market: (LendingMarket | FarmingMarket | PoolingMarket | PoolingPosition | LendingPosition | FarmingPosition)) {
        if (market.prepareInvestmentSupported) {
            return async ( user: string, amount: (BigInteger | null) = null) => {
                const response = await axios.post(`https://api.defitrack.io/${market.protocol.slug}/${market.marketType}/markets/${market.id}/enter`, {
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