import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoIsWhoComponent } from './who-is-who.component';

describe('WhoIsWhoComponent', () => {
  let component: WhoIsWhoComponent;
  let fixture: ComponentFixture<WhoIsWhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoIsWhoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhoIsWhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
