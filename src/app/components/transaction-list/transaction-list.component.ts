import {Component, OnInit} from '@angular/core';
import {TransactionService} from "../../services/transaction.service";

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
  transactions: any[] = [];
  startDate: string = '2020-10-01'; // Default start date
  endDate: string = '2020-10-15'; // Default end date

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.transactionService.getTransactions(this.startDate, this.endDate).subscribe((data: any) => {
      this.transactions = data;
    });
  }

}
