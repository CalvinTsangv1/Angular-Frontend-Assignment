import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subscription} from "rxjs";

export interface Transaction {
  id: string;
  date: Date;
  Comments: string;
}

@Injectable({
  providedIn: 'root'
})

export class TransactionService {

  private apiUrl = 'http://localhost:1000/api/transactions';

  constructor(private http: HttpClient) {
  }

  getTransactionById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getTransactions(startDate?: string, endDate?: string): Observable<any> {
    if (!startDate || !endDate) {
      return this.http.get(this.apiUrl);
    }
    return this.http.get(`${this.apiUrl}?startDate=${startDate}&endDate=${endDate}`);
  }

  updateTransaction(transaction?: Transaction): Subscription {
    if(transaction === undefined) {
      return new Subscription();
    }
    return this.http.patch(`${this.apiUrl}/${transaction?.id}`, transaction).subscribe();
  }
}
