import {ProtocolService} from "./protocol/protocol.service";
import {NetworkService} from "./network/network.service";
import {ERC20Service} from "./erc20/erc20.service";
import {LendingService} from "./lending/lending.service";
import {FarmingService} from "./farming/farming.service";
import {PoolingService} from "./pooling/pooling.service";
import {InvestService} from "./invest/invest.service";
import {PriceService} from "./price/price.service";

export class DefitrackModule {

    private readonly _protocols: ProtocolService;
    private readonly _networks: NetworkService;
    private readonly _erc20: ERC20Service;
    private readonly _lending: LendingService;
    private readonly _farming: FarmingService;
    private readonly _pooling: PoolingService;
    private readonly _invest: InvestService;
    private readonly _prices: PriceService;

    constructor() {
        this._protocols = new ProtocolService()
        this._networks = new NetworkService();
        this._invest = new InvestService();
        this._erc20 = new ERC20Service();
        this._lending = new LendingService(this._invest);
        this._farming = new FarmingService(this._invest);
        this._pooling = new PoolingService(this._invest);
        this._prices = new PriceService();
    }

    public protocols() {
        return this._protocols;
    }

    public networks() {
        return this._networks;
    }

    public erc20() {
        return this._erc20;
    }

    public pooling() {
        return this._pooling;
    }

    public farming() {
        return this._farming;
    }

    public lending() {
        return this._lending;
    }

    public invest() {
        return this._invest;
    }

    public prices() {
        return this._prices;
    }
}