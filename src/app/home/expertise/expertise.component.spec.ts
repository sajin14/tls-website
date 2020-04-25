import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ExpertiseComponent } from './expertise.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('ExpertiseComponent', () => {

  let fixture: ComponentFixture<ExpertiseComponent>;
  let component: ExpertiseComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ExpertiseComponent]
    });

    fixture = TestBed.createComponent(ExpertiseComponent);
    component = fixture.componentInstance;

  });

  it('should be able to create component instance', () => {
    expect(component).toBeDefined();
  });

});
