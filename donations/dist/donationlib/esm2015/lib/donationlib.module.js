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
export class DonationlibModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9uYXRpb25saWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZG9uYXRpb25saWIvIiwic291cmNlcyI6WyJsaWIvZG9uYXRpb25saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUNMLGVBQWUsRUFDZixlQUFlLEVBQ2YsY0FBYyxFQUNkLGFBQWEsRUFDYixlQUFlLEVBQ2YsbUJBQW1CLEVBQUUsa0JBQWtCLEVBQUUsd0JBQXdCLEVBQ2pFLG1CQUFtQixFQUFFLGdCQUFnQixFQUFFLGNBQWMsRUFBRSxvQkFBb0IsRUFDM0UsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQ3JILE1BQU0sbUJBQW1CLENBQUM7O0FBRTNCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRWxFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDOztNQUN2RixNQUFNLEdBQVc7SUFDckI7UUFDRSxJQUFJLEVBQUUsRUFBRTtRQUNSLFVBQVUsRUFBRSxVQUFVO1FBQ3RCLFNBQVMsRUFBRSxNQUFNO0tBQ2xCLEVBQUU7UUFDRCxJQUFJLEVBQUUsVUFBVTtRQUNoQixTQUFTLEVBQUUsb0JBQW9CO0tBQ2hDO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsWUFBWTtRQUNsQixTQUFTLEVBQUUsbUJBQW1CO0tBQy9CO0NBQ0Y7QUFvQkQsTUFBTSxPQUFPLGlCQUFpQjs7OztJQUU1QixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFNBQVMsRUFBRSxFQUFFO1NBQ2QsQ0FBQztJQUNKLENBQUM7OztZQXpCRixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsb0JBQW9CLEVBQUUsbUJBQW1CLENBQUM7Z0JBQ3pELE9BQU8sRUFBRSxDQUFDLGVBQWU7b0JBQ3ZCLGNBQWM7b0JBQ2QsY0FBYztvQkFDZCxhQUFhO29CQUNiLGVBQWU7b0JBQ2Ysa0JBQWtCO29CQUNsQixtQkFBbUIsRUFBRSxrQkFBa0I7b0JBQ3ZDLG1CQUFtQixFQUFFLGdCQUFnQixFQUFFLHdCQUF3QjtvQkFDL0QsZUFBZSxFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsb0JBQW9CO29CQUNwRSxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLGNBQWM7b0JBQ2hGLGFBQWEsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLGVBQWU7b0JBQ3ZILHFCQUFxQjtvQkFDckIsZ0JBQWdCLEVBQUUsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7aUJBQ2hEO2dCQUNELE9BQU8sRUFBRSxDQUFDLG9CQUFvQixFQUFFLG1CQUFtQixDQUFDO2FBQ3JEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbmF0aW9ubGliQ29tcG9uZW50IH0gZnJvbSAnLi9kb25hdGlvbmxpYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgTWF0QnV0dG9uTW9kdWxlLFxuICBNYXRTbGlkZXJNb2R1bGUsXG4gIE1hdElucHV0TW9kdWxlLFxuICBNYXRDYXJkTW9kdWxlLFxuICBNYXRTZWxlY3RNb2R1bGUsXG4gIE1hdERhdGVwaWNrZXJNb2R1bGUsIE1hdEV4cGFuc2lvbk1vZHVsZSwgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlLFxuICBNYXROYXRpdmVEYXRlTW9kdWxlLCBNYXRUb29sdGlwTW9kdWxlLCBNYXRDaGlwc01vZHVsZSwgTWF0U2xpZGVUb2dnbGVNb2R1bGUsXG4gIE1hdFNpZGVuYXZNb2R1bGUsIE1hdEljb25Nb2R1bGUsIE1hdExpc3RNb2R1bGUsIE1hdFRvb2xiYXJNb2R1bGUsIE1hdFRhYnNNb2R1bGUsIE1hdENoZWNrYm94TW9kdWxlLCBNYXRTdGVwcGVyTW9kdWxlXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbi8vIGltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcbmltcG9ydCB7IE1hdFJhZGlvTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcmFkaW8nO1xuXG5pbXBvcnQgeyBNYXRNZW51TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbWVudSc7XG5pbXBvcnQgeyBNYXRUYWJsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcbmltcG9ydCB7IE1hdFBhZ2luYXRvck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IE1hdERpYWxvZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBNYXRTbmFja0Jhck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XG5pbXBvcnQgeyBNYXRTb3J0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydCc7XG5pbXBvcnQgeyBNYXRCYWRnZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2JhZGdlJztcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgRGF0ZUFkYXB0ZXIsIE1BVF9EQVRFX0ZPUk1BVFMsIE1BVF9EQVRFX0xPQ0FMRSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHsgTWF0QnV0dG9uVG9nZ2xlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uLXRvZ2dsZSc7XG5pbXBvcnQgeyBDYXRlZ29yaXplQ29tcG9uZW50IH0gZnJvbSAnLi9jYXRlZ29yaXplL2xpc3QtY2F0ZWdvcml6ZS9saXN0LWNhdGVnb3JpemUuY29tcG9uZW50JztcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJycsXG4gICAgcmVkaXJlY3RUbzogJ2RvbmF0aW9uJyxcbiAgICBwYXRoTWF0Y2g6ICdmdWxsJ1xuICB9LCB7XG4gICAgcGF0aDogJ2RvbmF0aW9uJyxcbiAgICBjb21wb25lbnQ6IERvbmF0aW9ubGliQ29tcG9uZW50XG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnY2F0ZWdvcml6ZScsXG4gICAgY29tcG9uZW50OiBDYXRlZ29yaXplQ29tcG9uZW50XG4gIH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0RvbmF0aW9ubGliQ29tcG9uZW50LCBDYXRlZ29yaXplQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW01hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRCYWRnZU1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRDYXJkTW9kdWxlLFxuICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgTWF0RGF0ZXBpY2tlck1vZHVsZSwgTWF0RXhwYW5zaW9uTW9kdWxlLFxuICAgIE1hdE5hdGl2ZURhdGVNb2R1bGUsIE1hdFRvb2x0aXBNb2R1bGUsIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSxcbiAgICBNYXRTbGlkZXJNb2R1bGUsIE1hdFRhYnNNb2R1bGUsIE1hdENoaXBzTW9kdWxlLCBNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcbiAgICBNYXRTaWRlbmF2TW9kdWxlLCBNYXRJY29uTW9kdWxlLCBNYXRMaXN0TW9kdWxlLCBNYXRUb29sYmFyTW9kdWxlLCBNYXRSYWRpb01vZHVsZSxcbiAgICBNYXRNZW51TW9kdWxlLCBNYXRUYWJsZU1vZHVsZSwgTWF0UGFnaW5hdG9yTW9kdWxlLCBNYXRTb3J0TW9kdWxlLCBNYXRDaGVja2JveE1vZHVsZSwgTWF0U25hY2tCYXJNb2R1bGUsIE1hdERpYWxvZ01vZHVsZSxcbiAgICBNYXRCdXR0b25Ub2dnbGVNb2R1bGUsXG4gICAgTWF0U3RlcHBlck1vZHVsZSwgUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcylcbiAgXSxcbiAgZXhwb3J0czogW0RvbmF0aW9ubGliQ29tcG9uZW50LCBDYXRlZ29yaXplQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBEb25hdGlvbmxpYk1vZHVsZSB7XG5cbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBEb25hdGlvbmxpYk1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW11cbiAgICB9O1xuICB9XG59XG4iXX0=