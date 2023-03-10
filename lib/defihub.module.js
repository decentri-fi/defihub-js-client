"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefihubModule = void 0;

var _protocol = require("./protocol/protocol.service");

var _network = require("./network/network.service");

var _erc = require("./erc20/erc20.service");

var _lending = require("./lending/lending.service");

var _farming = require("./farming/farming.service");

var _pooling = require("./pooling/pooling.service");

var _invest = require("./invest/invest.service");

var _price = require("./price/price.service");

var _statistics = require("./statistics/statistics.service");

var _claiming = require("./claiming/claiming.service");

var _event = require("./events/event.service");

var _exit = require("./exit/exit.service");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var DefihubModule = /*#__PURE__*/function () {
  function DefihubModule() {
    _classCallCheck(this, DefihubModule);

    this._invest = new _invest.InvestService();
    this._exit = new _exit.ExitService();
    this._lending = new _lending.LendingService(this._invest, this._exit);
    this._farming = new _farming.FarmingService(this._invest, this._exit);
    this._pooling = new _pooling.PoolingService(this._invest, this._exit);
    this._protocols = new _protocol.ProtocolService();
    this._networks = new _network.NetworkService();
    this._erc20 = new _erc.ERC20Service();
    this._prices = new _price.PriceService();
    this._statistics = new _statistics.StatisticsService();
    this._claiming = new _claiming.ClaimService();
    this._events = new _event.EventService();
  }

  _createClass(DefihubModule, [{
    key: "protocols",
    value: function protocols() {
      return this._protocols;
    }
  }, {
    key: "networks",
    value: function networks() {
      return this._networks;
    }
  }, {
    key: "erc20",
    value: function erc20() {
      return this._erc20;
    }
  }, {
    key: "events",
    value: function events() {
      return this._events;
    }
  }, {
    key: "pooling",
    value: function pooling() {
      return this._pooling;
    }
  }, {
    key: "farming",
    value: function farming() {
      return this._farming;
    }
  }, {
    key: "lending",
    value: function lending() {
      return this._lending;
    }
  }, {
    key: "invest",
    value: function invest() {
      return this._invest;
    }
  }, {
    key: "exit",
    value: function exit() {
      return this._exit;
    }
  }, {
    key: "prices",
    value: function prices() {
      return this._prices;
    }
  }, {
    key: "statistics",
    value: function statistics() {
      return this._statistics;
    }
  }, {
    key: "claiming",
    value: function claiming() {
      return this._claiming;
    }
  }]);

  return DefihubModule;
}();

exports.DefihubModule = DefihubModule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJEZWZpaHViTW9kdWxlIiwiX2ludmVzdCIsIkludmVzdFNlcnZpY2UiLCJfZXhpdCIsIkV4aXRTZXJ2aWNlIiwiX2xlbmRpbmciLCJMZW5kaW5nU2VydmljZSIsIl9mYXJtaW5nIiwiRmFybWluZ1NlcnZpY2UiLCJfcG9vbGluZyIsIlBvb2xpbmdTZXJ2aWNlIiwiX3Byb3RvY29scyIsIlByb3RvY29sU2VydmljZSIsIl9uZXR3b3JrcyIsIk5ldHdvcmtTZXJ2aWNlIiwiX2VyYzIwIiwiRVJDMjBTZXJ2aWNlIiwiX3ByaWNlcyIsIlByaWNlU2VydmljZSIsIl9zdGF0aXN0aWNzIiwiU3RhdGlzdGljc1NlcnZpY2UiLCJfY2xhaW1pbmciLCJDbGFpbVNlcnZpY2UiLCJfZXZlbnRzIiwiRXZlbnRTZXJ2aWNlIl0sInNvdXJjZXMiOlsiLi4vc3JjL2RlZmlodWIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UHJvdG9jb2xTZXJ2aWNlfSBmcm9tIFwiLi9wcm90b2NvbC9wcm90b2NvbC5zZXJ2aWNlXCI7XG5pbXBvcnQge05ldHdvcmtTZXJ2aWNlfSBmcm9tIFwiLi9uZXR3b3JrL25ldHdvcmsuc2VydmljZVwiO1xuaW1wb3J0IHtFUkMyMFNlcnZpY2V9IGZyb20gXCIuL2VyYzIwL2VyYzIwLnNlcnZpY2VcIjtcbmltcG9ydCB7TGVuZGluZ1NlcnZpY2V9IGZyb20gXCIuL2xlbmRpbmcvbGVuZGluZy5zZXJ2aWNlXCI7XG5pbXBvcnQge0Zhcm1pbmdTZXJ2aWNlfSBmcm9tIFwiLi9mYXJtaW5nL2Zhcm1pbmcuc2VydmljZVwiO1xuaW1wb3J0IHtQb29saW5nU2VydmljZX0gZnJvbSBcIi4vcG9vbGluZy9wb29saW5nLnNlcnZpY2VcIjtcbmltcG9ydCB7SW52ZXN0U2VydmljZX0gZnJvbSBcIi4vaW52ZXN0L2ludmVzdC5zZXJ2aWNlXCI7XG5pbXBvcnQge1ByaWNlU2VydmljZX0gZnJvbSBcIi4vcHJpY2UvcHJpY2Uuc2VydmljZVwiO1xuaW1wb3J0IHtTdGF0aXN0aWNzU2VydmljZX0gZnJvbSBcIi4vc3RhdGlzdGljcy9zdGF0aXN0aWNzLnNlcnZpY2VcIjtcbmltcG9ydCB7Q2xhaW1TZXJ2aWNlfSBmcm9tIFwiLi9jbGFpbWluZy9jbGFpbWluZy5zZXJ2aWNlXCI7XG5pbXBvcnQge0V2ZW50U2VydmljZX0gZnJvbSBcIi4vZXZlbnRzL2V2ZW50LnNlcnZpY2VcIjtcbmltcG9ydCB7RXhpdFNlcnZpY2V9IGZyb20gXCIuL2V4aXQvZXhpdC5zZXJ2aWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBEZWZpaHViTW9kdWxlIHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgX3Byb3RvY29sczogUHJvdG9jb2xTZXJ2aWNlO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgX25ldHdvcmtzOiBOZXR3b3JrU2VydmljZTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9lcmMyMDogRVJDMjBTZXJ2aWNlO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgX2xlbmRpbmc6IExlbmRpbmdTZXJ2aWNlO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgX2Zhcm1pbmc6IEZhcm1pbmdTZXJ2aWNlO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgX3Bvb2xpbmc6IFBvb2xpbmdTZXJ2aWNlO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgX2ludmVzdDogSW52ZXN0U2VydmljZTtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2V4aXQ6IEV4aXRTZXJ2aWNlO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgX3ByaWNlczogUHJpY2VTZXJ2aWNlO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgX3N0YXRpc3RpY3M6IFN0YXRpc3RpY3NTZXJ2aWNlO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgX2NsYWltaW5nOiBDbGFpbVNlcnZpY2U7XG4gICAgcHJpdmF0ZSByZWFkb25seSBfZXZlbnRzOiBFdmVudFNlcnZpY2U7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5faW52ZXN0ID0gbmV3IEludmVzdFNlcnZpY2UoKTtcbiAgICAgICAgdGhpcy5fZXhpdCA9IG5ldyBFeGl0U2VydmljZSgpO1xuICAgICAgICB0aGlzLl9sZW5kaW5nID0gbmV3IExlbmRpbmdTZXJ2aWNlKHRoaXMuX2ludmVzdCwgdGhpcy5fZXhpdCk7XG4gICAgICAgIHRoaXMuX2Zhcm1pbmcgPSBuZXcgRmFybWluZ1NlcnZpY2UodGhpcy5faW52ZXN0LCB0aGlzLl9leGl0KTtcbiAgICAgICAgdGhpcy5fcG9vbGluZyA9IG5ldyBQb29saW5nU2VydmljZSh0aGlzLl9pbnZlc3QsIHRoaXMuX2V4aXQpO1xuICAgICAgICB0aGlzLl9wcm90b2NvbHMgPSBuZXcgUHJvdG9jb2xTZXJ2aWNlKClcbiAgICAgICAgdGhpcy5fbmV0d29ya3MgPSBuZXcgTmV0d29ya1NlcnZpY2UoKTtcbiAgICAgICAgdGhpcy5fZXJjMjAgPSBuZXcgRVJDMjBTZXJ2aWNlKCk7XG4gICAgICAgIHRoaXMuX3ByaWNlcyA9IG5ldyBQcmljZVNlcnZpY2UoKTtcbiAgICAgICAgdGhpcy5fc3RhdGlzdGljcyA9IG5ldyBTdGF0aXN0aWNzU2VydmljZSgpO1xuICAgICAgICB0aGlzLl9jbGFpbWluZyA9IG5ldyBDbGFpbVNlcnZpY2UoKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzID0gbmV3IEV2ZW50U2VydmljZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwcm90b2NvbHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm90b2NvbHM7XG4gICAgfVxuXG4gICAgcHVibGljIG5ldHdvcmtzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbmV0d29ya3M7XG4gICAgfVxuXG4gICAgcHVibGljIGVyYzIwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXJjMjA7XG4gICAgfVxuXG4gICAgcHVibGljIGV2ZW50cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50cztcbiAgICB9XG5cbiAgICBwdWJsaWMgcG9vbGluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Bvb2xpbmc7XG4gICAgfVxuXG4gICAgcHVibGljIGZhcm1pbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9mYXJtaW5nO1xuICAgIH1cblxuICAgIHB1YmxpYyBsZW5kaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGVuZGluZztcbiAgICB9XG5cbiAgICBwdWJsaWMgaW52ZXN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52ZXN0O1xuICAgIH1cblxuICAgIHB1YmxpYyBleGl0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXhpdDtcbiAgICB9XG5cbiAgICBwdWJsaWMgcHJpY2VzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJpY2VzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aXN0aWNzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGlzdGljcztcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xhaW1pbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jbGFpbWluZztcbiAgICB9XG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0lBRWFBLGE7RUFnQlQseUJBQWM7SUFBQTs7SUFDVixLQUFLQyxPQUFMLEdBQWUsSUFBSUMscUJBQUosRUFBZjtJQUNBLEtBQUtDLEtBQUwsR0FBYSxJQUFJQyxpQkFBSixFQUFiO0lBQ0EsS0FBS0MsUUFBTCxHQUFnQixJQUFJQyx1QkFBSixDQUFtQixLQUFLTCxPQUF4QixFQUFpQyxLQUFLRSxLQUF0QyxDQUFoQjtJQUNBLEtBQUtJLFFBQUwsR0FBZ0IsSUFBSUMsdUJBQUosQ0FBbUIsS0FBS1AsT0FBeEIsRUFBaUMsS0FBS0UsS0FBdEMsQ0FBaEI7SUFDQSxLQUFLTSxRQUFMLEdBQWdCLElBQUlDLHVCQUFKLENBQW1CLEtBQUtULE9BQXhCLEVBQWlDLEtBQUtFLEtBQXRDLENBQWhCO0lBQ0EsS0FBS1EsVUFBTCxHQUFrQixJQUFJQyx5QkFBSixFQUFsQjtJQUNBLEtBQUtDLFNBQUwsR0FBaUIsSUFBSUMsdUJBQUosRUFBakI7SUFDQSxLQUFLQyxNQUFMLEdBQWMsSUFBSUMsaUJBQUosRUFBZDtJQUNBLEtBQUtDLE9BQUwsR0FBZSxJQUFJQyxtQkFBSixFQUFmO0lBQ0EsS0FBS0MsV0FBTCxHQUFtQixJQUFJQyw2QkFBSixFQUFuQjtJQUNBLEtBQUtDLFNBQUwsR0FBaUIsSUFBSUMsc0JBQUosRUFBakI7SUFDQSxLQUFLQyxPQUFMLEdBQWUsSUFBSUMsbUJBQUosRUFBZjtFQUNIOzs7O1dBRUQscUJBQW1CO01BQ2YsT0FBTyxLQUFLYixVQUFaO0lBQ0g7OztXQUVELG9CQUFrQjtNQUNkLE9BQU8sS0FBS0UsU0FBWjtJQUNIOzs7V0FFRCxpQkFBZTtNQUNYLE9BQU8sS0FBS0UsTUFBWjtJQUNIOzs7V0FFRCxrQkFBZ0I7TUFDWixPQUFPLEtBQUtRLE9BQVo7SUFDSDs7O1dBRUQsbUJBQWlCO01BQ2IsT0FBTyxLQUFLZCxRQUFaO0lBQ0g7OztXQUVELG1CQUFpQjtNQUNiLE9BQU8sS0FBS0YsUUFBWjtJQUNIOzs7V0FFRCxtQkFBaUI7TUFDYixPQUFPLEtBQUtGLFFBQVo7SUFDSDs7O1dBRUQsa0JBQWdCO01BQ1osT0FBTyxLQUFLSixPQUFaO0lBQ0g7OztXQUVELGdCQUFjO01BQ1YsT0FBTyxLQUFLRSxLQUFaO0lBQ0g7OztXQUVELGtCQUFnQjtNQUNaLE9BQU8sS0FBS2MsT0FBWjtJQUNIOzs7V0FFRCxzQkFBb0I7TUFDaEIsT0FBTyxLQUFLRSxXQUFaO0lBQ0g7OztXQUVELG9CQUFrQjtNQUNkLE9BQU8sS0FBS0UsU0FBWjtJQUNIIn0=