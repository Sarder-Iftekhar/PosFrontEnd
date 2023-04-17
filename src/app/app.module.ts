import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvoiceDetailComponentComponent } from './invoice-detail-component/invoice-detail-component.component';
import { HttpClientModule } from '@angular/common/http';
import { InvoiceDetailViewComponent } from './invoice-detail-view/invoice-detail-view.component';
import { DetaiModalComponent } from './detai-modal/detai-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    InvoiceDetailComponentComponent,
    InvoiceDetailViewComponent,
    DetaiModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
