import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChinguitelComponent } from './chinguitel.component';

describe('ChinguitelComponent', () => {
  let component: ChinguitelComponent;
  let fixture: ComponentFixture<ChinguitelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChinguitelComponent]
    });
    fixture = TestBed.createComponent(ChinguitelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
