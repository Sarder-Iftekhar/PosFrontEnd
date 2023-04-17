import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetaiModalComponent } from './detai-modal/detai-modal.component';
import { InvoiceDetailComponentComponent } from './invoice-detail-component/invoice-detail-component.component';
import { InvoiceDetailViewComponent } from './invoice-detail-view/invoice-detail-view.component';


const routes: Routes = [

   {
    component : InvoiceDetailComponentComponent ,
     path : ''
  },
  {
    component : InvoiceDetailViewComponent ,
     path : 'view'
  },
  {
    component : DetaiModalComponent,
    path :'modal'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
