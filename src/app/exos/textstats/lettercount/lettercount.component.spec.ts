import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LettercountComponent } from './lettercount.component';

describe('LettercountComponent', () => {
  let component: LettercountComponent;
  let fixture: ComponentFixture<LettercountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LettercountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LettercountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
