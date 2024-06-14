import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private apiUrl = 'http://localhost:1000/api/transactions';

  constructor(private http: HttpClient) {
  }

  getTransactions(startDate: string, endDate: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?startDate=${startDate}&endDate=${endDate}`);
  }
}
