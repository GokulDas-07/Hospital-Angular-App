import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientDeleteComponent } from './patient-delete/patient-delete.component';
import { PatientEntryComponent } from './patient-entry/patient-entry.component';
import { PatientSearchComponent } from './patient-search/patient-search.component';
import { PatientViewComponent } from './patient-view/patient-view.component';

const routes: Routes = [
  {path:"",component:PatientEntryComponent},
  {path:"search",component:PatientSearchComponent},
  {path:"delete",component:PatientDeleteComponent},
  {path:"view",component:PatientViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
