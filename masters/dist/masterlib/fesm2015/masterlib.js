import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MasterlibService {
    constructor() { }
}
MasterlibService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
MasterlibService.ctorParameters = () => [];
/** @nocollapse */ MasterlibService.ngInjectableDef = ɵɵdefineInjectable({ factory: function MasterlibService_Factory() { return new MasterlibService(); }, token: MasterlibService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MasterlibComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
MasterlibComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-masterlib',
                template: `
    <p>
      masterlib works!
      and online working both application
    </p>
  `
            }] }
];
/** @nocollapse */
MasterlibComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const routes = [
    {
        path: '',
        redirectTo: 'master',
        pathMatch: 'full'
    }, {
        path: 'master',
        component: MasterlibComponent
    },
];
class MasterlibModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: MasterlibModule,
            providers: []
        };
    }
}
MasterlibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [MasterlibComponent],
                imports: [RouterModule.forChild(routes)
                ],
                exports: [MasterlibComponent]
            },] }
];

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
