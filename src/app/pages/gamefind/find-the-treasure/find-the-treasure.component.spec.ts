import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindTheTreasureComponent } from './find-the-treasure.component';

describe('FindTheTreasureComponent', () => {
  let component: FindTheTreasureComponent;
  let fixture: ComponentFixture<FindTheTreasureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindTheTreasureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindTheTreasureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
