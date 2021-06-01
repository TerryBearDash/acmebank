import { TransactionsService } from './../../services/transactions.service';
import { Account } from './../../models/account';
import { DataService } from './../../services/data.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {

  account: Account;
  accounts: Account[];
  show: boolean = false;

  constructor(
    private dts: DataService,
    public trans: TransactionsService
  ) {
    this.dts.active_account.subscribe( (d: Account) => {
      this.account = d;
    });
    this.dts.accounts.subscribe( (d: Account[]) => {
      this.accounts = d;
    });
    this.dts.detail.subscribe( (d: boolean) => {
      this.show = d;
    });
  }

  ngOnInit(): void {
  }
  
  openModal() {
    this.dts.setActiveAccount(this.account);
    this.dts.showModal(true);
  }

  settleAccount(acc: Account): void {
    acc.balance = 0;
    const i = this.accounts.findIndex( (a: Account) => a.account_number === acc.account_number);
    this.accounts[i] = acc;
    this.dts.setAccounts(this.accounts);
  }

}
