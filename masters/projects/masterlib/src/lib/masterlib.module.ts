import { NgModule,ModuleWithProviders } from '@angular/core';
import { MasterlibComponent } from './masterlib.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'master',
    pathMatch: 'full'
  }, {
    path: 'master',
    component: MasterlibComponent
  },
];

@NgModule({
  declarations: [MasterlibComponent],
  imports: [RouterModule.forChild(routes)
  ],
  exports: [MasterlibComponent]
})
export class MasterlibModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MasterlibModule,
      providers: []
    };
  }
 }
