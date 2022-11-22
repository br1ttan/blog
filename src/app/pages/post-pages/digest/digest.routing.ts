import { NgModule } from '@angular/core';
import { DigestComponent } from './digest.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: DigestComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DigestRoutingModule { }
