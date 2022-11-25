import defihub from "./index";

const run = async () => {

    const info = await defihub.events().decodeFromTransaction('ETHEREUM', '0x69520595ae0ddce042167170dfa4ce0fc98611f7b3e3d90a32fdcd44620ef357');
    console.log(info)
}

run();