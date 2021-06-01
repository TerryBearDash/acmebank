import { Account } from './../../../models/account';
import { DataService } from './../../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  activeAccount: Account;
  accounts: Account[];
  balance: number = 0;
  showdetail: boolean = false;

  constructor(
    private dts: DataService
  ) {
    this.dts.detail.subscribe( (d: boolean) => {
      this.showdetail = d;
    });
    this.dts.active_account.subscribe( (d: Account) => {
      this.activeAccount = d;
    });
    this.dts.balance.subscribe( (b: number) => {
      this.balance = b;
    });
  }

  ngOnInit(): void {
    this.dts.accounts.subscribe( (d: Account[]) => {
      this.accounts = d;
      if (d) {
        let balance = 0;
        this.dts.setBalance(0);
        this.accounts.forEach( (v: Account) => {
          balance = balance + v.balance;
        });
        this.dts.setBalance(balance);
      }
    });
  }

  setActive(): void {
    this.dts.setActiveAccount(null);
    this.dts.showDetail(false);
  }

}
