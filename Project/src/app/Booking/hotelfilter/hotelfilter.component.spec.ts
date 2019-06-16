import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelfilterComponent } from './hotelfilter.component';

describe('HotelfilterComponent', () => {
  let component: HotelfilterComponent;
  let fixture: ComponentFixture<HotelfilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelfilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
