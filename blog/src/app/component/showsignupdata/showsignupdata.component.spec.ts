import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsignupdataComponent } from './showsignupdata.component';

describe('ShowsignupdataComponent', () => {
  let component: ShowsignupdataComponent;
  let fixture: ComponentFixture<ShowsignupdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowsignupdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowsignupdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
