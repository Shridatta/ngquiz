import { OAuthService } from "angular-oauth2-oidc";
import {
  TestBed,
  ComponentFixture,
  inject,
  async,
  fakeAsync,
  tick,
  flushMicrotasks
} from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { MatToolbarModule } from "@angular/material/toolbar";
import { QuizComponent } from "./quiz.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatChipsModule } from "@angular/material/chips";
import { MatCardModule } from "@angular/material/card";
import { By } from "@angular/platform-browser";
import { QuestionsService } from "src/app/_shared/questions.service";
import { Observable } from "rxjs";
import { from } from "rxjs";

let noopFn: () => void = () => {};

describe("QuizComponent", () => {
  let fixture: ComponentFixture<QuizComponent>;
  let component: QuizComponent;
  let service: QuestionsService;

  beforeEach(() => {
    service = new QuestionsService(null);
    component = new QuizComponent(service);

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatToolbarModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatDialogModule,
        MatInputModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatChipsModule,
        MatCardModule
      ],
      declarations: [QuizComponent],
      providers: [{ provide: MatDialogRef, useValue: {} }]
    }).compileComponents();
  });

  /*it("should set all question to the values returned from the server", () => {
    spyOn(service, "allQuestion").and.callFake(() => {
      return from();
    });
    component.ngOnInit();
    expect(component.ngOnInit.length).toBeGreaterThan(0);
  });*/

  xit("Questions index should be empty when no questions", fakeAsync(() => {
    let fixture = TestBed.createComponent(QuizComponent);
    let total = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    let de = fixture.debugElement.query(By.css(".dark-text"));
    let el: HTMLElement = de.nativeElement;
    expect(el.innerText).not.toBeNull();
  }));

  xit("Should render total questions answered", fakeAsync(() => {
    let fixture = TestBed.createComponent(QuizComponent);
    let total = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    let de = fixture.debugElement.query(By.css(".chip1"));
    let el: HTMLElement = de.nativeElement;
    expect(el.innerText).not.toBeNull();
  }));

  /*
  it('should test click', () => {
    fixture.detectChanges();
    spyOn(component, 'productSelection');
    const el = fixture.debugElement.query(By.css('BPNormal')).nativeElement.click();
    expect(component.productSelection).toHaveBeenCalled();
    }); */

  xit("Should render total correct answers", () => {
    let fixture = TestBed.createComponent(QuizComponent);
    let total = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    let de = fixture.debugElement.query(By.css(".chip2"));
    let el: HTMLElement = de.nativeElement;
    expect(el.innerText).not.toBeNull();
  });

  xit("Should render total questions", () => {
    let fixture = TestBed.createComponent(QuizComponent);
    let total = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    let de = fixture.debugElement.query(By.css(".chip3"));
    let el: HTMLElement = de.nativeElement;
    expect(el.innerText).not.toBeNull();
  });

  function createComponent() {
    fixture = TestBed.createComponent(QuizComponent);
    component = fixture.debugElement.componentInstance;
  }
});
