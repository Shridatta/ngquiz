import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { OAuthService } from "angular-oauth2-oidc";
import { RouterTestingModule } from "@angular/router/testing";
import { MatToolbarModule } from "@angular/material/toolbar";
import { ConfirmDialogComponent } from "./confirm-dialog.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { By } from "@angular/platform-browser";

let noopFn: () => void = () => {};

describe("", () => {
  let fixture: ComponentFixture<ConfirmDialogComponent>;
  let component: ConfirmDialogComponent;



  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatToolbarModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatDialogModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
      declarations: [ConfirmDialogComponent],
      providers: [{ provide: MatDialogRef, useValue: {} }]
    }).compileComponents();
  });

  it("should create the ConfirmDialogComponent", () => {
    createComponent();
    expect(component).toBeTruthy();
  });

  it("should NOT call sendNoOfQuestions without button press Take quiz1", () => {
    createComponent();
    spyOn(component, "sendNumberOfQuestions").and.callThrough();
    expect(component.sendNumberOfQuestions).not.toHaveBeenCalled();
  });

  function createComponent() {
    fixture = TestBed.createComponent(ConfirmDialogComponent);
    component = fixture.debugElement.componentInstance;
  }
});
