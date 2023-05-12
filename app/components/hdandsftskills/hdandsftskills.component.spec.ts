import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HdandsftskillsComponent } from './hdandsftskills.component';

describe('HdandsftskillsComponent', () => {
  let component: HdandsftskillsComponent;
  let fixture: ComponentFixture<HdandsftskillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HdandsftskillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HdandsftskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
