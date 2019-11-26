/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { MasterlibComponent } from './masterlib.component';
import { RouterModule } from '@angular/router';
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
export class MasterlibModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzdGVybGliLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hc3RlcmxpYi8iLCJzb3VyY2VzIjpbImxpYi9tYXN0ZXJsaWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFzQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7O01BRWpELE1BQU0sR0FBVztJQUNyQjtRQUNFLElBQUksRUFBRSxFQUFFO1FBQ1IsVUFBVSxFQUFFLFFBQVE7UUFDcEIsU0FBUyxFQUFFLE1BQU07S0FDbEIsRUFBRTtRQUNELElBQUksRUFBRSxRQUFRO1FBQ2QsU0FBUyxFQUFFLGtCQUFrQjtLQUM5QjtDQUNGO0FBUUQsTUFBTSxPQUFPLGVBQWU7Ozs7SUFFMUIsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLGVBQWU7WUFDekIsU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFDO0lBQ0osQ0FBQzs7O1lBYkYsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGtCQUFrQixDQUFDO2dCQUNsQyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztpQkFDdEM7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsa0JBQWtCLENBQUM7YUFDOUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSxNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXN0ZXJsaWJDb21wb25lbnQgfSBmcm9tICcuL21hc3RlcmxpYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICcnLFxuICAgIHJlZGlyZWN0VG86ICdtYXN0ZXInLFxuICAgIHBhdGhNYXRjaDogJ2Z1bGwnXG4gIH0sIHtcbiAgICBwYXRoOiAnbWFzdGVyJyxcbiAgICBjb21wb25lbnQ6IE1hc3RlcmxpYkNvbXBvbmVudFxuICB9LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTWFzdGVybGliQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXG4gIF0sXG4gIGV4cG9ydHM6IFtNYXN0ZXJsaWJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE1hc3RlcmxpYk1vZHVsZSB7XG5cbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBNYXN0ZXJsaWJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtdXG4gICAgfTtcbiAgfVxuIH1cbiJdfQ==