import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuelSimulatorComponent } from './duel-simulator.component';

describe('DuelSimulatorComponent', () => {
  let component: DuelSimulatorComponent;
  let fixture: ComponentFixture<DuelSimulatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuelSimulatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DuelSimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
