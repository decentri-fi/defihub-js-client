import defihub from "./index";
import {Claimable} from "./claiming/claiming.model";

const run = async () => {

    const claimables: Claimable[] = await defihub.claimables().getClaimables("0xf18adf71266411FF39FfC268843c9A64b3292d86",
        {
            include: ['hop'] //can also exclude things you don't need
        })
    console.log(claimables)
}

run();