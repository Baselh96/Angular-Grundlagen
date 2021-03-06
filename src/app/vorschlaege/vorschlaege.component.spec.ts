import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VorschlaegeComponent } from './vorschlaege.component';

describe('VorschlaegeComponent', () => {
  let component: VorschlaegeComponent;
  let fixture: ComponentFixture<VorschlaegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VorschlaegeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VorschlaegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
