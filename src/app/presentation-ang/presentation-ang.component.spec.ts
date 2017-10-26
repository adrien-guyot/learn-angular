import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationAngComponent } from './presentation-ang.component';

describe('PresentationAngComponent', () => {
  let component: PresentationAngComponent;
  let fixture: ComponentFixture<PresentationAngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentationAngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationAngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
