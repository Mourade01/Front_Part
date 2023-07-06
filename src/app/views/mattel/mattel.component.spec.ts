import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MattelComponent } from './mattel.component';

describe('MattelComponent', () => {
  let component: MattelComponent;
  let fixture: ComponentFixture<MattelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MattelComponent]
    });
    fixture = TestBed.createComponent(MattelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
