import {Component, OnInit} from '@angular/core';
import {TransactionService} from "../../services/transaction.service";

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
  transactions: any[] = [];
  selectedTransaction: any;
  startDate: string = '2009-10-01'; // Default start date
  endDate: string = '2022-10-15'; // Default end date

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    console.log("TransactionListComponent.ngOnInit");
    this.transactionService.getTransactions(this.startDate, this.endDate).subscribe((data: any) => {
      console.log(data);
      this.transactions = data;
    });
  }

  viewTransaction(transaction: any) {
    this.selectedTransaction = transaction;
  }

}
