import defitrack from "./index";
import {Network} from "./network/network.model";
import {LendingMarket} from "./lending/lending.model";

const run = async () => {
    const lendingMarkets: Array<LendingMarket> = await defitrack.lending().markets("aave")
}

run();