(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('masterlib', ['exports', '@angular/core', '@angular/router'], factory) :
    (global = global || self, factory(global.masterlib = {}, global.ng.core, global.ng.router));
}(this, function (exports, core, router) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MasterlibService = /** @class */ (function () {
        function MasterlibService() {
        }
        MasterlibService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        MasterlibService.ctorParameters = function () { return []; };
        /** @nocollapse */ MasterlibService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function MasterlibService_Factory() { return new MasterlibService(); }, token: MasterlibService, providedIn: "root" });
        return MasterlibService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MasterlibComponent = /** @class */ (function () {
        function MasterlibComponent() {
        }
        /**
         * @return {?}
         */
        MasterlibComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        MasterlibComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-masterlib',
                        template: "\n    <p>\n      masterlib works!\n      and online working both application\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        MasterlibComponent.ctorParameters = function () { return []; };
        return MasterlibComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var routes = [
        {
            path: '',
            redirectTo: 'master',
            pathMatch: 'full'
        }, {
            path: 'master',
            component: MasterlibComponent
        },
    ];
    var MasterlibModule = /** @class */ (function () {
        function MasterlibModule() {
        }
        /**
         * @return {?}
         */
        MasterlibModule.forRoot = /**
         * @return {?}
         */
        function () {
            return {
                ngModule: MasterlibModule,
                providers: []
            };
        };
        MasterlibModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [MasterlibComponent],
                        imports: [router.RouterModule.forChild(routes)
                        ],
                        exports: [MasterlibComponent]
                    },] }
        ];
        return MasterlibModule;
    }());

    exports.MasterlibComponent = MasterlibComponent;
    exports.MasterlibModule = MasterlibModule;
    exports.MasterlibService = MasterlibService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=masterlib.umd.js.map
