/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
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
        this.dataSource = new MatTableDataSource(tableArr);
    };
    DonationlibComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-donationlib',
                    template: "<table mat-table></table>\r\n<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n\r\n    <!--- Note that these columns can be defined in any order.\r\n          The actual rendered columns are set as a property on the row definition\" -->\r\n\r\n    <!-- Position Column -->\r\n    <ng-container matColumnDef=\"position\">\r\n        <th mat-header-cell *matHeaderCellDef> No. </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"name\">\r\n        <th mat-header-cell *matHeaderCellDef> Name </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Weight Column -->\r\n    <ng-container matColumnDef=\"weight\">\r\n        <th mat-header-cell *matHeaderCellDef> Weight </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Symbol Column -->\r\n    <ng-container matColumnDef=\"symbol\">\r\n        <th mat-header-cell *matHeaderCellDef> Symbol </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n<br>\r\n\r\n<button (click)=\"navigate()\"> Categorize</button>"
                }] }
    ];
    /** @nocollapse */
    DonationlibComponent.ctorParameters = function () { return [
        { type: Router }
    ]; };
    return DonationlibComponent;
}());
export { DonationlibComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9uYXRpb25saWIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZG9uYXRpb25saWIvIiwic291cmNlcyI6WyJsaWIvZG9uYXRpb25saWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsa0JBQWtCLEVBQVcsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekM7SUF3QkUsOEJBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBbEJsQyxxQkFBZ0IsR0FBYSxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRXRFLGdCQUFXLEdBQUcsQ0FBQztnQkFDYixFQUFFLEVBQUUsVUFBVTtnQkFDZCxLQUFLLEVBQUUsS0FBSzthQUViLEVBQUU7Z0JBQ0QsRUFBRSxFQUFFLE1BQU07Z0JBQ1YsS0FBSyxFQUFFLE1BQU07YUFDZDtZQUNEO2dCQUNFLEVBQUUsRUFBRSxRQUFRO2dCQUNaLEtBQUssRUFBRSxRQUFRO2FBQ2hCO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLFFBQVE7Z0JBQ1osS0FBSyxFQUFFLFFBQVE7YUFDaEIsQ0FBQyxDQUFDO0lBQ21DLENBQUM7Ozs7SUFFdkMsdUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRzs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEVBQUUsRUFBSixDQUFJLEVBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7OztJQUNELHVDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDcEQsQ0FBQzs7OztJQUNELDBDQUFXOzs7SUFBWDs7WUFDTSxRQUFRLEdBQWMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUU7WUFDekYsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBQzdELEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUM3RCxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDaEUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFO1lBQzNELEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtTQUM1RDtRQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyRCxDQUFDOztnQkExQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLGs4Q0FBeUM7aUJBRTFDOzs7O2dCQUxRLE1BQU07O0lBNENmLDJCQUFDO0NBQUEsQUEzQ0QsSUEyQ0M7U0F0Q1ksb0JBQW9COzs7SUFDL0IsZ0RBQXNFOztJQUN0RSwwQ0FBZ0I7O0lBQ2hCLDJDQWVHOzs7OztJQUNTLHNDQUFzQjs7Ozs7QUFxQnBDLDZCQUtDOzs7SUFKQywyQkFBaUI7O0lBQ2pCLHVCQUFhOztJQUNiLHlCQUFlOztJQUNmLHlCQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0VGFibGVEYXRhU291cmNlLCBNYXRTb3J0IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1kb25hdGlvbmxpYicsXG4gIHRlbXBsYXRlVXJsOiAnZG9uYXRpb25saWIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIERvbmF0aW9ubGliQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbJ3Bvc2l0aW9uJywgJ25hbWUnLCAnd2VpZ2h0JywgJ3N5bWJvbCddO1xuICBkYXRhU291cmNlOiBhbnk7XG4gIGNvbHVtbk5hbWVzID0gW3tcbiAgICBpZDogXCJwb3NpdGlvblwiLFxuICAgIHZhbHVlOiBcIk5vLlwiXG5cbiAgfSwge1xuICAgIGlkOiBcIm5hbWVcIixcbiAgICB2YWx1ZTogXCJOYW1lXCJcbiAgfSxcbiAge1xuICAgIGlkOiBcIndlaWdodFwiLFxuICAgIHZhbHVlOiBcIldlaWdodFwiXG4gIH0sXG4gIHtcbiAgICBpZDogXCJzeW1ib2xcIixcbiAgICB2YWx1ZTogXCJTeW1ib2xcIlxuICB9XTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zID0gdGhpcy5jb2x1bW5OYW1lcy5tYXAoeCA9PiB4LmlkKTtcbiAgICB0aGlzLmNyZWF0ZVRhYmxlKCk7XG4gIH1cbiAgbmF2aWdhdGUoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnZG9uYXRpb25zL2NhdGVnb3JpemUnKTtcbiAgfVxuICBjcmVhdGVUYWJsZSgpIHtcbiAgICBsZXQgdGFibGVBcnI6IEVsZW1lbnRbXSA9IFt7IHBvc2l0aW9uOiAxLCBuYW1lOiAnSHlkcm9nZW4nLCB3ZWlnaHQ6IDEuMDA3OSwgc3ltYm9sOiAnSCcgfSxcbiAgICB7IHBvc2l0aW9uOiAyLCBuYW1lOiAnSGVsaXVtJywgd2VpZ2h0OiA0LjAwMjYsIHN5bWJvbDogJ0hlJyB9LFxuICAgIHsgcG9zaXRpb246IDMsIG5hbWU6ICdMaXRoaXVtJywgd2VpZ2h0OiA2Ljk0MSwgc3ltYm9sOiAnTGknIH0sXG4gICAgeyBwb3NpdGlvbjogNCwgbmFtZTogJ0JlcnlsbGl1bScsIHdlaWdodDogOS4wMTIyLCBzeW1ib2w6ICdCZScgfSxcbiAgICB7IHBvc2l0aW9uOiA1LCBuYW1lOiAnQm9yb24nLCB3ZWlnaHQ6IDEwLjgxMSwgc3ltYm9sOiAnQicgfSxcbiAgICB7IHBvc2l0aW9uOiA2LCBuYW1lOiAnQ2FyYm9uJywgd2VpZ2h0OiAxMi4wMTA3LCBzeW1ib2w6ICdDJyB9XG4gICAgXTtcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHRhYmxlQXJyKTtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVsZW1lbnQge1xuICBwb3NpdGlvbjogbnVtYmVyLFxuICBuYW1lOiBzdHJpbmcsXG4gIHdlaWdodDogbnVtYmVyLFxuICBzeW1ib2w6IHN0cmluZ1xufVxuIl19