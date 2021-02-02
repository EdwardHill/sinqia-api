(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/_modules/administrador/services/cliente.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/_modules/administrador/services/cliente.service.ts ***!
  \********************************************************************/
/*! exports provided: ClienteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteService", function() { return ClienteService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_config_endpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_config/endpoints */ "./src/app/_config/endpoints.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClienteService = /** @class */ (function () {
    function ClienteService(http) {
        this.http = http;
    }
    ClienteService.prototype.findAllBySetor = function (id, pageNumber) {
        return this.http.get(src_app_config_endpoints__WEBPACK_IMPORTED_MODULE_2__["Endpoints"].CLIENTE + id + '/cliente?page=' + pageNumber);
    };
    ClienteService.prototype.findAll = function () {
        return this.http.get(src_app_config_endpoints__WEBPACK_IMPORTED_MODULE_2__["Endpoints"].CLIENTE);
    };
    ClienteService.prototype.findById = function (id) {
        return this.http.get(src_app_config_endpoints__WEBPACK_IMPORTED_MODULE_2__["Endpoints"].CLIENTE + id);
    };
    ClienteService.prototype.findByMyself = function () {
        return this.http.get(src_app_config_endpoints__WEBPACK_IMPORTED_MODULE_2__["Endpoints"].CLIENTE + 'self');
    };
    ClienteService.prototype.insert = function (cliente) {
        return this.http.post(src_app_config_endpoints__WEBPACK_IMPORTED_MODULE_2__["Endpoints"].CLIENTE, cliente);
    };
    ClienteService.prototype.update = function (cliente) {
        return this.http.put(src_app_config_endpoints__WEBPACK_IMPORTED_MODULE_2__["Endpoints"].CLIENTE + cliente.id, cliente);
    };
    ClienteService.prototype.delete = function (id) {
        return this.http.delete(src_app_config_endpoints__WEBPACK_IMPORTED_MODULE_2__["Endpoints"].CLIENTE + id);
    };
    ClienteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], ClienteService);
    return ClienteService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map