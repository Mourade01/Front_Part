import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MauritelComponent } from './mauritel.component';

describe('MauritelComponent', () => {
  let component: MauritelComponent;
  let fixture: ComponentFixture<MauritelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MauritelComponent]
    });
    fixture = TestBed.createComponent(MauritelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
