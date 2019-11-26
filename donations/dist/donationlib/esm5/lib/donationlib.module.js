/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { DonationlibComponent } from './donationlib.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatSliderModule, MatInputModule, MatCardModule, MatSelectModule, MatDatepickerModule, MatExpansionModule, MatProgressSpinnerModule, MatNativeDateModule, MatTooltipModule, MatChipsModule, MatSlideToggleModule, MatSidenavModule, MatIconModule, MatListModule, MatToolbarModule, MatTabsModule, MatCheckboxModule, MatStepperModule } from '@angular/material';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CategorizeComponent } from './categorize/list-categorize/list-categorize.component';
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
    return DonationlibModule;
}());
export { DonationlibModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9uYXRpb25saWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZG9uYXRpb25saWIvIiwic291cmNlcyI6WyJsaWIvZG9uYXRpb25saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUNMLGVBQWUsRUFDZixlQUFlLEVBQ2YsY0FBYyxFQUNkLGFBQWEsRUFDYixlQUFlLEVBQ2YsbUJBQW1CLEVBQUUsa0JBQWtCLEVBQUUsd0JBQXdCLEVBQ2pFLG1CQUFtQixFQUFFLGdCQUFnQixFQUFFLGNBQWMsRUFBRSxvQkFBb0IsRUFDM0UsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQ3JILE1BQU0sbUJBQW1CLENBQUM7O0FBRTNCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRWxFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDOztJQUN2RixNQUFNLEdBQVc7SUFDckI7UUFDRSxJQUFJLEVBQUUsRUFBRTtRQUNSLFVBQVUsRUFBRSxVQUFVO1FBQ3RCLFNBQVMsRUFBRSxNQUFNO0tBQ2xCLEVBQUU7UUFDRCxJQUFJLEVBQUUsVUFBVTtRQUNoQixTQUFTLEVBQUUsb0JBQW9CO0tBQ2hDO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsWUFBWTtRQUNsQixTQUFTLEVBQUUsbUJBQW1CO0tBQy9CO0NBQ0Y7QUFFRDtJQUFBO0lBMEJBLENBQUM7Ozs7SUFOUSx5QkFBTzs7O0lBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUM7SUFDSixDQUFDOztnQkF6QkYsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLG9CQUFvQixFQUFFLG1CQUFtQixDQUFDO29CQUN6RCxPQUFPLEVBQUUsQ0FBQyxlQUFlO3dCQUN2QixjQUFjO3dCQUNkLGNBQWM7d0JBQ2QsYUFBYTt3QkFDYixlQUFlO3dCQUNmLGtCQUFrQjt3QkFDbEIsbUJBQW1CLEVBQUUsa0JBQWtCO3dCQUN2QyxtQkFBbUIsRUFBRSxnQkFBZ0IsRUFBRSx3QkFBd0I7d0JBQy9ELGVBQWUsRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLG9CQUFvQjt3QkFDcEUsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxjQUFjO3dCQUNoRixhQUFhLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxlQUFlO3dCQUN2SCxxQkFBcUI7d0JBQ3JCLGdCQUFnQixFQUFFLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO3FCQUNoRDtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxtQkFBbUIsQ0FBQztpQkFDckQ7O0lBU0Qsd0JBQUM7Q0FBQSxBQTFCRCxJQTBCQztTQVJZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb25hdGlvbmxpYkNvbXBvbmVudCB9IGZyb20gJy4vZG9uYXRpb25saWIuY29tcG9uZW50JztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIE1hdEJ1dHRvbk1vZHVsZSxcbiAgTWF0U2xpZGVyTW9kdWxlLFxuICBNYXRJbnB1dE1vZHVsZSxcbiAgTWF0Q2FyZE1vZHVsZSxcbiAgTWF0U2VsZWN0TW9kdWxlLFxuICBNYXREYXRlcGlja2VyTW9kdWxlLCBNYXRFeHBhbnNpb25Nb2R1bGUsIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSxcbiAgTWF0TmF0aXZlRGF0ZU1vZHVsZSwgTWF0VG9vbHRpcE1vZHVsZSwgTWF0Q2hpcHNNb2R1bGUsIE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxuICBNYXRTaWRlbmF2TW9kdWxlLCBNYXRJY29uTW9kdWxlLCBNYXRMaXN0TW9kdWxlLCBNYXRUb29sYmFyTW9kdWxlLCBNYXRUYWJzTW9kdWxlLCBNYXRDaGVja2JveE1vZHVsZSwgTWF0U3RlcHBlck1vZHVsZVxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG4vLyBpbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBNYXRSYWRpb01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3JhZGlvJztcblxuaW1wb3J0IHsgTWF0TWVudU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL21lbnUnO1xuaW1wb3J0IHsgTWF0VGFibGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XG5pbXBvcnQgeyBNYXRQYWdpbmF0b3JNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBNYXREaWFsb2dNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgTWF0U25hY2tCYXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xuaW1wb3J0IHsgTWF0U29ydE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NvcnQnO1xuaW1wb3J0IHsgTWF0QmFkZ2VNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9iYWRnZSc7XG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7IERhdGVBZGFwdGVyLCBNQVRfREFURV9GT1JNQVRTLCBNQVRfREFURV9MT0NBTEUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7IE1hdEJ1dHRvblRvZ2dsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbi10b2dnbGUnO1xuaW1wb3J0IHsgQ2F0ZWdvcml6ZUNvbXBvbmVudCB9IGZyb20gJy4vY2F0ZWdvcml6ZS9saXN0LWNhdGVnb3JpemUvbGlzdC1jYXRlZ29yaXplLmNvbXBvbmVudCc7XG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICcnLFxuICAgIHJlZGlyZWN0VG86ICdkb25hdGlvbicsXG4gICAgcGF0aE1hdGNoOiAnZnVsbCdcbiAgfSwge1xuICAgIHBhdGg6ICdkb25hdGlvbicsXG4gICAgY29tcG9uZW50OiBEb25hdGlvbmxpYkNvbXBvbmVudFxuICB9LFxuICB7XG4gICAgcGF0aDogJ2NhdGVnb3JpemUnLFxuICAgIGNvbXBvbmVudDogQ2F0ZWdvcml6ZUNvbXBvbmVudFxuICB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtEb25hdGlvbmxpYkNvbXBvbmVudCwgQ2F0ZWdvcml6ZUNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0QmFkZ2VNb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0Q2FyZE1vZHVsZSxcbiAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdERhdGVwaWNrZXJNb2R1bGUsIE1hdEV4cGFuc2lvbk1vZHVsZSxcbiAgICBNYXROYXRpdmVEYXRlTW9kdWxlLCBNYXRUb29sdGlwTW9kdWxlLCBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUsXG4gICAgTWF0U2xpZGVyTW9kdWxlLCBNYXRUYWJzTW9kdWxlLCBNYXRDaGlwc01vZHVsZSwgTWF0U2xpZGVUb2dnbGVNb2R1bGUsXG4gICAgTWF0U2lkZW5hdk1vZHVsZSwgTWF0SWNvbk1vZHVsZSwgTWF0TGlzdE1vZHVsZSwgTWF0VG9vbGJhck1vZHVsZSwgTWF0UmFkaW9Nb2R1bGUsXG4gICAgTWF0TWVudU1vZHVsZSwgTWF0VGFibGVNb2R1bGUsIE1hdFBhZ2luYXRvck1vZHVsZSwgTWF0U29ydE1vZHVsZSwgTWF0Q2hlY2tib3hNb2R1bGUsIE1hdFNuYWNrQmFyTW9kdWxlLCBNYXREaWFsb2dNb2R1bGUsXG4gICAgTWF0QnV0dG9uVG9nZ2xlTW9kdWxlLFxuICAgIE1hdFN0ZXBwZXJNb2R1bGUsIFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXG4gIF0sXG4gIGV4cG9ydHM6IFtEb25hdGlvbmxpYkNvbXBvbmVudCwgQ2F0ZWdvcml6ZUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgRG9uYXRpb25saWJNb2R1bGUge1xuXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRG9uYXRpb25saWJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtdXG4gICAgfTtcbiAgfVxufVxuIl19