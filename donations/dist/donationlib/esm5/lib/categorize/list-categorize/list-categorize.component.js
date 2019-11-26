/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
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
        this.dataSource = new MatTableDataSource(tableArr);
    };
    CategorizeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-categorizelib',
                    template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n\r\n    <!--- Note that these columns can be defined in any order.\r\n          The actual rendered columns are set as a property on the row definition\" -->\r\n  \r\n    <!-- Position Column -->\r\n    <ng-container matColumnDef=\"position\">\r\n      <th mat-header-cell *matHeaderCellDef> No. </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n    </ng-container>\r\n  \r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"name\">\r\n      <th mat-header-cell *matHeaderCellDef> Name </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n    </ng-container>\r\n  \r\n    <!-- Weight Column -->\r\n    <ng-container matColumnDef=\"weight\">\r\n      <th mat-header-cell *matHeaderCellDef> Weight </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\r\n    </ng-container>\r\n  \r\n    <!-- Symbol Column -->\r\n    <ng-container matColumnDef=\"symbol\">\r\n      <th mat-header-cell *matHeaderCellDef> Symbol </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\r\n    </ng-container>\r\n  \r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  </table>\r\n  "
                }] }
    ];
    /** @nocollapse */
    CategorizeComponent.ctorParameters = function () { return [
        { type: Router }
    ]; };
    return CategorizeComponent;
}());
export { CategorizeComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1jYXRlZ29yaXplLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RvbmF0aW9ubGliLyIsInNvdXJjZXMiOlsibGliL2NhdGVnb3JpemUvbGlzdC1jYXRlZ29yaXplL2xpc3QtY2F0ZWdvcml6ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGtCQUFrQixFQUFXLE1BQU0sbUJBQW1CLENBQUM7QUFDaEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpDO0lBeUJJLDZCQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQWxCbEMscUJBQWdCLEdBQWEsQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUV0RSxnQkFBVyxHQUFHLENBQUM7Z0JBQ1gsRUFBRSxFQUFFLFVBQVU7Z0JBQ2QsS0FBSyxFQUFFLEtBQUs7YUFFZixFQUFFO2dCQUNDLEVBQUUsRUFBRSxNQUFNO2dCQUNWLEtBQUssRUFBRSxNQUFNO2FBQ2hCO1lBQ0Q7Z0JBQ0ksRUFBRSxFQUFFLFFBQVE7Z0JBQ1osS0FBSyxFQUFFLFFBQVE7YUFDbEI7WUFDRDtnQkFDSSxFQUFFLEVBQUUsUUFBUTtnQkFDWixLQUFLLEVBQUUsUUFBUTthQUNsQixDQUFDLENBQUM7SUFDbUMsQ0FBQzs7OztJQUV2QyxzQ0FBUTs7O0lBQVI7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsRUFBRSxFQUFKLENBQUksRUFBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQseUNBQVc7OztJQUFYOztZQUNRLFFBQVEsR0FBYyxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUN6RixFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDN0QsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBQzdELEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUNoRSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUU7WUFDM0QsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFO1NBQzVEO1FBQ0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7O2dCQXpDSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsbzJDQUE2QztpQkFFaEQ7Ozs7Z0JBTlEsTUFBTTs7SUE0Q2YsMEJBQUM7Q0FBQSxBQTFDRCxJQTBDQztTQXBDWSxtQkFBbUI7OztJQUM1QiwrQ0FBc0U7O0lBQ3RFLHlDQUFnQjs7SUFDaEIsMENBZUc7Ozs7O0lBQ1MscUNBQXNCOzs7OztBQW1CdEMsNkJBS0M7OztJQUpHLDJCQUFpQjs7SUFDakIsdUJBQWE7O0lBQ2IseUJBQWU7O0lBQ2YseUJBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXRUYWJsZURhdGFTb3VyY2UsIE1hdFNvcnQgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbGliLWNhdGVnb3JpemVsaWInLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdsaXN0LWNhdGVnb3JpemUuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVzOiBbXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENhdGVnb3JpemVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbJ3Bvc2l0aW9uJywgJ25hbWUnLCAnd2VpZ2h0JywgJ3N5bWJvbCddO1xyXG4gICAgZGF0YVNvdXJjZTogYW55O1xyXG4gICAgY29sdW1uTmFtZXMgPSBbe1xyXG4gICAgICAgIGlkOiBcInBvc2l0aW9uXCIsXHJcbiAgICAgICAgdmFsdWU6IFwiTm8uXCJcclxuXHJcbiAgICB9LCB7XHJcbiAgICAgICAgaWQ6IFwibmFtZVwiLFxyXG4gICAgICAgIHZhbHVlOiBcIk5hbWVcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJ3ZWlnaHRcIixcclxuICAgICAgICB2YWx1ZTogXCJXZWlnaHRcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJzeW1ib2xcIixcclxuICAgICAgICB2YWx1ZTogXCJTeW1ib2xcIlxyXG4gICAgfV07XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMgPSB0aGlzLmNvbHVtbk5hbWVzLm1hcCh4ID0+IHguaWQpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlVGFibGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVUYWJsZSgpIHtcclxuICAgICAgICBsZXQgdGFibGVBcnI6IEVsZW1lbnRbXSA9IFt7IHBvc2l0aW9uOiAxLCBuYW1lOiAnSHlkcm9nZW4nLCB3ZWlnaHQ6IDEuMDA3OSwgc3ltYm9sOiAnSCcgfSxcclxuICAgICAgICB7IHBvc2l0aW9uOiAyLCBuYW1lOiAnSGVsaXVtJywgd2VpZ2h0OiA0LjAwMjYsIHN5bWJvbDogJ0hlJyB9LFxyXG4gICAgICAgIHsgcG9zaXRpb246IDMsIG5hbWU6ICdMaXRoaXVtJywgd2VpZ2h0OiA2Ljk0MSwgc3ltYm9sOiAnTGknIH0sXHJcbiAgICAgICAgeyBwb3NpdGlvbjogNCwgbmFtZTogJ0JlcnlsbGl1bScsIHdlaWdodDogOS4wMTIyLCBzeW1ib2w6ICdCZScgfSxcclxuICAgICAgICB7IHBvc2l0aW9uOiA1LCBuYW1lOiAnQm9yb24nLCB3ZWlnaHQ6IDEwLjgxMSwgc3ltYm9sOiAnQicgfSxcclxuICAgICAgICB7IHBvc2l0aW9uOiA2LCBuYW1lOiAnQ2FyYm9uJywgd2VpZ2h0OiAxMi4wMTA3LCBzeW1ib2w6ICdDJyB9XHJcbiAgICAgICAgXTtcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHRhYmxlQXJyKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFbGVtZW50IHtcclxuICAgIHBvc2l0aW9uOiBudW1iZXIsXHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICB3ZWlnaHQ6IG51bWJlcixcclxuICAgIHN5bWJvbDogc3RyaW5nXHJcbn1cclxuIl19