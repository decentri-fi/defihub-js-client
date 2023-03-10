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

var _exit2 = require("./exit/exit.service");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var DefihubModule = /*#__PURE__*/function () {
  function DefihubModule() {
    _classCallCheck(this, DefihubModule);

    this._invest = new _invest.InvestService();

    var _exit = new _exit2.ExitService();

    this._lending = new _lending.LendingService(this._invest, _exit);
    this._farming = new _farming.FarmingService(this._invest, _exit);
    this._pooling = new _pooling.PoolingService(this._invest, _exit);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJEZWZpaHViTW9kdWxlIiwiX2ludmVzdCIsIkludmVzdFNlcnZpY2UiLCJfZXhpdCIsIkV4aXRTZXJ2aWNlIiwiX2xlbmRpbmciLCJMZW5kaW5nU2VydmljZSIsIl9mYXJtaW5nIiwiRmFybWluZ1NlcnZpY2UiLCJfcG9vbGluZyIsIlBvb2xpbmdTZXJ2aWNlIiwiX3Byb3RvY29scyIsIlByb3RvY29sU2VydmljZSIsIl9uZXR3b3JrcyIsIk5ldHdvcmtTZXJ2aWNlIiwiX2VyYzIwIiwiRVJDMjBTZXJ2aWNlIiwiX3ByaWNlcyIsIlByaWNlU2VydmljZSIsIl9zdGF0aXN0aWNzIiwiU3RhdGlzdGljc1NlcnZpY2UiLCJfY2xhaW1pbmciLCJDbGFpbVNlcnZpY2UiLCJfZXZlbnRzIiwiRXZlbnRTZXJ2aWNlIl0sInNvdXJjZXMiOlsiLi4vc3JjL2RlZmlodWIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UHJvdG9jb2xTZXJ2aWNlfSBmcm9tIFwiLi9wcm90b2NvbC9wcm90b2NvbC5zZXJ2aWNlXCI7XG5pbXBvcnQge05ldHdvcmtTZXJ2aWNlfSBmcm9tIFwiLi9uZXR3b3JrL25ldHdvcmsuc2VydmljZVwiO1xuaW1wb3J0IHtFUkMyMFNlcnZpY2V9IGZyb20gXCIuL2VyYzIwL2VyYzIwLnNlcnZpY2VcIjtcbmltcG9ydCB7TGVuZGluZ1NlcnZpY2V9IGZyb20gXCIuL2xlbmRpbmcvbGVuZGluZy5zZXJ2aWNlXCI7XG5pbXBvcnQge0Zhcm1pbmdTZXJ2aWNlfSBmcm9tIFwiLi9mYXJtaW5nL2Zhcm1pbmcuc2VydmljZVwiO1xuaW1wb3J0IHtQb29saW5nU2VydmljZX0gZnJvbSBcIi4vcG9vbGluZy9wb29saW5nLnNlcnZpY2VcIjtcbmltcG9ydCB7SW52ZXN0U2VydmljZX0gZnJvbSBcIi4vaW52ZXN0L2ludmVzdC5zZXJ2aWNlXCI7XG5pbXBvcnQge1ByaWNlU2VydmljZX0gZnJvbSBcIi4vcHJpY2UvcHJpY2Uuc2VydmljZVwiO1xuaW1wb3J0IHtTdGF0aXN0aWNzU2VydmljZX0gZnJvbSBcIi4vc3RhdGlzdGljcy9zdGF0aXN0aWNzLnNlcnZpY2VcIjtcbmltcG9ydCB7Q2xhaW1TZXJ2aWNlfSBmcm9tIFwiLi9jbGFpbWluZy9jbGFpbWluZy5zZXJ2aWNlXCI7XG5pbXBvcnQge0V2ZW50U2VydmljZX0gZnJvbSBcIi4vZXZlbnRzL2V2ZW50LnNlcnZpY2VcIjtcbmltcG9ydCB7RXhpdFNlcnZpY2V9IGZyb20gXCIuL2V4aXQvZXhpdC5zZXJ2aWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBEZWZpaHViTW9kdWxlIHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgX3Byb3RvY29sczogUHJvdG9jb2xTZXJ2aWNlO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgX25ldHdvcmtzOiBOZXR3b3JrU2VydmljZTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9lcmMyMDogRVJDMjBTZXJ2aWNlO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgX2xlbmRpbmc6IExlbmRpbmdTZXJ2aWNlO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgX2Zhcm1pbmc6IEZhcm1pbmdTZXJ2aWNlO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgX3Bvb2xpbmc6IFBvb2xpbmdTZXJ2aWNlO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgX2ludmVzdDogSW52ZXN0U2VydmljZTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9wcmljZXM6IFByaWNlU2VydmljZTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9zdGF0aXN0aWNzOiBTdGF0aXN0aWNzU2VydmljZTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9jbGFpbWluZzogQ2xhaW1TZXJ2aWNlO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgX2V2ZW50czogRXZlbnRTZXJ2aWNlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX2ludmVzdCA9IG5ldyBJbnZlc3RTZXJ2aWNlKCk7XG4gICAgICAgIGNvbnN0IF9leGl0ID0gbmV3IEV4aXRTZXJ2aWNlKCk7XG4gICAgICAgIHRoaXMuX2xlbmRpbmcgPSBuZXcgTGVuZGluZ1NlcnZpY2UodGhpcy5faW52ZXN0LCBfZXhpdCk7XG4gICAgICAgIHRoaXMuX2Zhcm1pbmcgPSBuZXcgRmFybWluZ1NlcnZpY2UodGhpcy5faW52ZXN0LCBfZXhpdCk7XG4gICAgICAgIHRoaXMuX3Bvb2xpbmcgPSBuZXcgUG9vbGluZ1NlcnZpY2UodGhpcy5faW52ZXN0LCBfZXhpdCk7XG4gICAgICAgIHRoaXMuX3Byb3RvY29scyA9IG5ldyBQcm90b2NvbFNlcnZpY2UoKVxuICAgICAgICB0aGlzLl9uZXR3b3JrcyA9IG5ldyBOZXR3b3JrU2VydmljZSgpO1xuICAgICAgICB0aGlzLl9lcmMyMCA9IG5ldyBFUkMyMFNlcnZpY2UoKTtcbiAgICAgICAgdGhpcy5fcHJpY2VzID0gbmV3IFByaWNlU2VydmljZSgpO1xuICAgICAgICB0aGlzLl9zdGF0aXN0aWNzID0gbmV3IFN0YXRpc3RpY3NTZXJ2aWNlKCk7XG4gICAgICAgIHRoaXMuX2NsYWltaW5nID0gbmV3IENsYWltU2VydmljZSgpO1xuICAgICAgICB0aGlzLl9ldmVudHMgPSBuZXcgRXZlbnRTZXJ2aWNlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHByb3RvY29scygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb3RvY29scztcbiAgICB9XG5cbiAgICBwdWJsaWMgbmV0d29ya3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9uZXR3b3JrcztcbiAgICB9XG5cbiAgICBwdWJsaWMgZXJjMjAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lcmMyMDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZXZlbnRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXZlbnRzO1xuICAgIH1cblxuICAgIHB1YmxpYyBwb29saW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcG9vbGluZztcbiAgICB9XG5cbiAgICBwdWJsaWMgZmFybWluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Zhcm1pbmc7XG4gICAgfVxuXG4gICAgcHVibGljIGxlbmRpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sZW5kaW5nO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbnZlc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZlc3Q7XG4gICAgfVxuXG4gICAgcHVibGljIHByaWNlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ByaWNlcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGlzdGljcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRpc3RpY3M7XG4gICAgfVxuXG4gICAgcHVibGljIGNsYWltaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2xhaW1pbmc7XG4gICAgfVxufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztJQUVhQSxhO0VBY1QseUJBQWM7SUFBQTs7SUFDVixLQUFLQyxPQUFMLEdBQWUsSUFBSUMscUJBQUosRUFBZjs7SUFDQSxJQUFNQyxLQUFLLEdBQUcsSUFBSUMsa0JBQUosRUFBZDs7SUFDQSxLQUFLQyxRQUFMLEdBQWdCLElBQUlDLHVCQUFKLENBQW1CLEtBQUtMLE9BQXhCLEVBQWlDRSxLQUFqQyxDQUFoQjtJQUNBLEtBQUtJLFFBQUwsR0FBZ0IsSUFBSUMsdUJBQUosQ0FBbUIsS0FBS1AsT0FBeEIsRUFBaUNFLEtBQWpDLENBQWhCO0lBQ0EsS0FBS00sUUFBTCxHQUFnQixJQUFJQyx1QkFBSixDQUFtQixLQUFLVCxPQUF4QixFQUFpQ0UsS0FBakMsQ0FBaEI7SUFDQSxLQUFLUSxVQUFMLEdBQWtCLElBQUlDLHlCQUFKLEVBQWxCO0lBQ0EsS0FBS0MsU0FBTCxHQUFpQixJQUFJQyx1QkFBSixFQUFqQjtJQUNBLEtBQUtDLE1BQUwsR0FBYyxJQUFJQyxpQkFBSixFQUFkO0lBQ0EsS0FBS0MsT0FBTCxHQUFlLElBQUlDLG1CQUFKLEVBQWY7SUFDQSxLQUFLQyxXQUFMLEdBQW1CLElBQUlDLDZCQUFKLEVBQW5CO0lBQ0EsS0FBS0MsU0FBTCxHQUFpQixJQUFJQyxzQkFBSixFQUFqQjtJQUNBLEtBQUtDLE9BQUwsR0FBZSxJQUFJQyxtQkFBSixFQUFmO0VBQ0g7Ozs7V0FFRCxxQkFBbUI7TUFDZixPQUFPLEtBQUtiLFVBQVo7SUFDSDs7O1dBRUQsb0JBQWtCO01BQ2QsT0FBTyxLQUFLRSxTQUFaO0lBQ0g7OztXQUVELGlCQUFlO01BQ1gsT0FBTyxLQUFLRSxNQUFaO0lBQ0g7OztXQUVELGtCQUFnQjtNQUNaLE9BQU8sS0FBS1EsT0FBWjtJQUNIOzs7V0FFRCxtQkFBaUI7TUFDYixPQUFPLEtBQUtkLFFBQVo7SUFDSDs7O1dBRUQsbUJBQWlCO01BQ2IsT0FBTyxLQUFLRixRQUFaO0lBQ0g7OztXQUVELG1CQUFpQjtNQUNiLE9BQU8sS0FBS0YsUUFBWjtJQUNIOzs7V0FFRCxrQkFBZ0I7TUFDWixPQUFPLEtBQUtKLE9BQVo7SUFDSDs7O1dBRUQsa0JBQWdCO01BQ1osT0FBTyxLQUFLZ0IsT0FBWjtJQUNIOzs7V0FFRCxzQkFBb0I7TUFDaEIsT0FBTyxLQUFLRSxXQUFaO0lBQ0g7OztXQUVELG9CQUFrQjtNQUNkLE9BQU8sS0FBS0UsU0FBWjtJQUNIIn0=