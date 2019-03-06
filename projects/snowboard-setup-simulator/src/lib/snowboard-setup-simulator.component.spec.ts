import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnowboardSetupSimulatorComponent } from './snowboard-setup-simulator.component';

describe('SnowboardSetupSimulatorComponent', () => {
  let component: SnowboardSetupSimulatorComponent;
  let fixture: ComponentFixture<SnowboardSetupSimulatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnowboardSetupSimulatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowboardSetupSimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
