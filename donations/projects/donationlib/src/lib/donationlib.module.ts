import { NgModule, ModuleWithProviders } from '@angular/core';
import { DonationlibComponent } from './donationlib.component';
import { RouterModule, Routes } from '@angular/router';
import {
  MatButtonModule,
  MatSliderModule,
  MatInputModule,
  MatCardModule,
  MatSelectModule,
  MatDatepickerModule, MatExpansionModule, MatProgressSpinnerModule,
  MatNativeDateModule, MatTooltipModule, MatChipsModule, MatSlideToggleModule,
  MatSidenavModule, MatIconModule, MatListModule, MatToolbarModule, MatTabsModule, MatCheckboxModule, MatStepperModule
} from '@angular/material';
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
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CategorizeComponent } from './categorize/list-categorize/list-categorize.component';
const routes: Routes = [
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

@NgModule({
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
})
export class DonationlibModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DonationlibModule,
      providers: []
    };
  }
}
