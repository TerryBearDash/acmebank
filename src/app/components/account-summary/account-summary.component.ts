import { Account } from './../../models/account';
import { DataService } from './../../services/data.service';
import { ErrorService } from './../../services/error.service';
import { TransactionsService } from './../../services/transactions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.scss']
})
export class AccountSummaryComponent implements OnInit {
  
  accounts: Account[];

  constructor(
    public api: TransactionsService,
    private dts: DataService,
    private error: ErrorService
  ) { }

  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions(): void {
    this.api.list().then( async (d: Account[]) => {
      this.accounts = await this.parseNumbers(d);
      await this.dts.setAccounts(this.accounts);
    }).catch( (e: any) => {
      this.error.setError(e);
    });
  }

  setActive(account: Account): void {
    this.dts.setActiveAccount(account);
    this.dts.showDetail(true);
  }

  parseNumbers(d: any): any {
    const r: Account[] = [];
    d.forEach( (item: any) => {
      let acc: Account = Object.assign({}, item);
      acc.balance = Number(parseFloat(item.balance).toFixed(2));
      acc.card_number = `**** **** **** ${Math.random().toString().substring(2, 6)}`;
      r.push(acc);
    })
    return r;
  }

  openModal(account: Account) {
    this.dts.setActiveAccount(account);
    this.dts.showModal(true);
  }

}
