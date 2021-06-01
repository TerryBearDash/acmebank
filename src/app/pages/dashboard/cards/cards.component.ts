import { DataService } from './../../../services/data.service';
import { Account } from './../../../models/account';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  accounts: Account[];

  constructor(
    private dts: DataService
  ) {
    this.dts.accounts.subscribe( (a: Account[]) => {
      this.accounts = a;
    });
  }

  ngOnInit(): void {
  }

}
