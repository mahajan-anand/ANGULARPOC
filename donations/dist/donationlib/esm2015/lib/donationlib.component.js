/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
export class DonationlibComponent {
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
export function Element() { }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9uYXRpb25saWIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZG9uYXRpb25saWIvIiwic291cmNlcyI6WyJsaWIvZG9uYXRpb25saWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsa0JBQWtCLEVBQVcsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFNekMsTUFBTSxPQUFPLG9CQUFvQjs7OztJQW1CL0IsWUFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFsQmxDLHFCQUFnQixHQUFhLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFdEUsZ0JBQVcsR0FBRyxDQUFDO2dCQUNiLEVBQUUsRUFBRSxVQUFVO2dCQUNkLEtBQUssRUFBRSxLQUFLO2FBRWIsRUFBRTtnQkFDRCxFQUFFLEVBQUUsTUFBTTtnQkFDVixLQUFLLEVBQUUsTUFBTTthQUNkO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLFFBQVE7Z0JBQ1osS0FBSyxFQUFFLFFBQVE7YUFDaEI7WUFDRDtnQkFDRSxFQUFFLEVBQUUsUUFBUTtnQkFDWixLQUFLLEVBQUUsUUFBUTthQUNoQixDQUFDLENBQUM7SUFDbUMsQ0FBQzs7OztJQUV2QyxRQUFRO1FBQ04sSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7O0lBQ0QsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDcEQsQ0FBQzs7OztJQUNELFdBQVc7O1lBQ0wsUUFBUSxHQUFjLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFO1lBQ3pGLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUM3RCxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDN0QsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBQ2hFLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUMzRCxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUU7U0FDNUQ7UUFDRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7O1lBMUNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixrOENBQXlDO2FBRTFDOzs7O1lBTFEsTUFBTTs7OztJQU9iLGdEQUFzRTs7SUFDdEUsMENBQWdCOztJQUNoQiwyQ0FlRzs7Ozs7SUFDUyxzQ0FBc0I7Ozs7O0FBcUJwQyw2QkFLQzs7O0lBSkMsMkJBQWlCOztJQUNqQix1QkFBYTs7SUFDYix5QkFBZTs7SUFDZix5QkFBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdFRhYmxlRGF0YVNvdXJjZSwgTWF0U29ydCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItZG9uYXRpb25saWInLFxuICB0ZW1wbGF0ZVVybDogJ2RvbmF0aW9ubGliLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBEb25hdGlvbmxpYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdID0gWydwb3NpdGlvbicsICduYW1lJywgJ3dlaWdodCcsICdzeW1ib2wnXTtcbiAgZGF0YVNvdXJjZTogYW55O1xuICBjb2x1bW5OYW1lcyA9IFt7XG4gICAgaWQ6IFwicG9zaXRpb25cIixcbiAgICB2YWx1ZTogXCJOby5cIlxuXG4gIH0sIHtcbiAgICBpZDogXCJuYW1lXCIsXG4gICAgdmFsdWU6IFwiTmFtZVwiXG4gIH0sXG4gIHtcbiAgICBpZDogXCJ3ZWlnaHRcIixcbiAgICB2YWx1ZTogXCJXZWlnaHRcIlxuICB9LFxuICB7XG4gICAgaWQ6IFwic3ltYm9sXCIsXG4gICAgdmFsdWU6IFwiU3ltYm9sXCJcbiAgfV07XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucyA9IHRoaXMuY29sdW1uTmFtZXMubWFwKHggPT4geC5pZCk7XG4gICAgdGhpcy5jcmVhdGVUYWJsZSgpO1xuICB9XG4gIG5hdmlnYXRlKCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJ2RvbmF0aW9ucy9jYXRlZ29yaXplJyk7XG4gIH1cbiAgY3JlYXRlVGFibGUoKSB7XG4gICAgbGV0IHRhYmxlQXJyOiBFbGVtZW50W10gPSBbeyBwb3NpdGlvbjogMSwgbmFtZTogJ0h5ZHJvZ2VuJywgd2VpZ2h0OiAxLjAwNzksIHN5bWJvbDogJ0gnIH0sXG4gICAgeyBwb3NpdGlvbjogMiwgbmFtZTogJ0hlbGl1bScsIHdlaWdodDogNC4wMDI2LCBzeW1ib2w6ICdIZScgfSxcbiAgICB7IHBvc2l0aW9uOiAzLCBuYW1lOiAnTGl0aGl1bScsIHdlaWdodDogNi45NDEsIHN5bWJvbDogJ0xpJyB9LFxuICAgIHsgcG9zaXRpb246IDQsIG5hbWU6ICdCZXJ5bGxpdW0nLCB3ZWlnaHQ6IDkuMDEyMiwgc3ltYm9sOiAnQmUnIH0sXG4gICAgeyBwb3NpdGlvbjogNSwgbmFtZTogJ0Jvcm9uJywgd2VpZ2h0OiAxMC44MTEsIHN5bWJvbDogJ0InIH0sXG4gICAgeyBwb3NpdGlvbjogNiwgbmFtZTogJ0NhcmJvbicsIHdlaWdodDogMTIuMDEwNywgc3ltYm9sOiAnQycgfVxuICAgIF07XG4gICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZSh0YWJsZUFycik7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBFbGVtZW50IHtcbiAgcG9zaXRpb246IG51bWJlcixcbiAgbmFtZTogc3RyaW5nLFxuICB3ZWlnaHQ6IG51bWJlcixcbiAgc3ltYm9sOiBzdHJpbmdcbn1cbiJdfQ==