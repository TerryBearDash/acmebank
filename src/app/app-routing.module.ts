import { GuardService as RouteGuard } from './guards/guards.service';
import { TransactionsComponent } from './pages/dashboard/transactions/transactions.component';
import { HomeLoansComponent } from './pages/dashboard/home-loans/home-loans.component';
import { ForexComponent } from './pages/dashboard/forex/forex.component';
import { CardsComponent } from './pages/dashboard/cards/cards.component';
import { AccountsComponent } from './pages/dashboard/accounts/accounts.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/authentication/login/login.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'authentication',
    pathMatch: 'full'
  },
  {
    path: 'authentication', component: AuthenticationComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      { path: 'login', component: LoginComponent },
      { path: '**', redirectTo: 'login'}
   ]
  },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'accounts',
        pathMatch: 'full'
      },
      { path: 'accounts', component: AccountsComponent },
      { path: 'cards', component: CardsComponent, canActivate: [RouteGuard] },
      { path: 'forex', component: ForexComponent, canActivate: [RouteGuard] },
      { path: 'home-loan', component: HomeLoansComponent, canActivate: [RouteGuard] },
      { path: 'transactions', component: TransactionsComponent, canActivate: [RouteGuard] },
      { path: '**', redirectTo: 'accounts'}
   ]
  },
  { path: '**', redirectTo: 'authentication'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
