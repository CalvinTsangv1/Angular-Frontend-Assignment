import {Component, OnInit} from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService, Transaction } from '../../services/transaction.service';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.scss']
})
export class TransactionDetailComponent implements OnInit {

  transaction: Transaction | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private transactionService: TransactionService
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    console.log(id);
    this.transactionService.getTransactionById(id.toString()).subscribe(data => {
      this.transaction = data;
    });
  }

  save() {
    this.transactionService.updateTransaction(this.transaction).add(() => {
      this.router.navigate(['/']);
    })
  }
}
