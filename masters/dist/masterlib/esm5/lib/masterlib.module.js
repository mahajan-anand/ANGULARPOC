/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { MasterlibComponent } from './masterlib.component';
import { RouterModule } from '@angular/router';
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
export { MasterlibModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzdGVybGliLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hc3RlcmxpYi8iLCJzb3VyY2VzIjpbImxpYi9tYXN0ZXJsaWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFzQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7O0lBRWpELE1BQU0sR0FBVztJQUNyQjtRQUNFLElBQUksRUFBRSxFQUFFO1FBQ1IsVUFBVSxFQUFFLFFBQVE7UUFDcEIsU0FBUyxFQUFFLE1BQU07S0FDbEIsRUFBRTtRQUNELElBQUksRUFBRSxRQUFRO1FBQ2QsU0FBUyxFQUFFLGtCQUFrQjtLQUM5QjtDQUNGO0FBRUQ7SUFBQTtJQWNDLENBQUM7Ozs7SUFOTyx1QkFBTzs7O0lBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLGVBQWU7WUFDekIsU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFDO0lBQ0osQ0FBQzs7Z0JBYkYsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLGtCQUFrQixDQUFDO29CQUNsQyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztxQkFDdEM7b0JBQ0QsT0FBTyxFQUFFLENBQUMsa0JBQWtCLENBQUM7aUJBQzlCOztJQVNBLHNCQUFDO0NBQUEsQUFkRixJQWNFO1NBUlcsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hc3RlcmxpYkNvbXBvbmVudCB9IGZyb20gJy4vbWFzdGVybGliLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJycsXG4gICAgcmVkaXJlY3RUbzogJ21hc3RlcicsXG4gICAgcGF0aE1hdGNoOiAnZnVsbCdcbiAgfSwge1xuICAgIHBhdGg6ICdtYXN0ZXInLFxuICAgIGNvbXBvbmVudDogTWFzdGVybGliQ29tcG9uZW50XG4gIH0sXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtNYXN0ZXJsaWJDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcylcbiAgXSxcbiAgZXhwb3J0czogW01hc3RlcmxpYkNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTWFzdGVybGliTW9kdWxlIHtcblxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE1hc3RlcmxpYk1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW11cbiAgICB9O1xuICB9XG4gfVxuIl19