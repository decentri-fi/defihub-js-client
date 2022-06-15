import {DefitrackModule} from "./defitrack.module";

const run = async () => {
    const defitrack = new DefitrackModule()
    const tokenInfo = await defitrack.erc20().info("ETHEREUM", "0x6b175474e89094c44da98b954eedeac495271d0f")
    console.log(tokenInfo)
}

run();