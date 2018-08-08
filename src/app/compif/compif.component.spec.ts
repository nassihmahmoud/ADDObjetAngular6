import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompifComponent } from './compif.component';

describe('CompifComponent', () => {
  let component: CompifComponent;
  let fixture: ComponentFixture<CompifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
