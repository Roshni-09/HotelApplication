import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelitemComponent } from './hotelitem.component';

describe('HotelitemComponent', () => {
  let component: HotelitemComponent;
  let fixture: ComponentFixture<HotelitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
