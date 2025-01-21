import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellnessComponent } from './welness.component';

describe('WelnessComponent', () => {
  let component: WellnessComponent;
  let fixture: ComponentFixture<WellnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WellnessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WellnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
