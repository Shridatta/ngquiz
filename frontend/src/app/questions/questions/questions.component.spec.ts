import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { QuestionsComponent } from "./questions.component";
import { OAuthService } from "angular-oauth2-oidc";
import { RouterTestingModule } from "@angular/router/testing";
import { MatToolbarModule } from "@angular/material/toolbar";
import { Router } from "@angular/router";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { HttpClientModule } from "@angular/common/http";

let noopFn: () => void = () => {};

describe("AppComponent", () => {
  let fixture: ComponentFixture<QuestionsComponent>;
  let component: QuestionsComponent;

  class RouterStub {
    navigate(params) {}
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatIconModule,
        MatCardModule,
        HttpClientModule
      ],
      declarations: [QuestionsComponent],
      providers: [{ provide: Router, useClass: RouterStub }]
    }).compileComponents();

    const callbackPatternObj = {
      then(callback) {
        return callback();
      }
    };
  });

  xit("should create the QuestionsComponent", () => {
    createComponent();
    expect(component).toBeTruthy();
  });

  xit("should redirect the user to the quiz page on successfull login", () => {
    let router = TestBed.get(Router);
    let spy = spyOn(router, "navigate");
    component.startOwnQuiz();
    expect(spy).toHaveBeenCalledWith(["/myquiz"]);
  });

  function createComponent() {
    fixture = TestBed.createComponent(QuestionsComponent);
    component = fixture.debugElement.componentInstance;
  }
});
