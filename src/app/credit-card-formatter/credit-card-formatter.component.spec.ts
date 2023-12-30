import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardFormatterComponent } from './credit-card-formatter.component';

describe('CreditCardFormatterComponent', () => {
  let component: CreditCardFormatterComponent;
  let fixture: ComponentFixture<CreditCardFormatterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreditCardFormatterComponent]
    });
    fixture = TestBed.createComponent(CreditCardFormatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
