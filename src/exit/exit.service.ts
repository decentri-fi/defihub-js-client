import {LendingMarket, LendingPosition} from "../lending/lending.model";
import {FarmingMarket, FarmingPosition} from "../farming/farming.model";
import {PoolingMarket, PoolingPosition} from "../pooling/pooling.model";
import axios from "axios";

export class ExitService {
    public exitPositionFunction(market: (LendingMarket | FarmingMarket | PoolingMarket | PoolingPosition | LendingPosition | FarmingPosition)) {
        if (market.exitPositionSupported) {
            return async ( user: string, amount: (BigInteger)) => {
                const response = await axios.post(`https://api.decentri.fi/${market.protocol.slug}/${market.marketType}/markets/${market.id}/exit`, {
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