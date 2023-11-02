import defihub from "./index";
import {Claimable} from "./claiming/claiming.model";

const run = async () => {

    const result =  await defihub.erc20().getTokenBalanceV2(
        "OPTIMISM", "0x1f32b1c2345538c0c6f582fcb022739c4a194ebb", "0x83A524af3cf8eB146132A2459664f7680A5515bE"
    )
    console.log(result)
}

run();