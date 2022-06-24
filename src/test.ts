import defitrack from "./index";
import {Network} from "./network/network.model";
import {LendingMarket} from "./lending/lending.model";
import {PoolingMarket} from "./pooling/pooling.model";

const run = async () => {
    const lendingMarkets: Array<LendingMarket> = await defitrack.lending().markets("aave")
    console.log(await lendingMarkets[0].enter("0xf977814e90da44bfa03b6295a0616a897441acec"))
}

run();