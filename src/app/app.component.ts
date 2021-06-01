import { Account } from './models/account';
import { DataService } from './services/data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  modal = false;
  accounts: Account[];
  amount = 0;
  activeAccount: Account;
  
  constructor(
    private dts: DataService
  ) {
    this.dts.accounts.subscribe( (d: Account[]) => {
      this.accounts = d;
    });
    this.dts.success.subscribe( (d: boolean) => {
      if (d) {
        window.alert(`You have successfully withdrawn R ${parseFloat(String(this.amount)).toFixed(2)}`)
      }
    });
    this.dts.modal.subscribe( (d: boolean) => {
      this.modal = d;
    });
    this.dts.active_account.subscribe( (d: Account) => {
      this.activeAccount = d;
    });
  }

  cancel(): void {
    this.dts.showModal(false);
    this.dts.setActiveAccount(null);
  }

  withdraw(): void {
    this.activeAccount.balance -= this.amount; 
    this.dts.showModal(false);
    const i = this.accounts.findIndex( (a: Account) => a.account_number === this.activeAccount.account_number);
    this.accounts[i] = this.activeAccount;
    this.dts.setAccounts(this.accounts);
    this.dts.setActiveAccount(null);
    this.dts.showSuccess(true);
  }

  valueChange(ev: any): void {
    this.amount = Number(ev.target.value);
  }

  validateNumber(): boolean {
    if (this.activeAccount.account_type === 'cheque') {
      if (this.activeAccount.balance === 0) {
        if (this.amount > 0 && this.amount <= 500) {
          return true;
        } else {
          return false;
        }
      }
    }
    if (this.amount > 0 && this.amount <= Math.abs(this.activeAccount.balance)) {
      return true;
    } else {
      return false;
    }
  }

}
