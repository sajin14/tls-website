import { NO_ERRORS_SCHEMA } from "@angular/core";
import { OfferingsComponent } from "./offerings.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("OfferingsComponent", () => {

  let fixture: ComponentFixture<OfferingsComponent>;
  let component: OfferingsComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [OfferingsComponent]
    });

    fixture = TestBed.createComponent(OfferingsComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
