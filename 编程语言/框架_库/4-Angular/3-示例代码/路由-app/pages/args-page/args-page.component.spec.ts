import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArgsPageComponent } from './args-page.component';

describe('ArgsPageComponent', () => {
  let component: ArgsPageComponent;
  let fixture: ComponentFixture<ArgsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArgsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArgsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
