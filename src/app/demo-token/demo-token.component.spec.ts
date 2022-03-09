import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTokenComponent } from './demo-token.component';

describe('DemoTokenComponent', () => {
  let component: DemoTokenComponent;
  let fixture: ComponentFixture<DemoTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoTokenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
