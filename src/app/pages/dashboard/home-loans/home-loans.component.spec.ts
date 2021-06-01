import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLoansComponent } from './home-loans.component';

describe('HomeLoansComponent', () => {
  let component: HomeLoansComponent;
  let fixture: ComponentFixture<HomeLoansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeLoansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
