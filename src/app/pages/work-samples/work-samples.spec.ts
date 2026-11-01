import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkSamples } from './work-samples';

describe('WorkSamples', () => {
  let component: WorkSamples;
  let fixture: ComponentFixture<WorkSamples>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkSamples],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkSamples);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
