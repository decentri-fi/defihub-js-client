import defihub from "./index";
import {Claimable} from "./claiming/claiming.model";

const run = async () => {

    const claimables: Claimable[] = await defihub.claimables().getClaimables("0xf18adf71266411FF39FfC268843c9A64b3292d86")
    console.log(claimables)
}

run();