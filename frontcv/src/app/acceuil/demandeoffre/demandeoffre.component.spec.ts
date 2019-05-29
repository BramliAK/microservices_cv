import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeoffreComponent } from './demandeoffre.component';

describe('DemandeoffreComponent', () => {
  let component: DemandeoffreComponent;
  let fixture: ComponentFixture<DemandeoffreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeoffreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeoffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
