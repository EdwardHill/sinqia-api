(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~_modules-cliente-cliente-module~_modules-vendedor-vendedor-module"],{

/***/ "./node_modules/@stomp/ng2-stompjs/fesm5/stomp-ng2-stompjs.js":
/*!********************************************************************!*\
  !*** ./node_modules/@stomp/ng2-stompjs/fesm5/stomp-ng2-stompjs.js ***!
  \********************************************************************/
/*! exports provided: StompHeaders, StompRService, StompService, StompState, StompConfig, RxStompRPCService, RxStompService, InjectableRxStompConfig, InjectableRxStompRPCConfig, InjectableRxStompRpcConfig, rxStompServiceFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StompRService", function() { return StompRService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StompService", function() { return StompService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StompState", function() { return StompState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StompConfig", function() { return StompConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxStompRPCService", function() { return RxStompRPCService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxStompService", function() { return RxStompService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InjectableRxStompConfig", function() { return InjectableRxStompConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InjectableRxStompRPCConfig", function() { return InjectableRxStompRPCConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InjectableRxStompRpcConfig", function() { return InjectableRxStompRpcConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rxStompServiceFactory", function() { return rxStompServiceFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _stomp_rx_stomp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stomp/rx-stomp */ "./node_modules/@stomp/rx-stomp/bundles/rx-stomp.umd.js");
/* harmony import */ var _stomp_rx_stomp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stomp_rx_stomp__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _stomp_stompjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @stomp/stompjs */ "./node_modules/@stomp/stompjs/bundles/stomp.umd.js");
/* harmony import */ var _stomp_stompjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_stomp_stompjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StompHeaders", function() { return _stomp_stompjs__WEBPACK_IMPORTED_MODULE_5__["StompHeaders"]; });








/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {number} */
var StompState = {
    CLOSED: 0,
    TRYING: 1,
    CONNECTED: 2,
    DISCONNECTING: 3,
};
StompState[StompState.CLOSED] = "CLOSED";
StompState[StompState.TRYING] = "TRYING";
StompState[StompState.CONNECTED] = "CONNECTED";
StompState[StompState.DISCONNECTING] = "DISCONNECTING";

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Part of `\@stomp/ng2-stompjs`.
 *
 * **This class has been deprecated in favor of {\@link RxStompService}.
 * It will be dropped `\@stomp/ng2-stompjs\@8.x.x`.**
 *
 * Angular2 STOMP Raw Service using \@stomp/stomp.js
 *
 * You will only need the public properties and
 * methods listed unless you are an advanced user. This service handles subscribing to a
 * message queue using the stomp.js library, and returns
 * values via the ES6 Observable specification for
 * asynchronous value streaming by wiring the STOMP
 * messages into an observable.
 *
 * If you will like to pass the configuration as a dependency,
 * please use StompService class.
 */
var StompRService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StompRService, _super);
    function StompRService() {
        var _this = _super.call(this) || this;
        _this.state = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](StompState.CLOSED);
        _this.connectionState$.subscribe(function (st) {
            _this.state.next(StompRService._mapStompState(st));
        });
        return _this;
    }
    /**
     * @param {?} st
     * @return {?}
     */
    StompRService._mapStompState = /**
     * @param {?} st
     * @return {?}
     */
    function (st) {
        if (st === _stomp_rx_stomp__WEBPACK_IMPORTED_MODULE_2__["RxStompState"].CONNECTING) {
            return StompState.TRYING;
        }
        if (st === _stomp_rx_stomp__WEBPACK_IMPORTED_MODULE_2__["RxStompState"].OPEN) {
            return StompState.CONNECTED;
        }
        if (st === _stomp_rx_stomp__WEBPACK_IMPORTED_MODULE_2__["RxStompState"].CLOSING) {
            return StompState.DISCONNECTING;
        }
        if (st === _stomp_rx_stomp__WEBPACK_IMPORTED_MODULE_2__["RxStompState"].CLOSED) {
            return StompState.CLOSED;
        }
    };
    Object.defineProperty(StompRService.prototype, "connectObservable", {
        /**
         * Will trigger when connection is established. Use this to carry out initialization.
         * It will trigger every time a (re)connection occurs. If it is already connected
         * it will trigger immediately. You can safely ignore the value, as it will always be
         * StompState.CONNECTED
         */
        get: /**
         * Will trigger when connection is established. Use this to carry out initialization.
         * It will trigger every time a (re)connection occurs. If it is already connected
         * it will trigger immediately. You can safely ignore the value, as it will always be
         * StompState.CONNECTED
         * @return {?}
         */
        function () {
            return this.connected$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (st) {
                return StompRService._mapStompState(st);
            }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StompRService.prototype, "serverHeadersObservable", {
        /**
         * Provides headers from most recent connection to the server as return by the CONNECTED
         * frame.
         * If the STOMP connection has already been established it will trigger immediately.
         * It will additionally trigger in event of reconnection, the value will be set of headers from
         * the recent server response.
         */
        get: /**
         * Provides headers from most recent connection to the server as return by the CONNECTED
         * frame.
         * If the STOMP connection has already been established it will trigger immediately.
         * It will additionally trigger in event of reconnection, the value will be set of headers from
         * the recent server response.
         * @return {?}
         */
        function () {
            return this.serverHeaders$;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StompRService.prototype, "defaultMessagesObservable", {
        /**
         * Will emit all messages to the default queue (any message that are not handled by a subscription)
         */
        get: /**
         * Will emit all messages to the default queue (any message that are not handled by a subscription)
         * @return {?}
         */
        function () {
            return this.unhandledMessage$;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StompRService.prototype, "receiptsObservable", {
        /**
         * Will emit all receipts
         */
        get: /**
         * Will emit all receipts
         * @return {?}
         */
        function () {
            return this.unhandledReceipts$;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StompRService.prototype, "errorSubject", {
        /**
         * Will trigger when an error occurs. This Subject can be used to handle errors from
         * the stomp broker.
         */
        get: /**
         * Will trigger when an error occurs. This Subject can be used to handle errors from
         * the stomp broker.
         * @return {?}
         */
        function () {
            return this.stompErrors$;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StompRService.prototype, "config", {
        /** Set configuration */
        set: /**
         * Set configuration
         * @param {?} config
         * @return {?}
         */
        function (config) {
            var /** @type {?} */ rxStompConfig = {};
            if (typeof (config.url) === 'string') {
                rxStompConfig.brokerURL = config.url;
            }
            else {
                rxStompConfig.webSocketFactory = config.url;
            }
            // Configure client heart-beating
            rxStompConfig.heartbeatIncoming = config.heartbeat_in;
            rxStompConfig.heartbeatOutgoing = config.heartbeat_out;
            // Auto reconnect
            rxStompConfig.reconnectDelay = config.reconnect_delay;
            if (config.debug) {
                rxStompConfig.debug = function (str) {
                    console.log(new Date(), str);
                };
            }
            rxStompConfig.connectHeaders = config.headers;
            this.configure(rxStompConfig);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * It will connect to the STOMP broker.
     * @return {?}
     */
    StompRService.prototype.initAndConnect = /**
     * It will connect to the STOMP broker.
     * @return {?}
     */
    function () {
        // disconnect if connected
        this.deactivate();
        // Attempt connection, passing in a callback
        this.activate();
    };
    /**
     * It will disconnect from the STOMP broker.
     * @return {?}
     */
    StompRService.prototype.disconnect = /**
     * It will disconnect from the STOMP broker.
     * @return {?}
     */
    function () {
        this.deactivate();
    };
    /**
     * It will send a message to a named destination. The message must be `string`.
     *
     * The message will get locally queued if the STOMP broker is not connected. It will attempt to
     * publish queued messages as soon as the broker gets connected.
     *
     * @param {?} queueName
     * @param {?=} message
     * @param {?=} headers
     * @return {?}
     */
    StompRService.prototype.publish = /**
     * It will send a message to a named destination. The message must be `string`.
     *
     * The message will get locally queued if the STOMP broker is not connected. It will attempt to
     * publish queued messages as soon as the broker gets connected.
     *
     * @param {?} queueName
     * @param {?=} message
     * @param {?=} headers
     * @return {?}
     */
    function (queueName, message, headers) {
        if (headers === void 0) { headers = {}; }
        if (typeof queueName === 'string') {
            _super.prototype.publish.call(this, { destination: /** @type {?} */ (queueName), body: message, headers: headers });
        }
        else {
            var /** @type {?} */ pubParams = queueName;
            _super.prototype.publish.call(this, pubParams);
        }
    };
    /**
     * It will subscribe to server message queues
     *
     * This method can be safely called even if the STOMP broker is not connected.
     * If the underlying STOMP connection drops and reconnects, it will resubscribe automatically.
     *
     * If a header field 'ack' is not explicitly passed, 'ack' will be set to 'auto'. If you
     * do not understand what it means, please leave it as is.
     *
     * Note that when working with temporary queues where the subscription request
     * creates the
     * underlying queue, mssages might be missed during reconnect. This issue is not specific
     * to this library but the way STOMP brokers are designed to work.
     *
     * @param {?} queueName
     * @param {?=} headers
     * @return {?}
     */
    StompRService.prototype.subscribe = /**
     * It will subscribe to server message queues
     *
     * This method can be safely called even if the STOMP broker is not connected.
     * If the underlying STOMP connection drops and reconnects, it will resubscribe automatically.
     *
     * If a header field 'ack' is not explicitly passed, 'ack' will be set to 'auto'. If you
     * do not understand what it means, please leave it as is.
     *
     * Note that when working with temporary queues where the subscription request
     * creates the
     * underlying queue, mssages might be missed during reconnect. This issue is not specific
     * to this library but the way STOMP brokers are designed to work.
     *
     * @param {?} queueName
     * @param {?=} headers
     * @return {?}
     */
    function (queueName, headers) {
        if (headers === void 0) { headers = {}; }
        return this.watch(queueName, headers);
    };
    /**
     * STOMP brokers may carry out operation asynchronously and allow requesting for acknowledgement.
     * To request an acknowledgement, a `receipt` header needs to be sent with the actual request.
     * The value (say receipt-id) for this header needs to be unique for each use. Typically a sequence, a UUID, a
     * random number or a combination may be used.
     *
     * A complaint broker will send a RECEIPT frame when an operation has actually been completed.
     * The operation needs to be matched based in the value of the receipt-id.
     *
     * This method allow watching for a receipt and invoke the callback
     * when corresponding receipt has been received.
     *
     * The actual {\@link Frame}
     * will be passed as parameter to the callback.
     *
     * Example:
     * ```javascript
     *        // Publishing with acknowledgement
     *        let receiptId = randomText();
     *
     *        rxStomp.waitForReceipt(receiptId, function() {
     *          // Will be called after server acknowledges
     *        });
     *        rxStomp.publish({destination: TEST.destination, headers: {receipt: receiptId}, body: msg});
     * ```
     *
     * Maps to: [Client#watchForReceipt]{\@link Client#watchForReceipt}
     * @param {?} receiptId
     * @param {?} callback
     * @return {?}
     */
    StompRService.prototype.waitForReceipt = /**
     * STOMP brokers may carry out operation asynchronously and allow requesting for acknowledgement.
     * To request an acknowledgement, a `receipt` header needs to be sent with the actual request.
     * The value (say receipt-id) for this header needs to be unique for each use. Typically a sequence, a UUID, a
     * random number or a combination may be used.
     *
     * A complaint broker will send a RECEIPT frame when an operation has actually been completed.
     * The operation needs to be matched based in the value of the receipt-id.
     *
     * This method allow watching for a receipt and invoke the callback
     * when corresponding receipt has been received.
     *
     * The actual {\@link Frame}
     * will be passed as parameter to the callback.
     *
     * Example:
     * ```javascript
     *        // Publishing with acknowledgement
     *        let receiptId = randomText();
     *
     *        rxStomp.waitForReceipt(receiptId, function() {
     *          // Will be called after server acknowledges
     *        });
     *        rxStomp.publish({destination: TEST.destination, headers: {receipt: receiptId}, body: msg});
     * ```
     *
     * Maps to: [Client#watchForReceipt]{\@link Client#watchForReceipt}
     * @param {?} receiptId
     * @param {?} callback
     * @return {?}
     */
    function (receiptId, callback) {
        _super.prototype.watchForReceipt.call(this, receiptId, callback);
    };
    Object.defineProperty(StompRService.prototype, "client", {
        get: /**
         * @return {?}
         */
        function () {
            return this._stompClient;
        },
        enumerable: true,
        configurable: true
    });
    StompRService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
    ];
    /** @nocollapse */
    StompRService.ctorParameters = function () { return []; };
    return StompRService;
}(_stomp_rx_stomp__WEBPACK_IMPORTED_MODULE_2__["RxStomp"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Part of `\@stomp/ng2-stompjs`.
 *
 * **This class has been deprecated in favor of {\@link InjectableRxStompConfig}.
 * It will be dropped `\@stomp/ng2-stompjs\@8.x.x`.**
 *
 * Represents a configuration object for the
 * STOMPService to connect to.
 */
var StompConfig = /** @class */ (function () {
    function StompConfig() {
    }
    StompConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
    ];
    return StompConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Part of `\@stomp/ng2-stompjs`.
 *
 * **This class has been deprecated in favor of {\@link RxStompService} with {\@link rxStompServiceFactory}.
 * It will be dropped `\@stomp/ng2-stompjs\@8.x.x`.**
 *
 * Angular2 STOMP Service using \@stomp/stomp.js
 *
 * \@description This service handles subscribing to a
 * message queue using the stomp.js library, and returns
 * values via the ES6 Observable specification for
 * asynchronous value streaming by wiring the STOMP
 * messages into an observable.
 *
 * If you want to manually configure and initialize the service
 * please use StompRService
 */
var StompService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StompService, _super);
    function StompService(config) {
        var _this = _super.call(this) || this;
        _this.config = config;
        _this.initAndConnect();
        return _this;
    }
    StompService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
    ];
    /** @nocollapse */
    StompService.ctorParameters = function () { return [
        { type: StompConfig, },
    ]; };
    return StompService;
}(StompRService));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Part of `\@stomp/ng2-stompjs`.
 *
 * This class is Injectable version of {\@link RxStomp} with exactly same functionality.
 * Please see {\@link RxStomp} for details.
 *
 * See: {\@link /guide/ng2-stompjs/2018/11/04/ng2-stomp-with-angular7.html}
 * for a step-by-step guide.
 *
 * See also {\@link rxStompServiceFactory}.
 */
var RxStompService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(RxStompService, _super);
    function RxStompService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RxStompService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
    ];
    return RxStompService;
}(_stomp_rx_stomp__WEBPACK_IMPORTED_MODULE_2__["RxStomp"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Part of `\@stomp/ng2-stompjs`.
 *
 * Injectable version of {\@link RxStompRPCConfig}.
 *
 * See guide at {\@link /guide/rx-stomp/ng2-stompjs/2018/10/12/remote-procedure-call.html}
 */
var InjectableRxStompRPCConfig = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(InjectableRxStompRPCConfig, _super);
    function InjectableRxStompRPCConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InjectableRxStompRPCConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
    ];
    return InjectableRxStompRPCConfig;
}(_stomp_rx_stomp__WEBPACK_IMPORTED_MODULE_2__["RxStompRPCConfig"]));
/**
 * Deprecated, use {\@link InjectableRxStompRPCConfig} instead
 */
var /** @type {?} */ InjectableRxStompRpcConfig = InjectableRxStompRPCConfig;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Part of `\@stomp/ng2-stompjs`.
 *
 * Injectable version of {\@link RxStompRPC}.
 *
 * See guide at {\@link /guide/rx-stomp/ng2-stompjs/2018/10/12/remote-procedure-call.html}
 */
var RxStompRPCService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(RxStompRPCService, _super);
    function RxStompRPCService(rxStomp, stompRPCConfig) {
        return _super.call(this, rxStomp, stompRPCConfig) || this;
    }
    RxStompRPCService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
    ];
    /** @nocollapse */
    RxStompRPCService.ctorParameters = function () { return [
        { type: RxStompService, },
        { type: InjectableRxStompRPCConfig, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] },] },
    ]; };
    return RxStompRPCService;
}(_stomp_rx_stomp__WEBPACK_IMPORTED_MODULE_2__["RxStompRPC"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Part of `\@stomp/ng2-stompjs`.
 *
 * This class is Injectable version of {\@link RxStompConfig} with exactly same functionality.
 * Please see {\@link RxStompConfig} for details.
 *
 * See: {\@link /guide/ng2-stompjs/2018/11/04/ng2-stomp-with-angular7.html}
 * for a step-by-step guide.
 *
 * If all fields of configuration are fixed and known in advance you would typically define
 * a `const` and inject it using value.
 *
 * If some fields will be known by later, it can be injected using a factory function.
 *
 * Occasionally it may need to be combined with Angular's APP_INITIALIZER mechanism.
 */
var InjectableRxStompConfig = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(InjectableRxStompConfig, _super);
    function InjectableRxStompConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InjectableRxStompConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
    ];
    return InjectableRxStompConfig;
}(_stomp_rx_stomp__WEBPACK_IMPORTED_MODULE_2__["RxStompConfig"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Part of `\@stomp/ng2-stompjs`.
 *
 * This is factory function that can create {\@link RxStompService}
 * when configuration is already known.
 * You can use this function for defining provider for {\@link RxStompService}.
 * {\@link RxStompService} created using this function is configured and activated.
 * This provides the simplest mechanism to define {\@link RxStompService} for Dependency Injection.
 *
 * See: {\@link /guide/ng2-stompjs/2018/11/04/ng2-stomp-with-angular7.html}
 * for a step-by-step guide.
 * @param {?} rxStompConfig
 * @return {?}
 */
function rxStompServiceFactory(rxStompConfig) {
    var /** @type {?} */ rxStompService = new RxStompService();
    rxStompService.configure(rxStompConfig);
    rxStompService.activate();
    return rxStompService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvbXAtbmcyLXN0b21wanMuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BzdG9tcC9uZzItc3RvbXBqcy9zcmMvc3RvbXAtci5zZXJ2aWNlLnRzIiwibmc6Ly9Ac3RvbXAvbmcyLXN0b21wanMvc3JjL3N0b21wLmNvbmZpZy50cyIsIm5nOi8vQHN0b21wL25nMi1zdG9tcGpzL3NyYy9zdG9tcC5zZXJ2aWNlLnRzIiwibmc6Ly9Ac3RvbXAvbmcyLXN0b21wanMvc3JjL3J4LXN0b21wLnNlcnZpY2UudHMiLCJuZzovL0BzdG9tcC9uZzItc3RvbXBqcy9zcmMvaW5qZWN0YWJsZS1yeC1zdG9tcC1ycGMtY29uZmlnLnRzIiwibmc6Ly9Ac3RvbXAvbmcyLXN0b21wanMvc3JjL3J4LXN0b21wLXJwYy5zZXJ2aWNlLnRzIiwibmc6Ly9Ac3RvbXAvbmcyLXN0b21wanMvc3JjL2luamVjdGFibGUtcngtc3RvbXAtY29uZmlnLnRzIiwibmc6Ly9Ac3RvbXAvbmcyLXN0b21wanMvc3JjL3J4LXN0b21wLXNlcnZpY2UtZmFjdG9yeS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1J4U3RvbXAsIFJ4U3RvbXBDb25maWcsIFJ4U3RvbXBTdGF0ZX0gZnJvbSAnQHN0b21wL3J4LXN0b21wJztcblxuaW1wb3J0IHtwdWJsaXNoUGFyYW1zLCBDbGllbnQsIE1lc3NhZ2UsIEZyYW1lfSBmcm9tICdAc3RvbXAvc3RvbXBqcyc7XG5cbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBTdWJqZWN0fSBmcm9tICdyeGpzJztcbmltcG9ydCB7bWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7U3RvbXBTdGF0ZX0gZnJvbSAnLi9zdG9tcC1zdGF0ZSc7XG5pbXBvcnQgeyBTdG9tcEhlYWRlcnMgfSBmcm9tICcuL3N0b21wLWhlYWRlcnMnO1xuaW1wb3J0IHtTdG9tcENvbmZpZ30gZnJvbSAnLi9zdG9tcC5jb25maWcnO1xuXG4vKipcbiAqIFBhcnQgb2YgYEBzdG9tcC9uZzItc3RvbXBqc2AuXG4gKlxuICogKipUaGlzIGNsYXNzIGhhcyBiZWVuIGRlcHJlY2F0ZWQgaW4gZmF2b3Igb2Yge0BsaW5rIFJ4U3RvbXBTZXJ2aWNlfS5cbiAqIEl0IHdpbGwgYmUgZHJvcHBlZCBgQHN0b21wL25nMi1zdG9tcGpzQDgueC54YC4qKlxuICpcbiAqIEFuZ3VsYXIyIFNUT01QIFJhdyBTZXJ2aWNlIHVzaW5nIEBzdG9tcC9zdG9tcC5qc1xuICpcbiAqIFlvdSB3aWxsIG9ubHkgbmVlZCB0aGUgcHVibGljIHByb3BlcnRpZXMgYW5kXG4gKiBtZXRob2RzIGxpc3RlZCB1bmxlc3MgeW91IGFyZSBhbiBhZHZhbmNlZCB1c2VyLiBUaGlzIHNlcnZpY2UgaGFuZGxlcyBzdWJzY3JpYmluZyB0byBhXG4gKiBtZXNzYWdlIHF1ZXVlIHVzaW5nIHRoZSBzdG9tcC5qcyBsaWJyYXJ5LCBhbmQgcmV0dXJuc1xuICogdmFsdWVzIHZpYSB0aGUgRVM2IE9ic2VydmFibGUgc3BlY2lmaWNhdGlvbiBmb3JcbiAqIGFzeW5jaHJvbm91cyB2YWx1ZSBzdHJlYW1pbmcgYnkgd2lyaW5nIHRoZSBTVE9NUFxuICogbWVzc2FnZXMgaW50byBhbiBvYnNlcnZhYmxlLlxuICpcbiAqIElmIHlvdSB3aWxsIGxpa2UgdG8gcGFzcyB0aGUgY29uZmlndXJhdGlvbiBhcyBhIGRlcGVuZGVuY3ksXG4gKiBwbGVhc2UgdXNlIFN0b21wU2VydmljZSBjbGFzcy5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0b21wUlNlcnZpY2UgZXh0ZW5kcyBSeFN0b21wIHtcbiAgLyoqXG4gICAqIFN0YXRlIG9mIHRoZSBTVE9NUFNlcnZpY2VcbiAgICpcbiAgICogSXQgaXMgYSBCZWhhdmlvclN1YmplY3QgYW5kIHdpbGwgZW1pdCBjdXJyZW50IHN0YXR1cyBpbW1lZGlhdGVseS4gVGhpcyB3aWxsIHR5cGljYWxseSBnZXRcbiAgICogdXNlZCB0byBzaG93IGN1cnJlbnQgc3RhdHVzIHRvIHRoZSBlbmQgdXNlci5cbiAgICovXG4gIHB1YmxpYyBzdGF0ZTogQmVoYXZpb3JTdWJqZWN0PFN0b21wU3RhdGU+O1xuXG4gIHByaXZhdGUgc3RhdGljIF9tYXBTdG9tcFN0YXRlKHN0OiBSeFN0b21wU3RhdGUpOiBTdG9tcFN0YXRlIHtcbiAgICBpZiAoc3QgPT09IFJ4U3RvbXBTdGF0ZS5DT05ORUNUSU5HKSB7XG4gICAgICByZXR1cm4gU3RvbXBTdGF0ZS5UUllJTkc7XG4gICAgfVxuICAgIGlmIChzdCA9PT0gUnhTdG9tcFN0YXRlLk9QRU4pIHtcbiAgICAgIHJldHVybiBTdG9tcFN0YXRlLkNPTk5FQ1RFRDtcbiAgICB9XG4gICAgaWYgKHN0ID09PSBSeFN0b21wU3RhdGUuQ0xPU0lORykge1xuICAgICAgcmV0dXJuIFN0b21wU3RhdGUuRElTQ09OTkVDVElORztcbiAgICB9XG4gICAgaWYgKHN0ID09PSBSeFN0b21wU3RhdGUuQ0xPU0VEKSB7XG4gICAgICByZXR1cm4gU3RvbXBTdGF0ZS5DTE9TRUQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdpbGwgdHJpZ2dlciB3aGVuIGNvbm5lY3Rpb24gaXMgZXN0YWJsaXNoZWQuIFVzZSB0aGlzIHRvIGNhcnJ5IG91dCBpbml0aWFsaXphdGlvbi5cbiAgICogSXQgd2lsbCB0cmlnZ2VyIGV2ZXJ5IHRpbWUgYSAocmUpY29ubmVjdGlvbiBvY2N1cnMuIElmIGl0IGlzIGFscmVhZHkgY29ubmVjdGVkXG4gICAqIGl0IHdpbGwgdHJpZ2dlciBpbW1lZGlhdGVseS4gWW91IGNhbiBzYWZlbHkgaWdub3JlIHRoZSB2YWx1ZSwgYXMgaXQgd2lsbCBhbHdheXMgYmVcbiAgICogU3RvbXBTdGF0ZS5DT05ORUNURURcbiAgICovXG4gIGdldCBjb25uZWN0T2JzZXJ2YWJsZSgpOiBPYnNlcnZhYmxlPFN0b21wU3RhdGU+IHtcbiAgICByZXR1cm4gdGhpcy5jb25uZWN0ZWQkLnBpcGUobWFwKChzdDogUnhTdG9tcFN0YXRlKTogU3RvbXBTdGF0ZSA9PiB7XG4gICAgICByZXR1cm4gU3RvbXBSU2VydmljZS5fbWFwU3RvbXBTdGF0ZShzdCk7XG4gICAgfSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3ZpZGVzIGhlYWRlcnMgZnJvbSBtb3N0IHJlY2VudCBjb25uZWN0aW9uIHRvIHRoZSBzZXJ2ZXIgYXMgcmV0dXJuIGJ5IHRoZSBDT05ORUNURURcbiAgICogZnJhbWUuXG4gICAqIElmIHRoZSBTVE9NUCBjb25uZWN0aW9uIGhhcyBhbHJlYWR5IGJlZW4gZXN0YWJsaXNoZWQgaXQgd2lsbCB0cmlnZ2VyIGltbWVkaWF0ZWx5LlxuICAgKiBJdCB3aWxsIGFkZGl0aW9uYWxseSB0cmlnZ2VyIGluIGV2ZW50IG9mIHJlY29ubmVjdGlvbiwgdGhlIHZhbHVlIHdpbGwgYmUgc2V0IG9mIGhlYWRlcnMgZnJvbVxuICAgKiB0aGUgcmVjZW50IHNlcnZlciByZXNwb25zZS5cbiAgICovXG4gIGdldCBzZXJ2ZXJIZWFkZXJzT2JzZXJ2YWJsZSgpOiBPYnNlcnZhYmxlPFN0b21wSGVhZGVycz4ge1xuICAgIHJldHVybiB0aGlzLnNlcnZlckhlYWRlcnMkO1xuICB9XG5cbiAgLyoqXG4gICAqIFdpbGwgZW1pdCBhbGwgbWVzc2FnZXMgdG8gdGhlIGRlZmF1bHQgcXVldWUgKGFueSBtZXNzYWdlIHRoYXQgYXJlIG5vdCBoYW5kbGVkIGJ5IGEgc3Vic2NyaXB0aW9uKVxuICAgKi9cbiAgZ2V0IGRlZmF1bHRNZXNzYWdlc09ic2VydmFibGUoKTogU3ViamVjdDxNZXNzYWdlPiB7XG4gICAgcmV0dXJuIHRoaXMudW5oYW5kbGVkTWVzc2FnZSQ7XG4gIH1cblxuICAvKipcbiAgICogV2lsbCBlbWl0IGFsbCByZWNlaXB0c1xuICAgKi9cbiAgZ2V0IHJlY2VpcHRzT2JzZXJ2YWJsZSgpOiBTdWJqZWN0PEZyYW1lPiB7XG4gICAgcmV0dXJuIHRoaXMudW5oYW5kbGVkUmVjZWlwdHMkO1xuICB9XG5cbiAgLyoqXG4gICAqIFdpbGwgdHJpZ2dlciB3aGVuIGFuIGVycm9yIG9jY3Vycy4gVGhpcyBTdWJqZWN0IGNhbiBiZSB1c2VkIHRvIGhhbmRsZSBlcnJvcnMgZnJvbVxuICAgKiB0aGUgc3RvbXAgYnJva2VyLlxuICAgKi9cbiAgZ2V0IGVycm9yU3ViamVjdCgpOiBTdWJqZWN0PHN0cmluZyB8IEZyYW1lPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvbXBFcnJvcnMkO1xuICB9XG5cbiAgLyoqIFNldCBjb25maWd1cmF0aW9uICovXG4gIHNldCBjb25maWcoY29uZmlnOiBTdG9tcENvbmZpZykge1xuICAgIGNvbnN0IHJ4U3RvbXBDb25maWc6IFJ4U3RvbXBDb25maWcgPSB7IH07XG5cbiAgICBpZiAodHlwZW9mKGNvbmZpZy51cmwpID09PSAnc3RyaW5nJykge1xuICAgICAgcnhTdG9tcENvbmZpZy5icm9rZXJVUkwgPSBjb25maWcudXJsO1xuICAgIH0gZWxzZSB7XG4gICAgICByeFN0b21wQ29uZmlnLndlYlNvY2tldEZhY3RvcnkgPSBjb25maWcudXJsO1xuICAgIH1cblxuICAgIC8vIENvbmZpZ3VyZSBjbGllbnQgaGVhcnQtYmVhdGluZ1xuICAgIHJ4U3RvbXBDb25maWcuaGVhcnRiZWF0SW5jb21pbmcgPSBjb25maWcuaGVhcnRiZWF0X2luO1xuICAgIHJ4U3RvbXBDb25maWcuaGVhcnRiZWF0T3V0Z29pbmcgPSBjb25maWcuaGVhcnRiZWF0X291dDtcblxuICAgIC8vIEF1dG8gcmVjb25uZWN0XG4gICAgcnhTdG9tcENvbmZpZy5yZWNvbm5lY3REZWxheSA9IGNvbmZpZy5yZWNvbm5lY3RfZGVsYXk7XG5cbiAgICBpZiAoY29uZmlnLmRlYnVnKSB7XG4gICAgICByeFN0b21wQ29uZmlnLmRlYnVnID0gKHN0cjogc3RyaW5nKTogdm9pZCA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKG5ldyBEYXRlKCksIHN0cik7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJ4U3RvbXBDb25maWcuY29ubmVjdEhlYWRlcnMgPSBjb25maWcuaGVhZGVycztcblxuICAgIHRoaXMuY29uZmlndXJlKHJ4U3RvbXBDb25maWcpO1xuICB9XG4gIC8qKlxuICAgKiBJdCB3aWxsIGNvbm5lY3QgdG8gdGhlIFNUT01QIGJyb2tlci5cbiAgICovXG4gIHB1YmxpYyBpbml0QW5kQ29ubmVjdCgpOiB2b2lkIHtcbiAgICAvLyBkaXNjb25uZWN0IGlmIGNvbm5lY3RlZFxuICAgIHRoaXMuZGVhY3RpdmF0ZSgpO1xuXG4gICAgLy8gQXR0ZW1wdCBjb25uZWN0aW9uLCBwYXNzaW5nIGluIGEgY2FsbGJhY2tcbiAgICB0aGlzLmFjdGl2YXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogSXQgd2lsbCBkaXNjb25uZWN0IGZyb20gdGhlIFNUT01QIGJyb2tlci5cbiAgICovXG4gIHB1YmxpYyBkaXNjb25uZWN0KCk6IHZvaWQge1xuICAgIHRoaXMuZGVhY3RpdmF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEl0IHdpbGwgc2VuZCBhIG1lc3NhZ2UgdG8gYSBuYW1lZCBkZXN0aW5hdGlvbi4gVGhlIG1lc3NhZ2UgbXVzdCBiZSBgc3RyaW5nYC5cbiAgICpcbiAgICogVGhlIG1lc3NhZ2Ugd2lsbCBnZXQgbG9jYWxseSBxdWV1ZWQgaWYgdGhlIFNUT01QIGJyb2tlciBpcyBub3QgY29ubmVjdGVkLiBJdCB3aWxsIGF0dGVtcHQgdG9cbiAgICogcHVibGlzaCBxdWV1ZWQgbWVzc2FnZXMgYXMgc29vbiBhcyB0aGUgYnJva2VyIGdldHMgY29ubmVjdGVkLlxuICAgKlxuICAgKiBAcGFyYW0gcXVldWVOYW1lXG4gICAqIEBwYXJhbSBtZXNzYWdlXG4gICAqIEBwYXJhbSBoZWFkZXJzXG4gICAqL1xuICBwdWJsaWMgcHVibGlzaChxdWV1ZU5hbWU6IHN0cmluZ3xwdWJsaXNoUGFyYW1zLCBtZXNzYWdlPzogc3RyaW5nLCBoZWFkZXJzOiBTdG9tcEhlYWRlcnMgPSB7fSk6IHZvaWQge1xuICAgIGlmICh0eXBlb2YgcXVldWVOYW1lID09PSAnc3RyaW5nJykge1xuICAgICAgc3VwZXIucHVibGlzaCh7ZGVzdGluYXRpb246IHF1ZXVlTmFtZSBhcyBzdHJpbmcsIGJvZHk6IG1lc3NhZ2UsIGhlYWRlcnN9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcHViUGFyYW1zOiBwdWJsaXNoUGFyYW1zID0gcXVldWVOYW1lO1xuICAgICAgc3VwZXIucHVibGlzaChwdWJQYXJhbXMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJdCB3aWxsIHN1YnNjcmliZSB0byBzZXJ2ZXIgbWVzc2FnZSBxdWV1ZXNcbiAgICpcbiAgICogVGhpcyBtZXRob2QgY2FuIGJlIHNhZmVseSBjYWxsZWQgZXZlbiBpZiB0aGUgU1RPTVAgYnJva2VyIGlzIG5vdCBjb25uZWN0ZWQuXG4gICAqIElmIHRoZSB1bmRlcmx5aW5nIFNUT01QIGNvbm5lY3Rpb24gZHJvcHMgYW5kIHJlY29ubmVjdHMsIGl0IHdpbGwgcmVzdWJzY3JpYmUgYXV0b21hdGljYWxseS5cbiAgICpcbiAgICogSWYgYSBoZWFkZXIgZmllbGQgJ2FjaycgaXMgbm90IGV4cGxpY2l0bHkgcGFzc2VkLCAnYWNrJyB3aWxsIGJlIHNldCB0byAnYXV0bycuIElmIHlvdVxuICAgKiBkbyBub3QgdW5kZXJzdGFuZCB3aGF0IGl0IG1lYW5zLCBwbGVhc2UgbGVhdmUgaXQgYXMgaXMuXG4gICAqXG4gICAqIE5vdGUgdGhhdCB3aGVuIHdvcmtpbmcgd2l0aCB0ZW1wb3JhcnkgcXVldWVzIHdoZXJlIHRoZSBzdWJzY3JpcHRpb24gcmVxdWVzdFxuICAgKiBjcmVhdGVzIHRoZVxuICAgKiB1bmRlcmx5aW5nIHF1ZXVlLCBtc3NhZ2VzIG1pZ2h0IGJlIG1pc3NlZCBkdXJpbmcgcmVjb25uZWN0LiBUaGlzIGlzc3VlIGlzIG5vdCBzcGVjaWZpY1xuICAgKiB0byB0aGlzIGxpYnJhcnkgYnV0IHRoZSB3YXkgU1RPTVAgYnJva2VycyBhcmUgZGVzaWduZWQgdG8gd29yay5cbiAgICpcbiAgICogQHBhcmFtIHF1ZXVlTmFtZVxuICAgKiBAcGFyYW0gaGVhZGVyc1xuICAgKi9cbiAgcHVibGljIHN1YnNjcmliZShxdWV1ZU5hbWU6IHN0cmluZywgaGVhZGVyczogU3RvbXBIZWFkZXJzID0ge30pOiBPYnNlcnZhYmxlPE1lc3NhZ2U+IHtcbiAgICByZXR1cm4gdGhpcy53YXRjaChxdWV1ZU5hbWUsIGhlYWRlcnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNUT01QIGJyb2tlcnMgbWF5IGNhcnJ5IG91dCBvcGVyYXRpb24gYXN5bmNocm9ub3VzbHkgYW5kIGFsbG93IHJlcXVlc3RpbmcgZm9yIGFja25vd2xlZGdlbWVudC5cbiAgICogVG8gcmVxdWVzdCBhbiBhY2tub3dsZWRnZW1lbnQsIGEgYHJlY2VpcHRgIGhlYWRlciBuZWVkcyB0byBiZSBzZW50IHdpdGggdGhlIGFjdHVhbCByZXF1ZXN0LlxuICAgKiBUaGUgdmFsdWUgKHNheSByZWNlaXB0LWlkKSBmb3IgdGhpcyBoZWFkZXIgbmVlZHMgdG8gYmUgdW5pcXVlIGZvciBlYWNoIHVzZS4gVHlwaWNhbGx5IGEgc2VxdWVuY2UsIGEgVVVJRCwgYVxuICAgKiByYW5kb20gbnVtYmVyIG9yIGEgY29tYmluYXRpb24gbWF5IGJlIHVzZWQuXG4gICAqXG4gICAqIEEgY29tcGxhaW50IGJyb2tlciB3aWxsIHNlbmQgYSBSRUNFSVBUIGZyYW1lIHdoZW4gYW4gb3BlcmF0aW9uIGhhcyBhY3R1YWxseSBiZWVuIGNvbXBsZXRlZC5cbiAgICogVGhlIG9wZXJhdGlvbiBuZWVkcyB0byBiZSBtYXRjaGVkIGJhc2VkIGluIHRoZSB2YWx1ZSBvZiB0aGUgcmVjZWlwdC1pZC5cbiAgICpcbiAgICogVGhpcyBtZXRob2QgYWxsb3cgd2F0Y2hpbmcgZm9yIGEgcmVjZWlwdCBhbmQgaW52b2tlIHRoZSBjYWxsYmFja1xuICAgKiB3aGVuIGNvcnJlc3BvbmRpbmcgcmVjZWlwdCBoYXMgYmVlbiByZWNlaXZlZC5cbiAgICpcbiAgICogVGhlIGFjdHVhbCB7QGxpbmsgRnJhbWV9XG4gICAqIHdpbGwgYmUgcGFzc2VkIGFzIHBhcmFtZXRlciB0byB0aGUgY2FsbGJhY2suXG4gICAqXG4gICAqIEV4YW1wbGU6XG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogICAgICAgIC8vIFB1Ymxpc2hpbmcgd2l0aCBhY2tub3dsZWRnZW1lbnRcbiAgICogICAgICAgIGxldCByZWNlaXB0SWQgPSByYW5kb21UZXh0KCk7XG4gICAqXG4gICAqICAgICAgICByeFN0b21wLndhaXRGb3JSZWNlaXB0KHJlY2VpcHRJZCwgZnVuY3Rpb24oKSB7XG4gICAqICAgICAgICAgIC8vIFdpbGwgYmUgY2FsbGVkIGFmdGVyIHNlcnZlciBhY2tub3dsZWRnZXNcbiAgICogICAgICAgIH0pO1xuICAgKiAgICAgICAgcnhTdG9tcC5wdWJsaXNoKHtkZXN0aW5hdGlvbjogVEVTVC5kZXN0aW5hdGlvbiwgaGVhZGVyczoge3JlY2VpcHQ6IHJlY2VpcHRJZH0sIGJvZHk6IG1zZ30pO1xuICAgKiBgYGBcbiAgICpcbiAgICogTWFwcyB0bzogW0NsaWVudCN3YXRjaEZvclJlY2VpcHRde0BsaW5rIENsaWVudCN3YXRjaEZvclJlY2VpcHR9XG4gICAqL1xuICBwdWJsaWMgd2FpdEZvclJlY2VpcHQocmVjZWlwdElkOiBzdHJpbmcsIGNhbGxiYWNrOiAoZnJhbWU6IEZyYW1lKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgc3VwZXIud2F0Y2hGb3JSZWNlaXB0KHJlY2VpcHRJZCwgY2FsbGJhY2spO1xuICB9XG5cbiAgZ2V0IGNsaWVudCgpOiBDbGllbnQge1xuICAgIHJldHVybiB0aGlzLl9zdG9tcENsaWVudDtcbiAgfVxuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8U3RvbXBTdGF0ZT4oU3RvbXBTdGF0ZS5DTE9TRUQpO1xuXG4gICAgdGhpcy5jb25uZWN0aW9uU3RhdGUkLnN1YnNjcmliZSgoc3Q6IFJ4U3RvbXBTdGF0ZSkgPT4ge1xuICAgICAgdGhpcy5zdGF0ZS5uZXh0KFN0b21wUlNlcnZpY2UuX21hcFN0b21wU3RhdGUoc3QpKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvbXBIZWFkZXJzIH0gZnJvbSAnQHN0b21wL3N0b21wanMnO1xuXG4vKipcbiAqIFBhcnQgb2YgYEBzdG9tcC9uZzItc3RvbXBqc2AuXG4gKlxuICogKipUaGlzIGNsYXNzIGhhcyBiZWVuIGRlcHJlY2F0ZWQgaW4gZmF2b3Igb2Yge0BsaW5rIEluamVjdGFibGVSeFN0b21wQ29uZmlnfS5cbiAqIEl0IHdpbGwgYmUgZHJvcHBlZCBgQHN0b21wL25nMi1zdG9tcGpzQDgueC54YC4qKlxuICpcbiAqIFJlcHJlc2VudHMgYSBjb25maWd1cmF0aW9uIG9iamVjdCBmb3IgdGhlXG4gKiBTVE9NUFNlcnZpY2UgdG8gY29ubmVjdCB0by5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0b21wQ29uZmlnIHtcbiAgLyoqXG4gICAqIFNlcnZlciBVUkwgdG8gY29ubmVjdCB0by4gUGxlYXNlIHJlZmVyIHRvIHlvdXIgU1RPTVAgYnJva2VyIGRvY3VtZW50YXRpb24gZm9yIGRldGFpbHMuXG4gICAqXG4gICAqIEV4YW1wbGU6IHdzOi8vMTI3LjAuMC4xOjE1Njc0L3dzIChmb3IgYSBSYWJiaXRNUSBkZWZhdWx0IHNldHVwIHJ1bm5pbmcgb24gbG9jYWxob3N0KVxuICAgKlxuICAgKiBBbHRlcm5hdGl2ZWx5IHRoaXMgcGFyYW1ldGVyIGNhbiBiZSBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbiBvYmplY3Qgc2ltaWxhciB0byBXZWJTb2NrZXRcbiAgICogKHR5cGljYWxseSBTb2NrSlMgaW5zdGFuY2UpLlxuICAgKlxuICAgKiBFeGFtcGxlOlxuICAgKlxuICAgKiAoKSA9PiB7XG4gICAqICAgcmV0dXJuIG5ldyBTb2NrSlMoJ2h0dHA6Ly8xMjcuMC4wLjE6MTU2NzQvc3RvbXAnKTtcbiAgICogfVxuICAgKi9cbiAgdXJsOiBzdHJpbmcgfCAoKCkgPT4gYW55KTtcblxuICAvKipcbiAgICogSGVhZGVyc1xuICAgKiBUeXBpY2FsIGtleXM6IGxvZ2luOiBzdHJpbmcsIHBhc3Njb2RlOiBzdHJpbmcuXG4gICAqIGhvc3Q6c3RyaW5nIHdpbGwgbmVlZWQgdG8gYmUgcGFzc2VkIGZvciB2aXJ0dWFsIGhvc3RzIGluIFJhYmJpdE1RXG4gICAqL1xuICBoZWFkZXJzOiBTdG9tcEhlYWRlcnM7XG5cbiAgLyoqIEhvdyBvZnRlbiB0byBpbmNvbWluZyBoZWFydGJlYXQ/XG4gICAqIEludGVydmFsIGluIG1pbGxpc2Vjb25kcywgc2V0IHRvIDAgdG8gZGlzYWJsZVxuICAgKlxuICAgKiBUeXBpY2FsIHZhbHVlIDAgLSBkaXNhYmxlZFxuICAgKi9cbiAgaGVhcnRiZWF0X2luOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEhvdyBvZnRlbiB0byBvdXRnb2luZyBoZWFydGJlYXQ/XG4gICAqIEludGVydmFsIGluIG1pbGxpc2Vjb25kcywgc2V0IHRvIDAgdG8gZGlzYWJsZVxuICAgKlxuICAgKiBUeXBpY2FsIHZhbHVlIDIwMDAwIC0gZXZlcnkgMjAgc2Vjb25kc1xuICAgKi9cbiAgaGVhcnRiZWF0X291dDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBXYWl0IGluIG1pbGxpc2Vjb25kcyBiZWZvcmUgYXR0ZW1wdGluZyBhdXRvIHJlY29ubmVjdFxuICAgKiBTZXQgdG8gMCB0byBkaXNhYmxlXG4gICAqXG4gICAqIFR5cGljYWwgdmFsdWUgNTAwMCAoNSBzZWNvbmRzKVxuICAgKi9cbiAgcmVjb25uZWN0X2RlbGF5OiBudW1iZXI7XG5cbiAgLyoqIEVuYWJsZSBjbGllbnQgZGVidWdnaW5nPyAqL1xuICBkZWJ1ZzogYm9vbGVhbjtcbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RvbXBDb25maWcgfSBmcm9tICcuL3N0b21wLmNvbmZpZyc7XG5cbmltcG9ydCB7IFN0b21wUlNlcnZpY2UgfSBmcm9tICcuL3N0b21wLXIuc2VydmljZSc7XG5cbi8qKlxuICogUGFydCBvZiBgQHN0b21wL25nMi1zdG9tcGpzYC5cbiAqXG4gKiAqKlRoaXMgY2xhc3MgaGFzIGJlZW4gZGVwcmVjYXRlZCBpbiBmYXZvciBvZiB7QGxpbmsgUnhTdG9tcFNlcnZpY2V9IHdpdGgge0BsaW5rIHJ4U3RvbXBTZXJ2aWNlRmFjdG9yeX0uXG4gKiBJdCB3aWxsIGJlIGRyb3BwZWQgYEBzdG9tcC9uZzItc3RvbXBqc0A4LngueGAuKipcbiAqXG4gKiBBbmd1bGFyMiBTVE9NUCBTZXJ2aWNlIHVzaW5nIEBzdG9tcC9zdG9tcC5qc1xuICpcbiAqIEBkZXNjcmlwdGlvbiBUaGlzIHNlcnZpY2UgaGFuZGxlcyBzdWJzY3JpYmluZyB0byBhXG4gKiBtZXNzYWdlIHF1ZXVlIHVzaW5nIHRoZSBzdG9tcC5qcyBsaWJyYXJ5LCBhbmQgcmV0dXJuc1xuICogdmFsdWVzIHZpYSB0aGUgRVM2IE9ic2VydmFibGUgc3BlY2lmaWNhdGlvbiBmb3JcbiAqIGFzeW5jaHJvbm91cyB2YWx1ZSBzdHJlYW1pbmcgYnkgd2lyaW5nIHRoZSBTVE9NUFxuICogbWVzc2FnZXMgaW50byBhbiBvYnNlcnZhYmxlLlxuICpcbiAqIElmIHlvdSB3YW50IHRvIG1hbnVhbGx5IGNvbmZpZ3VyZSBhbmQgaW5pdGlhbGl6ZSB0aGUgc2VydmljZVxuICogcGxlYXNlIHVzZSBTdG9tcFJTZXJ2aWNlXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdG9tcFNlcnZpY2UgZXh0ZW5kcyBTdG9tcFJTZXJ2aWNlIHtcblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICpcbiAgICogU2VlIFJFQURNRSBhbmQgc2FtcGxlcyBmb3IgY29uZmlndXJhdGlvbiBleGFtcGxlc1xuICAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKGNvbmZpZzogU3RvbXBDb25maWcpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgdGhpcy5pbml0QW5kQ29ubmVjdCgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSeFN0b21wIH0gZnJvbSAnQHN0b21wL3J4LXN0b21wJztcblxuLyoqXG4gKiBQYXJ0IG9mIGBAc3RvbXAvbmcyLXN0b21wanNgLlxuICpcbiAqIFRoaXMgY2xhc3MgaXMgSW5qZWN0YWJsZSB2ZXJzaW9uIG9mIHtAbGluayBSeFN0b21wfSB3aXRoIGV4YWN0bHkgc2FtZSBmdW5jdGlvbmFsaXR5LlxuICogUGxlYXNlIHNlZSB7QGxpbmsgUnhTdG9tcH0gZm9yIGRldGFpbHMuXG4gKlxuICogU2VlOiB7QGxpbmsgL2d1aWRlL25nMi1zdG9tcGpzLzIwMTgvMTEvMDQvbmcyLXN0b21wLXdpdGgtYW5ndWxhcjcuaHRtbH1cbiAqIGZvciBhIHN0ZXAtYnktc3RlcCBndWlkZS5cbiAqXG4gKiBTZWUgYWxzbyB7QGxpbmsgcnhTdG9tcFNlcnZpY2VGYWN0b3J5fS5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJ4U3RvbXBTZXJ2aWNlIGV4dGVuZHMgUnhTdG9tcCB7IH1cbiIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1J4U3RvbXBSUENDb25maWd9IGZyb20gJ0BzdG9tcC9yeC1zdG9tcCc7XG5cbi8qKlxuICogUGFydCBvZiBgQHN0b21wL25nMi1zdG9tcGpzYC5cbiAqXG4gKiBJbmplY3RhYmxlIHZlcnNpb24gb2Yge0BsaW5rIFJ4U3RvbXBSUENDb25maWd9LlxuICpcbiAqIFNlZSBndWlkZSBhdCB7QGxpbmsgL2d1aWRlL3J4LXN0b21wL25nMi1zdG9tcGpzLzIwMTgvMTAvMTIvcmVtb3RlLXByb2NlZHVyZS1jYWxsLmh0bWx9XG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbmplY3RhYmxlUnhTdG9tcFJQQ0NvbmZpZyBleHRlbmRzIFJ4U3RvbXBSUENDb25maWcgeyB9XG5cbi8vIEJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbi8qKlxuICogRGVwcmVjYXRlZCwgdXNlIHtAbGluayBJbmplY3RhYmxlUnhTdG9tcFJQQ0NvbmZpZ30gaW5zdGVhZFxuICovXG5leHBvcnQgY29uc3QgSW5qZWN0YWJsZVJ4U3RvbXBScGNDb25maWcgPSBJbmplY3RhYmxlUnhTdG9tcFJQQ0NvbmZpZztcbiIsImltcG9ydCB7SW5qZWN0YWJsZSwgT3B0aW9uYWx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1J4U3RvbXBSUEN9IGZyb20gJ0BzdG9tcC9yeC1zdG9tcCc7XG5pbXBvcnQge1J4U3RvbXBTZXJ2aWNlfSBmcm9tICcuL3J4LXN0b21wLnNlcnZpY2UnO1xuaW1wb3J0IHtJbmplY3RhYmxlUnhTdG9tcFJQQ0NvbmZpZ30gZnJvbSAnLi9pbmplY3RhYmxlLXJ4LXN0b21wLXJwYy1jb25maWcnO1xuXG4vKipcbiAqIFBhcnQgb2YgYEBzdG9tcC9uZzItc3RvbXBqc2AuXG4gKlxuICogSW5qZWN0YWJsZSB2ZXJzaW9uIG9mIHtAbGluayBSeFN0b21wUlBDfS5cbiAqXG4gKiBTZWUgZ3VpZGUgYXQge0BsaW5rIC9ndWlkZS9yeC1zdG9tcC9uZzItc3RvbXBqcy8yMDE4LzEwLzEyL3JlbW90ZS1wcm9jZWR1cmUtY2FsbC5odG1sfVxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUnhTdG9tcFJQQ1NlcnZpY2UgZXh0ZW5kcyBSeFN0b21wUlBDIHtcbiAgY29uc3RydWN0b3IocnhTdG9tcDogUnhTdG9tcFNlcnZpY2UsIEBPcHRpb25hbCgpIHN0b21wUlBDQ29uZmlnPzogSW5qZWN0YWJsZVJ4U3RvbXBSUENDb25maWcpIHtcbiAgICBzdXBlcihyeFN0b21wLCBzdG9tcFJQQ0NvbmZpZyk7XG4gIH1cbn1cbiIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1J4U3RvbXBDb25maWd9IGZyb20gJ0BzdG9tcC9yeC1zdG9tcCc7XG5cbi8qKlxuICogUGFydCBvZiBgQHN0b21wL25nMi1zdG9tcGpzYC5cbiAqXG4gKiBUaGlzIGNsYXNzIGlzIEluamVjdGFibGUgdmVyc2lvbiBvZiB7QGxpbmsgUnhTdG9tcENvbmZpZ30gd2l0aCBleGFjdGx5IHNhbWUgZnVuY3Rpb25hbGl0eS5cbiAqIFBsZWFzZSBzZWUge0BsaW5rIFJ4U3RvbXBDb25maWd9IGZvciBkZXRhaWxzLlxuICpcbiAqIFNlZToge0BsaW5rIC9ndWlkZS9uZzItc3RvbXBqcy8yMDE4LzExLzA0L25nMi1zdG9tcC13aXRoLWFuZ3VsYXI3Lmh0bWx9XG4gKiBmb3IgYSBzdGVwLWJ5LXN0ZXAgZ3VpZGUuXG4gKlxuICogSWYgYWxsIGZpZWxkcyBvZiBjb25maWd1cmF0aW9uIGFyZSBmaXhlZCBhbmQga25vd24gaW4gYWR2YW5jZSB5b3Ugd291bGQgdHlwaWNhbGx5IGRlZmluZVxuICogYSBgY29uc3RgIGFuZCBpbmplY3QgaXQgdXNpbmcgdmFsdWUuXG4gKlxuICogSWYgc29tZSBmaWVsZHMgd2lsbCBiZSBrbm93biBieSBsYXRlciwgaXQgY2FuIGJlIGluamVjdGVkIHVzaW5nIGEgZmFjdG9yeSBmdW5jdGlvbi5cbiAqXG4gKiBPY2Nhc2lvbmFsbHkgaXQgbWF5IG5lZWQgdG8gYmUgY29tYmluZWQgd2l0aCBBbmd1bGFyJ3MgQVBQX0lOSVRJQUxJWkVSIG1lY2hhbmlzbS5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluamVjdGFibGVSeFN0b21wQ29uZmlnIGV4dGVuZHMgUnhTdG9tcENvbmZpZyB7IH1cbiIsImltcG9ydCB7SW5qZWN0YWJsZVJ4U3RvbXBDb25maWd9IGZyb20gJy4vaW5qZWN0YWJsZS1yeC1zdG9tcC1jb25maWcnO1xuaW1wb3J0IHtSeFN0b21wU2VydmljZX0gZnJvbSAnLi9yeC1zdG9tcC5zZXJ2aWNlJztcblxuLyoqXG4gKiBQYXJ0IG9mIGBAc3RvbXAvbmcyLXN0b21wanNgLlxuICpcbiAqIFRoaXMgaXMgZmFjdG9yeSBmdW5jdGlvbiB0aGF0IGNhbiBjcmVhdGUge0BsaW5rIFJ4U3RvbXBTZXJ2aWNlfVxuICogd2hlbiBjb25maWd1cmF0aW9uIGlzIGFscmVhZHkga25vd24uXG4gKiBZb3UgY2FuIHVzZSB0aGlzIGZ1bmN0aW9uIGZvciBkZWZpbmluZyBwcm92aWRlciBmb3Ige0BsaW5rIFJ4U3RvbXBTZXJ2aWNlfS5cbiAqIHtAbGluayBSeFN0b21wU2VydmljZX0gY3JlYXRlZCB1c2luZyB0aGlzIGZ1bmN0aW9uIGlzIGNvbmZpZ3VyZWQgYW5kIGFjdGl2YXRlZC5cbiAqIFRoaXMgcHJvdmlkZXMgdGhlIHNpbXBsZXN0IG1lY2hhbmlzbSB0byBkZWZpbmUge0BsaW5rIFJ4U3RvbXBTZXJ2aWNlfSBmb3IgRGVwZW5kZW5jeSBJbmplY3Rpb24uXG4gKlxuICogU2VlOiB7QGxpbmsgL2d1aWRlL25nMi1zdG9tcGpzLzIwMTgvMTEvMDQvbmcyLXN0b21wLXdpdGgtYW5ndWxhcjcuaHRtbH1cbiAqIGZvciBhIHN0ZXAtYnktc3RlcCBndWlkZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJ4U3RvbXBTZXJ2aWNlRmFjdG9yeShyeFN0b21wQ29uZmlnOiBJbmplY3RhYmxlUnhTdG9tcENvbmZpZyk6IFJ4U3RvbXBTZXJ2aWNlIHtcbiAgY29uc3QgcnhTdG9tcFNlcnZpY2UgPSBuZXcgUnhTdG9tcFNlcnZpY2UoKTtcblxuICByeFN0b21wU2VydmljZS5jb25maWd1cmUocnhTdG9tcENvbmZpZyk7XG4gIHJ4U3RvbXBTZXJ2aWNlLmFjdGl2YXRlKCk7XG5cbiAgcmV0dXJuIHJ4U3RvbXBTZXJ2aWNlO1xufVxuIl0sIm5hbWVzIjpbInRzbGliXzEuX19leHRlbmRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZ0NtQ0EsaUNBQU87O29CQStMdEMsaUJBQU87UUFFUCxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksZUFBZSxDQUFhLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVoRSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFVBQUMsRUFBZ0I7WUFDL0MsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ25ELENBQUMsQ0FBQzs7Ozs7OztJQTVMVSw0QkFBYzs7OztjQUFDLEVBQWdCO1FBQzVDLElBQUksRUFBRSxLQUFLLFlBQVksQ0FBQyxVQUFVLEVBQUU7WUFDbEMsT0FBTyxVQUFVLENBQUMsTUFBTSxDQUFDO1NBQzFCO1FBQ0QsSUFBSSxFQUFFLEtBQUssWUFBWSxDQUFDLElBQUksRUFBRTtZQUM1QixPQUFPLFVBQVUsQ0FBQyxTQUFTLENBQUM7U0FDN0I7UUFDRCxJQUFJLEVBQUUsS0FBSyxZQUFZLENBQUMsT0FBTyxFQUFFO1lBQy9CLE9BQU8sVUFBVSxDQUFDLGFBQWEsQ0FBQztTQUNqQztRQUNELElBQUksRUFBRSxLQUFLLFlBQVksQ0FBQyxNQUFNLEVBQUU7WUFDOUIsT0FBTyxVQUFVLENBQUMsTUFBTSxDQUFDO1NBQzFCOztJQVNILHNCQUFJLDRDQUFpQjs7Ozs7Ozs7Ozs7Ozs7UUFBckI7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEVBQWdCO2dCQUMvQyxPQUFPLGFBQWEsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDekMsQ0FBQyxDQUFDLENBQUM7U0FDTDs7O09BQUE7SUFTRCxzQkFBSSxrREFBdUI7Ozs7Ozs7Ozs7Ozs7Ozs7UUFBM0I7WUFDRSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7U0FDNUI7OztPQUFBO0lBS0Qsc0JBQUksb0RBQXlCOzs7Ozs7OztRQUE3QjtZQUNFLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO1NBQy9COzs7T0FBQTtJQUtELHNCQUFJLDZDQUFrQjs7Ozs7Ozs7UUFBdEI7WUFDRSxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztTQUNoQzs7O09BQUE7SUFNRCxzQkFBSSx1Q0FBWTs7Ozs7Ozs7OztRQUFoQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztTQUMxQjs7O09BQUE7SUFHRCxzQkFBSSxpQ0FBTTs7Ozs7OztRQUFWLFVBQVcsTUFBbUI7WUFDNUIscUJBQU0sYUFBYSxHQUFrQixFQUFHLENBQUM7WUFFekMsSUFBSSxRQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxRQUFRLEVBQUU7Z0JBQ25DLGFBQWEsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQzthQUN0QztpQkFBTTtnQkFDTCxhQUFhLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQzthQUM3Qzs7WUFHRCxhQUFhLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQztZQUN0RCxhQUFhLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQzs7WUFHdkQsYUFBYSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDO1lBRXRELElBQUksTUFBTSxDQUFDLEtBQUssRUFBRTtnQkFDaEIsYUFBYSxDQUFDLEtBQUssR0FBRyxVQUFDLEdBQVc7b0JBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztpQkFDOUIsQ0FBQzthQUNIO1lBRUQsYUFBYSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1lBRTlDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDL0I7OztPQUFBOzs7OztJQUlNLHNDQUFjOzs7Ozs7UUFFbkIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDOztRQUdsQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Ozs7OztJQU1YLGtDQUFVOzs7OztRQUNmLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7OztJQWFiLCtCQUFPOzs7Ozs7Ozs7OztjQUFDLFNBQStCLEVBQUUsT0FBZ0IsRUFBRSxPQUEwQjtRQUExQix3QkFBQSxFQUFBLFlBQTBCO1FBQzFGLElBQUksT0FBTyxTQUFTLEtBQUssUUFBUSxFQUFFO1lBQ2pDLGlCQUFNLE9BQU8sWUFBQyxFQUFDLFdBQVcsb0JBQUUsU0FBbUIsQ0FBQSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxTQUFBLEVBQUMsQ0FBQyxDQUFDO1NBQzNFO2FBQU07WUFDTCxxQkFBTSxTQUFTLEdBQWtCLFNBQVMsQ0FBQztZQUMzQyxpQkFBTSxPQUFPLFlBQUMsU0FBUyxDQUFDLENBQUM7U0FDMUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBb0JJLGlDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Y0FBQyxTQUFpQixFQUFFLE9BQTBCO1FBQTFCLHdCQUFBLEVBQUEsWUFBMEI7UUFDNUQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBK0JqQyxzQ0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztjQUFDLFNBQWlCLEVBQUUsUUFBZ0M7UUFDdkUsaUJBQU0sZUFBZSxZQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQzs7SUFHN0Msc0JBQUksaUNBQU07Ozs7UUFBVjtZQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztTQUMxQjs7O09BQUE7O2dCQTdMRixVQUFVOzs7O3dCQS9CWDtFQWdDbUMsT0FBTzs7Ozs7O0FDaEMxQzs7Ozs7Ozs7Ozs7OztnQkFZQyxVQUFVOztzQkFaWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ3dCa0NBLGdDQUFhOzBCQU8xQixNQUFtQjtvQkFDcEMsaUJBQU87UUFFUCxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7Ozs7Z0JBWnpCLFVBQVU7Ozs7Z0JBckJGLFdBQVc7O3VCQUZwQjtFQXdCa0MsYUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNUWEEsa0NBQU87Ozs7O2dCQUQxQyxVQUFVOzt5QkFkWDtFQWVvQyxPQUFPOzs7Ozs7Ozs7Ozs7OztJQ0pLQSw4Q0FBZ0I7Ozs7O2dCQUQvRCxVQUFVOztxQ0FWWDtFQVdnRCxnQkFBZ0I7Ozs7QUFNaEUscUJBQWEsMEJBQTBCLEdBQUcsMEJBQTBCOzs7Ozs7Ozs7Ozs7OztJQ0g3QkEscUNBQVU7SUFDL0MsMkJBQVksT0FBdUIsRUFBYztlQUMvQyxrQkFBTSxPQUFPLEVBQUUsY0FBYyxDQUFDO0tBQy9COztnQkFKRixVQUFVOzs7O2dCQVZILGNBQWM7Z0JBQ2QsMEJBQTBCLHVCQVdNLFFBQVE7OzRCQWZoRDtFQWN1QyxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ01KQSwyQ0FBYTs7Ozs7Z0JBRHpELFVBQVU7O2tDQW5CWDtFQW9CNkMsYUFBYTs7Ozs7O0FDbkIxRDs7Ozs7Ozs7Ozs7Ozs7QUFjQSwrQkFBc0MsYUFBc0M7SUFDMUUscUJBQU0sY0FBYyxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7SUFFNUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN4QyxjQUFjLENBQUMsUUFBUSxFQUFFLENBQUM7SUFFMUIsT0FBTyxjQUFjLENBQUM7Q0FDdkI7Ozs7Ozs7Ozs7Ozs7OyJ9

/***/ }),

/***/ "./node_modules/@stomp/rx-stomp/bundles/rx-stomp.umd.js":
/*!**************************************************************!*\
  !*** ./node_modules/@stomp/rx-stomp/bundles/rx-stomp.umd.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! @stomp/stompjs */ "./node_modules/@stomp/stompjs/bundles/stomp.umd.js"), __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js"), __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js"));
	else {}
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE__stomp_stompjs__, __WEBPACK_EXTERNAL_MODULE_rxjs__, __WEBPACK_EXTERNAL_MODULE_rxjs_operators__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/angular2-uuid/index.js":
/*!*********************************************!*\
  !*** ./node_modules/angular2-uuid/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var UUID = (function () {
    function UUID() {
        // no-op
    }
    UUID.UUID = function () {
        if (typeof (window) !== "undefined" && typeof (window.crypto) !== "undefined" && typeof (window.crypto.getRandomValues) !== "undefined") {
            // If we have a cryptographically secure PRNG, use that
            // http://stackoverflow.com/questions/6906916/collisions-when-generating-uuids-in-javascript
            var buf = new Uint16Array(8);
            window.crypto.getRandomValues(buf);
            return (this.pad4(buf[0]) + this.pad4(buf[1]) + "-" + this.pad4(buf[2]) + "-" + this.pad4(buf[3]) + "-" + this.pad4(buf[4]) + "-" + this.pad4(buf[5]) + this.pad4(buf[6]) + this.pad4(buf[7]));
        }
        else {
            // Otherwise, just use Math.random
            // https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
            // https://stackoverflow.com/questions/11605068/why-does-jshint-argue-against-bitwise-operators-how-should-i-express-this-code
            return this.random4() + this.random4() + "-" + this.random4() + "-" + this.random4() + "-" +
                this.random4() + "-" + this.random4() + this.random4() + this.random4();
        }
    };
    UUID.pad4 = function (num) {
        var ret = num.toString(16);
        while (ret.length < 4) {
            ret = "0" + ret;
        }
        return ret;
    };
    UUID.random4 = function () {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };
    return UUID;
}());
exports.UUID = UUID;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./rx-stomp-config */ "./src/rx-stomp-config.ts"));
__export(__webpack_require__(/*! ./rx-stomp */ "./src/rx-stomp.ts"));
__export(__webpack_require__(/*! ./rx-stomp-state */ "./src/rx-stomp-state.ts"));
__export(__webpack_require__(/*! ./rx-stomp-rpc-config */ "./src/rx-stomp-rpc-config.ts"));
__export(__webpack_require__(/*! ./rx-stomp-rpc */ "./src/rx-stomp-rpc.ts"));


/***/ }),

/***/ "./src/rx-stomp-config.ts":
/*!********************************!*\
  !*** ./src/rx-stomp-config.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents a configuration object for RxSTOMP.
 * Instance of this can be passed to [RxStomp#configure]{@link RxStomp#configure}
 *
 * All the attributes of this calls are optional.
 *
 * Part of `@stomp/rx-stomp`
 */
var RxStompConfig = /** @class */ (function () {
    function RxStompConfig() {
    }
    return RxStompConfig;
}());
exports.RxStompConfig = RxStompConfig;


/***/ }),

/***/ "./src/rx-stomp-rpc-config.ts":
/*!************************************!*\
  !*** ./src/rx-stomp-rpc-config.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * RPC Config. See the guide for example.
 */
var RxStompRPCConfig = /** @class */ (function () {
    function RxStompRPCConfig() {
    }
    return RxStompRPCConfig;
}());
exports.RxStompRPCConfig = RxStompRPCConfig;


/***/ }),

/***/ "./src/rx-stomp-rpc.ts":
/*!*****************************!*\
  !*** ./src/rx-stomp-rpc.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
var angular2_uuid_1 = __webpack_require__(/*! angular2-uuid */ "./node_modules/angular2-uuid/index.js");
/**
 * An implementation of Remote Procedure Call (RPC) using messaging.
 *
 * Please see the [guide](/guide/rx-stomp/ng2-stompjs/2018/10/12/remote-procedure-call.html) for details.
 *
 * Part of `@stomp/rx-stomp`
 */
var RxStompRPC = /** @class */ (function () {
    /**
     * Create an instance, see the [guide](/guide/rx-stomp/ng2-stompjs/2018/10/12/remote-procedure-call.html) for details.
     */
    function RxStompRPC(rxStomp, stompRPCConfig) {
        var _this = this;
        this.rxStomp = rxStomp;
        this.stompRPCConfig = stompRPCConfig;
        this._replyQueueName = '/temp-queue/rpc-replies';
        this._setupReplyQueue = function () {
            return _this.rxStomp.unhandledMessage$;
        };
        if (stompRPCConfig) {
            if (stompRPCConfig.replyQueueName) {
                this._replyQueueName = stompRPCConfig.replyQueueName;
            }
            if (stompRPCConfig.setupReplyQueue) {
                this._setupReplyQueue = stompRPCConfig.setupReplyQueue;
            }
        }
    }
    /**
     * Make an RPC request.
     * See the [guide](/guide/rx-stomp/ng2-stompjs/2018/10/12/remote-procedure-call.html) for example.
     *
     * It is a simple wrapper around [RxStompRPC#stream]{@link RxStompRPC#stream}.
     */
    RxStompRPC.prototype.rpc = function (params) {
        // We know there will be only one message in reply
        return this.stream(params).pipe(operators_1.first());
    };
    /**
     * Make an RPC stream request. See the [guide](/guide/rx-stomp/ng2-stompjs/2018/10/12/remote-procedure-call.html).
     *
     * Note: This call internally takes care of generating a correlation id,
     * however, if `correlation-id` is passed via `headers`, that will be used instead.
     */
    RxStompRPC.prototype.stream = function (params) {
        var _this = this;
        var headers = Object.assign({}, params.headers || {});
        var destination = params.destination, body = params.body, binaryBody = params.binaryBody;
        if (!this._repliesObservable) {
            this._repliesObservable = this._setupReplyQueue(this._replyQueueName, this.rxStomp);
        }
        return rxjs_1.Observable.create(function (rpcObserver) {
            var defaultMessagesSubscription;
            var correlationId = headers['correlation-id'] || angular2_uuid_1.UUID.UUID();
            defaultMessagesSubscription = _this._repliesObservable.pipe(operators_1.filter(function (message) {
                return message.headers['correlation-id'] === correlationId;
            })).subscribe(function (message) {
                rpcObserver.next(message);
            });
            // send an RPC request
            headers['reply-to'] = _this._replyQueueName;
            headers['correlation-id'] = correlationId;
            _this.rxStomp.publish({ destination: destination, body: body, binaryBody: binaryBody, headers: headers });
            return function () {
                defaultMessagesSubscription.unsubscribe();
            };
        });
    };
    return RxStompRPC;
}());
exports.RxStompRPC = RxStompRPC;


/***/ }),

/***/ "./src/rx-stomp-state.ts":
/*!*******************************!*\
  !*** ./src/rx-stomp-state.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Possible states for the RxStomp
 *
 * Part of `@stomp/rx-stomp`
 */
var RxStompState;
(function (RxStompState) {
    RxStompState[RxStompState["CONNECTING"] = 0] = "CONNECTING";
    RxStompState[RxStompState["OPEN"] = 1] = "OPEN";
    RxStompState[RxStompState["CLOSING"] = 2] = "CLOSING";
    RxStompState[RxStompState["CLOSED"] = 3] = "CLOSED";
})(RxStompState = exports.RxStompState || (exports.RxStompState = {}));


/***/ }),

/***/ "./src/rx-stomp.ts":
/*!*************************!*\
  !*** ./src/rx-stomp.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
var stompjs_1 = __webpack_require__(/*! @stomp/stompjs */ "@stomp/stompjs");
var rx_stomp_state_1 = __webpack_require__(/*! ./rx-stomp-state */ "./src/rx-stomp-state.ts");
/**
 * This is the main Stomp Client.
 * Typically you will create an instance of this to connect to the STOMP broker.
 *
 * This wraps [@stomp/stompjs]{@link https://github.com/stomp-js/stompjs}
 * {@link Client} class.
 *
 * The key difference is that it exposes operations as RxJS Observables.
 * For example when a STOMP endpoint is subscribed it returns an Observable
 * that will stream all received messages.
 *
 * With exception of beforeConnect, functionality related to all callbacks in
 * [@stomp/stompjs Client]{@link Client}
 * is exposed as Observables/Subjects/BehaviorSubjects.
 *
 * RxStomp also tries to transparently handle connection failures.
 *
 * Part of `@stomp/rx-stomp`
 */
var RxStomp = /** @class */ (function () {
    /**
     * Constructor
     */
    function RxStomp() {
        var _this = this;
        /**
         * Internal array to hold locally queued messages when STOMP broker is not connected.
         */
        this._queuedMessages = [];
        this._stompClient = new stompjs_1.Client();
        var noOp = function () { };
        // Before connect is no op by default
        this._beforeConnect = noOp;
        // debug is no-op by default
        this._debug = noOp;
        // Initial state is CLOSED
        this._connectionStatePre$ = new rxjs_1.BehaviorSubject(rx_stomp_state_1.RxStompState.CLOSED);
        this._connectedPre$ = this._connectionStatePre$.pipe(operators_1.filter(function (currentState) {
            return currentState === rx_stomp_state_1.RxStompState.OPEN;
        }));
        // Initial state is CLOSED
        this.connectionState$ = new rxjs_1.BehaviorSubject(rx_stomp_state_1.RxStompState.CLOSED);
        this.connected$ = this.connectionState$.pipe(operators_1.filter(function (currentState) {
            return currentState === rx_stomp_state_1.RxStompState.OPEN;
        }));
        // Setup sending queuedMessages
        this.connected$.subscribe(function () {
            _this._sendQueuedMessages();
        });
        this._serverHeadersBehaviourSubject$ = new rxjs_1.BehaviorSubject(null);
        this.serverHeaders$ = this._serverHeadersBehaviourSubject$.pipe(operators_1.filter(function (headers) {
            return headers !== null;
        }));
        this.stompErrors$ = new rxjs_1.Subject();
        this.unhandledMessage$ = new rxjs_1.Subject();
        this.unhandledReceipts$ = new rxjs_1.Subject();
        this.unhandledFrame$ = new rxjs_1.Subject();
        this.webSocketErrors$ = new rxjs_1.Subject();
    }
    Object.defineProperty(RxStomp.prototype, "stompClient", {
        /**
         * Instance of actual
         * [@stomp/stompjs]{@link https://github.com/stomp-js/stompjs}
         * {@link Client}.
         *
         * **Be careful in calling methods on it directly - you may get unintended consequences.**
         */
        get: function () {
            return this._stompClient;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Set configuration. This method may be called multiple times.
     * Each call will add to the existing configuration.
     *
     * Example:
     *
     * ```javascript
     *        const rxStomp = new RxStomp();
     *        rxStomp.configure({
     *          brokerURL: 'ws://127.0.0.1:15674/ws',
     *          connectHeaders: {
     *            login: 'guest',
     *            passcode: 'guest'
     *          },
     *          heartbeatIncoming: 0,
     *          heartbeatOutgoing: 20000,
     *          reconnectDelay: 200,
     *          debug: (msg: string): void => {
     *            console.log(new Date(), msg);
     *          }
     *        });
     *        rxStomp.activate();
     * ```
     *
     * Maps to: [Client#configure]{@link Client#configure}
     */
    RxStomp.prototype.configure = function (rxStompConfig) {
        var stompConfig = Object.assign({}, rxStompConfig);
        if (stompConfig.beforeConnect) {
            this._beforeConnect = stompConfig.beforeConnect;
            delete stompConfig.beforeConnect;
        }
        // RxStompConfig has subset of StompConfig fields
        this._stompClient.configure(stompConfig);
        if (stompConfig.debug) {
            this._debug = stompConfig.debug;
        }
    };
    /**
     * Initiate the connection with the broker.
     * If the connection breaks, as per [RxStompConfig#reconnectDelay]{@link RxStompConfig#reconnectDelay},
     * it will keep trying to reconnect.
     *
     * Call [RxStomp#deactivate]{@link RxStomp#deactivate} to disconnect and stop reconnection attempts.
     *
     * Maps to: [Client#activate]{@link Client#activate}
     */
    RxStomp.prototype.activate = function () {
        var _this = this;
        this._stompClient.configure({
            beforeConnect: function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this._changeState(rx_stomp_state_1.RxStompState.CONNECTING);
                            // Call handler
                            return [4 /*yield*/, this._beforeConnect(this)];
                        case 1:
                            // Call handler
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); },
            onConnect: function (frame) {
                _this._serverHeadersBehaviourSubject$.next(frame.headers);
                // Indicate our connected state to observers
                _this._changeState(rx_stomp_state_1.RxStompState.OPEN);
            },
            onStompError: function (frame) {
                // Trigger the frame subject
                _this.stompErrors$.next(frame);
            },
            onWebSocketClose: function () {
                _this._changeState(rx_stomp_state_1.RxStompState.CLOSED);
            },
            onUnhandledMessage: function (message) {
                _this.unhandledMessage$.next(message);
            },
            onUnhandledReceipt: function (frame) {
                _this.unhandledReceipts$.next(frame);
            },
            onUnhandledFrame: function (frame) {
                _this.unhandledFrame$.next(frame);
            },
            onWebSocketError: function (evt) {
                _this.webSocketErrors$.next(evt);
            }
        });
        // Attempt connection
        this._stompClient.activate();
    };
    /**
     * Disconnect if connected and stop auto reconnect loop.
     * Appropriate callbacks will be invoked if underlying STOMP connection was connected.
     *
     * To reactivate you can call [RxStomp#activate]{@link RxStomp#activate}.
     *
     * Maps to: [Client#deactivate]{@link Client#deactivate}
     */
    RxStomp.prototype.deactivate = function () {
        // Disconnect if connected. Callback will set CLOSED state
        this._stompClient.deactivate();
        var stompState = this.connectionState$.getValue();
        if (stompState === rx_stomp_state_1.RxStompState.OPEN) {
            // Notify observers that we are disconnecting!
            this._changeState(rx_stomp_state_1.RxStompState.CLOSING);
        }
        // This is bit tricky situation, it would be better handled at stompjs level
        if (stompState === rx_stomp_state_1.RxStompState.CONNECTING) {
            // Notify observers that we are disconnecting!
            this._changeState(rx_stomp_state_1.RxStompState.CLOSED);
        }
    };
    /**
     * It will return `true` if STOMP broker is connected and `false` otherwise.
     */
    RxStomp.prototype.connected = function () {
        return this.connectionState$.getValue() === rx_stomp_state_1.RxStompState.OPEN;
    };
    Object.defineProperty(RxStomp.prototype, "active", {
        /**
         * If the client is active (connected or going to reconnect).
         *
         *  Maps to: [Client#active]{@link Client#active}
         */
        get: function () {
            return this.stompClient.active;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Send a message to a named destination. Refer to your STOMP broker documentation for types
     * and naming of destinations.
     *
     * STOMP protocol specifies and suggests some headers and also allows broker specific headers.
     *
     * `body` must be String.
     * You will need to covert the payload to string in case it is not string (e.g. JSON).
     *
     * To send a binary message body use binaryBody parameter. It should be a
     * [Uint8Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array).
     * Sometimes brokers may not support binary frames out of the box.
     * Please check your broker documentation.
     *
     * `content-length` header is automatically added to the STOMP Frame sent to the broker.
     * Set `skipContentLengthHeader` to indicate that `content-length` header should not be added.
     * For binary messages `content-length` header is always added.
     *
     * Caution: The broker will, most likely, report an error and disconnect if message body has NULL octet(s)
     * and `content-length` header is missing.
     *
     * The message will get locally queued if the STOMP broker is not connected. It will attempt to
     * publish queued messages as soon as the broker gets connected.
     * If you do not want that behavior,
     * please set [retryIfDisconnected]{@link IRxStompPublishParams#retryIfDisconnected} to `false`
     * in the parameters.
     * When `false`, this function will raise an error if message could not be sent immediately.
     *
     * Maps to: [Client#publish]{@link Client#publish}
     *
     * See: {@link IRxStompPublishParams} and {@link IPublishParams}
     *
     * ```javascript
     *        rxStomp.publish({destination: "/queue/test", headers: {priority: 9}, body: "Hello, STOMP"});
     *
     *        // Only destination is mandatory parameter
     *        rxStomp.publish({destination: "/queue/test", body: "Hello, STOMP"});
     *
     *        // Skip content-length header in the frame to the broker
     *        rxStomp.publish({"/queue/test", body: "Hello, STOMP", skipContentLengthHeader: true});
     *
     *        var binaryData = generateBinaryData(); // This need to be of type Uint8Array
     *        // setting content-type header is not mandatory, however a good practice
     *        rxStomp.publish({destination: '/topic/special', binaryBody: binaryData,
     *                         headers: {'content-type': 'application/octet-stream'}});
     * ```
     */
    RxStomp.prototype.publish = function (parameters) {
        // retry behaviour is defaulted to true
        var shouldRetry = parameters.retryIfDisconnected == null
            ? true
            : parameters.retryIfDisconnected;
        if (this.connected()) {
            this._stompClient.publish(parameters);
        }
        else if (shouldRetry) {
            this._debug("Not connected, queueing");
            this._queuedMessages.push(parameters);
        }
        else {
            throw new Error('Cannot publish while broker is not connected');
        }
    };
    /** It will send queued messages. */
    RxStomp.prototype._sendQueuedMessages = function () {
        var queuedMessages = this._queuedMessages;
        this._queuedMessages = [];
        if (queuedMessages.length === 0) {
            return;
        }
        this._debug("Will try sending  " + queuedMessages.length + " queued message(s)");
        for (var _i = 0, queuedMessages_1 = queuedMessages; _i < queuedMessages_1.length; _i++) {
            var queuedMessage = queuedMessages_1[_i];
            this._debug("Attempting to send " + queuedMessage);
            this.publish(queuedMessage);
        }
    };
    /**
     * It will subscribe to server message queues
     *
     * This method can be safely called even if the STOMP broker is not connected.
     * If the underlying STOMP connection drops and reconnects, it will resubscribe automatically.
     *
     * Note that messages might be missed during reconnect. This issue is not specific
     * to this library but the way STOMP brokers are designed to work.
     *
     * This method in the underlying library is called `subscribe`.
     * In earlier version it was called `subscribe` here as well.
     * However `subscribe` is also used by RxJS and code read quite strange with two subscribe calls
     * following each other and both meaning very different things.
     *
     * Maps to: [Client#subscribe]{@link Client#subscribe}
     */
    RxStomp.prototype.watch = function (destination, headers) {
        var _this = this;
        if (headers === void 0) { headers = {}; }
        /* Well the logic is complicated but works beautifully. RxJS is indeed wonderful.
         *
         * We need to activate the underlying subscription immediately if Stomp is connected. If not it should
         * subscribe when it gets next connected. Further it should re establish the subscription whenever Stomp
         * successfully reconnects.
         *
         * Actual implementation is simple, we filter the BehaviourSubject 'state' so that we can trigger whenever Stomp is
         * connected. Since 'state' is a BehaviourSubject, if Stomp is already connected, it will immediately trigger.
         *
         * The observable that we return to caller remains same across all reconnects, so no special handling needed at
         * the message subscriber.
         */
        this._debug("Request to subscribe " + destination);
        // By default auto acknowledgement of messages
        if (!headers.ack) {
            headers.ack = 'auto';
        }
        var coldObservable = rxjs_1.Observable.create(function (messages) {
            /*
             * These variables will be used as part of the closure and work their magic during unsubscribe
             */
            var stompSubscription;
            var stompConnectedSubscription;
            stompConnectedSubscription = _this._connectedPre$.subscribe(function () {
                _this._debug("Will subscribe to " + destination);
                stompSubscription = _this._stompClient.subscribe(destination, function (message) {
                    messages.next(message);
                }, headers);
            });
            return function () {
                _this._debug("Stop watching connection state (for " + destination + ")");
                stompConnectedSubscription.unsubscribe();
                if (_this.connected()) {
                    _this._debug("Will unsubscribe from " + destination + " at Stomp");
                    stompSubscription.unsubscribe();
                }
                else {
                    _this._debug("Stomp not connected, no need to unsubscribe from " + destination + " at Stomp");
                }
            };
        });
        /**
         * Important - convert it to hot Observable - otherwise, if the user code subscribes
         * to this observable twice, it will subscribe twice to Stomp broker. (This was happening in the current example).
         * A long but good explanatory article at https://medium.com/@benlesh/hot-vs-cold-observables-f8094ed53339
         */
        return coldObservable.pipe(operators_1.share());
    };
    /**
     * STOMP brokers may carry out operation asynchronously and allow requesting for acknowledgement.
     * To request an acknowledgement, a `receipt` header needs to be sent with the actual request.
     * The value (say receipt-id) for this header needs to be unique for each use. Typically a sequence, a UUID, a
     * random number or a combination may be used.
     *
     * A complaint broker will send a RECEIPT frame when an operation has actually been completed.
     * The operation needs to be matched based in the value of the receipt-id.
     *
     * This method allow watching for a receipt and invoke the callback
     * when corresponding receipt has been received.
     *
     * The actual {@link Frame}
     * will be passed as parameter to the callback.
     *
     * Example:
     * ```javascript
     *        // Publishing with acknowledgement
     *        let receiptId = randomText();
     *
     *        rxStomp.watchForReceipt(receiptId, function() {
     *          // Will be called after server acknowledges
     *        });
     *        rxStomp.publish({destination: '/topic/special', headers: {receipt: receiptId}, body: msg});
     * ```
     *
     * Maps to: [Client#watchForReceipt]{@link Client#watchForReceipt}
     */
    RxStomp.prototype.watchForReceipt = function (receiptId, callback) {
        this._stompClient.watchForReceipt(receiptId, callback);
    };
    RxStomp.prototype._changeState = function (state) {
        this._connectionStatePre$.next(state);
        this.connectionState$.next(state);
    };
    return RxStomp;
}());
exports.RxStomp = RxStomp;


/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/kdeepak/MyWork/Tech/stomp/rx-stomp/src/index.ts */"./src/index.ts");


/***/ }),

/***/ "@stomp/stompjs":
/*!*******************************************************************************************************************!*\
  !*** external {"commonjs":"@stomp/stompjs","commonjs2":"@stomp/stompjs","amd":"@stomp/stompjs","root":"StompJs"} ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__stomp_stompjs__;

/***/ }),

/***/ "rxjs":
/*!************************************************************************************!*\
  !*** external {"root":["rxjs"],"commonjs":"rxjs","commonjs2":"rxjs","amd":"rxjs"} ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_rxjs__;

/***/ }),

/***/ "rxjs/operators":
/*!******************************************************************************************************************************!*\
  !*** external {"root":["rxjs","operators"],"commonjs":"rxjs/operators","commonjs2":"rxjs/operators","amd":"rxjs/operators"} ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_rxjs_operators__;

/***/ })

/******/ });
});
//# sourceMappingURL=rx-stomp.umd.js.map

/***/ }),

/***/ "./node_modules/@stomp/stompjs/bundles/stomp.umd.js":
/*!**********************************************************!*\
  !*** ./node_modules/@stomp/stompjs/bundles/stomp.umd.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/byte.ts":
/*!*********************!*\
  !*** ./src/byte.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Some byte values, used as per STOMP specifications.
 *
 * Part of `@stomp/stompjs`.
 *
 * @internal
 */
exports.BYTE = {
    // LINEFEED byte (octet 10)
    LF: '\x0A',
    // NULL byte (octet 0)
    NULL: '\x00'
};


/***/ }),

/***/ "./src/client.ts":
/*!***********************!*\
  !*** ./src/client.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var stomp_handler_1 = __webpack_require__(/*! ./stomp-handler */ "./src/stomp-handler.ts");
var versions_1 = __webpack_require__(/*! ./versions */ "./src/versions.ts");
var web_socket_state_1 = __webpack_require__(/*! ./web-socket-state */ "./src/web-socket-state.ts");
/**
 * STOMP Client Class.
 *
 * Part of `@stomp/stompjs`.
 */
var Client = /** @class */ (function () {
    /**
     * Create an instance.
     */
    function Client(conf) {
        if (conf === void 0) { conf = {}; }
        /**
         * STOMP versions to attempt during STOMP handshake. By default versions `1.0`, `1.1`, and `1.2` are attempted.
         *
         * Example:
         * ```javascript
         *        // Try only versions 1.0 and 1.1
         *        client.stompVersions = new Versions(['1.0', '1.1'])
         * ```
         */
        this.stompVersions = versions_1.Versions.default;
        /**
         *  automatically reconnect with delay in milliseconds, set to 0 to disable.
         */
        this.reconnectDelay = 5000;
        /**
         * Incoming heartbeat interval in milliseconds. Set to 0 to disable.
         */
        this.heartbeatIncoming = 10000;
        /**
         * Outgoing heartbeat interval in milliseconds. Set to 0 to disable.
         */
        this.heartbeatOutgoing = 10000;
        /**
         * This switches on a non standard behavior while sending WebSocket packets.
         * It splits larger (text) packets into chunks of [maxWebSocketChunkSize]{@link Client#maxWebSocketChunkSize}.
         * Only Java Spring brokers seems to use this mode.
         *
         * WebSockets, by itself, split large (text) packets,
         * so it is not needed with a truly compliant STOMP/WebSocket broker.
         * Actually setting it for such broker will cause large messages to fail.
         *
         * `false` by default.
         *
         * Binary frames are never split.
         */
        this.splitLargeFrames = false;
        /**
         * See [splitLargeFrames]{@link Client#splitLargeFrames}.
         * This has no effect if [splitLargeFrames]{@link Client#splitLargeFrames} is `false`.
         */
        this.maxWebSocketChunkSize = 8 * 1024;
        /**
         * Usually the
         * [type of WebSocket frame]{@link https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send#Parameters}
         * is automatically decided by type of the payload.
         * Default is `false`, which should work with all compliant brokers.
         *
         * Set this flag to force binary frames.
         */
        this.forceBinaryWSFrames = false;
        /**
         * A bug in ReactNative chops a string on occurrence of a NULL.
         * See issue [https://github.com/stomp-js/stompjs/issues/89]{@link https://github.com/stomp-js/stompjs/issues/89}.
         * This makes incoming WebSocket messages invalid STOMP packets.
         * Setting this flag attempts to reverse the damage by appending a NULL.
         * If the broker splits a large message into multiple WebSocket messages,
         * this flag will cause data loss and abnormal termination of connection.
         *
         * This is not an ideal solution, but a stop gap until the underlying issue is fixed at ReactNative library.
         */
        this.appendMissingNULLonIncoming = false;
        this._active = false;
        // Dummy callbacks
        var noOp = function () { };
        this.debug = noOp;
        this.beforeConnect = noOp;
        this.onConnect = noOp;
        this.onDisconnect = noOp;
        this.onUnhandledMessage = noOp;
        this.onUnhandledReceipt = noOp;
        this.onUnhandledFrame = noOp;
        this.onStompError = noOp;
        this.onWebSocketClose = noOp;
        this.onWebSocketError = noOp;
        this.logRawCommunication = false;
        // These parameters would typically get proper values before connect is called
        this.connectHeaders = {};
        this._disconnectHeaders = {};
        // Apply configuration
        this.configure(conf);
    }
    Object.defineProperty(Client.prototype, "webSocket", {
        /**
         * Underlying WebSocket instance, READONLY.
         */
        get: function () {
            return this._webSocket;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "disconnectHeaders", {
        /**
         * Disconnection headers.
         */
        get: function () {
            return this._disconnectHeaders;
        },
        set: function (value) {
            this._disconnectHeaders = value;
            if (this._stompHandler) {
                this._stompHandler.disconnectHeaders = this._disconnectHeaders;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "connected", {
        /**
         * `true` if there is a active connection with STOMP Broker
         */
        get: function () {
            return (!!this._stompHandler) && this._stompHandler.connected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "connectedVersion", {
        /**
         * version of STOMP protocol negotiated with the server, READONLY
         */
        get: function () {
            return this._stompHandler ? this._stompHandler.connectedVersion : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "active", {
        /**
         * if the client is active (connected or going to reconnect)
         */
        get: function () {
            return this._active;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Update configuration.
     */
    Client.prototype.configure = function (conf) {
        // bulk assign all properties to this
        Object.assign(this, conf);
    };
    /**
     * Initiate the connection with the broker.
     * If the connection breaks, as per [Client#reconnectDelay]{@link Client#reconnectDelay},
     * it will keep trying to reconnect.
     *
     * Call [Client#deactivate]{@link Client#deactivate} to disconnect and stop reconnection attempts.
     */
    Client.prototype.activate = function () {
        this._active = true;
        this._connect();
    };
    Client.prototype._connect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.connected) {
                            this.debug('STOMP: already connected, nothing to do');
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.beforeConnect()];
                    case 1:
                        _a.sent();
                        if (!this._active) {
                            this.debug('Client has been marked inactive, will not attempt to connect');
                            return [2 /*return*/];
                        }
                        this.debug('Opening Web Socket...');
                        // Get the actual WebSocket (or a similar object)
                        this._webSocket = this._createWebSocket();
                        this._stompHandler = new stomp_handler_1.StompHandler(this, this._webSocket, {
                            debug: this.debug,
                            stompVersions: this.stompVersions,
                            connectHeaders: this.connectHeaders,
                            disconnectHeaders: this._disconnectHeaders,
                            heartbeatIncoming: this.heartbeatIncoming,
                            heartbeatOutgoing: this.heartbeatOutgoing,
                            splitLargeFrames: this.splitLargeFrames,
                            maxWebSocketChunkSize: this.maxWebSocketChunkSize,
                            forceBinaryWSFrames: this.forceBinaryWSFrames,
                            logRawCommunication: this.logRawCommunication,
                            appendMissingNULLonIncoming: this.appendMissingNULLonIncoming,
                            onConnect: function (frame) {
                                if (!_this._active) {
                                    _this.debug('STOMP got connected while deactivate was issued, will disconnect now');
                                    _this._disposeStompHandler();
                                    return;
                                }
                                _this.onConnect(frame);
                            },
                            onDisconnect: function (frame) {
                                _this.onDisconnect(frame);
                            },
                            onStompError: function (frame) {
                                _this.onStompError(frame);
                            },
                            onWebSocketClose: function (evt) {
                                _this.onWebSocketClose(evt);
                                // The callback is called before attempting to reconnect, this would allow the client
                                // to be `deactivated` in the callback.
                                if (_this._active) {
                                    _this._schedule_reconnect();
                                }
                            },
                            onWebSocketError: function (evt) {
                                _this.onWebSocketError(evt);
                            },
                            onUnhandledMessage: function (message) {
                                _this.onUnhandledMessage(message);
                            },
                            onUnhandledReceipt: function (frame) {
                                _this.onUnhandledReceipt(frame);
                            },
                            onUnhandledFrame: function (frame) {
                                _this.onUnhandledFrame(frame);
                            }
                        });
                        this._stompHandler.start();
                        return [2 /*return*/];
                }
            });
        });
    };
    Client.prototype._createWebSocket = function () {
        var webSocket;
        if (this.webSocketFactory) {
            webSocket = this.webSocketFactory();
        }
        else {
            webSocket = new WebSocket(this.brokerURL, this.stompVersions.protocolVersions());
        }
        webSocket.binaryType = 'arraybuffer';
        return webSocket;
    };
    Client.prototype._schedule_reconnect = function () {
        var _this = this;
        if (this.reconnectDelay > 0) {
            this.debug("STOMP: scheduling reconnection in " + this.reconnectDelay + "ms");
            this._reconnector = setTimeout(function () {
                _this._connect();
            }, this.reconnectDelay);
        }
    };
    /**
     * Disconnect if connected and stop auto reconnect loop.
     * Appropriate callbacks will be invoked if underlying STOMP connection was connected.
     *
     * To reactivate you can call [Client#activate]{@link Client#activate}.
     */
    Client.prototype.deactivate = function () {
        // indicate that auto reconnect loop should terminate
        this._active = false;
        // Clear if a reconnection was scheduled
        if (this._reconnector) {
            clearTimeout(this._reconnector);
        }
        this._disposeStompHandler();
    };
    /**
     * Force disconnect if there is an active connection by directly closing the underlying WebSocket.
     * This is different than a normal disconnect where a DISCONNECT sequence is carried out with the broker.
     * After forcing disconnect, automatic reconnect will be attempted.
     * To stop further reconnects call [Client#deactivate]{@link Client#deactivate} as well.
     */
    Client.prototype.forceDisconnect = function () {
        if (this._webSocket) {
            if (this._webSocket.readyState === web_socket_state_1.WebSocketState.CONNECTING
                || this._webSocket.readyState === web_socket_state_1.WebSocketState.OPEN) {
                this._stompHandler._closeWebsocket();
            }
        }
    };
    Client.prototype._disposeStompHandler = function () {
        // Dispose STOMP Handler
        if (this._stompHandler) {
            this._stompHandler.dispose();
            this._stompHandler = null;
        }
    };
    /**
     * Send a message to a named destination. Refer to your STOMP broker documentation for types
     * and naming of destinations.
     *
     * STOMP protocol specifies and suggests some headers and also allows broker specific headers.
     *
     * `body` must be String.
     * You will need to covert the payload to string in case it is not string (e.g. JSON).
     *
     * To send a binary message body use binaryBody parameter. It should be a
     * [Uint8Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array).
     * Sometimes brokers may not support binary frames out of the box.
     * Please check your broker documentation.
     *
     * `content-length` header is automatically added to the STOMP Frame sent to the broker.
     * Set `skipContentLengthHeader` to indicate that `content-length` header should not be added.
     * For binary messages `content-length` header is always added.
     *
     * Caution: The broker will, most likely, report an error and disconnect if message body has NULL octet(s)
     * and `content-length` header is missing.
     *
     * ```javascript
     *        client.publish({destination: "/queue/test", headers: {priority: 9}, body: "Hello, STOMP"});
     *
     *        // Only destination is mandatory parameter
     *        client.publish({destination: "/queue/test", body: "Hello, STOMP"});
     *
     *        // Skip content-length header in the frame to the broker
     *        client.publish({"/queue/test", body: "Hello, STOMP", skipContentLengthHeader: true});
     *
     *        var binaryData = generateBinaryData(); // This need to be of type Uint8Array
     *        // setting content-type header is not mandatory, however a good practice
     *        client.publish({destination: '/topic/special', binaryBody: binaryData,
     *                         headers: {'content-type': 'application/octet-stream'}});
     * ```
     */
    Client.prototype.publish = function (params) {
        this._stompHandler.publish(params);
    };
    /**
     * STOMP brokers may carry out operation asynchronously and allow requesting for acknowledgement.
     * To request an acknowledgement, a `receipt` header needs to be sent with the actual request.
     * The value (say receipt-id) for this header needs to be unique for each use. Typically a sequence, a UUID, a
     * random number or a combination may be used.
     *
     * A complaint broker will send a RECEIPT frame when an operation has actually been completed.
     * The operation needs to be matched based in the value of the receipt-id.
     *
     * This method allow watching for a receipt and invoke the callback
     * when corresponding receipt has been received.
     *
     * The actual {@link FrameImpl} will be passed as parameter to the callback.
     *
     * Example:
     * ```javascript
     *        // Subscribing with acknowledgement
     *        let receiptId = randomText();
     *
     *        client.watchForReceipt(receiptId, function() {
     *          // Will be called after server acknowledges
     *        });
     *
     *        client.subscribe(TEST.destination, onMessage, {receipt: receiptId});
     *
     *
     *        // Publishing with acknowledgement
     *        receiptId = randomText();
     *
     *        client.watchForReceipt(receiptId, function() {
     *          // Will be called after server acknowledges
     *        });
     *        client.publish({destination: TEST.destination, headers: {receipt: receiptId}, body: msg});
     * ```
     */
    Client.prototype.watchForReceipt = function (receiptId, callback) {
        this._stompHandler.watchForReceipt(receiptId, callback);
    };
    /**
     * Subscribe to a STOMP Broker location. The callback will be invoked for each received message with
     * the {@link IMessage} as argument.
     *
     * Note: The library will generate an unique ID if there is none provided in the headers.
     *       To use your own ID, pass it using the headers argument.
     *
     * ```javascript
     *        callback = function(message) {
     *        // called when the client receives a STOMP message from the server
     *          if (message.body) {
     *            alert("got message with body " + message.body)
     *          } else {
     *            alert("got empty message");
     *          }
     *        });
     *
     *        var subscription = client.subscribe("/queue/test", callback);
     *
     *        // Explicit subscription id
     *        var mySubId = 'my-subscription-id-001';
     *        var subscription = client.subscribe(destination, callback, { id: mySubId });
     * ```
     */
    Client.prototype.subscribe = function (destination, callback, headers) {
        if (headers === void 0) { headers = {}; }
        return this._stompHandler.subscribe(destination, callback, headers);
    };
    /**
     * It is preferable to unsubscribe from a subscription by calling
     * `unsubscribe()` directly on {@link StompSubscription} returned by `client.subscribe()`:
     *
     * ```javascript
     *        var subscription = client.subscribe(destination, onmessage);
     *        // ...
     *        subscription.unsubscribe();
     * ```
     *
     * See: http://stomp.github.com/stomp-specification-1.2.html#UNSUBSCRIBE UNSUBSCRIBE Frame
     */
    Client.prototype.unsubscribe = function (id, headers) {
        if (headers === void 0) { headers = {}; }
        this._stompHandler.unsubscribe(id, headers);
    };
    /**
     * Start a transaction, the returned {@link ITransaction} has methods - [commit]{@link ITransaction#commit}
     * and [abort]{@link ITransaction#abort}.
     *
     * `transactionId` is optional, if not passed the library will generate it internally.
     */
    Client.prototype.begin = function (transactionId) {
        return this._stompHandler.begin(transactionId);
    };
    /**
     * Commit a transaction.
     *
     * It is preferable to commit a transaction by calling [commit]{@link ITransaction#commit} directly on
     * {@link ITransaction} returned by [client.begin]{@link Client#begin}.
     *
     * ```javascript
     *        var tx = client.begin(txId);
     *        //...
     *        tx.commit();
     * ```
     */
    Client.prototype.commit = function (transactionId) {
        this._stompHandler.commit(transactionId);
    };
    /**
     * Abort a transaction.
     * It is preferable to abort a transaction by calling [abort]{@link ITransaction#abort} directly on
     * {@link ITransaction} returned by [client.begin]{@link Client#begin}.
     *
     * ```javascript
     *        var tx = client.begin(txId);
     *        //...
     *        tx.abort();
     * ```
     */
    Client.prototype.abort = function (transactionId) {
        this._stompHandler.abort(transactionId);
    };
    /**
     * ACK a message. It is preferable to acknowledge a message by calling [ack]{@link IMessage#ack} directly
     * on the {@link IMessage} handled by a subscription callback:
     *
     * ```javascript
     *        var callback = function (message) {
     *          // process the message
     *          // acknowledge it
     *          message.ack();
     *        };
     *        client.subscribe(destination, callback, {'ack': 'client'});
     * ```
     */
    Client.prototype.ack = function (messageId, subscriptionId, headers) {
        if (headers === void 0) { headers = {}; }
        this._stompHandler.ack(messageId, subscriptionId, headers);
    };
    /**
     * NACK a message. It is preferable to acknowledge a message by calling [nack]{@link IMessage#nack} directly
     * on the {@link IMessage} handled by a subscription callback:
     *
     * ```javascript
     *        var callback = function (message) {
     *          // process the message
     *          // an error occurs, nack it
     *          message.nack();
     *        };
     *        client.subscribe(destination, callback, {'ack': 'client'});
     * ```
     */
    Client.prototype.nack = function (messageId, subscriptionId, headers) {
        if (headers === void 0) { headers = {}; }
        this._stompHandler.nack(messageId, subscriptionId, headers);
    };
    return Client;
}());
exports.Client = Client;


/***/ }),

/***/ "./src/compatibility/compat-client.ts":
/*!********************************************!*\
  !*** ./src/compatibility/compat-client.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = __webpack_require__(/*! ../client */ "./src/client.ts");
var heartbeat_info_1 = __webpack_require__(/*! ./heartbeat-info */ "./src/compatibility/heartbeat-info.ts");
/**
 * Available for backward compatibility, please shift to using {@link Client}.
 *
 * **Deprecated**
 *
 * Part of `@stomp/stompjs`.
 *
 * To upgrade, please follow the [Upgrade Guide](../additional-documentation/upgrading.html)
 */
var CompatClient = /** @class */ (function (_super) {
    __extends(CompatClient, _super);
    /**
     * Available for backward compatibility, please shift to using {@link Client}
     * and [Client#webSocketFactory]{@link Client#webSocketFactory}.
     *
     * **Deprecated**
     *
     * @internal
     */
    function CompatClient(webSocketFactory) {
        var _this = _super.call(this) || this;
        /**
         * It is no op now. No longer needed. Large packets work out of the box.
         */
        _this.maxWebSocketFrameSize = 16 * 1024;
        _this._heartbeatInfo = new heartbeat_info_1.HeartbeatInfo(_this);
        _this.reconnect_delay = 0;
        _this.webSocketFactory = webSocketFactory;
        // Default from previous version
        _this.debug = function () {
            var message = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                message[_i] = arguments[_i];
            }
            console.log.apply(console, message);
        };
        return _this;
    }
    CompatClient.prototype._parseConnect = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var closeEventCallback;
        var connectCallback;
        var errorCallback;
        var headers = {};
        if (args.length < 2) {
            throw new Error(('Connect requires at least 2 arguments'));
        }
        if (typeof (args[1]) === 'function') {
            headers = args[0], connectCallback = args[1], errorCallback = args[2], closeEventCallback = args[3];
        }
        else {
            switch (args.length) {
                case 6:
                    headers.login = args[0], headers.passcode = args[1], connectCallback = args[2], errorCallback = args[3], closeEventCallback = args[4], headers.host = args[5];
                    break;
                default:
                    headers.login = args[0], headers.passcode = args[1], connectCallback = args[2], errorCallback = args[3], closeEventCallback = args[4];
            }
        }
        return [headers, connectCallback, errorCallback, closeEventCallback];
    };
    /**
     * Available for backward compatibility, please shift to using [Client#activate]{@link Client#activate}.
     *
     * **Deprecated**
     *
     * The `connect` method accepts different number of arguments and types. See the Overloads list. Use the
     * version with headers to pass your broker specific options.
     *
     * overloads:
     * - connect(headers, connectCallback)
     * - connect(headers, connectCallback, errorCallback)
     * - connect(login, passcode, connectCallback)
     * - connect(login, passcode, connectCallback, errorCallback)
     * - connect(login, passcode, connectCallback, errorCallback, closeEventCallback)
     * - connect(login, passcode, connectCallback, errorCallback, closeEventCallback, host)
     *
     * params:
     * - headers, see [Client#connectHeaders]{@link Client#connectHeaders}
     * - connectCallback, see [Client#onConnect]{@link Client#onConnect}
     * - errorCallback, see [Client#onStompError]{@link Client#onStompError}
     * - closeEventCallback, see [Client#onWebSocketClose]{@link Client#onWebSocketClose}
     * - login [String], see [Client#connectHeaders](../classes/Client.html#connectHeaders)
     * - passcode [String], [Client#connectHeaders](../classes/Client.html#connectHeaders)
     * - host [String], see [Client#connectHeaders](../classes/Client.html#connectHeaders)
     *
     * To upgrade, please follow the [Upgrade Guide](../additional-documentation/upgrading.html)
     */
    CompatClient.prototype.connect = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var out = this._parseConnect.apply(this, args);
        if (out[0]) {
            this.connectHeaders = out[0];
        }
        if (out[1]) {
            this.onConnect = out[1];
        }
        if (out[2]) {
            this.onStompError = out[2];
        }
        if (out[3]) {
            this.onWebSocketClose = out[3];
        }
        _super.prototype.activate.call(this);
    };
    /**
     * Available for backward compatibility, please shift to using [Client#deactivate]{@link Client#deactivate}.
     *
     * **Deprecated**
     *
     * See:
     * [Client#onDisconnect]{@link Client#onDisconnect}, and
     * [Client#disconnectHeaders]{@link Client#disconnectHeaders}
     *
     * To upgrade, please follow the [Upgrade Guide](../additional-documentation/upgrading.html)
     */
    CompatClient.prototype.disconnect = function (disconnectCallback, headers) {
        if (headers === void 0) { headers = {}; }
        if (disconnectCallback) {
            this.onDisconnect = disconnectCallback;
        }
        this.disconnectHeaders = headers;
        _super.prototype.deactivate.call(this);
    };
    /**
     * Available for backward compatibility, use [Client#publish]{@link Client#publish}.
     *
     * Send a message to a named destination. Refer to your STOMP broker documentation for types
     * and naming of destinations. The headers will, typically, be available to the subscriber.
     * However, there may be special purpose headers corresponding to your STOMP broker.
     *
     *  **Deprecated**, use [Client#publish]{@link Client#publish}
     *
     * Note: Body must be String. You will need to covert the payload to string in case it is not string (e.g. JSON)
     *
     * ```javascript
     *        client.send("/queue/test", {priority: 9}, "Hello, STOMP");
     *
     *        // If you want to send a message with a body, you must also pass the headers argument.
     *        client.send("/queue/test", {}, "Hello, STOMP");
     * ```
     *
     * To upgrade, please follow the [Upgrade Guide](../additional-documentation/upgrading.html)
     */
    CompatClient.prototype.send = function (destination, headers, body) {
        if (headers === void 0) { headers = {}; }
        if (body === void 0) { body = ''; }
        headers = Object.assign({}, headers);
        var skipContentLengthHeader = (headers['content-length'] === false);
        if (skipContentLengthHeader) {
            delete headers['content-length'];
        }
        this.publish({
            destination: destination,
            headers: headers,
            body: body,
            skipContentLengthHeader: skipContentLengthHeader
        });
    };
    Object.defineProperty(CompatClient.prototype, "reconnect_delay", {
        /**
         * Available for backward compatibility, renamed to [Client#reconnectDelay]{@link Client#reconnectDelay}.
         *
         * **Deprecated**
         */
        set: function (value) {
            this.reconnectDelay = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompatClient.prototype, "ws", {
        /**
         * Available for backward compatibility, renamed to [Client#webSocket]{@link Client#webSocket}.
         *
         * **Deprecated**
         */
        get: function () {
            return this._webSocket;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompatClient.prototype, "version", {
        /**
         * Available for backward compatibility, renamed to [Client#connectedVersion]{@link Client#connectedVersion}.
         *
         * **Deprecated**
         */
        get: function () {
            return this.connectedVersion;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompatClient.prototype, "onreceive", {
        /**
         * Available for backward compatibility, renamed to [Client#onUnhandledMessage]{@link Client#onUnhandledMessage}.
         *
         * **Deprecated**
         */
        get: function () {
            return this.onUnhandledMessage;
        },
        /**
         * Available for backward compatibility, renamed to [Client#onUnhandledMessage]{@link Client#onUnhandledMessage}.
         *
         * **Deprecated**
         */
        set: function (value) {
            this.onUnhandledMessage = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompatClient.prototype, "onreceipt", {
        /**
         * Available for backward compatibility, renamed to [Client#onUnhandledReceipt]{@link Client#onUnhandledReceipt}.
         * Prefer using [Client#watchForReceipt]{@link Client#watchForReceipt}.
         *
         * **Deprecated**
         */
        get: function () {
            return this.onUnhandledReceipt;
        },
        /**
         * Available for backward compatibility, renamed to [Client#onUnhandledReceipt]{@link Client#onUnhandledReceipt}.
         *
         * **Deprecated**
         */
        set: function (value) {
            this.onUnhandledReceipt = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompatClient.prototype, "heartbeat", {
        /**
         * Available for backward compatibility, renamed to [Client#heartbeatIncoming]{@link Client#heartbeatIncoming}
         * [Client#heartbeatOutgoing]{@link Client#heartbeatOutgoing}.
         *
         * **Deprecated**
         */
        get: function () {
            return this._heartbeatInfo;
        },
        /**
         * Available for backward compatibility, renamed to [Client#heartbeatIncoming]{@link Client#heartbeatIncoming}
         * [Client#heartbeatOutgoing]{@link Client#heartbeatOutgoing}.
         *
         * **Deprecated**
         */
        set: function (value) {
            this.heartbeatIncoming = value.incoming;
            this.heartbeatOutgoing = value.outgoing;
        },
        enumerable: true,
        configurable: true
    });
    return CompatClient;
}(client_1.Client));
exports.CompatClient = CompatClient;


/***/ }),

/***/ "./src/compatibility/heartbeat-info.ts":
/*!*********************************************!*\
  !*** ./src/compatibility/heartbeat-info.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Part of `@stomp/stompjs`.
 *
 * @internal
 */
var HeartbeatInfo = /** @class */ (function () {
    function HeartbeatInfo(client) {
        this.client = client;
    }
    Object.defineProperty(HeartbeatInfo.prototype, "outgoing", {
        get: function () {
            return this.client.heartbeatOutgoing;
        },
        set: function (value) {
            this.client.heartbeatOutgoing = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeartbeatInfo.prototype, "incoming", {
        get: function () {
            return this.client.heartbeatIncoming;
        },
        set: function (value) {
            this.client.heartbeatIncoming = value;
        },
        enumerable: true,
        configurable: true
    });
    return HeartbeatInfo;
}());
exports.HeartbeatInfo = HeartbeatInfo;


/***/ }),

/***/ "./src/compatibility/stomp.ts":
/*!************************************!*\
  !*** ./src/compatibility/stomp.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var versions_1 = __webpack_require__(/*! ../versions */ "./src/versions.ts");
var compat_client_1 = __webpack_require__(/*! ./compat-client */ "./src/compatibility/compat-client.ts");
/**
 * STOMP Class, acts like a factory to create {@link Client}.
 *
 * Part of `@stomp/stompjs`.
 *
 * **Deprecated**
 *
 * It will be removed in next major version. Please switch to {@link Client}.
 */
var Stomp = /** @class */ (function () {
    function Stomp() {
    }
    /**
     * This method creates a WebSocket client that is connected to
     * the STOMP server located at the url.
     *
     * ```javascript
     *        var url = "ws://localhost:61614/stomp";
     *        var client = Stomp.client(url);
     * ```
     *
     * **Deprecated**
     *
     * It will be removed in next major version. Please switch to {@link Client}
     * using [Client#brokerURL]{@link Client#brokerURL}.
     */
    Stomp.client = function (url, protocols) {
        // This is a hack to allow another implementation than the standard
        // HTML5 WebSocket class.
        //
        // It is possible to use another class by calling
        //
        //     Stomp.WebSocketClass = MozWebSocket
        //
        // *prior* to call `Stomp.client()`.
        //
        // This hack is deprecated and `Stomp.over()` method should be used
        // instead.
        // See remarks on the function Stomp.over
        if (protocols == null) {
            protocols = versions_1.Versions.default.protocolVersions();
        }
        var wsFn = function () {
            var klass = Stomp.WebSocketClass || WebSocket;
            return new klass(url, protocols);
        };
        return new compat_client_1.CompatClient(wsFn);
    };
    /**
     * This method is an alternative to [Stomp#client]{@link Stomp#client} to let the user
     * specify the WebSocket to use (either a standard HTML5 WebSocket or
     * a similar object).
     *
     * In order to support reconnection, the function Client._connect should be callable more than once.
     * While reconnecting
     * a new instance of underlying transport (TCP Socket, WebSocket or SockJS) will be needed. So, this function
     * alternatively allows passing a function that should return a new instance of the underlying socket.
     *
     * ```javascript
     *        var client = Stomp.over(function(){
     *          return new WebSocket('ws://localhost:15674/ws')
     *        });
     * ```
     *
     * **Deprecated**
     *
     * It will be removed in next major version. Please switch to {@link Client}
     * using [Client#webSocketFactory]{@link Client#webSocketFactory}.
     */
    Stomp.over = function (ws) {
        var wsFn;
        if (typeof (ws) === 'function') {
            wsFn = ws;
        }
        else {
            console.warn('Stomp.over did not receive a factory, auto reconnect will not work. ' +
                'Please see https://stomp-js.github.io/api-docs/latest/classes/Stomp.html#over');
            wsFn = function () { return ws; };
        }
        return new compat_client_1.CompatClient(wsFn);
    };
    /**
     * In case you need to use a non standard class for WebSocket.
     *
     * For example when using within NodeJS environment:
     *
     * ```javascript
     *        StompJs = require('../../esm5/');
     *        Stomp = StompJs.Stomp;
     *        Stomp.WebSocketClass = require('websocket').w3cwebsocket;
     * ```
     *
     * **Deprecated**
     *
     *
     * It will be removed in next major version. Please switch to {@link Client}
     * using [Client#webSocketFactory]{@link Client#webSocketFactory}.
     */
    // tslint:disable-next-line:variable-name
    Stomp.WebSocketClass = null;
    return Stomp;
}());
exports.Stomp = Stomp;


/***/ }),

/***/ "./src/frame-impl.ts":
/*!***************************!*\
  !*** ./src/frame-impl.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var byte_1 = __webpack_require__(/*! ./byte */ "./src/byte.ts");
/**
 * Frame class represents a STOMP frame.
 *
 * @internal
 */
var FrameImpl = /** @class */ (function () {
    /**
     * Frame constructor. `command`, `headers` and `body` are available as properties.
     *
     * @internal
     */
    function FrameImpl(params) {
        var command = params.command, headers = params.headers, body = params.body, binaryBody = params.binaryBody, escapeHeaderValues = params.escapeHeaderValues, skipContentLengthHeader = params.skipContentLengthHeader;
        this.command = command;
        this.headers = Object.assign({}, headers || {});
        if (binaryBody) {
            this._binaryBody = binaryBody;
            this.isBinaryBody = true;
        }
        else {
            this._body = body || '';
            this.isBinaryBody = false;
        }
        this.escapeHeaderValues = escapeHeaderValues || false;
        this.skipContentLengthHeader = skipContentLengthHeader || false;
    }
    Object.defineProperty(FrameImpl.prototype, "body", {
        /**
         * body of the frame
         */
        get: function () {
            if (!this._body && this.isBinaryBody) {
                this._body = new TextDecoder().decode(this._binaryBody);
            }
            return this._body;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrameImpl.prototype, "binaryBody", {
        /**
         * body as Uint8Array
         */
        get: function () {
            if (!this._binaryBody && !this.isBinaryBody) {
                this._binaryBody = new TextEncoder().encode(this._body);
            }
            return this._binaryBody;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * deserialize a STOMP Frame from raw data.
     *
     * @internal
     */
    FrameImpl.fromRawFrame = function (rawFrame, escapeHeaderValues) {
        var headers = {};
        var trim = function (str) { return str.replace(/^\s+|\s+$/g, ''); };
        // In case of repeated headers, as per standards, first value need to be used
        for (var _i = 0, _a = rawFrame.headers.reverse(); _i < _a.length; _i++) {
            var header = _a[_i];
            var idx = header.indexOf(':');
            var key = trim(header[0]);
            var value = trim(header[1]);
            if (escapeHeaderValues && (rawFrame.command !== 'CONNECT') && (rawFrame.command !== 'CONNECTED')) {
                value = FrameImpl.hdrValueUnEscape(value);
            }
            headers[key] = value;
        }
        return new FrameImpl({
            command: rawFrame.command,
            headers: headers,
            binaryBody: rawFrame.binaryBody,
            escapeHeaderValues: escapeHeaderValues
        });
    };
    /**
     * @internal
     */
    FrameImpl.prototype.toString = function () {
        return this.serializeCmdAndHeaders();
    };
    /**
     * serialize this Frame in a format suitable to be passed to WebSocket.
     * If the body is string the output will be string.
     * If the body is binary (i.e. of type Unit8Array) it will be serialized to ArrayBuffer.
     *
     * @internal
     */
    FrameImpl.prototype.serialize = function () {
        var cmdAndHeaders = this.serializeCmdAndHeaders();
        if (this.isBinaryBody) {
            return FrameImpl.toUnit8Array(cmdAndHeaders, this._binaryBody).buffer;
        }
        else {
            return cmdAndHeaders + this._body + byte_1.BYTE.NULL;
        }
    };
    FrameImpl.prototype.serializeCmdAndHeaders = function () {
        var lines = [this.command];
        if (this.skipContentLengthHeader) {
            delete this.headers['content-length'];
        }
        for (var _i = 0, _a = Object.keys(this.headers || {}); _i < _a.length; _i++) {
            var name_1 = _a[_i];
            var value = this.headers[name_1];
            if (this.escapeHeaderValues && (this.command !== 'CONNECT') && (this.command !== 'CONNECTED')) {
                lines.push(name_1 + ":" + FrameImpl.hdrValueEscape("" + value));
            }
            else {
                lines.push(name_1 + ":" + value);
            }
        }
        if (this.isBinaryBody || (!this.isBodyEmpty() && !this.skipContentLengthHeader)) {
            lines.push("content-length:" + this.bodyLength());
        }
        return lines.join(byte_1.BYTE.LF) + byte_1.BYTE.LF + byte_1.BYTE.LF;
    };
    FrameImpl.prototype.isBodyEmpty = function () {
        return this.bodyLength() === 0;
    };
    FrameImpl.prototype.bodyLength = function () {
        var binaryBody = this.binaryBody;
        return binaryBody ? binaryBody.length : 0;
    };
    /**
     * Compute the size of a UTF-8 string by counting its number of bytes
     * (and not the number of characters composing the string)
     */
    FrameImpl.sizeOfUTF8 = function (s) {
        return s ? new TextEncoder().encode(s).length : 0;
    };
    FrameImpl.toUnit8Array = function (cmdAndHeaders, binaryBody) {
        var uint8CmdAndHeaders = new TextEncoder().encode(cmdAndHeaders);
        var nullTerminator = new Uint8Array([0]);
        var uint8Frame = new Uint8Array(uint8CmdAndHeaders.length + binaryBody.length + nullTerminator.length);
        uint8Frame.set(uint8CmdAndHeaders);
        uint8Frame.set(binaryBody, uint8CmdAndHeaders.length);
        uint8Frame.set(nullTerminator, uint8CmdAndHeaders.length + binaryBody.length);
        return uint8Frame;
    };
    /**
     * Serialize a STOMP frame as per STOMP standards, suitable to be sent to the STOMP broker.
     *
     * @internal
     */
    FrameImpl.marshall = function (params) {
        var frame = new FrameImpl(params);
        return frame.serialize();
    };
    /**
     *  Escape header values
     */
    FrameImpl.hdrValueEscape = function (str) {
        return str.replace(/\\/g, '\\\\').replace(/\r/g, '\\r').replace(/\n/g, '\\n').replace(/:/g, '\\c');
    };
    /**
     * UnEscape header values
     */
    FrameImpl.hdrValueUnEscape = function (str) {
        return str.replace(/\\r/g, '\r').replace(/\\n/g, '\n').replace(/\\c/g, ':').replace(/\\\\/g, '\\');
    };
    return FrameImpl;
}());
exports.FrameImpl = FrameImpl;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./client */ "./src/client.ts"));
__export(__webpack_require__(/*! ./frame-impl */ "./src/frame-impl.ts"));
__export(__webpack_require__(/*! ./parser */ "./src/parser.ts"));
__export(__webpack_require__(/*! ./stomp-config */ "./src/stomp-config.ts"));
__export(__webpack_require__(/*! ./stomp-headers */ "./src/stomp-headers.ts"));
__export(__webpack_require__(/*! ./stomp-subscription */ "./src/stomp-subscription.ts"));
__export(__webpack_require__(/*! ./versions */ "./src/versions.ts"));
__export(__webpack_require__(/*! ./web-socket-state */ "./src/web-socket-state.ts"));
// Compatibility code
__export(__webpack_require__(/*! ./compatibility/compat-client */ "./src/compatibility/compat-client.ts"));
__export(__webpack_require__(/*! ./compatibility/stomp */ "./src/compatibility/stomp.ts"));


/***/ }),

/***/ "./src/parser.ts":
/*!***********************!*\
  !*** ./src/parser.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @internal
 */
var NULL = 0;
/**
 * @internal
 */
var LF = 10;
/**
 * @internal
 */
var CR = 13;
/**
 * @internal
 */
var COLON = 58;
/**
 * This is an evented, rec descent parser.
 * A stream of Octets can be passed and whenever it recognizes
 * a complete Frame or an incoming ping it will invoke the registered callbacks.
 *
 * All incoming Octets are fed into _onByte function.
 * Depending on current state the _onByte function keeps changing.
 * Depending on the state it keeps accumulating into _token and _results.
 * State is indicated by current value of _onByte, all states are named as _collect.
 *
 * STOMP standards https://stomp.github.io/stomp-specification-1.2.html
 * imply that all lengths are considered in bytes (instead of string lengths).
 * So, before actual parsing, if the incoming data is String it is converted to Octets.
 * This allows faithful implementation of the protocol and allows NULL Octets to be present in the body.
 *
 * There is no peek function on the incoming data.
 * When a state change occurs based on an Octet without consuming the Octet,
 * the Octet, after state change, is fed again (_reinjectByte).
 * This became possible as the state change can be determined by inspecting just one Octet.
 *
 * There are two modes to collect the body, if content-length header is there then it by counting Octets
 * otherwise it is determined by NULL terminator.
 *
 * Following the standards, the command and headers are converted to Strings
 * and the body is returned as Octets.
 * Headers are returned as an array and not as Hash - to allow multiple occurrence of an header.
 *
 * This parser does not use Regular Expressions as that can only operate on Strings.
 *
 * It handles if multiple STOMP frames are given as one chunk, a frame is split into multiple chunks, or
 * any combination there of. The parser remembers its state (any partial frame) and continues when a new chunk
 * is pushed.
 *
 * Typically the higher level function will convert headers to Hash, handle unescaping of header values
 * (which is protocol version specific), and convert body to text.
 *
 * Check the parser.spec.js to understand cases that this parser is supposed to handle.
 *
 * Part of `@stomp/stompjs`.
 *
 * @internal
 */
var Parser = /** @class */ (function () {
    function Parser(onFrame, onIncomingPing) {
        this.onFrame = onFrame;
        this.onIncomingPing = onIncomingPing;
        this._encoder = new TextEncoder();
        this._decoder = new TextDecoder();
        this._token = [];
        this._initState();
    }
    Parser.prototype.parseChunk = function (segment, appendMissingNULLonIncoming) {
        if (appendMissingNULLonIncoming === void 0) { appendMissingNULLonIncoming = false; }
        var chunk;
        if ((segment instanceof ArrayBuffer)) {
            chunk = new Uint8Array(segment);
        }
        else {
            chunk = this._encoder.encode(segment);
        }
        // See https://github.com/stomp-js/stompjs/issues/89
        // Remove when underlying issue is fixed.
        //
        // Send a NULL byte, if the last byte of a Text frame was not NULL.F
        if (appendMissingNULLonIncoming && chunk[chunk.length - 1] !== 0) {
            var chunkWithNull = new Uint8Array(chunk.length + 1);
            chunkWithNull.set(chunk, 0);
            chunkWithNull[chunk.length] = 0;
            chunk = chunkWithNull;
        }
        // tslint:disable-next-line:prefer-for-of
        for (var i = 0; i < chunk.length; i++) {
            var byte = chunk[i];
            this._onByte(byte);
        }
    };
    // The following implements a simple Rec Descent Parser.
    // The grammar is simple and just one byte tells what should be the next state
    Parser.prototype._collectFrame = function (byte) {
        if (byte === NULL) { // Ignore
            return;
        }
        if (byte === CR) { // Ignore CR
            return;
        }
        if (byte === LF) { // Incoming Ping
            this.onIncomingPing();
            return;
        }
        this._onByte = this._collectCommand;
        this._reinjectByte(byte);
    };
    Parser.prototype._collectCommand = function (byte) {
        if (byte === CR) { // Ignore CR
            return;
        }
        if (byte === LF) {
            this._results.command = this._consumeTokenAsUTF8();
            this._onByte = this._collectHeaders;
            return;
        }
        this._consumeByte(byte);
    };
    Parser.prototype._collectHeaders = function (byte) {
        if (byte === CR) { // Ignore CR
            return;
        }
        if (byte === LF) {
            this._setupCollectBody();
            return;
        }
        this._onByte = this._collectHeaderKey;
        this._reinjectByte(byte);
    };
    Parser.prototype._reinjectByte = function (byte) {
        this._onByte(byte);
    };
    Parser.prototype._collectHeaderKey = function (byte) {
        if (byte === COLON) {
            this._headerKey = this._consumeTokenAsUTF8();
            this._onByte = this._collectHeaderValue;
            return;
        }
        this._consumeByte(byte);
    };
    Parser.prototype._collectHeaderValue = function (byte) {
        if (byte === CR) { // Ignore CR
            return;
        }
        if (byte === LF) {
            this._results.headers.push([this._headerKey, this._consumeTokenAsUTF8()]);
            this._headerKey = undefined;
            this._onByte = this._collectHeaders;
            return;
        }
        this._consumeByte(byte);
    };
    Parser.prototype._setupCollectBody = function () {
        var contentLengthHeader = this._results.headers.filter(function (header) {
            return header[0] === 'content-length';
        })[0];
        if (contentLengthHeader) {
            this._bodyBytesRemaining = parseInt(contentLengthHeader[1], 10);
            this._onByte = this._collectBodyFixedSize;
        }
        else {
            this._onByte = this._collectBodyNullTerminated;
        }
    };
    Parser.prototype._collectBodyNullTerminated = function (byte) {
        if (byte === NULL) {
            this._retrievedBody();
            return;
        }
        this._consumeByte(byte);
    };
    Parser.prototype._collectBodyFixedSize = function (byte) {
        // It is post decrement, so that we discard the trailing NULL octet
        if (this._bodyBytesRemaining-- === 0) {
            this._retrievedBody();
            return;
        }
        this._consumeByte(byte);
    };
    Parser.prototype._retrievedBody = function () {
        this._results.binaryBody = this._consumeTokenAsRaw();
        this.onFrame(this._results);
        this._initState();
    };
    // Rec Descent Parser helpers
    Parser.prototype._consumeByte = function (byte) {
        this._token.push(byte);
    };
    Parser.prototype._consumeTokenAsUTF8 = function () {
        return this._decoder.decode(this._consumeTokenAsRaw());
    };
    Parser.prototype._consumeTokenAsRaw = function () {
        var rawResult = new Uint8Array(this._token);
        this._token = [];
        return rawResult;
    };
    Parser.prototype._initState = function () {
        this._results = {
            command: undefined,
            headers: [],
            binaryBody: undefined
        };
        this._token = [];
        this._headerKey = undefined;
        this._onByte = this._collectFrame;
    };
    return Parser;
}());
exports.Parser = Parser;


/***/ }),

/***/ "./src/stomp-config.ts":
/*!*****************************!*\
  !*** ./src/stomp-config.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Configuration options for STOMP Client, each key corresponds to
 * field by the same name in {@link Client}. This can be passed to
 * the constructor of {@link Client} or to [Client#configure]{@link Client#configure}.
 *
 * Part of `@stomp/stompjs`.
 */
var StompConfig = /** @class */ (function () {
    function StompConfig() {
    }
    return StompConfig;
}());
exports.StompConfig = StompConfig;


/***/ }),

/***/ "./src/stomp-handler.ts":
/*!******************************!*\
  !*** ./src/stomp-handler.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var byte_1 = __webpack_require__(/*! ./byte */ "./src/byte.ts");
var frame_impl_1 = __webpack_require__(/*! ./frame-impl */ "./src/frame-impl.ts");
var parser_1 = __webpack_require__(/*! ./parser */ "./src/parser.ts");
var versions_1 = __webpack_require__(/*! ./versions */ "./src/versions.ts");
var web_socket_state_1 = __webpack_require__(/*! ./web-socket-state */ "./src/web-socket-state.ts");
/**
 * The STOMP protocol handler
 *
 * Part of `@stomp/stompjs`.
 *
 * @internal
 */
var StompHandler = /** @class */ (function () {
    function StompHandler(_client, _webSocket, config) {
        var _this = this;
        if (config === void 0) { config = {}; }
        this._client = _client;
        this._webSocket = _webSocket;
        this._serverFrameHandlers = {
            // [CONNECTED Frame](http://stomp.github.com/stomp-specification-1.2.html#CONNECTED_Frame)
            CONNECTED: function (frame) {
                _this.debug("connected to server " + frame.headers.server);
                _this._connected = true;
                _this._connectedVersion = frame.headers.version;
                // STOMP version 1.2 needs header values to be escaped
                if (_this._connectedVersion === versions_1.Versions.V1_2) {
                    _this._escapeHeaderValues = true;
                }
                _this._setupHeartbeat(frame.headers);
                _this.onConnect(frame);
            },
            // [MESSAGE Frame](http://stomp.github.com/stomp-specification-1.2.html#MESSAGE)
            MESSAGE: function (frame) {
                // the callback is registered when the client calls
                // `subscribe()`.
                // If there is no registered subscription for the received message,
                // the default `onUnhandledMessage` callback is used that the client can set.
                // This is useful for subscriptions that are automatically created
                // on the browser side (e.g. [RabbitMQ's temporary
                // queues](http://www.rabbitmq.com/stomp.html)).
                var subscription = frame.headers.subscription;
                var onReceive = _this._subscriptions[subscription] || _this.onUnhandledMessage;
                // bless the frame to be a Message
                var message = frame;
                var client = _this;
                var messageId = _this._connectedVersion === versions_1.Versions.V1_2 ? message.headers.ack : message.headers['message-id'];
                // add `ack()` and `nack()` methods directly to the returned frame
                // so that a simple call to `message.ack()` can acknowledge the message.
                message.ack = function (headers) {
                    if (headers === void 0) { headers = {}; }
                    return client.ack(messageId, subscription, headers);
                };
                message.nack = function (headers) {
                    if (headers === void 0) { headers = {}; }
                    return client.nack(messageId, subscription, headers);
                };
                onReceive(message);
            },
            // [RECEIPT Frame](http://stomp.github.com/stomp-specification-1.2.html#RECEIPT)
            RECEIPT: function (frame) {
                var callback = _this._receiptWatchers[frame.headers['receipt-id']];
                if (callback) {
                    callback(frame);
                    // Server will acknowledge only once, remove the callback
                    delete _this._receiptWatchers[frame.headers['receipt-id']];
                }
                else {
                    _this.onUnhandledReceipt(frame);
                }
            },
            // [ERROR Frame](http://stomp.github.com/stomp-specification-1.2.html#ERROR)
            ERROR: function (frame) {
                _this.onStompError(frame);
            }
        };
        // used to index subscribers
        this._counter = 0;
        // subscription callbacks indexed by subscriber's ID
        this._subscriptions = {};
        // receipt-watchers indexed by receipts-ids
        this._receiptWatchers = {};
        this._partialData = '';
        this._escapeHeaderValues = false;
        this._lastServerActivityTS = Date.now();
        this.configure(config);
    }
    Object.defineProperty(StompHandler.prototype, "connectedVersion", {
        get: function () {
            return this._connectedVersion;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StompHandler.prototype, "connected", {
        get: function () {
            return this._connected;
        },
        enumerable: true,
        configurable: true
    });
    StompHandler.prototype.configure = function (conf) {
        // bulk assign all properties to this
        Object.assign(this, conf);
    };
    StompHandler.prototype.start = function () {
        var _this = this;
        var parser = new parser_1.Parser(
        // On Frame
        function (rawFrame) {
            var frame = frame_impl_1.FrameImpl.fromRawFrame(rawFrame, _this._escapeHeaderValues);
            // if this.logRawCommunication is set, the rawChunk is logged at this._webSocket.onmessage
            if (!_this.logRawCommunication) {
                _this.debug("<<< " + frame);
            }
            var serverFrameHandler = _this._serverFrameHandlers[frame.command] || _this.onUnhandledFrame;
            serverFrameHandler(frame);
        }, 
        // On Incoming Ping
        function () {
            _this.debug('<<< PONG');
        });
        this._webSocket.onmessage = function (evt) {
            _this.debug('Received data');
            _this._lastServerActivityTS = Date.now();
            if (_this.logRawCommunication) {
                var rawChunkAsString = (evt.data instanceof ArrayBuffer) ? new TextDecoder().decode(evt.data) : evt.data;
                _this.debug("<<< " + rawChunkAsString);
            }
            parser.parseChunk(evt.data, _this.appendMissingNULLonIncoming);
        };
        this._webSocket.onclose = function (closeEvent) {
            _this.debug("Connection closed to " + _this._webSocket.url);
            _this.onWebSocketClose(closeEvent);
            _this._cleanUp();
        };
        this._webSocket.onerror = function (errorEvent) {
            _this.onWebSocketError(errorEvent);
        };
        this._webSocket.onopen = function () {
            // Clone before updating
            var connectHeaders = Object.assign({}, _this.connectHeaders);
            _this.debug('Web Socket Opened...');
            connectHeaders['accept-version'] = _this.stompVersions.supportedVersions();
            connectHeaders['heart-beat'] = [_this.heartbeatOutgoing, _this.heartbeatIncoming].join(',');
            _this._transmit({ command: 'CONNECT', headers: connectHeaders });
        };
    };
    StompHandler.prototype._setupHeartbeat = function (headers) {
        var _this = this;
        if ((headers.version !== versions_1.Versions.V1_1 && headers.version !== versions_1.Versions.V1_2)) {
            return;
        }
        // It is valid for the server to not send this header
        // https://stomp.github.io/stomp-specification-1.2.html#Heart-beating
        if (!headers['heart-beat']) {
            return;
        }
        // heart-beat header received from the server looks like:
        //
        //     heart-beat: sx, sy
        var _a = (headers['heart-beat']).split(',').map(function (v) { return parseInt(v, 10); }), serverOutgoing = _a[0], serverIncoming = _a[1];
        if ((this.heartbeatOutgoing !== 0) && (serverIncoming !== 0)) {
            var ttl = Math.max(this.heartbeatOutgoing, serverIncoming);
            this.debug("send PING every " + ttl + "ms");
            this._pinger = setInterval(function () {
                if (_this._webSocket.readyState === web_socket_state_1.WebSocketState.OPEN) {
                    _this._webSocket.send(byte_1.BYTE.LF);
                    _this.debug('>>> PING');
                }
            }, ttl);
        }
        if ((this.heartbeatIncoming !== 0) && (serverOutgoing !== 0)) {
            var ttl_1 = Math.max(this.heartbeatIncoming, serverOutgoing);
            this.debug("check PONG every " + ttl_1 + "ms");
            this._ponger = setInterval(function () {
                var delta = Date.now() - _this._lastServerActivityTS;
                // We wait twice the TTL to be flexible on window's setInterval calls
                if (delta > (ttl_1 * 2)) {
                    _this.debug("did not receive server activity for the last " + delta + "ms");
                    _this._closeWebsocket();
                }
            }, ttl_1);
        }
    };
    StompHandler.prototype._closeWebsocket = function () {
        this._webSocket.onmessage = function () { }; // ignore messages
        this._webSocket.close();
    };
    StompHandler.prototype._transmit = function (params) {
        var command = params.command, headers = params.headers, body = params.body, binaryBody = params.binaryBody, skipContentLengthHeader = params.skipContentLengthHeader;
        var frame = new frame_impl_1.FrameImpl({
            command: command,
            headers: headers,
            body: body,
            binaryBody: binaryBody,
            escapeHeaderValues: this._escapeHeaderValues,
            skipContentLengthHeader: skipContentLengthHeader
        });
        var rawChunk = frame.serialize();
        if (this.logRawCommunication) {
            this.debug(">>> " + rawChunk);
        }
        else {
            this.debug(">>> " + frame);
        }
        if (this.forceBinaryWSFrames && typeof rawChunk === 'string') {
            rawChunk = new TextEncoder().encode(rawChunk);
        }
        if (typeof rawChunk !== 'string' || !this.splitLargeFrames) {
            this._webSocket.send(rawChunk);
        }
        else {
            var out = rawChunk;
            while (out.length > 0) {
                var chunk = out.substring(0, this.maxWebSocketChunkSize);
                out = out.substring(this.maxWebSocketChunkSize);
                this._webSocket.send(chunk);
                this.debug("chunk sent = " + chunk.length + ", remaining = " + out.length);
            }
        }
    };
    StompHandler.prototype.dispose = function () {
        var _this = this;
        if (this.connected) {
            try {
                // clone before updating
                var disconnectHeaders = Object.assign({}, this.disconnectHeaders);
                if (!disconnectHeaders.receipt) {
                    disconnectHeaders.receipt = "close-" + this._counter++;
                }
                this.watchForReceipt(disconnectHeaders.receipt, function (frame) {
                    _this._closeWebsocket();
                    _this._cleanUp();
                    _this.onDisconnect(frame);
                });
                this._transmit({ command: 'DISCONNECT', headers: disconnectHeaders });
            }
            catch (error) {
                this.debug("Ignoring error during disconnect " + error);
            }
        }
        else {
            if (this._webSocket.readyState === web_socket_state_1.WebSocketState.CONNECTING
                || this._webSocket.readyState === web_socket_state_1.WebSocketState.OPEN) {
                this._closeWebsocket();
            }
        }
    };
    StompHandler.prototype._cleanUp = function () {
        this._connected = false;
        if (this._pinger) {
            clearInterval(this._pinger);
        }
        if (this._ponger) {
            clearInterval(this._ponger);
        }
    };
    StompHandler.prototype.publish = function (params) {
        var destination = params.destination, headers = params.headers, body = params.body, binaryBody = params.binaryBody, skipContentLengthHeader = params.skipContentLengthHeader;
        var hdrs = Object.assign({ destination: destination }, headers);
        this._transmit({
            command: 'SEND',
            headers: hdrs,
            body: body,
            binaryBody: binaryBody,
            skipContentLengthHeader: skipContentLengthHeader
        });
    };
    StompHandler.prototype.watchForReceipt = function (receiptId, callback) {
        this._receiptWatchers[receiptId] = callback;
    };
    StompHandler.prototype.subscribe = function (destination, callback, headers) {
        if (headers === void 0) { headers = {}; }
        headers = Object.assign({}, headers);
        if (!headers.id) {
            headers.id = "sub-" + this._counter++;
        }
        headers.destination = destination;
        this._subscriptions[headers.id] = callback;
        this._transmit({ command: 'SUBSCRIBE', headers: headers });
        var client = this;
        return {
            id: headers.id,
            unsubscribe: function (hdrs) {
                return client.unsubscribe(headers.id, hdrs);
            }
        };
    };
    StompHandler.prototype.unsubscribe = function (id, headers) {
        if (headers === void 0) { headers = {}; }
        headers = Object.assign({}, headers);
        delete this._subscriptions[id];
        headers.id = id;
        this._transmit({ command: 'UNSUBSCRIBE', headers: headers });
    };
    StompHandler.prototype.begin = function (transactionId) {
        var txId = transactionId || ("tx-" + this._counter++);
        this._transmit({
            command: 'BEGIN', headers: {
                transaction: txId
            }
        });
        var client = this;
        return {
            id: txId,
            commit: function () {
                client.commit(txId);
            },
            abort: function () {
                client.abort(txId);
            }
        };
    };
    StompHandler.prototype.commit = function (transactionId) {
        this._transmit({
            command: 'COMMIT', headers: {
                transaction: transactionId
            }
        });
    };
    StompHandler.prototype.abort = function (transactionId) {
        this._transmit({
            command: 'ABORT', headers: {
                transaction: transactionId
            }
        });
    };
    StompHandler.prototype.ack = function (messageId, subscriptionId, headers) {
        if (headers === void 0) { headers = {}; }
        headers = Object.assign({}, headers);
        if (this._connectedVersion === versions_1.Versions.V1_2) {
            headers.id = messageId;
        }
        else {
            headers['message-id'] = messageId;
        }
        headers.subscription = subscriptionId;
        this._transmit({ command: 'ACK', headers: headers });
    };
    StompHandler.prototype.nack = function (messageId, subscriptionId, headers) {
        if (headers === void 0) { headers = {}; }
        headers = Object.assign({}, headers);
        if (this._connectedVersion === versions_1.Versions.V1_2) {
            headers.id = messageId;
        }
        else {
            headers['message-id'] = messageId;
        }
        headers.subscription = subscriptionId;
        return this._transmit({ command: 'NACK', headers: headers });
    };
    return StompHandler;
}());
exports.StompHandler = StompHandler;


/***/ }),

/***/ "./src/stomp-headers.ts":
/*!******************************!*\
  !*** ./src/stomp-headers.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * STOMP headers. Many functions calls will accept headers as parameters.
 * The headers sent by Broker will be available as [IFrame#headers]{@link IFrame#headers}.
 *
 * `key` and `value` must be valid strings.
 * In addition, `key` must not contain `CR`, `LF`, or `:`.
 *
 * Part of `@stomp/stompjs`.
 */
var StompHeaders = /** @class */ (function () {
    function StompHeaders() {
    }
    return StompHeaders;
}());
exports.StompHeaders = StompHeaders;


/***/ }),

/***/ "./src/stomp-subscription.ts":
/*!***********************************!*\
  !*** ./src/stomp-subscription.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Call [Client#subscribe]{@link Client#subscribe} to create a StompSubscription.
 *
 * Part of `@stomp/stompjs`.
 */
var StompSubscription = /** @class */ (function () {
    function StompSubscription() {
    }
    return StompSubscription;
}());
exports.StompSubscription = StompSubscription;


/***/ }),

/***/ "./src/versions.ts":
/*!*************************!*\
  !*** ./src/versions.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Supported STOMP versions
 *
 * Part of `@stomp/stompjs`.
 */
var Versions = /** @class */ (function () {
    /**
     * Takes an array of string of versions, typical elements '1.0', '1.1', or '1.2'
     *
     * You will an instance if this class if you want to override supported versions to be declared during
     * STOMP handshake.
     */
    function Versions(versions) {
        this.versions = versions;
    }
    /**
     * Used as part of CONNECT STOMP Frame
     */
    Versions.prototype.supportedVersions = function () {
        return this.versions.join(',');
    };
    /**
     * Used while creating a WebSocket
     */
    Versions.prototype.protocolVersions = function () {
        return this.versions.map(function (x) { return "v" + x.replace('.', '') + ".stomp"; });
    };
    /**
     * Indicates protocol version 1.0
     */
    Versions.V1_0 = '1.0';
    /**
     * Indicates protocol version 1.1
     */
    Versions.V1_1 = '1.1';
    /**
     * Indicates protocol version 1.2
     */
    Versions.V1_2 = '1.2';
    /**
     * @internal
     */
    Versions.default = new Versions([Versions.V1_0, Versions.V1_1, Versions.V1_2]);
    return Versions;
}());
exports.Versions = Versions;


/***/ }),

/***/ "./src/web-socket-state.ts":
/*!*********************************!*\
  !*** ./src/web-socket-state.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Possible states for the WebSocket, copied here to avoid dependency on WebSocket class
 *
 * Part of `@stomp/rx-stomp`
 *
 * @internal
 */
var WebSocketState;
(function (WebSocketState) {
    WebSocketState[WebSocketState["CONNECTING"] = 0] = "CONNECTING";
    WebSocketState[WebSocketState["OPEN"] = 1] = "OPEN";
    WebSocketState[WebSocketState["CLOSING"] = 2] = "CLOSING";
    WebSocketState[WebSocketState["CLOSED"] = 3] = "CLOSED";
})(WebSocketState = exports.WebSocketState || (exports.WebSocketState = {}));


/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/kdeepak/MyWork/Tech/stomp/stompjs/src/index.ts */"./src/index.ts");


/***/ })

/******/ });
});
//# sourceMappingURL=stomp.umd.js.map

/***/ }),

/***/ "./src/app/_config/socket-endpoints.ts":
/*!*********************************************!*\
  !*** ./src/app/_config/socket-endpoints.ts ***!
  \*********************************************/
/*! exports provided: SocketEndpoints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketEndpoints", function() { return SocketEndpoints; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");

// const api = 'http://localhost:8080/';
// const api = '/';
// const api = 'https://iopen-1.herokuapp.com/';
var subscribe = '/subscribe/';
var send = '/app-socket/';
var SocketEndpoints = /** @class */ (function () {
    function SocketEndpoints() {
    }
    SocketEndpoints.SOCKET = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production ? 'ws://' + window.location.host + '/socket' : 'ws://localhost:8080/socket';
    SocketEndpoints.SUBS_INTERACAO_POR_SOLICITACAO_ID = subscribe + 'interacao/';
    SocketEndpoints.SEND_INTERACAO = send + 'interacao/';
    SocketEndpoints.SUBS_SOLICITACAO = subscribe + 'solicitacao/';
    SocketEndpoints.SEND_SOLICITACAO = send + 'solicitacao/';
    return SocketEndpoints;
}());



/***/ }),

/***/ "./src/app/_modules/cliente/services/interacao.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/_modules/cliente/services/interacao.service.ts ***!
  \****************************************************************/
/*! exports provided: InteracaoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteracaoService", function() { return InteracaoService; });
/* harmony import */ var _config_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../_config/endpoints */ "./src/app/_config/endpoints.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InteracaoService = /** @class */ (function () {
    function InteracaoService(http) {
        this.http = http;
    }
    InteracaoService.prototype.find = function (id) {
        return this.http.get(_config_endpoints__WEBPACK_IMPORTED_MODULE_0__["Endpoints"].INTERACAO + id);
    };
    InteracaoService.prototype.insert = function (interacaoNew) {
        return this.http.post(_config_endpoints__WEBPACK_IMPORTED_MODULE_0__["Endpoints"].INTERACAO, interacaoNew);
    };
    InteracaoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], InteracaoService);
    return InteracaoService;
}());



/***/ }),

/***/ "./src/app/_shared/model/enum/status-da-solicitacao.ts":
/*!*************************************************************!*\
  !*** ./src/app/_shared/model/enum/status-da-solicitacao.ts ***!
  \*************************************************************/
/*! exports provided: StatusDaSolicitacao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusDaSolicitacao", function() { return StatusDaSolicitacao; });
var StatusDaSolicitacao = /** @class */ (function () {
    function StatusDaSolicitacao() {
    }
    StatusDaSolicitacao.AGUARDANDO_ANALISE = {
        id: -2,
        valor: 'Aguardando análise'
    };
    StatusDaSolicitacao.AGUARDANDO_INTERACAO_DO_CLIENTE = {
        id: -1,
        valor: 'Aguardando Interação do Cliente'
    };
    StatusDaSolicitacao.AGUARDANDO_INTERACAO_INICIAL_DO_CLIENTE = {
        id: 0,
        valor: 'Aguardando Interação Inicial do Cliente'
    };
    StatusDaSolicitacao.AGUARDANDO_ANALISE_INICIAL = {
        id: 1,
        valor: 'Aguardando análise inicial'
    };
    StatusDaSolicitacao.EM_ATENDIMENTO = {
        id: 2,
        valor: 'Em atendimento'
    };
    StatusDaSolicitacao.AGUARDANDO_APROVACAO = {
        id: 3,
        valor: 'Aguardando aprovação'
    };
    StatusDaSolicitacao.ENCERRADA = {
        id: 4,
        valor: 'Encerrada'
    };
    StatusDaSolicitacao.PAUSADA = {
        id: 5,
        valor: 'Pausada'
    };
    StatusDaSolicitacao.CANCELADA = {
        id: 6,
        valor: 'Cancelada'
    };
    return StatusDaSolicitacao;
}());



/***/ }),

/***/ "./src/app/_shared/model/enum/tipo-servico-info.ts":
/*!*********************************************************!*\
  !*** ./src/app/_shared/model/enum/tipo-servico-info.ts ***!
  \*********************************************************/
/*! exports provided: TipoServicoInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoServicoInfo", function() { return TipoServicoInfo; });
var TipoServicoInfo = /** @class */ (function () {
    function TipoServicoInfo() {
        this.SELECT = {
            id: 1,
            valor: 'select'
        };
        this.DATE = {
            id: 2,
            valor: 'date'
        };
        this.TEXTAREA = {
            id: 3,
            valor: 'textarea'
        };
    }
    return TipoServicoInfo;
}());



/***/ }),

/***/ "./src/app/_shared/model/file-to-upload.model.ts":
/*!*******************************************************!*\
  !*** ./src/app/_shared/model/file-to-upload.model.ts ***!
  \*******************************************************/
/*! exports provided: FileToUpload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileToUpload", function() { return FileToUpload; });
var FileToUpload = /** @class */ (function () {
    function FileToUpload() {
        this.fileName = "";
        this.fileSize = 0;
        this.fileType = "";
        this.lastModifiedTime = 0;
        this.lastModifiedDate = null;
        this.fileAsBase64 = "";
    }
    return FileToUpload;
}());



/***/ }),

/***/ "./src/app/_shared/services/socket.service.ts":
/*!****************************************************!*\
  !*** ./src/app/_shared/services/socket.service.ts ***!
  \****************************************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var _stomp_ng2_stompjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stomp/ng2-stompjs */ "./node_modules/@stomp/ng2-stompjs/fesm5/stomp-ng2-stompjs.js");

// @Injectable({
//   providedIn: 'root'
// })
var SocketService = /** @class */ (function () {
    function SocketService(socketUrl, streamUrl) {
        // Create Stomp Configuration
        var stompConfig = {
            url: socketUrl,
            headers: {
                login: '',
                passcode: ''
            },
            heartbeat_in: 0,
            heartbeat_out: 20000,
            reconnect_delay: 5000,
            debug: true,
        };
        // Create Stomp Service
        this.stompService = new _stomp_ng2_stompjs__WEBPACK_IMPORTED_MODULE_0__["StompService"](stompConfig);
        // Connect to a Stream
        this.messages = this.stompService.subscribe(streamUrl);
    }
    SocketService.prototype.stream = function () {
        return this.messages;
    };
    SocketService.prototype.send = function (url, message) {
        return this.stompService.publish(url, JSON.stringify(message));
    };
    SocketService.prototype.state = function () {
        return this.stompService.state;
    };
    return SocketService;
}());



/***/ })

}]);
//# sourceMappingURL=default~_modules-cliente-cliente-module~_modules-vendedor-vendedor-module.js.map