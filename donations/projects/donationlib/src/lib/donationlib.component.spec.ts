import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationlibComponent } from './donationlib.component';

describe('DonationlibComponent', () => {
  let component: DonationlibComponent;
  let fixture: ComponentFixture<DonationlibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationlibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationlibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
