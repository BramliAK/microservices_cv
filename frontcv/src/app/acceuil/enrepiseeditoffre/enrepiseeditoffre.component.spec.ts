import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrepiseeditoffreComponent } from './enrepiseeditoffre.component';

describe('EnrepiseeditoffreComponent', () => {
  let component: EnrepiseeditoffreComponent;
  let fixture: ComponentFixture<EnrepiseeditoffreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrepiseeditoffreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrepiseeditoffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
