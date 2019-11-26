import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';
import { MatTableDataSource, MatButtonModule, MatInputModule, MatCardModule, MatSelectModule, MatDatepickerModule, MatExpansionModule, MatNativeDateModule, MatTooltipModule, MatProgressSpinnerModule, MatSliderModule, MatTabsModule, MatChipsModule, MatSlideToggleModule, MatSidenavModule, MatIconModule, MatListModule, MatToolbarModule, MatPaginatorModule, MatCheckboxModule, MatStepperModule } from '@angular/material';
import { Router, RouterModule } from '@angular/router';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DonationlibService {
    constructor() { }
}
DonationlibService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DonationlibService.ctorParameters = () => [];
/** @nocollapse */ DonationlibService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DonationlibService_Factory() { return new DonationlibService(); }, token: DonationlibService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DonationlibComponent {
    /**
     * @param {?} router
     */
    constructor(router) {
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
    ngOnInit() {
        this.displayedColumns = this.columnNames.map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.id));
        this.createTable();
    }
    /**
     * @return {?}
     */
    navigate() {
        this.router.navigateByUrl('donations/categorize');
    }
    /**
     * @return {?}
     */
    createTable() {
        /** @type {?} */
        let tableArr = [{ position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
            { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
            { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
            { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
            { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
            { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' }
        ];
        this.dataSource = new MatTableDataSource(tableArr);
    }
}
DonationlibComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-donationlib',
                template: "<table mat-table></table>\r\n<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n\r\n    <!--- Note that these columns can be defined in any order.\r\n          The actual rendered columns are set as a property on the row definition\" -->\r\n\r\n    <!-- Position Column -->\r\n    <ng-container matColumnDef=\"position\">\r\n        <th mat-header-cell *matHeaderCellDef> No. </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"name\">\r\n        <th mat-header-cell *matHeaderCellDef> Name </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Weight Column -->\r\n    <ng-container matColumnDef=\"weight\">\r\n        <th mat-header-cell *matHeaderCellDef> Weight </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Symbol Column -->\r\n    <ng-container matColumnDef=\"symbol\">\r\n        <th mat-header-cell *matHeaderCellDef> Symbol </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n<br>\r\n\r\n<button (click)=\"navigate()\"> Categorize</button>"
            }] }
];
/** @nocollapse */
DonationlibComponent.ctorParameters = () => [
    { type: Router }
];
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
class CategorizeComponent {
    /**
     * @param {?} router
     */
    constructor(router) {
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
    ngOnInit() {
        this.displayedColumns = this.columnNames.map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.id));
        this.createTable();
    }
    /**
     * @return {?}
     */
    createTable() {
        /** @type {?} */
        let tableArr = [{ position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
            { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
            { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
            { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
            { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
            { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' }
        ];
        this.dataSource = new MatTableDataSource(tableArr);
    }
}
CategorizeComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-categorizelib',
                template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n\r\n    <!--- Note that these columns can be defined in any order.\r\n          The actual rendered columns are set as a property on the row definition\" -->\r\n  \r\n    <!-- Position Column -->\r\n    <ng-container matColumnDef=\"position\">\r\n      <th mat-header-cell *matHeaderCellDef> No. </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n    </ng-container>\r\n  \r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"name\">\r\n      <th mat-header-cell *matHeaderCellDef> Name </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n    </ng-container>\r\n  \r\n    <!-- Weight Column -->\r\n    <ng-container matColumnDef=\"weight\">\r\n      <th mat-header-cell *matHeaderCellDef> Weight </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\r\n    </ng-container>\r\n  \r\n    <!-- Symbol Column -->\r\n    <ng-container matColumnDef=\"symbol\">\r\n      <th mat-header-cell *matHeaderCellDef> Symbol </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\r\n    </ng-container>\r\n  \r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  </table>\r\n  "
            }] }
];
/** @nocollapse */
CategorizeComponent.ctorParameters = () => [
    { type: Router }
];
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
const routes = [
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
class DonationlibModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: DonationlibModule,
            providers: []
        };
    }
}
DonationlibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DonationlibComponent, CategorizeComponent],
                imports: [MatButtonModule,
                    MatBadgeModule,
                    MatInputModule,
                    MatCardModule,
                    MatSelectModule,
                    MatFormFieldModule,
                    MatDatepickerModule, MatExpansionModule,
                    MatNativeDateModule, MatTooltipModule, MatProgressSpinnerModule,
                    MatSliderModule, MatTabsModule, MatChipsModule, MatSlideToggleModule,
                    MatSidenavModule, MatIconModule, MatListModule, MatToolbarModule, MatRadioModule,
                    MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule, MatCheckboxModule, MatSnackBarModule, MatDialogModule,
                    MatButtonToggleModule,
                    MatStepperModule, RouterModule.forChild(routes)
                ],
                exports: [DonationlibComponent, CategorizeComponent]
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

export { DonationlibComponent, DonationlibModule, DonationlibService, CategorizeComponent as ɵa };
//# sourceMappingURL=donationlib.js.map
