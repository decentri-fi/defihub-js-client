import { FarmingMarket } from "../farming/farming.model";
import { LendingMarket } from "../lending/lending.model";
import { PoolingMarket } from "../pooling/pooling.model";
export declare class InvestService {
    invest(market: (LendingMarket | FarmingMarket | PoolingMarket), user: string, amount?: (BigInteger | null)): Promise<any>;
}
