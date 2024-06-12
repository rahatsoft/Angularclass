import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BangladeshComponent } from './bangladesh.component';

describe('BangladeshComponent', () => {
  let component: BangladeshComponent;
  let fixture: ComponentFixture<BangladeshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BangladeshComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BangladeshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
