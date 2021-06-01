import { Account } from './../models/account';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(
    private api: ApiService
  ) { }

  list(): Promise<any> {
    return this.api.list('/accounts');
  }

  checkDisabled(acc: Account): boolean {
    switch(acc.account_type) {
      case 'savings': {
        if (Math.sign(acc.balance) === 1) {
          return true
        } else if (Math.sign(acc.balance) === 0 || Math.sign(acc.balance) === -1) {
          return false
        }
        break;
      }
      case 'cheque': {
        if (Math.sign(acc.balance) > -1 || Math.sign(acc.balance) === 0) {
          return true;
        } else {
          if (acc.balance < -500) {
            return false;
          } else {
            return true;
          }
        }
        break;
      }
    }
  }

}
