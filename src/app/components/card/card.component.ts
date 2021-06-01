import { Account } from './../../models/account';
import { DataService } from './../../services/data.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() account: Account;
  active_account: Account;

  constructor(
    private dts: DataService
  ) {
    this.dts.active_account.subscribe( (d: Account) => {
      this.active_account = d;
    });
  }

  ngOnInit(): void {
  }

}
