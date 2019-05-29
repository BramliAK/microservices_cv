import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrepiseoffreComponent } from './enrepiseoffre.component';

describe('EnrepiseoffreComponent', () => {
  let component: EnrepiseoffreComponent;
  let fixture: ComponentFixture<EnrepiseoffreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrepiseoffreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrepiseoffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
