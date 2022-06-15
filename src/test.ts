import {DefitrackModule} from "./defitrack.module";

const run = async () => {
    const defitrack = new DefitrackModule()
    const tokenInfo = await defitrack.pooling().markets("uniswap")
    console.log(tokenInfo)
}

run();