import { Account } from './../models/account';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataService {

    accounts = new BehaviorSubject(null);
    active_account = new BehaviorSubject(null);
    modal = new BehaviorSubject(false);
    detail = new BehaviorSubject(false);
    success = new BehaviorSubject(false);
    balance = new BehaviorSubject(0);

    constructor(
    ) { }

    setAccounts(accounts: Account[]): void {
        this.accounts.next(accounts);
    }

    setActiveAccount(account: Account): void {
        this.active_account.next(account);
    }

    showModal(show: boolean): void {
        this.modal.next(show);
    }

    showDetail(show: boolean): void {
        this.detail.next(show);
    }

    setBalance(value: number): void {
        this.balance.next(value);
    }

    showSuccess(value: boolean): void {
        this.success.next(value);
    }

}
