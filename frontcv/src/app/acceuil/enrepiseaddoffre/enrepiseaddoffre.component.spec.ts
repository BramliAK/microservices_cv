import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrepiseaddoffreComponent } from './enrepiseaddoffre.component';

describe('EnrepiseaddoffreComponent', () => {
  let component: EnrepiseaddoffreComponent;
  let fixture: ComponentFixture<EnrepiseaddoffreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrepiseaddoffreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrepiseaddoffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
