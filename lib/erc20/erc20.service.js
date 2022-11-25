"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ERC20Service = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var ERC20Service = /*#__PURE__*/function () {
  function ERC20Service() {
    _classCallCheck(this, ERC20Service);
  }

  _createClass(ERC20Service, [{
    key: "wrapped",
    value: function () {
      var _wrapped = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(network) {
        var response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _axios["default"].get("https://api.decentri.fi/erc20/".concat(network, "/wrapped"));

              case 2:
                response = _context.sent;
                return _context.abrupt("return", this.enrich(response.data));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function wrapped(_x) {
        return _wrapped.apply(this, arguments);
      }

      return wrapped;
    }()
  }, {
    key: "info",
    value: function () {
      var _info = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(network, address) {
        var response;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _axios["default"].get("https://api.decentri.fi/erc20/".concat(network, "/").concat(address, "/token"));

              case 2:
                response = _context2.sent;
                return _context2.abrupt("return", this.enrich(response.data));

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function info(_x2, _x3) {
        return _info.apply(this, arguments);
      }

      return info;
    }()
  }, {
    key: "getTokenBalance",
    value: function () {
      var _getTokenBalance = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(network, token, user) {
        var response;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _axios["default"].get("https://api.decentri.fi/erc20/".concat(network, "/").concat(token, "/").concat(user));

              case 2:
                response = _context3.sent;
                return _context3.abrupt("return", response.data);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getTokenBalance(_x4, _x5, _x6) {
        return _getTokenBalance.apply(this, arguments);
      }

      return getTokenBalance;
    }()
  }, {
    key: "enrich",
    value: function enrich(data) {
      var _this = this;

      return _objectSpread(_objectSpread({}, data), {}, {
        balanceOf: function balanceOf(user) {
          return _this.getTokenBalance(data.network.name, data.address, user);
        }
      });
    }
  }]);

  return ERC20Service;
}();

exports.ERC20Service = ERC20Service;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJFUkMyMFNlcnZpY2UiLCJuZXR3b3JrIiwiYXhpb3MiLCJnZXQiLCJyZXNwb25zZSIsImVucmljaCIsImRhdGEiLCJhZGRyZXNzIiwidG9rZW4iLCJ1c2VyIiwiYmFsYW5jZU9mIiwiZ2V0VG9rZW5CYWxhbmNlIiwibmFtZSJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcmMyMC9lcmMyMC5zZXJ2aWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VG9rZW5JbmZvcm1hdGlvbn0gZnJvbSBcIi4vZXJjMjAubW9kZWxcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBCaWcgZnJvbSBcImJpZy5qc1wiO1xuXG5leHBvcnQgY2xhc3MgRVJDMjBTZXJ2aWNlIHtcblxuICAgIHB1YmxpYyBhc3luYyB3cmFwcGVkKG5ldHdvcms6IHN0cmluZyk6IFByb21pc2U8VG9rZW5JbmZvcm1hdGlvbj4ge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9hcGkuZGVjZW50cmkuZmkvZXJjMjAvJHtuZXR3b3JrfS93cmFwcGVkYCk7XG4gICAgICAgIHJldHVybiB0aGlzLmVucmljaChyZXNwb25zZS5kYXRhKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgaW5mbyhuZXR3b3JrOiBzdHJpbmcsIGFkZHJlc3M6IHN0cmluZyk6IFByb21pc2U8VG9rZW5JbmZvcm1hdGlvbj4ge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9hcGkuZGVjZW50cmkuZmkvZXJjMjAvJHtuZXR3b3JrfS8ke2FkZHJlc3N9L3Rva2VuYCk7XG4gICAgICAgIHJldHVybiB0aGlzLmVucmljaChyZXNwb25zZS5kYXRhKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZ2V0VG9rZW5CYWxhbmNlKG5ldHdvcms6IHN0cmluZywgdG9rZW46IHN0cmluZywgdXNlcjogc3RyaW5nKTogUHJvbWlzZTxCaWc+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vYXBpLmRlY2VudHJpLmZpL2VyYzIwLyR7bmV0d29ya30vJHt0b2tlbn0vJHt1c2VyfWApO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGVucmljaChkYXRhOiBUb2tlbkluZm9ybWF0aW9uKTogVG9rZW5JbmZvcm1hdGlvbiAmIHsgYmFsYW5jZU9mOiBGdW5jdGlvbiB9IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLmRhdGEsXG4gICAgICAgICAgICBiYWxhbmNlT2Y6ICh1c2VyOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRUb2tlbkJhbGFuY2UoZGF0YS5uZXR3b3JrLm5hbWUsIGRhdGEuYWRkcmVzcywgdXNlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7OzsrQ0FBQSxvSjs7Ozs7Ozs7Ozs7O0lBR2FBLFk7Ozs7Ozs7O2dGQUVULGlCQUFxQkMsT0FBckI7UUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUFBO2dCQUFBLE9BQzJCQyxpQkFBQSxDQUFNQyxHQUFOLHlDQUEyQ0YsT0FBM0MsY0FEM0I7O2NBQUE7Z0JBQ1VHLFFBRFY7Z0JBQUEsaUNBRVcsS0FBS0MsTUFBTCxDQUFZRCxRQUFRLENBQUNFLElBQXJCLENBRlg7O2NBQUE7Y0FBQTtnQkFBQTtZQUFBO1VBQUE7UUFBQTtNQUFBLEM7Ozs7Ozs7Ozs7OzZFQUtBLGtCQUFrQkwsT0FBbEIsRUFBbUNNLE9BQW5DO1FBQUE7UUFBQTtVQUFBO1lBQUE7Y0FBQTtnQkFBQTtnQkFBQSxPQUMyQkwsaUJBQUEsQ0FBTUMsR0FBTix5Q0FBMkNGLE9BQTNDLGNBQXNETSxPQUF0RCxZQUQzQjs7Y0FBQTtnQkFDVUgsUUFEVjtnQkFBQSxrQ0FFVyxLQUFLQyxNQUFMLENBQVlELFFBQVEsQ0FBQ0UsSUFBckIsQ0FGWDs7Y0FBQTtjQUFBO2dCQUFBO1lBQUE7VUFBQTtRQUFBO01BQUEsQzs7Ozs7Ozs7Ozs7d0ZBS0Esa0JBQTZCTCxPQUE3QixFQUE4Q08sS0FBOUMsRUFBNkRDLElBQTdEO1FBQUE7UUFBQTtVQUFBO1lBQUE7Y0FBQTtnQkFBQTtnQkFBQSxPQUMyQlAsaUJBQUEsQ0FBTUMsR0FBTix5Q0FBMkNGLE9BQTNDLGNBQXNETyxLQUF0RCxjQUErREMsSUFBL0QsRUFEM0I7O2NBQUE7Z0JBQ1VMLFFBRFY7Z0JBQUEsa0NBRVdBLFFBQVEsQ0FBQ0UsSUFGcEI7O2NBQUE7Y0FBQTtnQkFBQTtZQUFBO1VBQUE7UUFBQTtNQUFBLEM7Ozs7Ozs7Ozs7V0FLQSxnQkFBZUEsSUFBZixFQUFtRjtNQUFBOztNQUMvRSx1Q0FDT0EsSUFEUDtRQUVJSSxTQUFTLEVBQUUsbUJBQUNELElBQUQsRUFBa0I7VUFDekIsT0FBTyxLQUFJLENBQUNFLGVBQUwsQ0FBcUJMLElBQUksQ0FBQ0wsT0FBTCxDQUFhVyxJQUFsQyxFQUF3Q04sSUFBSSxDQUFDQyxPQUE3QyxFQUFzREUsSUFBdEQsQ0FBUDtRQUNIO01BSkw7SUFNSCJ9