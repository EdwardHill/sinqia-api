(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["_modules-auth-auth-module"],{

/***/ "./node_modules/angular2-text-mask/dist/angular2TextMask.js":
/*!******************************************************************!*\
  !*** ./node_modules/angular2-text-mask/dist/angular2TextMask.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var textMaskCore_1 = __webpack_require__(/*! text-mask-core/dist/textMaskCore */ "./node_modules/text-mask-core/dist/textMaskCore.js");
var TextMaskConfig = /** @class */ (function () {
    function TextMaskConfig() {
    }
    return TextMaskConfig;
}());
exports.TextMaskConfig = TextMaskConfig;
exports.MASKEDINPUT_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return MaskedInputDirective; }),
    multi: true
};
/**
 * We must check whether the agent is Android because composition events
 * behave differently between iOS and Android.
 */
function _isAndroid() {
    var userAgent = platform_browser_1.ɵgetDOM() ? platform_browser_1.ɵgetDOM().getUserAgent() : '';
    return /android (\d+)/.test(userAgent.toLowerCase());
}
var MaskedInputDirective = /** @class */ (function () {
    function MaskedInputDirective(_renderer, _elementRef, _compositionMode) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._compositionMode = _compositionMode;
        this.textMaskConfig = {
            mask: [],
            guide: true,
            placeholderChar: '_',
            pipe: undefined,
            keepCharPositions: false,
        };
        this.onChange = function (_) { };
        this.onTouched = function () { };
        /** Whether the user is creating a composition string (IME events). */
        this._composing = false;
        if (this._compositionMode == null) {
            this._compositionMode = !_isAndroid();
        }
    }
    MaskedInputDirective.prototype.ngOnChanges = function (changes) {
        this._setupMask(true);
        if (this.textMaskInputElement !== undefined) {
            this.textMaskInputElement.update(this.inputElement.value);
        }
    };
    MaskedInputDirective.prototype.writeValue = function (value) {
        this._setupMask();
        // set the initial value for cases where the mask is disabled
        var normalizedValue = value == null ? '' : value;
        this._renderer.setProperty(this.inputElement, 'value', normalizedValue);
        if (this.textMaskInputElement !== undefined) {
            this.textMaskInputElement.update(value);
        }
    };
    MaskedInputDirective.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    MaskedInputDirective.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    MaskedInputDirective.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    MaskedInputDirective.prototype._handleInput = function (value) {
        if (!this._compositionMode || (this._compositionMode && !this._composing)) {
            this._setupMask();
            if (this.textMaskInputElement !== undefined) {
                this.textMaskInputElement.update(value);
                // get the updated value
                value = this.inputElement.value;
                this.onChange(value);
            }
        }
    };
    MaskedInputDirective.prototype._setupMask = function (create) {
        if (create === void 0) { create = false; }
        if (!this.inputElement) {
            if (this._elementRef.nativeElement.tagName.toUpperCase() === 'INPUT') {
                // `textMask` directive is used directly on an input element
                this.inputElement = this._elementRef.nativeElement;
            }
            else {
                // `textMask` directive is used on an abstracted input element, `md-input-container`, etc
                this.inputElement = this._elementRef.nativeElement.getElementsByTagName('INPUT')[0];
            }
        }
        if (this.inputElement && create) {
            this.textMaskInputElement = textMaskCore_1.createTextMaskInputElement(Object.assign({ inputElement: this.inputElement }, this.textMaskConfig));
        }
    };
    MaskedInputDirective.prototype._compositionStart = function () { this._composing = true; };
    MaskedInputDirective.prototype._compositionEnd = function (value) {
        this._composing = false;
        this._compositionMode && this._handleInput(value);
    };
    MaskedInputDirective.decorators = [
        { type: core_1.Directive, args: [{
                    host: {
                        '(input)': '_handleInput($event.target.value)',
                        '(blur)': 'onTouched()',
                        '(compositionstart)': '_compositionStart()',
                        '(compositionend)': '_compositionEnd($event.target.value)'
                    },
                    selector: '[textMask]',
                    exportAs: 'textMask',
                    providers: [exports.MASKEDINPUT_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    MaskedInputDirective.ctorParameters = function () { return [
        { type: core_1.Renderer2, },
        { type: core_1.ElementRef, },
        { type: undefined, decorators: [{ type: core_1.Optional }, { type: core_1.Inject, args: [forms_1.COMPOSITION_BUFFER_MODE,] },] },
    ]; };
    MaskedInputDirective.propDecorators = {
        'textMaskConfig': [{ type: core_1.Input, args: ['textMask',] },],
    };
    return MaskedInputDirective;
}());
exports.MaskedInputDirective = MaskedInputDirective;
var TextMaskModule = /** @class */ (function () {
    function TextMaskModule() {
    }
    TextMaskModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [MaskedInputDirective],
                    exports: [MaskedInputDirective]
                },] },
    ];
    /** @nocollapse */
    TextMaskModule.ctorParameters = function () { return []; };
    return TextMaskModule;
}());
exports.TextMaskModule = TextMaskModule;
var textMaskCore_2 = __webpack_require__(/*! text-mask-core/dist/textMaskCore */ "./node_modules/text-mask-core/dist/textMaskCore.js");
exports.conformToMask = textMaskCore_2.conformToMask;
//# sourceMappingURL=angular2TextMask.js.map

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/_modules/auth/pages/cadastro/cadastro.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/_modules/auth/pages/cadastro/cadastro.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\r\n  class=\"wrapper wrapper-full-page tela-pequena\"\r\n  style=\"\r\n    background: url('./assets/img/PAREDE GABAY 2.jpg');\r\n    background-size: cover;\r\n    background-position: center;\r\n  \"\r\n>\r\n  <div class=\"page-header login-page\">\r\n    <!--   you can change the color of the filter page using: data-color=\"blue | purple | green | orange | red | rose \" -->\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6 ml-auto mr-auto\">\r\n          <form\r\n            *ngIf=\"exibirFormVendedor\"\r\n            class=\"form-inline\"\r\n            (ngSubmit)=\"onSubmitVendedor()\"\r\n            #form=\"ngForm\"\r\n            autocomplete=\"off\"\r\n          >\r\n            <div class=\"card card-login\">\r\n              <div class=\"card-header card-header-rose text-center\">\r\n                <h4 class=\"card-title\">Cadastro</h4>\r\n                <!-- <div class=\"social-line\">\r\n                  <a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-white\">\r\n                    <i class=\"fa fa-facebook-square\"></i>\r\n                  </a>\r\n                  <a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-white\">\r\n                    <i class=\"fa fa-twitter\"></i>\r\n                  </a>\r\n                  <a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-white\">\r\n                    <i class=\"fa fa-google-plus\"></i>\r\n                  </a>\r\n                </div> -->\r\n              </div>\r\n              <div class=\"card-body\">\r\n                <div class=\"logo-img text-center\">\r\n                  <img\r\n                    width=\"120px\"\r\n                    src=\"./assets/img2/GabayLogos/logo GABAY icone.png\"\r\n                  />\r\n                </div>\r\n                <div class=\"button-box\">\r\n                  <button type=\"button\" class=\"toggle-btn\" routerLink=\"/login\">\r\n                    Log In\r\n                  </button>\r\n\r\n                  <button type=\"button\" class=\"toggle-btn active\">\r\n                    Cadastrar\r\n                  </button>\r\n                </div>\r\n\r\n                <div class=\"custom-control custom-radio\">\r\n                  <input\r\n                    type=\"radio\"\r\n                    class=\"custom-control-input\"\r\n                    id=\"defaultChecked\"\r\n                    name=\"defaultExampleRadios\"\r\n                    (click)=\"toggleVendedor()\"\r\n                    mdbInput\r\n                    checked\r\n                  />\r\n                  <label class=\"custom-control-label\" for=\"defaultChecked\"\r\n                    >Vendedor</label\r\n                  >\r\n                </div>\r\n                <br />\r\n                <div class=\"custom-control custom-radio\">\r\n                  <input\r\n                    type=\"radio\"\r\n                    class=\"custom-control-input\"\r\n                    id=\"defaultUnchecked\"\r\n                    name=\"defaultExampleRadios\"\r\n                    (click)=\"toggleCliente()\"\r\n                    mdbInput\r\n                  />\r\n                  <label class=\"custom-control-label\" for=\"defaultUnchecked\"\r\n                    >Cliente</label\r\n                  >\r\n                </div>\r\n                <br />\r\n                <!-- <p class=\"card-description text-center\">Or Be Classical</p> -->\r\n                <!-- <span class=\"bmd-form-group\">\r\n                  <div class=\"input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\">\r\n                        <i class=\"material-icons\">face</i>\r\n                      </span>\r\n                    </div>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"First Name...\">\r\n                  </div>\r\n                </span> -->\r\n                <div class=\"formVendedor\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-6\">\r\n                      <span class=\"bmd-form-group\">\r\n                        <div class=\"input-group\">\r\n                          <div class=\"input-group-prepend\">\r\n                            <span class=\"input-group-text\">\r\n                              <i class=\"material-icons\">insert_chart</i>\r\n                            </span>\r\n                          </div>\r\n                          <input\r\n                            type=\"text\"\r\n                            name=\"nome\"\r\n                            [(ngModel)]=\"usuario.nome\"\r\n                            required\r\n                            minlength=\"3\"\r\n                            maxlength=\"20\"\r\n                            #nome=\"ngModel\"\r\n                            class=\"form-control\"\r\n                            placeholder=\"Nome\"\r\n                          />\r\n                        </div>\r\n                        <!--<div\r\n                    class=\"alert alert-danger\"\r\n                    *ngIf=\"nome.errors && f.submitted\"\r\n                  >\r\n                    <div *ngIf=\"nome.errors.required\">\r\n                      Campo Nome Obrigatório!\r\n                    </div>\r\n                    <div *ngIf=\"nome.errors.minlength\">\r\n                      Nome deve ser pelo menos 3 caracteres!\r\n                    </div>\r\n                    <div *ngIf=\"nome.errors.maxlength\">\r\n                      Nome deve ter 20 caracteres no máximo!\r\n                    </div>\r\n                  </div> -->\r\n                      </span>\r\n                    </div>\r\n\r\n                    <div class=\"col-6\">\r\n                      <span class=\"bmd-form-group\">\r\n                        <div class=\"input-group\">\r\n                          <div class=\"input-group-prepend\">\r\n                            <span class=\"input-group-text\">\r\n                              <i class=\"material-icons\"\r\n                                >insert_chart_outlined</i\r\n                              >\r\n                            </span>\r\n                          </div>\r\n                          <input\r\n                            type=\"text\"\r\n                            name=\"sobreNome\"\r\n                            [(ngModel)]=\"usuario.sobreNome\"\r\n                            required\r\n                            minlength=\"3\"\r\n                            maxlength=\"20\"\r\n                            #sobreNome=\"ngModel\"\r\n                            class=\"form-control\"\r\n                            placeholder=\"Sobrenome\"\r\n                          />\r\n                        </div>\r\n                        <!--<div\r\n                    class=\"alert alert-danger\"\r\n                    *ngIf=\"sobreNome.errors && f.submitted\"\r\n                  >\r\n                    <div *ngIf=\"sobreNome.errors.required\">\r\n                      Campo Sobrenome Obrigatório!\r\n                    </div>\r\n                    <div *ngIf=\"sobreNome.errors.minlength\">\r\n                      Sobrenome deve ser pelo menos 3 caracteres!\r\n                    </div>\r\n                    <div *ngIf=\"sobreNome.errors.maxlength\">\r\n                      Sobrenome deve ter 20 caracteres no máximo!\r\n                    </div>\r\n                  </div> -->\r\n                      </span>\r\n                    </div>\r\n\r\n                    <div class=\"col-6\">\r\n                      <span class=\"bmd-form-group\">\r\n                        <div class=\"input-group\">\r\n                          <div class=\"input-group-prepend\">\r\n                            <span class=\"input-group-text\">\r\n                              <i class=\"material-icons\">mail</i>\r\n                            </span>\r\n                          </div>\r\n                          <input\r\n                            type=\"email\"\r\n                            class=\"form-control\"\r\n                            name=\"email\"\r\n                            [(ngModel)]=\"usuario.email\"\r\n                            required\r\n                            email\r\n                            #email=\"ngModel\"\r\n                            placeholder=\"Email\"\r\n                          />\r\n                        </div>\r\n                        <!--<div\r\n                    class=\"alert alert-danger\"\r\n                    *ngIf=\"email.errors && f.submitted\"\r\n                  >\r\n                    <div *ngIf=\"email.errors.required\">\r\n                      Campo Email Obrigatório!\r\n                    </div>\r\n                    <div *ngIf=\"email.errors.email\">Email deve ser válido!</div>\r\n                  </div> -->\r\n                      </span>\r\n                    </div>\r\n                    <div class=\"col-6\">\r\n                      <span class=\"bmd-form-group\">\r\n                        <div class=\"input-group\">\r\n                          <div class=\"input-group-prepend\">\r\n                            <span class=\"input-group-text\">\r\n                              <i class=\"material-icons\">lock_outline</i>\r\n                            </span>\r\n                          </div>\r\n                          <input\r\n                            type=\"password\"\r\n                            name=\"senha\"\r\n                            [(ngModel)]=\"usuario.senha\"\r\n                            required\r\n                            minlength=\"6\"\r\n                            #senha=\"ngModel\"\r\n                            placeholder=\"Senha\"\r\n                            class=\"form-control\"\r\n                          />\r\n                        </div>\r\n                        <!-- <div\r\n                    class=\"alert alert-danger\"\r\n                    *ngIf=\"senha.errors && f.submitted\"\r\n                  >\r\n                    <div *ngIf=\"senha.errors.required\">\r\n                      Campo Senha Obrigatório!\r\n                    </div>\r\n                    <div *ngIf=\"senha.errors.minlength\">\r\n                      Senha deve conter pelo menos 6 caracteres!\r\n                    </div>\r\n                  </div> -->\r\n                      </span>\r\n                    </div>\r\n\r\n                    <div class=\"col-6\">\r\n                      <span class=\"bmd-form-group\">\r\n                        <div class=\"input-group\">\r\n                          <div class=\"input-group-prepend\">\r\n                            <span class=\"input-group-text\">\r\n                              <i class=\"material-icons\">perm_identity</i>\r\n                            </span>\r\n                          </div>\r\n                          <input\r\n                            type=\"text\"\r\n                            class=\"form-control\"\r\n                            name=\"cpf_cnpj\"\r\n                            [(ngModel)]=\"usuario.cpf_cnpj\"\r\n                            required\r\n                            #cpf_cnpj=\"ngModel\"\r\n                            [textMask]=\"{ mask: cpfMask }\"\r\n                            placeholder=\"CPF/CNPJ\"\r\n                          />\r\n                        </div>\r\n                        <!--<div\r\n                    class=\"alert alert-danger\"\r\n                    *ngIf=\"cpf_cnpj.errors && f.submitted\"\r\n                  >\r\n                    <div *ngIf=\"cpf_cnpj.errors.required\">\r\n                      Campo CPF/CNPJ Obrigatório!\r\n                    </div>\r\n                  </div> -->\r\n                      </span>\r\n                    </div>\r\n\r\n                    <div class=\"col-6\">\r\n                      <span class=\"bmd-form-group\">\r\n                        <div class=\"input-group\">\r\n                          <div class=\"input-group-prepend\">\r\n                            <span class=\"input-group-text\">\r\n                              <i class=\"material-icons\">date_range</i>\r\n                            </span>\r\n                          </div>\r\n                          <input\r\n                            type=\"date\"\r\n                            name=\"nascimento\"\r\n                            [(ngModel)]=\"usuario.nascimento\"\r\n                            required\r\n                            #nascimento=\"ngModel\"\r\n                            class=\"form-control\"\r\n                          />\r\n                        </div>\r\n                        <!--<div\r\n                    class=\"alert alert-danger\"\r\n                    *ngIf=\"nascimento.errors && f.submitted\"\r\n                  >\r\n                    <div *ngIf=\"nascimento.errors.required\">\r\n                      Campo Data de Nascimento Obrigatório!\r\n                    </div>\r\n                  </div> -->\r\n                      </span>\r\n                    </div>\r\n\r\n                    <div class=\"col-6 select-config\">\r\n                      <span class=\"bmd-form-group\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"\">Tipo</label>\r\n                          <select\r\n                            name=\"tipoDocumento\"\r\n                            [(ngModel)]=\"usuario.tipoDocumento\"\r\n                            #tipoDocumento=\"ngModel\"\r\n                            class=\"form-control select-tipo\"\r\n                            id=\"tipoDocumento\"\r\n                            #tipoDocumento=\"ngModel\"\r\n                            required\r\n                          >\r\n                            <option [ngValue]=\"null\">Selecione</option>\r\n                            <option [ngValue]=\"1\">CPF</option>\r\n                            <option [ngValue]=\"2\">CNPJ</option>\r\n                          </select>\r\n                        </div>\r\n                        <!--<div\r\n                    class=\"alert alert-danger\"\r\n                    *ngIf=\"tipoDocumento.errors && f.submitted\"\r\n                  >\r\n                    <div *ngIf=\"tipoDocumento.errors.required\">\r\n                      Campo Documento Obrigatório!\r\n                    </div>\r\n                  </div> -->\r\n                      </span>\r\n                    </div>\r\n\r\n                    <div class=\"col-6 select-config\">\r\n                      <span class=\"bmd-form-group\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"\">Celular</label>\r\n                          <select\r\n                            name=\"tipoTelefone\"\r\n                            [(ngModel)]=\"usuario.telefone.tipoTelefone\"\r\n                            #tipoTelefone=\"ngModel\"\r\n                            class=\"form-control select-tipo\"\r\n                            required\r\n                          >\r\n                            <option [ngValue]=\"null\">Selecione</option>\r\n                            <option [ngValue]=\"1\">Celular</option>\r\n                            <option [ngValue]=\"2\">Fixo</option>\r\n                          </select>\r\n                        </div>\r\n                        <!-- <div\r\n                    class=\"alert alert-danger\"\r\n                    *ngIf=\"tipoTelefone.errors && f.submitted\"\r\n                  >\r\n                    <div *ngIf=\"tipoTelefone.errors.required\">\r\n                      Campo Tipo Telefone Obrigatório!\r\n                    </div>\r\n                  </div> -->\r\n                      </span>\r\n                    </div>\r\n\r\n                    <div class=\"col-6\">\r\n                      <span class=\"bmd-form-group\">\r\n                        <div class=\"input-group\">\r\n                          <div class=\"input-group-prepend\">\r\n                            <span class=\"input-group-text\">\r\n                              <i class=\"material-icons\">contact_phone </i>\r\n                            </span>\r\n                          </div>\r\n\r\n                          <div class=\"form-group\">\r\n                            <input\r\n                              type=\"text\"\r\n                              class=\"form-control\"\r\n                              name=\"ddd\"\r\n                              [(ngModel)]=\"usuario.telefone.ddd\"\r\n                              required\r\n                              minlength=\"2\"\r\n                              #ddd=\"ngModel\"\r\n                              [textMask]=\"dddMask\"\r\n                              placeholder=\"DDD\"\r\n                              style=\"width: 30px\"\r\n                            />\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                            <input\r\n                              type=\"text\"\r\n                              class=\"form-control form-numero\"\r\n                              name=\"numero\"\r\n                              [(ngModel)]=\"usuario.telefone.numero\"\r\n                              required\r\n                              #numero=\"ngModel\"\r\n                              [textMask]=\"phoneMask\"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n                        <!-- <div\r\n                    class=\"alert alert-danger\"\r\n                    *ngIf=\"numero.errors && f.submitted\"\r\n                  >\r\n                    <div *ngIf=\"numero.errors.required\">\r\n                      Campo Telefone Obrigatório!\r\n                    </div>\r\n                  </div> -->\r\n                      </span>\r\n                    </div>\r\n\r\n                    <div class=\"col-6\">\r\n                      <span class=\"bmd-form-group\">\r\n                        <div class=\"input-group\">\r\n                          <div class=\"input-group-prepend\">\r\n                            <span class=\"input-group-text\">\r\n                              <i class=\"material-icons\">place </i>\r\n                            </span>\r\n                          </div>\r\n                          <input\r\n                            type=\"text\"\r\n                            class=\"form-control\"\r\n                            name=\"cep\"\r\n                            [(ngModel)]=\"usuario.endereco.cep\"\r\n                            required\r\n                            #cep=\"ngModel\"\r\n                            [textMask]=\"{ mask: cepMask }\"\r\n                            placeholder=\"CEP\"\r\n                          />\r\n                        </div>\r\n                        <!-- <div\r\n                      class=\"alert alert-danger\"\r\n                      *ngIf=\"cep.errors && f.submitted\"\r\n                    >\r\n                      <div *ngIf=\"cep.errors.required\">\r\n                        Campo CEP Obrigatório!\r\n                      </div>\r\n                    </div>-->\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"row\">\r\n                    <div class=\"col-6\">\r\n                      <span class=\"bmd-form-group\">\r\n                        <div class=\"input-group\">\r\n                          <div class=\"input-group-prepend\">\r\n                            <span class=\"input-group-text\">\r\n                              <i class=\"material-icons\">location_city </i>\r\n                            </span>\r\n                          </div>\r\n                          <input\r\n                            type=\"text\"\r\n                            class=\"form-control\"\r\n                            name=\"cidade\"\r\n                            [(ngModel)]=\"usuario.endereco.cidade\"\r\n                            required\r\n                            #cidade=\"ngModel\"\r\n                            placeholder=\"Cidade\"\r\n                          />\r\n                        </div>\r\n                        <!--<div\r\n                    class=\"alert alert-danger\"\r\n                    *ngIf=\"cidade.errors && f.submitted\"\r\n                  >\r\n                    <div *ngIf=\"cidade.errors.required\">\r\n                      Campo Cidade Obrigatório!\r\n                    </div>\r\n                  </div> -->\r\n                      </span>\r\n                    </div>\r\n\r\n                    <div class=\"col-6\">\r\n                      <span class=\"bmd-form-group\">\r\n                        <div class=\"input-group\">\r\n                          <div class=\"input-group-prepend\">\r\n                            <span class=\"input-group-text\">\r\n                              <i class=\"material-icons\">location_city </i>\r\n                            </span>\r\n                          </div>\r\n                          <input\r\n                            type=\"text\"\r\n                            class=\"form-control\"\r\n                            name=\"bairro\"\r\n                            [(ngModel)]=\"usuario.endereco.bairro\"\r\n                            required\r\n                            #bairro=\"ngModel\"\r\n                            placeholder=\"Bairro\"\r\n                          />\r\n                        </div>\r\n                        <!-- <div\r\n                    class=\"alert alert-danger\"\r\n                    *ngIf=\"bairro.errors && f.submitted\"\r\n                  >\r\n                    <div *ngIf=\"bairro.errors.required\">\r\n                      Campo Bairro Obrigatório!\r\n                    </div>\r\n                  </div> -->\r\n                      </span>\r\n                    </div>\r\n\r\n                    <div class=\"col-6\">\r\n                      <span class=\"bmd-form-group\">\r\n                        <div class=\"input-group\">\r\n                          <div class=\"input-group-prepend\">\r\n                            <span class=\"input-group-text\">\r\n                              <i class=\"material-icons\">add_road </i>\r\n                            </span>\r\n                          </div>\r\n                          <input\r\n                            type=\"text\"\r\n                            class=\"form-control\"\r\n                            name=\"rua\"\r\n                            [(ngModel)]=\"usuario.endereco.rua\"\r\n                            required\r\n                            #rua=\"ngModel\"\r\n                            placeholder=\"Rua\"\r\n                          />\r\n                        </div>\r\n                        <!--<div\r\n                    class=\"alert alert-danger\"\r\n                    *ngIf=\"rua.errors && f.submitted\"\r\n                  >\r\n                    <div *ngIf=\"rua.errors.required\">\r\n                      Campo Rua Obrigatório!\r\n                    </div>\r\n                  </div> -->\r\n                      </span>\r\n                    </div>\r\n\r\n                    <div class=\"col-6\">\r\n                      <span class=\"bmd-form-group\">\r\n                        <div class=\"input-group\">\r\n                          <div class=\"input-group-prepend\">\r\n                            <span class=\"input-group-text\">\r\n                              <i class=\"material-icons\">home </i>\r\n                            </span>\r\n                          </div>\r\n                          <input\r\n                            type=\"text\"\r\n                            class=\"form-control\"\r\n                            name=\"numero\"\r\n                            [(ngModel)]=\"usuario.endereco.numero\"\r\n                            required\r\n                            #numero=\"ngModel\"\r\n                            placeholder=\"Número da Casa\"\r\n                          />\r\n                        </div>\r\n                        <!--<div\r\n                    class=\"alert alert-danger\"\r\n                    *ngIf=\"numero.errors && f.submitted\"\r\n                  >\r\n                    <div *ngIf=\"numero.errors.required\">\r\n                      Campo Número Obrigatório!\r\n                    </div>\r\n                  </div> -->\r\n                      </span>\r\n                    </div>\r\n\r\n                    <div class=\"col-6\">\r\n                      <span class=\"bmd-form-group\">\r\n                        <div class=\"input-group\">\r\n                          <div class=\"input-group-prepend\">\r\n                            <span class=\"input-group-text\">\r\n                              <i class=\"material-icons\">info </i>\r\n                            </span>\r\n                          </div>\r\n                          <input\r\n                            type=\"text\"\r\n                            class=\"form-control\"\r\n                            name=\"complemento\"\r\n                            [(ngModel)]=\"usuario.endereco.complemento\"\r\n                            #rua=\"ngModel\"\r\n                            placeholder=\"Complemento (Opcional)\"\r\n                          />\r\n                        </div>\r\n                      </span>\r\n                    </div>\r\n\r\n                    <div class=\"col-6 select-config\">\r\n                      <span class=\"bmd-form-group\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"\">UF</label>\r\n                          <select\r\n                            name=\"uf\"\r\n                            [(ngModel)]=\"usuario.endereco.uf\"\r\n                            #uf=\"ngModel\"\r\n                            class=\"form-control select-tipo\"\r\n                            required\r\n                          >\r\n                            <option [ngValue]=\"null\">Selecione</option>\r\n                            <option [ngValue]=\"1\">Acre</option>\r\n                            <option [ngValue]=\"2\">Alagoas</option>\r\n                            <option [ngValue]=\"3\">Amazonas</option>\r\n                            <option [ngValue]=\"4\">Amapá</option>\r\n                            <option [ngValue]=\"5\">Bahia</option>\r\n                            <option [ngValue]=\"6\">Ceará</option>\r\n                            <option [ngValue]=\"7\">Distrito Federal</option>\r\n                            <option [ngValue]=\"8\">Espirito Santo</option>\r\n                            <option [ngValue]=\"9\">Goias</option>\r\n                            <option [ngValue]=\"10\">Maranhão</option>\r\n                            <option [ngValue]=\"11\">Minas Gerais</option>\r\n                            <option [ngValue]=\"12\">Mato Grosso Sul</option>\r\n                            <option [ngValue]=\"13\">Mato Grosso</option>\r\n                            <option [ngValue]=\"14\">Pará</option>\r\n                            <option [ngValue]=\"15\">Paraiba</option>\r\n                            <option [ngValue]=\"16\">Pernambuco</option>\r\n                            <option [ngValue]=\"17\">Piaui</option>\r\n                            <option [ngValue]=\"18\">Parana</option>\r\n                            <option [ngValue]=\"19\">Rio de Janeiro</option>\r\n                            <option [ngValue]=\"20\">Rio Grande do Norte</option>\r\n                            <option [ngValue]=\"21\">Rondônia</option>\r\n                            <option [ngValue]=\"22\">Roraima</option>\r\n                            <option [ngValue]=\"23\">Rio Grande do Sul</option>\r\n                            <option [ngValue]=\"24\">Santa Catarina</option>\r\n                            <option [ngValue]=\"25\">Sergipe</option>\r\n                            <option [ngValue]=\"26\">São Paulo</option>\r\n                            <option [ngValue]=\"27\">Tocantins</option>\r\n                          </select>\r\n\r\n                          <!-- <div\r\n                      class=\"alert alert-danger\"\r\n                      *ngIf=\"uf.errors && f.submitted\"\r\n                    >\r\n                      <div *ngIf=\"uf.errors.required\">\r\n                        Campo UF Obrigatório!\r\n                      </div>\r\n                    </div> -->\r\n                        </div>\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div\r\n                class=\"card-footer justify-content-center d-flex flex-column\"\r\n              >\r\n                <button\r\n                  [disabled]=\"!form.form.valid\"\r\n                  type=\"submit\"\r\n                  class=\"btn btn-rose btn-link btn-lg\"\r\n                >\r\n                  Cadastrar\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n\r\n          <form\r\n            *ngIf=\"exibirFormCliente\"\r\n            class=\"form-inline\"\r\n            (ngSubmit)=\"onSubmitCliente()\"\r\n            #form=\"ngForm\"\r\n            autocomplete=\"off\"\r\n          >\r\n            <div class=\"card card-login\">\r\n              <div class=\"card-header card-header-rose text-center\">\r\n                <h4 class=\"card-title\">Cadastro</h4>\r\n                <!-- <div class=\"social-line\">\r\n                  <a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-white\">\r\n                    <i class=\"fa fa-facebook-square\"></i>\r\n                  </a>\r\n                  <a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-white\">\r\n                    <i class=\"fa fa-twitter\"></i>\r\n                  </a>\r\n                  <a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-white\">\r\n                    <i class=\"fa fa-google-plus\"></i>\r\n                  </a>\r\n                </div> -->\r\n              </div>\r\n              <div class=\"card-body\">\r\n                <div class=\"logo-img text-center\">\r\n                  <img\r\n                    width=\"120px\"\r\n                    src=\"./assets/img2/GabayLogos/logo GABAY icone.png\"\r\n                  />\r\n                </div>\r\n                <div class=\"button-box\">\r\n                  <div id=\"btn\"></div>\r\n                  <button type=\"button\" class=\"toggle-btn\" routerLink=\"/login\">\r\n                    Log In\r\n                  </button>\r\n                  <button type=\"button\" class=\"toggle-btn active\">\r\n                    Cadastrar\r\n                  </button>\r\n                </div>\r\n\r\n                <div class=\"custom-control custom-radio\">\r\n                  <input\r\n                    type=\"radio\"\r\n                    class=\"custom-control-input\"\r\n                    id=\"defaultUnchecked\"\r\n                    name=\"defaultExampleRadios\"\r\n                    (click)=\"toggleVendedor()\"\r\n                    mdbInput\r\n                  />\r\n                  <label class=\"custom-control-label\" for=\"defaultUnchecked\"\r\n                    >Vendedor</label\r\n                  >\r\n                </div>\r\n                <br />\r\n                <div class=\"custom-control custom-radio\">\r\n                  <input\r\n                    type=\"radio\"\r\n                    class=\"custom-control-input\"\r\n                    id=\"defaultChecked\"\r\n                    name=\"defaultExampleRadios\"\r\n                    (click)=\"toggleCliente()\"\r\n                    mdbInput\r\n                    checked\r\n                  />\r\n                  <label class=\"custom-control-label\" for=\"defaultChecked\"\r\n                    >Cliente</label\r\n                  >\r\n                </div>\r\n                <br />\r\n                <!-- <p class=\"card-description text-center\">Or Be Classical</p> -->\r\n                <!-- <span class=\"bmd-form-group\">\r\n                  <div class=\"input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\">\r\n                        <i class=\"material-icons\">face</i>\r\n                      </span>\r\n                    </div>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"First Name...\">\r\n                  </div>\r\n                </span> -->\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"col-6\">\r\n                    <span class=\"bmd-form-group\">\r\n                      <div class=\"input-group\">\r\n                        <div class=\"input-group-prepend\">\r\n                          <span class=\"input-group-text\">\r\n                            <i class=\"material-icons\">insert_chart</i>\r\n                          </span>\r\n                        </div>\r\n                        <input\r\n                          type=\"text\"\r\n                          name=\"nome\"\r\n                          [(ngModel)]=\"usuario.nome\"\r\n                          required\r\n                          minlength=\"3\"\r\n                          maxlength=\"20\"\r\n                          #nome=\"ngModel\"\r\n                          class=\"form-control\"\r\n                          placeholder=\"Nome\"\r\n                        />\r\n                      </div>\r\n                      <!--<div\r\n                    class=\"alert alert-danger\"\r\n                    *ngIf=\"nome.errors && f.submitted\"\r\n                  >\r\n                    <div *ngIf=\"nome.errors.required\">\r\n                      Campo Nome Obrigatório!\r\n                    </div>\r\n                    <div *ngIf=\"nome.errors.minlength\">\r\n                      Nome deve ser pelo menos 3 caracteres!\r\n                    </div>\r\n                    <div *ngIf=\"nome.errors.maxlength\">\r\n                      Nome deve ter 20 caracteres no máximo!\r\n                    </div>\r\n                  </div> -->\r\n                    </span>\r\n                  </div>\r\n\r\n                  <div class=\"col-6\">\r\n                    <span class=\"bmd-form-group\">\r\n                      <div class=\"input-group\">\r\n                        <div class=\"input-group-prepend\">\r\n                          <span class=\"input-group-text\">\r\n                            <i class=\"material-icons\">insert_chart_outlined</i>\r\n                          </span>\r\n                        </div>\r\n                        <input\r\n                          type=\"text\"\r\n                          name=\"sobreNome\"\r\n                          [(ngModel)]=\"usuario.sobreNome\"\r\n                          required\r\n                          minlength=\"3\"\r\n                          maxlength=\"20\"\r\n                          #sobreNome=\"ngModel\"\r\n                          class=\"form-control\"\r\n                          placeholder=\"Sobrenome\"\r\n                        />\r\n                      </div>\r\n                      <!--<div\r\n                    class=\"alert alert-danger\"\r\n                    *ngIf=\"sobreNome.errors && f.submitted\"\r\n                  >\r\n                    <div *ngIf=\"sobreNome.errors.required\">\r\n                      Campo Sobrenome Obrigatório!\r\n                    </div>\r\n                    <div *ngIf=\"sobreNome.errors.minlength\">\r\n                      Sobrenome deve ser pelo menos 3 caracteres!\r\n                    </div>\r\n                    <div *ngIf=\"sobreNome.errors.maxlength\">\r\n                      Sobrenome deve ter 20 caracteres no máximo!\r\n                    </div>\r\n                  </div> -->\r\n                    </span>\r\n                  </div>\r\n\r\n                  <div class=\"col-6\">\r\n                    <span class=\"bmd-form-group\">\r\n                      <div class=\"input-group\">\r\n                        <div class=\"input-group-prepend\">\r\n                          <span class=\"input-group-text\">\r\n                            <i class=\"material-icons\">mail</i>\r\n                          </span>\r\n                        </div>\r\n                        <input\r\n                          type=\"email\"\r\n                          class=\"form-control\"\r\n                          name=\"email\"\r\n                          [(ngModel)]=\"usuario.email\"\r\n                          required\r\n                          email\r\n                          #email=\"ngModel\"\r\n                          placeholder=\"Email\"\r\n                        />\r\n                      </div>\r\n                      <!--<div\r\n                    class=\"alert alert-danger\"\r\n                    *ngIf=\"email.errors && f.submitted\"\r\n                  >\r\n                    <div *ngIf=\"email.errors.required\">\r\n                      Campo Email Obrigatório!\r\n                    </div>\r\n                    <div *ngIf=\"email.errors.email\">Email deve ser válido!</div>\r\n                  </div> -->\r\n                    </span>\r\n                  </div>\r\n                  <div class=\"col-6\">\r\n                    <span class=\"bmd-form-group\">\r\n                      <div class=\"input-group\">\r\n                        <div class=\"input-group-prepend\">\r\n                          <span class=\"input-group-text\">\r\n                            <i class=\"material-icons\">lock_outline</i>\r\n                          </span>\r\n                        </div>\r\n                        <input\r\n                          type=\"password\"\r\n                          name=\"senha\"\r\n                          [(ngModel)]=\"usuario.senha\"\r\n                          required\r\n                          minlength=\"6\"\r\n                          #senha=\"ngModel\"\r\n                          placeholder=\"Senha\"\r\n                          class=\"form-control\"\r\n                        />\r\n                      </div>\r\n                      <!-- <div\r\n                    class=\"alert alert-danger\"\r\n                    *ngIf=\"senha.errors && f.submitted\"\r\n                  >\r\n                    <div *ngIf=\"senha.errors.required\">\r\n                      Campo Senha Obrigatório!\r\n                    </div>\r\n                    <div *ngIf=\"senha.errors.minlength\">\r\n                      Senha deve conter pelo menos 6 caracteres!\r\n                    </div>\r\n                  </div> -->\r\n                    </span>\r\n                  </div>\r\n                  <div class=\"col-6\">\r\n                    <span class=\"bmd-form-group\">\r\n                      <div class=\"input-group\">\r\n                        <div class=\"input-group-prepend\">\r\n                          <span class=\"input-group-text\">\r\n                            <i class=\"material-icons\">perm_identity</i>\r\n                          </span>\r\n                        </div>\r\n                        <input\r\n                          type=\"text\"\r\n                          class=\"form-control\"\r\n                          name=\"cpf_cnpj\"\r\n                          [(ngModel)]=\"usuario.cpf_cnpj\"\r\n                          required\r\n                          #cpf_cnpj=\"ngModel\"\r\n                          [textMask]=\"{ mask: cpfMask }\"\r\n                          placeholder=\"CPF/CNPJ\"\r\n                        />\r\n                      </div>\r\n                      <!--<div\r\n                  class=\"alert alert-danger\"\r\n                  *ngIf=\"cpf_cnpj.errors && f.submitted\"\r\n                >\r\n                  <div *ngIf=\"cpf_cnpj.errors.required\">\r\n                    Campo CPF/CNPJ Obrigatório!\r\n                  </div>\r\n                </div> -->\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div\r\n                class=\"card-footer justify-content-center d-flex flex-column\"\r\n              >\r\n                <button\r\n                  [disabled]=\"!form.form.valid\"\r\n                  type=\"submit\"\r\n                  class=\"btn btn-rose btn-link btn-lg\"\r\n                >\r\n                  Cadastrar\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- <footer class=\"footer \">\r\n      <div class=\"container\">\r\n        <nav class=\"pull-left\">\r\n          <ul>\r\n            <li>\r\n              <a href=\"https://www.creative-tim.com\">\r\n                Creative Tim\r\n              </a>\r\n            </li>\r\n            <li>\r\n              <a href=\"https://creative-tim.com/about-us\">\r\n                About Us\r\n              </a>\r\n            </li>\r\n            <li>\r\n              <a href=\"http://blog.creative-tim.com\">\r\n                Blog\r\n              </a>\r\n            </li>\r\n            <li>\r\n              <a href=\"https://www.creative-tim.com/license\">\r\n                Licenses\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </nav>\r\n        <div class=\"copyright pull-right\">\r\n          &copy;\r\n            {{test | date: 'yyyy'}}, made with <i class=\"material-icons\">favorite</i> by\r\n          <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a> for a better web.\r\n        </div>\r\n      </div>\r\n    </footer> -->\r\n  </div>\r\n</div>\r\n<!-- <div\r\n  class=\"banner\"\r\n  style=\"\r\n    background: linear-gradient(360deg, rgb(48, 47, 47), transparent);\r\n    padding: 120px;\r\n    z-index: 1;\r\n  \"\r\n></div> -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/_modules/auth/pages/login/login.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/_modules/auth/pages/login/login.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\r\n  class=\"wrapper wrapper-full-page tela-pequena\"\r\n  style=\"\r\n    background-image: url('https://tibahia.com/wp-content/uploads/2021/01/sinqia-marca-770-513.jpg');\r\n    background-size: cover;\r\n    background-position: center;\r\n  \"\r\n>\r\n  <div class=\"page-header login-page\">\r\n    <!--   you can change the color of the filter page using: data-color=\"blue | purple | green | orange | red | rose \" -->\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-4 col-md-6 col-sm-8 ml-auto mr-auto\">\r\n          <form\r\n            id=\"login\"\r\n            class=\"form\"\r\n            (ngSubmit)=\"onSubmit()\"\r\n            #form=\"ngForm\"\r\n            autocomplete=\"off\"\r\n          >\r\n            <div class=\"card card-login card-hidden\">\r\n              <div class=\"card-header card-header-rose text-center\">\r\n                <h4 class=\"card-title\">Login</h4>\r\n                <!-- <div class=\"social-line\">\r\n                  <a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-white\">\r\n                    <i class=\"fa fa-facebook-square\"></i>\r\n                  </a>\r\n                  <a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-white\">\r\n                    <i class=\"fa fa-twitter\"></i>\r\n                  </a>\r\n                  <a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-white\">\r\n                    <i class=\"fa fa-google-plus\"></i>\r\n                  </a>\r\n                </div> -->\r\n              </div>\r\n              <div class=\"card-body\">\r\n                <div class=\"logo-img text-center\">\r\n                  <img\r\n                    width=\"220px\"\r\n                    src=\"https://www.sinqia.com.br/wp-content/themes/mziq_sinqia_insti/img/logotipo-laranja.png\"\r\n                  />\r\n                </div>\r\n                \r\n                <!-- <p class=\"card-description text-center\">Or Be Classical</p> -->\r\n                <!-- <span class=\"bmd-form-group\">\r\n                  <div class=\"input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\">\r\n                        <i class=\"material-icons\">face</i>\r\n                      </span>\r\n                    </div>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"First Name...\">\r\n                  </div>\r\n                </span> -->\r\n                <span class=\"bmd-form-group\">\r\n                  <div class=\"input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\">\r\n                        <i class=\"material-icons\">email</i>\r\n                      </span>\r\n                    </div>\r\n                    <input\r\n                      [(ngModel)]=\"usuario.email\"\r\n                      name=\"email\"\r\n                      type=\"email\"\r\n                      class=\"form-control\"\r\n                      placeholder=\"Email...\"\r\n                      required\r\n                    />\r\n                  </div>\r\n                </span>\r\n                <span class=\"bmd-form-group\">\r\n                  <div class=\"input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\">\r\n                        <i class=\"material-icons\">lock_outline</i>\r\n                      </span>\r\n                    </div>\r\n                    <input\r\n                      [(ngModel)]=\"usuario.senha\"\r\n                      type=\"password\"\r\n                      name=\"senha\"\r\n                      class=\"form-control\"\r\n                      placeholder=\"Senha...\"\r\n                      required\r\n                    />\r\n                  </div>\r\n                </span>\r\n              </div>\r\n              <div\r\n                class=\"card-footer justify-content-center d-flex flex-column\"\r\n              >\r\n                <button\r\n                  [disabled]=\"!form.form.valid\"\r\n                  type=\"submit\"\r\n                  class=\"btn btn-rose btn-link btn-lg\"\r\n                >\r\n                  Login\r\n                </button>\r\n                <a\r\n                  routerLink=\"../reset-password\"\r\n                  type=\"button\"\r\n                  class=\"btn btn-rose btn-link btn-lg\"\r\n                  >Redefinir senha</a\r\n                >\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- <footer class=\"footer \">\r\n      <div class=\"container\">\r\n        <nav class=\"pull-left\">\r\n          <ul>\r\n            <li>\r\n              <a href=\"https://www.creative-tim.com\">\r\n                Creative Tim\r\n              </a>\r\n            </li>\r\n            <li>\r\n              <a href=\"https://creative-tim.com/about-us\">\r\n                About Us\r\n              </a>\r\n            </li>\r\n            <li>\r\n              <a href=\"http://blog.creative-tim.com\">\r\n                Blog\r\n              </a>\r\n            </li>\r\n            <li>\r\n              <a href=\"https://www.creative-tim.com/license\">\r\n                Licenses\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </nav>\r\n        <div class=\"copyright pull-right\">\r\n          &copy;\r\n            {{test | date: 'yyyy'}}, made with <i class=\"material-icons\">favorite</i> by\r\n          <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a> for a better web.\r\n        </div>\r\n      </div>\r\n    </footer> -->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/_modules/auth/pages/redefinir-senha/redefinir-senha.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/_modules/auth/pages/redefinir-senha/redefinir-senha.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-full-page\">\r\n  <div class=\"page-header login-page header-filter\" filter-color=\"black\">\r\n    <!--   you can change the color of the filter page using: data-color=\"blue | purple | green | orange | red | rose \" -->\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-4 col-md-6 col-sm-6 ml-auto mr-auto\">\r\n          <form class=\"form\" (ngSubmit)=\"onSubmit()\" #form=\"ngForm\">\r\n            <div class=\"card card-login card-hidden\">\r\n              <div class=\"card-header card-header-rose text-center\">\r\n                <h4 class=\"card-title\">Redefinir sua senha</h4>\r\n                <!-- <div class=\"social-line\">\r\n                  <a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-white\">\r\n                    <i class=\"fa fa-facebook-square\"></i>\r\n                  </a>\r\n                  <a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-white\">\r\n                    <i class=\"fa fa-twitter\"></i>\r\n                  </a>\r\n                  <a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-white\">\r\n                    <i class=\"fa fa-google-plus\"></i>\r\n                  </a>\r\n                </div> -->\r\n              </div>\r\n              <div class=\"card-body \">\r\n                <!-- <p class=\"card-description text-center\">Or Be Classical</p> -->\r\n                <!-- <span class=\"bmd-form-group\">\r\n                  <div class=\"input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\">\r\n                        <i class=\"material-icons\">face</i>\r\n                      </span>\r\n                    </div>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"First Name...\">\r\n                  </div>\r\n                </span> -->\r\n                <span class=\"bmd-form-group\">\r\n                  <div class=\"input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\">\r\n                        <i class=\"material-icons\">email</i>\r\n                      </span>\r\n                    </div>\r\n                    <input [(ngModel)]=\"senha\" name=\"senha\" type=\"password\" class=\"form-control\" placeholder=\"Senha\" required>\r\n                  </div>\r\n                </span>\r\n                <span class=\"bmd-form-group\">\r\n                  <div class=\"input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\">\r\n                        <i class=\"material-icons\">email</i>\r\n                      </span>\r\n                    </div>\r\n                    <input [(ngModel)]=\"senhaRepetida\" name=\"senhaRepetida\" type=\"password\" class=\"form-control\" placeholder=\"Repita a Senha\" required>\r\n                  </div>\r\n                </span>\r\n                \r\n                \r\n\r\n              </div>\r\n              <div class=\"card-footer justify-content-center\">\r\n                <button [disabled]=\"!form.form.valid\"  type=\"submit\" class=\"btn btn-rose btn-link btn-lg\">Salvar senha</button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/_modules/auth/pages/reset-password/reset-password.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/_modules/auth/pages/reset-password/reset-password.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-full-page\">\r\n  <div class=\"page-header login-page header-filter\" filter-color=\"black\">\r\n    <!--   you can change the color of the filter page using: data-color=\"blue | purple | green | orange | red | rose \" -->\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-4 col-md-6 col-sm-6 ml-auto mr-auto\">\r\n          <form class=\"form\" (ngSubmit)=\"onSubmit()\" #form=\"ngForm\">\r\n            <div class=\"card card-login card-hidden\">\r\n              <div class=\"card-header card-header-rose text-center\">\r\n                <h4 class=\"card-title\">Redefinir sua senha</h4>\r\n                <!-- <div class=\"social-line\">\r\n                  <a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-white\">\r\n                    <i class=\"fa fa-facebook-square\"></i>\r\n                  </a>\r\n                  <a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-white\">\r\n                    <i class=\"fa fa-twitter\"></i>\r\n                  </a>\r\n                  <a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-white\">\r\n                    <i class=\"fa fa-google-plus\"></i>\r\n                  </a>\r\n                </div> -->\r\n              </div>\r\n              <div class=\"card-body\">\r\n                <!-- <p class=\"card-description text-center\">Or Be Classical</p> -->\r\n                <!-- <span class=\"bmd-form-group\">\r\n                  <div class=\"input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\">\r\n                        <i class=\"material-icons\">face</i>\r\n                      </span>\r\n                    </div>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"First Name...\">\r\n                  </div>\r\n                </span> -->\r\n                <span class=\"bmd-form-group\">\r\n                  <div class=\"input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\">\r\n                        <i class=\"material-icons\">email</i>\r\n                      </span>\r\n                    </div>\r\n                    <input\r\n                      [(ngModel)]=\"email\"\r\n                      name=\"email\"\r\n                      type=\"email\"\r\n                      class=\"form-control\"\r\n                      placeholder=\"Email...\"\r\n                      required\r\n                    />\r\n                  </div>\r\n                </span>\r\n              </div>\r\n              <div class=\"card-footer justify-content-center\">\r\n                <button\r\n                  [disabled]=\"!form.form.valid\"\r\n                  type=\"submit\"\r\n                  class=\"btn btn-rose btn-link btn-lg\"\r\n                >\r\n                  Redefinir senha\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/text-mask-core/dist/textMaskCore.js":
/*!**********************************************************!*\
  !*** ./node_modules/text-mask-core/dist/textMaskCore.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,r){ true?module.exports=r():undefined}(this,function(){return function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var t={};return r.m=e,r.c=t,r.p="",r(0)}([function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(r,"__esModule",{value:!0});var o=t(3);Object.defineProperty(r,"conformToMask",{enumerable:!0,get:function(){return n(o).default}});var i=t(2);Object.defineProperty(r,"adjustCaretPosition",{enumerable:!0,get:function(){return n(i).default}});var a=t(5);Object.defineProperty(r,"createTextMaskInputElement",{enumerable:!0,get:function(){return n(a).default}})},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.placeholderChar="_",r.strFunction="function"},function(e,r){"use strict";function t(e){var r=e.previousConformedValue,t=void 0===r?o:r,i=e.previousPlaceholder,a=void 0===i?o:i,u=e.currentCaretPosition,l=void 0===u?0:u,s=e.conformedValue,f=e.rawValue,d=e.placeholderChar,c=e.placeholder,p=e.indexesOfPipedChars,v=void 0===p?n:p,h=e.caretTrapIndexes,m=void 0===h?n:h;if(0===l||!f.length)return 0;var y=f.length,g=t.length,b=c.length,C=s.length,P=y-g,k=P>0,x=0===g,O=P>1&&!k&&!x;if(O)return l;var T=k&&(t===s||s===c),w=0,M=void 0,S=void 0;if(T)w=l-P;else{var j=s.toLowerCase(),_=f.toLowerCase(),V=_.substr(0,l).split(o),A=V.filter(function(e){return j.indexOf(e)!==-1});S=A[A.length-1];var N=a.substr(0,A.length).split(o).filter(function(e){return e!==d}).length,E=c.substr(0,A.length).split(o).filter(function(e){return e!==d}).length,F=E!==N,R=void 0!==a[A.length-1]&&void 0!==c[A.length-2]&&a[A.length-1]!==d&&a[A.length-1]!==c[A.length-1]&&a[A.length-1]===c[A.length-2];!k&&(F||R)&&N>0&&c.indexOf(S)>-1&&void 0!==f[l]&&(M=!0,S=f[l]);for(var I=v.map(function(e){return j[e]}),J=I.filter(function(e){return e===S}).length,W=A.filter(function(e){return e===S}).length,q=c.substr(0,c.indexOf(d)).split(o).filter(function(e,r){return e===S&&f[r]!==e}).length,L=q+W+J+(M?1:0),z=0,B=0;B<C;B++){var D=j[B];if(w=B+1,D===S&&z++,z>=L)break}}if(k){for(var G=w,H=w;H<=b;H++)if(c[H]===d&&(G=H),c[H]===d||m.indexOf(H)!==-1||H===b)return G}else if(M){for(var K=w-1;K>=0;K--)if(s[K]===S||m.indexOf(K)!==-1||0===K)return K}else for(var Q=w;Q>=0;Q--)if(c[Q-1]===d||m.indexOf(Q)!==-1||0===Q)return Q}Object.defineProperty(r,"__esModule",{value:!0}),r.default=t;var n=[],o=""},function(e,r,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!(0,i.isArray)(r)){if(("undefined"==typeof r?"undefined":o(r))!==a.strFunction)throw new Error("Text-mask:conformToMask; The mask property must be an array.");r=r(e,t),r=(0,i.processCaretTraps)(r).maskWithoutCaretTraps}var n=t.guide,s=void 0===n||n,f=t.previousConformedValue,d=void 0===f?l:f,c=t.placeholderChar,p=void 0===c?a.placeholderChar:c,v=t.placeholder,h=void 0===v?(0,i.convertMaskToPlaceholder)(r,p):v,m=t.currentCaretPosition,y=t.keepCharPositions,g=s===!1&&void 0!==d,b=e.length,C=d.length,P=h.length,k=r.length,x=b-C,O=x>0,T=m+(O?-x:0),w=T+Math.abs(x);if(y===!0&&!O){for(var M=l,S=T;S<w;S++)h[S]===p&&(M+=p);e=e.slice(0,T)+M+e.slice(T,b)}for(var j=e.split(l).map(function(e,r){return{char:e,isNew:r>=T&&r<w}}),_=b-1;_>=0;_--){var V=j[_].char;if(V!==p){var A=_>=T&&C===k;V===h[A?_-x:_]&&j.splice(_,1)}}var N=l,E=!1;e:for(var F=0;F<P;F++){var R=h[F];if(R===p){if(j.length>0)for(;j.length>0;){var I=j.shift(),J=I.char,W=I.isNew;if(J===p&&g!==!0){N+=p;continue e}if(r[F].test(J)){if(y===!0&&W!==!1&&d!==l&&s!==!1&&O){for(var q=j.length,L=null,z=0;z<q;z++){var B=j[z];if(B.char!==p&&B.isNew===!1)break;if(B.char===p){L=z;break}}null!==L?(N+=J,j.splice(L,1)):F--}else N+=J;continue e}E=!0}g===!1&&(N+=h.substr(F,P));break}N+=R}if(g&&O===!1){for(var D=null,G=0;G<N.length;G++)h[G]===p&&(D=G);N=null!==D?N.substr(0,D+1):l}return{conformedValue:N,meta:{someCharsRejected:E}}}Object.defineProperty(r,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r.default=n;var i=t(4),a=t(1),u=[],l=""},function(e,r,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s.placeholderChar;if(!o(e))throw new Error("Text-mask:convertMaskToPlaceholder; The mask property must be an array.");if(e.indexOf(r)!==-1)throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n"+("The placeholder character that was received is: "+JSON.stringify(r)+"\n\n")+("The mask that was received is: "+JSON.stringify(e)));return e.map(function(e){return e instanceof RegExp?r:e}).join("")}function o(e){return Array.isArray&&Array.isArray(e)||e instanceof Array}function i(e){return"string"==typeof e||e instanceof String}function a(e){return"number"==typeof e&&void 0===e.length&&!isNaN(e)}function u(e){return"undefined"==typeof e||null===e}function l(e){for(var r=[],t=void 0;t=e.indexOf(d),t!==-1;)r.push(t),e.splice(t,1);return{maskWithoutCaretTraps:e,indexes:r}}Object.defineProperty(r,"__esModule",{value:!0}),r.convertMaskToPlaceholder=n,r.isArray=o,r.isString=i,r.isNumber=a,r.isNil=u,r.processCaretTraps=l;var s=t(1),f=[],d="[]"},function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var r={previousConformedValue:void 0,previousPlaceholder:void 0};return{state:r,update:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,o=n.inputElement,s=n.mask,d=n.guide,m=n.pipe,g=n.placeholderChar,b=void 0===g?v.placeholderChar:g,C=n.keepCharPositions,P=void 0!==C&&C,k=n.showMask,x=void 0!==k&&k;if("undefined"==typeof t&&(t=o.value),t!==r.previousConformedValue){("undefined"==typeof s?"undefined":l(s))===y&&void 0!==s.pipe&&void 0!==s.mask&&(m=s.pipe,s=s.mask);var O=void 0,T=void 0;if(s instanceof Array&&(O=(0,p.convertMaskToPlaceholder)(s,b)),s!==!1){var w=a(t),M=o.selectionEnd,S=r.previousConformedValue,j=r.previousPlaceholder,_=void 0;if(("undefined"==typeof s?"undefined":l(s))===v.strFunction){if(T=s(w,{currentCaretPosition:M,previousConformedValue:S,placeholderChar:b}),T===!1)return;var V=(0,p.processCaretTraps)(T),A=V.maskWithoutCaretTraps,N=V.indexes;T=A,_=N,O=(0,p.convertMaskToPlaceholder)(T,b)}else T=s;var E={previousConformedValue:S,guide:d,placeholderChar:b,pipe:m,placeholder:O,currentCaretPosition:M,keepCharPositions:P},F=(0,c.default)(w,T,E),R=F.conformedValue,I=("undefined"==typeof m?"undefined":l(m))===v.strFunction,J={};I&&(J=m(R,u({rawValue:w},E)),J===!1?J={value:S,rejected:!0}:(0,p.isString)(J)&&(J={value:J}));var W=I?J.value:R,q=(0,f.default)({previousConformedValue:S,previousPlaceholder:j,conformedValue:W,placeholder:O,rawValue:w,currentCaretPosition:M,placeholderChar:b,indexesOfPipedChars:J.indexesOfPipedChars,caretTrapIndexes:_}),L=W===O&&0===q,z=x?O:h,B=L?z:W;r.previousConformedValue=B,r.previousPlaceholder=O,o.value!==B&&(o.value=B,i(o,q))}}}}}function i(e,r){document.activeElement===e&&(g?b(function(){return e.setSelectionRange(r,r,m)},0):e.setSelectionRange(r,r,m))}function a(e){if((0,p.isString)(e))return e;if((0,p.isNumber)(e))return String(e);if(void 0===e||null===e)return h;throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}Object.defineProperty(r,"__esModule",{value:!0});var u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r.default=o;var s=t(2),f=n(s),d=t(3),c=n(d),p=t(4),v=t(1),h="",m="none",y="object",g="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),b="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout}])});

/***/ }),

/***/ "./src/app/_modules/auth/auth-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/_modules/auth/auth-routing.module.ts ***!
  \******************************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _pages_redefinir_senha_redefinir_senha_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/redefinir-senha/redefinir-senha.component */ "./src/app/_modules/auth/pages/redefinir-senha/redefinir-senha.component.ts");
/* harmony import */ var _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/reset-password/reset-password.component */ "./src/app/_modules/auth/pages/reset-password/reset-password.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/_modules/auth/pages/login/login.component.ts");
/* harmony import */ var _pages_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/cadastro/cadastro.component */ "./src/app/_modules/auth/pages/cadastro/cadastro.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        children: [{
                path: 'login',
                component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
            },
            {
                path: 'cadastro',
                component: _pages_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_5__["CadastroComponent"]
            },
            {
                path: 'reset-password',
                component: _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_1__["ResetPasswordComponent"]
            },
            {
                path: 'redefinir-senha',
                component: _pages_redefinir_senha_redefinir_senha_component__WEBPACK_IMPORTED_MODULE_0__["RedefinirSenhaComponent"]
            },
            {
                path: '**',
                redirectTo: 'login',
                pathMatch: 'full'
            }
        ]
    }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/_modules/auth/auth.module.ts":
/*!**********************************************!*\
  !*** ./src/app/_modules/auth/auth.module.ts ***!
  \**********************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/_modules/auth/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/_modules/auth/auth-routing.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_shared/shared.module */ "./src/app/_shared/shared.module.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/_modules/auth/pages/login/login.component.ts");
/* harmony import */ var _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/reset-password/reset-password.component */ "./src/app/_modules/auth/pages/reset-password/reset-password.component.ts");
/* harmony import */ var _pages_redefinir_senha_redefinir_senha_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/redefinir-senha/redefinir-senha.component */ "./src/app/_modules/auth/pages/redefinir-senha/redefinir-senha.component.ts");
/* harmony import */ var _pages_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/cadastro/cadastro.component */ "./src/app/_modules/auth/pages/cadastro/cadastro.component.ts");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_10__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_7__["ResetPasswordComponent"], _pages_redefinir_senha_redefinir_senha_component__WEBPACK_IMPORTED_MODULE_8__["RedefinirSenhaComponent"], _pages_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_9__["CadastroComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                angular2_text_mask__WEBPACK_IMPORTED_MODULE_10__["TextMaskModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__["AuthRoutingModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            ],
            providers: [
                _services_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"],
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/_modules/auth/pages/cadastro/cadastro.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/_modules/auth/pages/cadastro/cadastro.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-numero {\r\n  width: 110px;\r\n  margin-left: 10px;\r\n}\r\n.tela-grande {\r\n  background-image: url('/assets/img/background.png');\r\n  height: 100vh;\r\n  background-size: cover;\r\n}\r\n@media only screen and (min-width: 992px) {\r\n  .form-numero {\r\n    width: 90px;\r\n  }\r\n}\r\n@media only screen and (max-width: 600px) {\r\n  .tela-pequena {\r\n    background-color: #005c8a;\r\n    background-image: linear-gradient(#005c8a, #39739d) !important;\r\n  }\r\n  input.form-numero {\r\n    width: 90px;\r\n  }\r\n}\r\n@media only screen and (max-width: 575px) {\r\n  .select-tipo {\r\n    width: 80px;\r\n  }\r\n  .select-config {\r\n    position: relative;\r\n    left: 30px;\r\n  }\r\n  label {\r\n    width: 20px;\r\n  }\r\n}\r\n/*.button-box {\r\n  width: 220px;\r\n  margin: 35px auto;\r\n  position: relative;\r\n  box-shadow: 0 0 20px 9px #ff61241f;\r\n  border-radius: 30px;\r\n}*/\r\n.button-box {\r\n  width: 240px;\r\n  margin: 35px auto;\r\n  position: relative;\r\n  box-shadow: 0 0 20px 9px #ff61241f;\r\n  border-radius: 30px;\r\n}\r\n.toggle-btn {\r\n  padding: 10px 30px;\r\n  cursor: pointer;\r\n  background: transparent;\r\n  border: 0;\r\n  outline: none;\r\n  position: relative;\r\n}\r\n.active {\r\n  background: linear-gradient(to right, #ff105f, #ffad06);\r\n  border-radius: 30px;\r\n  transition: 0.5s;\r\n  margin-left: 18px;\r\n}\r\nlabel {\r\n  width: 60px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX21vZHVsZXMvYXV0aC9wYWdlcy9jYWRhc3Ryby9jYWRhc3Ryby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsbURBQW1EO0VBQ25ELGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UseUJBQXlCO0lBQ3pCLDhEQUE4RDtFQUNoRTtFQUNBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsVUFBVTtFQUNaO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7QUFDRjtBQUNBOzs7Ozs7RUFNRTtBQUVGO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0NBQWtDO0VBQ2xDLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsU0FBUztFQUNULGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHVEQUF1RDtFQUN2RCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvX21vZHVsZXMvYXV0aC9wYWdlcy9jYWRhc3Ryby9jYWRhc3Ryby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tbnVtZXJvIHtcclxuICB3aWR0aDogMTEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuLnRlbGEtZ3JhbmRlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1nL2JhY2tncm91bmQucG5nJyk7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAuZm9ybS1udW1lcm8ge1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAudGVsYS1wZXF1ZW5hIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDVjOGE7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzAwNWM4YSwgIzM5NzM5ZCkgIWltcG9ydGFudDtcclxuICB9XHJcbiAgaW5wdXQuZm9ybS1udW1lcm8ge1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAuc2VsZWN0LXRpcG8ge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgfVxyXG4gIC5zZWxlY3QtY29uZmlnIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDMwcHg7XHJcbiAgfVxyXG4gIGxhYmVsIHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gIH1cclxufVxyXG4vKi5idXR0b24tYm94IHtcclxuICB3aWR0aDogMjIwcHg7XHJcbiAgbWFyZ2luOiAzNXB4IGF1dG87XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IDlweCAjZmY2MTI0MWY7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxufSovXHJcblxyXG4uYnV0dG9uLWJveCB7XHJcbiAgd2lkdGg6IDI0MHB4O1xyXG4gIG1hcmdpbjogMzVweCBhdXRvO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3gtc2hhZG93OiAwIDAgMjBweCA5cHggI2ZmNjEyNDFmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbn1cclxuXHJcbi50b2dnbGUtYnRuIHtcclxuICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogMDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZjEwNWYsICNmZmFkMDYpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuICBtYXJnaW4tbGVmdDogMThweDtcclxufVxyXG5sYWJlbCB7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/_modules/auth/pages/cadastro/cadastro.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/_modules/auth/pages/cadastro/cadastro.component.ts ***!
  \********************************************************************/
/*! exports provided: CadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroComponent", function() { return CadastroComponent; });
/* harmony import */ var _shared_model_enum_perfil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../_shared/model/enum/perfil */ "./src/app/_shared/model/enum/perfil.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/_modules/auth/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_show_messages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_shared/services/show-messages.service */ "./src/app/_shared/services/show-messages.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CadastroComponent = /** @class */ (function () {
    function CadastroComponent(authService, route, showMessageService, spinner) {
        this.authService = authService;
        this.route = route;
        this.showMessageService = showMessageService;
        this.spinner = spinner;
        this.usuario = {
            nome: null,
            email: null,
            senha: null,
            cpf: null,
            nascimento: null,
            telefone: {
                tipoTelefone: null,
                ddd: null,
                numero: null
            },
            endereco: {
                cep: '',
                cidade: null,
                bairro: null,
                rua: null,
                numero: null,
                complemento: null,
                uf: null
            }
        };
        this.exibirFormCliente = false;
        this.dddMask = {
            guide: true,
            showMask: true,
            mask: ['(', /\d/, /\d/, ')']
        };
        this.phoneMask = {
            guide: true,
            showMask: true,
            mask: [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
        };
        this.cpfMask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
        this.cepMask = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
    }
    CadastroComponent.prototype.ngOnInit = function () {
        var route;
        var perfil = localStorage.getItem('perfil');
        if (perfil) {
            switch (perfil) {
                case _shared_model_enum_perfil__WEBPACK_IMPORTED_MODULE_0__["Perfil"].CLIENTE.valor: {
                    route = 'cliente';
                    break;
                }
                case _shared_model_enum_perfil__WEBPACK_IMPORTED_MODULE_0__["Perfil"].ADMIN.valor: {
                    route = 'administrador';
                    break;
                }
                default: {
                    this.showMessageService.showNotification('Por favor, faça login novamente');
                    this.authService.logout();
                    this.initCard();
                    break;
                }
            }
            this.route.navigate([route]);
        }
        this.initCard();
    };
    CadastroComponent.prototype.initCard = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');
        body.classList.add('off-canvas-sidebar');
        var card = document.getElementsByClassName('card')[0];
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            card.classList.remove('card-hidden');
        }, 700);
    };
    CadastroComponent.prototype.onSubmitCliente = function () {
        var _this = this;
        var _a = this.usuario, nome = _a.nome, sobreNome = _a.sobreNome, email = _a.email, senha = _a.senha, cpf_cnpj = _a.cpf_cnpj;
        this.spinner.show();
        this.authService.cadastrarCliente(nome, sobreNome, email, senha, cpf_cnpj).subscribe(function (result) {
            console.log(result);
            //this.route.navigate(['']).then(() => {
            _this.spinner.hide();
            _this.showMessageService.showNotification('Conta efetuada com sucesso.', 'success');
            _this.form.resetForm();
            //});
        }, function (err) {
            _this.spinner.hide();
            _this.showMessageService.showNotification(err.error.msg, 'danger');
            console.log(err);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('form', { static: false }),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"])
    ], CadastroComponent.prototype, "form", void 0);
    CadastroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-cadastro',
            template: __webpack_require__(/*! raw-loader!./cadastro.component.html */ "./node_modules/raw-loader/index.js!./src/app/_modules/auth/pages/cadastro/cadastro.component.html"),
            styles: [__webpack_require__(/*! ./cadastro.component.css */ "./src/app/_modules/auth/pages/cadastro/cadastro.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_shared_services_show_messages_service__WEBPACK_IMPORTED_MODULE_4__["ShowMessagesService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]])
    ], CadastroComponent);
    return CadastroComponent;
}());



/***/ }),

/***/ "./src/app/_modules/auth/pages/login/login.component.css":
/*!***************************************************************!*\
  !*** ./src/app/_modules/auth/pages/login/login.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tela-grande {\r\n  /*background-image: url('/assets/img/background.png');*/\r\n  height: 100vh;\r\n  background-size: cover;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  .tela-pequena {\r\n    background-color: #005c8a;\r\n    background-image: linear-gradient(#005c8a, #39739d) !important;\r\n  }\r\n}\r\n\r\n/*.button-box {\r\n  width: 220px;\r\n  margin: 35px auto;\r\n  position: relative;\r\n  box-shadow: 0 0 20px 9px #ff61241f;\r\n  border-radius: 30px;\r\n}*/\r\n\r\n.button-box {\r\n  width: 240px;\r\n  margin: 35px auto;\r\n  position: relative;\r\n  box-shadow: 0 0 20px 9px #8f0d0d80;\r\n  border-radius: 30px;\r\n}\r\n\r\n.toggle-btn {\r\n  padding: 10px 30px;\r\n  cursor: pointer;\r\n  background: transparent;\r\n  border: 0;\r\n  outline: none;\r\n  position: relative;\r\n}\r\n\r\n.active {\r\n  background: linear-gradient(to right, #cecbcc, #ffad06);\r\n  border-radius: 30px;\r\n  transition: 0.5s;\r\n  margin-right: 18px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX21vZHVsZXMvYXV0aC9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdURBQXVEO0VBQ3ZELGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRTtJQUNFLHlCQUF5QjtJQUN6Qiw4REFBOEQ7RUFDaEU7QUFDRjs7QUFFQTs7Ozs7O0VBTUU7O0FBRUY7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQ0FBa0M7RUFDbEMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsU0FBUztFQUNULGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSx1REFBdUQ7RUFDdkQsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9fbW9kdWxlcy9hdXRoL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVsYS1ncmFuZGUge1xyXG4gIC8qYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZy9iYWNrZ3JvdW5kLnBuZycpOyovXHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLnRlbGEtcGVxdWVuYSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1YzhhO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCMwMDVjOGEsICMzOTczOWQpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vKi5idXR0b24tYm94IHtcclxuICB3aWR0aDogMjIwcHg7XHJcbiAgbWFyZ2luOiAzNXB4IGF1dG87XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IDlweCAjZmY2MTI0MWY7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxufSovXHJcblxyXG4uYnV0dG9uLWJveCB7XHJcbiAgd2lkdGg6IDI0MHB4O1xyXG4gIG1hcmdpbjogMzVweCBhdXRvO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3gtc2hhZG93OiAwIDAgMjBweCA5cHggIzhmMGQwZDgwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbn1cclxuXHJcbi50b2dnbGUtYnRuIHtcclxuICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogMDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNjZWNiY2MsICNmZmFkMDYpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuICBtYXJnaW4tcmlnaHQ6IDE4cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/_modules/auth/pages/login/login.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/_modules/auth/pages/login/login.component.ts ***!
  \**************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _shared_model_enum_perfil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../_shared/model/enum/perfil */ "./src/app/_shared/model/enum/perfil.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/_modules/auth/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_show_messages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_shared/services/show-messages.service */ "./src/app/_shared/services/show-messages.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, route, showMessageService, spinner) {
        this.authService = authService;
        this.route = route;
        this.showMessageService = showMessageService;
        this.spinner = spinner;
        this.usuario = {
            email: null,
            senha: null
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        var route;
        var perfil = localStorage.getItem('perfil');
        if (perfil) {
            switch (perfil) {
                case _shared_model_enum_perfil__WEBPACK_IMPORTED_MODULE_0__["Perfil"].CLIENTE.valor: {
                    route = 'cliente';
                    break;
                }
                case _shared_model_enum_perfil__WEBPACK_IMPORTED_MODULE_0__["Perfil"].ADMIN.valor: {
                    route = 'administrador';
                    break;
                }
                default: {
                    this.showMessageService.showNotification('Por favor, faça login novamente');
                    this.authService.logout();
                    this.initCard();
                    break;
                }
            }
            this.route.navigate([route]);
        }
        this.initCard();
    };
    LoginComponent.prototype.initCard = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');
        body.classList.add('off-canvas-sidebar');
        var card = document.getElementsByClassName('card')[0];
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            card.classList.remove('card-hidden');
        }, 700);
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.spinner.show();
        this.authService.login(this.usuario.email, this.usuario.senha).subscribe(function (result) {
            var route;
            var perfil = _this.authService.getPerfilAtualId();
            switch (perfil) {
                case _shared_model_enum_perfil__WEBPACK_IMPORTED_MODULE_0__["Perfil"].CLIENTE.valor: {
                    route = 'cliente';
                    break;
                }
                case _shared_model_enum_perfil__WEBPACK_IMPORTED_MODULE_0__["Perfil"].ADMIN.valor: {
                    route = 'administrador';
                    break;
                }
            }
            _this.route.navigate([route]).then(function () {
                _this.spinner.hide();
            });
        }, function (err) {
            _this.spinner.hide();
            _this.showMessageService.showNotification(err.error.msg, 'danger');
            console.log(err);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/_modules/auth/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/_modules/auth/pages/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_shared_services_show_messages_service__WEBPACK_IMPORTED_MODULE_4__["ShowMessagesService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/_modules/auth/pages/redefinir-senha/redefinir-senha.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/_modules/auth/pages/redefinir-senha/redefinir-senha.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19tb2R1bGVzL2F1dGgvcGFnZXMvcmVkZWZpbmlyLXNlbmhhL3JlZGVmaW5pci1zZW5oYS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/_modules/auth/pages/redefinir-senha/redefinir-senha.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/_modules/auth/pages/redefinir-senha/redefinir-senha.component.ts ***!
  \**********************************************************************************/
/*! exports provided: RedefinirSenhaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedefinirSenhaComponent", function() { return RedefinirSenhaComponent; });
/* harmony import */ var src_app_shared_services_show_messages_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_shared/services/show-messages.service */ "./src/app/_shared/services/show-messages.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/_modules/auth/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RedefinirSenhaComponent = /** @class */ (function () {
    function RedefinirSenhaComponent(route, authService, showMessageService, router) {
        this.route = route;
        this.authService = authService;
        this.showMessageService = showMessageService;
        this.router = router;
    }
    RedefinirSenhaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.token = this.route.snapshot.queryParams["token"];
        this.authService.validarToken(this.token).subscribe(function () {
        }, function (err) {
            _this.showMessageService.showNotification(err.error.msg, 'danger');
            _this.router.navigate(['/login']);
        });
        this.initCard();
    };
    RedefinirSenhaComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.senha !== this.senhaRepetida) {
            alert('A senhas têm que ser iguais');
            return;
        }
        this.authService.mudarSenha(this.token, this.senha, this.senhaRepetida).subscribe(function () {
            _this.showMessageService.showNotification('Senha alterada com sucesso! Faça login');
            _this.router.navigate(['/login']);
        }, function (err) {
            _this.showMessageService.showNotification(err.error.msg, 'danger');
            console.log(err);
        });
    };
    RedefinirSenhaComponent.prototype.initCard = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');
        body.classList.add('off-canvas-sidebar');
        var card = document.getElementsByClassName('card')[0];
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            card.classList.remove('card-hidden');
        }, 700);
    };
    RedefinirSenhaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-redefinir-senha',
            template: __webpack_require__(/*! raw-loader!./redefinir-senha.component.html */ "./node_modules/raw-loader/index.js!./src/app/_modules/auth/pages/redefinir-senha/redefinir-senha.component.html"),
            styles: [__webpack_require__(/*! ./redefinir-senha.component.css */ "./src/app/_modules/auth/pages/redefinir-senha/redefinir-senha.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            src_app_shared_services_show_messages_service__WEBPACK_IMPORTED_MODULE_0__["ShowMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RedefinirSenhaComponent);
    return RedefinirSenhaComponent;
}());



/***/ }),

/***/ "./src/app/_modules/auth/pages/reset-password/reset-password.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/_modules/auth/pages/reset-password/reset-password.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19tb2R1bGVzL2F1dGgvcGFnZXMvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/_modules/auth/pages/reset-password/reset-password.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/_modules/auth/pages/reset-password/reset-password.component.ts ***!
  \********************************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_show_messages_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../_shared/services/show-messages.service */ "./src/app/_shared/services/show-messages.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/_modules/auth/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(authService, showMessageService, router) {
        this.authService = authService;
        this.showMessageService = showMessageService;
        this.router = router;
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        this.initCard();
    };
    ResetPasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        this.authService.enviarEmailDeRecuperacaoDeSenha(this.email).subscribe(function () {
            _this.showMessageService.showNotification('Verifique seu e-mail por favor para redefinir sua senha');
            _this.router.navigate(['/login']);
        }, function (err) {
            console.log(_this.email);
            _this.showMessageService.showNotification('Email não encontrado.', 'danger');
        });
    };
    ResetPasswordComponent.prototype.initCard = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');
        body.classList.add('off-canvas-sidebar');
        var card = document.getElementsByClassName('card')[0];
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            card.classList.remove('card-hidden');
        }, 700);
    };
    ResetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! raw-loader!./reset-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/_modules/auth/pages/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.css */ "./src/app/_modules/auth/pages/reset-password/reset-password.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _shared_services_show_messages_service__WEBPACK_IMPORTED_MODULE_1__["ShowMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ })

}]);
//# sourceMappingURL=_modules-auth-auth-module.js.map