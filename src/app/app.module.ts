import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import {
  MatCellDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRowDef,
  MatRowDef,
  MatTable
} from "@angular/material/table";

@NgModule({
  declarations: [
    AppComponent,
    TransactionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatHeaderCellDef,
    MatTable,
    MatCellDef,
    MatHeaderRowDef,
    MatRowDef,
    MatHeaderCell
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
