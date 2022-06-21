import {FarmingMarket} from "../farming/farming.model";
import {LendingMarket} from "../lending/lending.model";
import {PoolingMarket} from "../pooling/pooling.model";
import axios from "axios";

export class InvestService {
    public async invest(market: (LendingMarket | FarmingMarket | PoolingMarket), user: string, amount: (BigInteger | null) = null) {
        const response = await axios.post(`https://api.defitrack.io/${market.protocol.slug}/${market.marketType}/markets/${market.id}/invest`, {
            user: user,
            amount: amount
        })
        return response.data
    }
}