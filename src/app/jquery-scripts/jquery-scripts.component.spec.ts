import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JQueryScriptsComponent } from './jquery-scripts.component';

describe('JQueryScriptsComponent', () => {
  let component: JQueryScriptsComponent;
  let fixture: ComponentFixture<JQueryScriptsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JQueryScriptsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JQueryScriptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
