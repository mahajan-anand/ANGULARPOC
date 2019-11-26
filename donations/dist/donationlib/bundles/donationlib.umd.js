(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material'), require('@angular/router'), require('@angular/material/radio'), require('@angular/material/menu'), require('@angular/material/table'), require('@angular/material/dialog'), require('@angular/material/snack-bar'), require('@angular/material/sort'), require('@angular/material/badge'), require('@angular/material/form-field'), require('@angular/material/button-toggle')) :
    typeof define === 'function' && define.amd ? define('donationlib', ['exports', '@angular/core', '@angular/material', '@angular/router', '@angular/material/radio', '@angular/material/menu', '@angular/material/table', '@angular/material/dialog', '@angular/material/snack-bar', '@angular/material/sort', '@angular/material/badge', '@angular/material/form-field', '@angular/material/button-toggle'], factory) :
    (global = global || self, factory(global.donationlib = {}, global.ng.core, global.ng.material, global.ng.router, global.ng.material.radio, global.ng.material.menu, global.ng.material.table, global.ng.material.dialog, global.ng.material['snack-bar'], global.ng.material.sort, global.ng.material.badge, global.ng.material['form-field'], global.ng.material['button-toggle']));
}(this, function (exports, core, material, router, radio, menu, table, dialog, snackBar, sort, badge, formField, buttonToggle) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DonationlibService = /** @class */ (function () {
        function DonationlibService() {
        }
        DonationlibService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DonationlibService.ctorParameters = function () { return []; };
        /** @nocollapse */ DonationlibService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DonationlibService_Factory() { return new DonationlibService(); }, token: DonationlibService, providedIn: "root" });
        return DonationlibService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DonationlibComponent = /** @class */ (function () {
        function DonationlibComponent(router) {
            this.router = router;
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.columnNames = [{
                    id: "position",
                    value: "No."
                }, {
                    id: "name",
                    value: "Name"
                },
                {
                    id: "weight",
                    value: "Weight"
                },
                {
                    id: "symbol",
                    value: "Symbol"
                }];
        }
        /**
         * @return {?}
         */
        DonationlibComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.displayedColumns = this.columnNames.map((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.id; }));
            this.createTable();
        };
        /**
         * @return {?}
         */
        DonationlibComponent.prototype.navigate = /**
         * @return {?}
         */
        function () {
            this.router.navigateByUrl('donations/categorize');
        };
        /**
         * @return {?}
         */
        DonationlibComponent.prototype.createTable = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var tableArr = [{ position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
                { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
                { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
                { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
                { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
                { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' }
            ];
            this.dataSource = new material.MatTableDataSource(tableArr);
        };
        DonationlibComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-donationlib',
                        template: "<table mat-table></table>\r\n<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n\r\n    <!--- Note that these columns can be defined in any order.\r\n          The actual rendered columns are set as a property on the row definition\" -->\r\n\r\n    <!-- Position Column -->\r\n    <ng-container matColumnDef=\"position\">\r\n        <th mat-header-cell *matHeaderCellDef> No. </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"name\">\r\n        <th mat-header-cell *matHeaderCellDef> Name </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Weight Column -->\r\n    <ng-container matColumnDef=\"weight\">\r\n        <th mat-header-cell *matHeaderCellDef> Weight </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Symbol Column -->\r\n    <ng-container matColumnDef=\"symbol\">\r\n        <th mat-header-cell *matHeaderCellDef> Symbol </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n<br>\r\n\r\n<button (click)=\"navigate()\"> Categorize</button>"
                    }] }
        ];
        /** @nocollapse */
        DonationlibComponent.ctorParameters = function () { return [
            { type: router.Router }
        ]; };
        return DonationlibComponent;
    }());
    if (false) {
        /** @type {?} */
        DonationlibComponent.prototype.displayedColumns;
        /** @type {?} */
        DonationlibComponent.prototype.dataSource;
        /** @type {?} */
        DonationlibComponent.prototype.columnNames;
        /**
         * @type {?}
         * @private
         */
        DonationlibComponent.prototype.router;
    }
    /**
     * @record
     */
    function Element() { }
    if (false) {
        /** @type {?} */
        Element.prototype.position;
        /** @type {?} */
        Element.prototype.name;
        /** @type {?} */
        Element.prototype.weight;
        /** @type {?} */
        Element.prototype.symbol;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CategorizeComponent = /** @class */ (function () {
        function CategorizeComponent(router) {
            this.router = router;
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.columnNames = [{
                    id: "position",
                    value: "No."
                }, {
                    id: "name",
                    value: "Name"
                },
                {
                    id: "weight",
                    value: "Weight"
                },
                {
                    id: "symbol",
                    value: "Symbol"
                }];
        }
        /**
         * @return {?}
         */
        CategorizeComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.displayedColumns = this.columnNames.map((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.id; }));
            this.createTable();
        };
        /**
         * @return {?}
         */
        CategorizeComponent.prototype.createTable = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var tableArr = [{ position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
                { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
                { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
                { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
                { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
                { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' }
            ];
            this.dataSource = new material.MatTableDataSource(tableArr);
        };
        CategorizeComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-categorizelib',
                        template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n\r\n    <!--- Note that these columns can be defined in any order.\r\n          The actual rendered columns are set as a property on the row definition\" -->\r\n  \r\n    <!-- Position Column -->\r\n    <ng-container matColumnDef=\"position\">\r\n      <th mat-header-cell *matHeaderCellDef> No. </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n    </ng-container>\r\n  \r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"name\">\r\n      <th mat-header-cell *matHeaderCellDef> Name </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n    </ng-container>\r\n  \r\n    <!-- Weight Column -->\r\n    <ng-container matColumnDef=\"weight\">\r\n      <th mat-header-cell *matHeaderCellDef> Weight </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\r\n    </ng-container>\r\n  \r\n    <!-- Symbol Column -->\r\n    <ng-container matColumnDef=\"symbol\">\r\n      <th mat-header-cell *matHeaderCellDef> Symbol </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\r\n    </ng-container>\r\n  \r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  </table>\r\n  "
                    }] }
        ];
        /** @nocollapse */
        CategorizeComponent.ctorParameters = function () { return [
            { type: router.Router }
        ]; };
        return CategorizeComponent;
    }());
    if (false) {
        /** @type {?} */
        CategorizeComponent.prototype.displayedColumns;
        /** @type {?} */
        CategorizeComponent.prototype.dataSource;
        /** @type {?} */
        CategorizeComponent.prototype.columnNames;
        /**
         * @type {?}
         * @private
         */
        CategorizeComponent.prototype.router;
    }
    /**
     * @record
     */
    function Element$1() { }
    if (false) {
        /** @type {?} */
        Element$1.prototype.position;
        /** @type {?} */
        Element$1.prototype.name;
        /** @type {?} */
        Element$1.prototype.weight;
        /** @type {?} */
        Element$1.prototype.symbol;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var routes = [
        {
            path: '',
            redirectTo: 'donation',
            pathMatch: 'full'
        }, {
            path: 'donation',
            component: DonationlibComponent
        },
        {
            path: 'categorize',
            component: CategorizeComponent
        }
    ];
    var DonationlibModule = /** @class */ (function () {
        function DonationlibModule() {
        }
        /**
         * @return {?}
         */
        DonationlibModule.forRoot = /**
         * @return {?}
         */
        function () {
            return {
                ngModule: DonationlibModule,
                providers: []
            };
        };
        DonationlibModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [DonationlibComponent, CategorizeComponent],
                        imports: [material.MatButtonModule,
                            badge.MatBadgeModule,
                            material.MatInputModule,
                            material.MatCardModule,
                            material.MatSelectModule,
                            formField.MatFormFieldModule,
                            material.MatDatepickerModule, material.MatExpansionModule,
                            material.MatNativeDateModule, material.MatTooltipModule, material.MatProgressSpinnerModule,
                            material.MatSliderModule, material.MatTabsModule, material.MatChipsModule, material.MatSlideToggleModule,
                            material.MatSidenavModule, material.MatIconModule, material.MatListModule, material.MatToolbarModule, radio.MatRadioModule,
                            menu.MatMenuModule, table.MatTableModule, material.MatPaginatorModule, sort.MatSortModule, material.MatCheckboxModule, snackBar.MatSnackBarModule, dialog.MatDialogModule,
                            buttonToggle.MatButtonToggleModule,
                            material.MatStepperModule, router.RouterModule.forChild(routes)
                        ],
                        exports: [DonationlibComponent, CategorizeComponent]
                    },] }
        ];
        return DonationlibModule;
    }());

    exports.DonationlibComponent = DonationlibComponent;
    exports.DonationlibModule = DonationlibModule;
    exports.DonationlibService = DonationlibService;
    exports.ɵa = CategorizeComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=donationlib.umd.js.map
