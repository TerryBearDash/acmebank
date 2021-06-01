import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CardComponent } from './components/card/card.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { AccountSummaryComponent } from './components/account-summary/account-summary.component';
import { LoginComponent } from './pages/authentication/login/login.component';
import { AccountsComponent } from './pages/dashboard/accounts/accounts.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CardsComponent } from './pages/dashboard/cards/cards.component';
import { TransactionsComponent } from './pages/dashboard/transactions/transactions.component';
import { ForexComponent } from './pages/dashboard/forex/forex.component';
import { HomeLoansComponent } from './pages/dashboard/home-loans/home-loans.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { ErrorComponent } from './pages/error/error.component';
import { NotfoundComponent } from './pages/error/notfound/notfound.component';
import { UnauthorizedComponent } from './pages/error/unauthorized/unauthorized.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CardComponent,
    AccountDetailsComponent,
    AccountSummaryComponent,
    LoginComponent,
    AccountsComponent,
    DashboardComponent,
    CardsComponent,
    TransactionsComponent,
    ForexComponent,
    HomeLoansComponent,
    AuthenticationComponent,
    ErrorComponent,
    NotfoundComponent,
    UnauthorizedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
