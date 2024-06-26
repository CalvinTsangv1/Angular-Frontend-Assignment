import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TransactionListComponent} from "./components/transaction-list/transaction-list.component";
import {TransactionDetailComponent} from "./components/transaction-detail/transaction-detail.component";

const routes: Routes = [
  { path: '', redirectTo: '/transaction-list', pathMatch: 'full' },
  { path: 'transaction-list', component: TransactionListComponent },
  { path: 'transaction-detail/:id', component: TransactionDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
