import { ProtocolService } from "./protocol/protocol.service";
import { NetworkService } from "./network/network.service";
import { ERC20Service } from "./erc20/erc20.service";
import { LendingService } from "./lending/lending.service";
import { FarmingService } from "./farming/farming.service";
import { PoolingService } from "./pooling/pooling.service";
import { InvestService } from "./invest/invest.service";
export declare class DefitrackModule {
    private readonly _protocols;
    private readonly _networks;
    private readonly _erc20;
    private readonly _lending;
    private readonly _farming;
    private readonly _pooling;
    private readonly _invest;
    constructor();
    protocols(): ProtocolService;
    networks(): NetworkService;
    erc20(): ERC20Service;
    pooling(): PoolingService;
    farming(): FarmingService;
    lending(): LendingService;
    invest(): InvestService;
}
