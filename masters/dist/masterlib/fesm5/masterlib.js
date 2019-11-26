import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MasterlibService = /** @class */ (function () {
    function MasterlibService() {
    }
    MasterlibService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    MasterlibService.ctorParameters = function () { return []; };
    /** @nocollapse */ MasterlibService.ngInjectableDef = ɵɵdefineInjectable({ factory: function MasterlibService_Factory() { return new MasterlibService(); }, token: MasterlibService, providedIn: "root" });
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
        { type: Component, args: [{
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
        { type: NgModule, args: [{
                    declarations: [MasterlibComponent],
                    imports: [RouterModule.forChild(routes)
                    ],
                    exports: [MasterlibComponent]
                },] }
    ];
    return MasterlibModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { MasterlibComponent, MasterlibModule, MasterlibService };
//# sourceMappingURL=masterlib.js.map
